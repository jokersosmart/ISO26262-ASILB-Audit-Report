import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// FMEDA 公式深度分析數據（簡化版，實際應從 JSON 導入）
const FORMULA_ANALYSIS_DATA = {
  'CONDITIONAL': {
    name: '條件判斷公式',
    count: 374,
    description: '根據條件進行分支計算，決定使用哪種計算方式',
    examples: [
      {
        id: 'P0001',
        formula: '=IF($AJ$2="No",FailureRateCalc!E23,(FailureRateCalc!E23+FailureRateCalcIC!$D$129*(BlockList!E2/SUM(BlockList!$E$2:$E$7))+FailureRateCalcIC!$D$130*(BlockList!E2/SUM(BlockList!$E$2:$E$7))))',
        physical_meaning: '計算考慮品質因子和環境因子調整後的失效率',
        iso_standard: 'ISO 26262-5 Annex C（失效率計算）、ISO 26262-11（半導體 DFA 指引）',
        calculation_logic: 'FMEDA 考慮品質等級和環境因素對失效率的影響。基礎失效率（λ0）來自 FailureRateCalc!E23，然後根據品質因子（D129）和環境因子（D130）進行加權調整。',
        downstream_impact: '計算結果被用於 FMEDA 主表的失效率計算，進而影響 SPFM 和 PMHF 的計算。',
        example: '假設某個 IC 元件的基礎失效率 λ0 = 100 FIT。如果啟用品質調整，則最終失效率 = 113.33 FIT；如果不啟用，則直接使用 100 FIT。'
      },
      {
        id: 'P0002',
        formula: '=IF(B21="Package",FailureRateCalcIC!D129,(I21*M21*EXP(-0.35*O21)+(U21*K21))*R21)',
        physical_meaning: '根據元件類型選擇不同的失效率計算方式',
        iso_standard: 'ISO 26262-5（失效率計算）、MIL-HDBK-217（軍用可靠性手冊）',
        calculation_logic: '如果元件類型是「Package」，使用查表的 β 因子；否則使用複雜的指數調整公式。',
        downstream_impact: '決定了不同元件類型的失效率計算方法，影響整個 FMEDA 的定量結果。',
        example: '對於 Package 類型的元件，直接查表獲得 β 因子；對於其他類型，使用 Arrhenius 模型計算溫度調整的失效率。'
      }
    ]
  },
  'LOOKUP': {
    name: '查表公式',
    count: 287,
    description: '從查詢表中查找對應的值，確保計算的一致性',
    examples: [
      {
        id: 'P0100',
        formula: '=VLOOKUP(C105,F90:H97,3,FALSE)',
        physical_meaning: '根據元件類型查找其對應的 β 因子或診斷覆蓋率',
        iso_standard: 'ISO 26262-5（β 因子查表）、ISO 26262-9 CH.7（相依故障分析）',
        calculation_logic: '使用 VLOOKUP 從查詢表中精確查找對應的值。這確保了計算的一致性和可追蹤性。',
        downstream_impact: '查詢結果（如 β 因子、診斷覆蓋率）被用於後續的 CCF 計算和安全度量評估。',
        example: '查詢表中有 8 行數據（F90:H97），根據 C105 的值查找第 3 列的結果。'
      }
    ]
  },
  'EXPONENTIAL': {
    name: '指數函數公式',
    count: 89,
    description: '計算指數函數，通常用於溫度或環境因子調整',
    examples: [
      {
        id: 'P0200',
        formula: '=EXP(-0.35*ΔT)',
        physical_meaning: '計算溫度調整的失效率倍數（Arrhenius 模型）',
        iso_standard: 'ISO 26262-5 Annex C（Arrhenius 模型）、MIL-HDBK-217（軍用可靠性手冊）',
        calculation_logic: '使用 Arrhenius 模型計算溫度對失效率的影響。-0.35 是溫度係數，ΔT 是溫度差。',
        downstream_impact: '溫度調整後的失效率被用於計算實際工作條件下的失效率，影響整個 FMEDA 的定量結果。',
        example: '基礎失效率（25°C）= 100 FIT，實際工作溫度 85°C，ΔT = 60°C，調整後失效率 = 100 × EXP(-21) ≈ 0 FIT（實際上會很小）。'
      }
    ]
  },
  'AGGREGATE': {
    name: '聚合公式',
    count: 156,
    description: '對數據進行求和、平均、計數等聚合操作',
    examples: [
      {
        id: 'P0300',
        formula: '=SUMIF(Range, Criteria, Sum_Range)',
        physical_meaning: '按條件對特定範圍內的值進行求和',
        iso_standard: 'ISO 26262-5（失效率累計）、ISO 26262-9（故障樹分析）',
        calculation_logic: '使用 SUMIF 函數按條件求和。例如，按失效模式分類統計失效率。',
        downstream_impact: '求和結果被用於計算總失效率、總故障數或總診斷覆蓋率，作為更高層級計算的輸入。',
        example: '按失效模式分類統計失效率，「邏輯錯誤」的總失效率 = 30 + 15 = 45 FIT。'
      }
    ]
  }
};

interface FormulaItem {
  id: string;
  formula: string;
  physical_meaning: string;
  iso_standard: string;
  calculation_logic: string;
  downstream_impact: string;
  example: string;
}

export default function FormulaTransparencyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [expandedFormula, setExpandedFormula] = useState<string | null>(null);

  // 獲取所有公式
  const allFormulas = useMemo(() => {
    const formulas: (FormulaItem & { type: string })[] = [];
    Object.entries(FORMULA_ANALYSIS_DATA).forEach(([type, data]) => {
      data.examples.forEach(example => {
        formulas.push({
          ...example,
          type: type
        });
      });
    });
    return formulas;
  }, []);

  // 篩選公式
  const filteredFormulas = useMemo(() => {
    return allFormulas.filter(formula => {
      const matchesSearch = searchTerm === '' || 
        formula.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formula.physical_meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formula.iso_standard.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'ALL' || formula.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [allFormulas, searchTerm, selectedType]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* 頁面標題 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">公式透視系統</h1>
          <p className="text-lg text-slate-600">
            深度解析 FMEDA 的 827 個邏輯上不同的公式
          </p>
          <p className="text-sm text-slate-500 mt-2">
            每個公式都從「物理意義」「ISO 標準依據」「計算邏輯」「下游影響」四個維度進行解析
          </p>
        </div>

        {/* 統計概覽 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(FORMULA_ANALYSIS_DATA).map(([key, data]) => (
            <Card key={key} className="p-4 bg-white border-l-4 border-l-amber-500">
              <div className="text-2xl font-bold text-slate-900">{data.count}</div>
              <div className="text-sm text-slate-600">{data.name}</div>
            </Card>
          ))}
        </div>

        {/* 搜尋和篩選 */}
        <Card className="p-6 mb-8 bg-white">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <Input
                placeholder="搜尋公式、物理意義或 ISO 標準..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter size={20} className="text-slate-600" />
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="篩選公式類型" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">所有公式類型</SelectItem>
                  {Object.entries(FORMULA_ANALYSIS_DATA).map(([key, data]) => (
                    <SelectItem key={key} value={key}>
                      {data.name} ({data.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* 公式列表 */}
        <div className="space-y-4">
          {filteredFormulas.length === 0 ? (
            <Card className="p-8 text-center bg-white">
              <p className="text-slate-600">未找到匹配的公式</p>
            </Card>
          ) : (
            filteredFormulas.map((formula) => (
              <Card
                key={formula.id}
                className="p-6 bg-white hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setExpandedFormula(expandedFormula === formula.id ? null : formula.id)}
              >
                {/* 公式摘要 */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded">
                        {FORMULA_ANALYSIS_DATA[formula.type as keyof typeof FORMULA_ANALYSIS_DATA]?.name || formula.type}
                      </span>
                      <span className="text-xs text-slate-500">{formula.id}</span>
                    </div>
                    <p className="text-sm text-slate-600 font-mono break-all bg-slate-50 p-2 rounded">
                      {formula.formula}
                    </p>
                    <p className="text-sm text-slate-700 mt-2 font-medium">
                      {formula.physical_meaning}
                    </p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 transition-transform ${
                      expandedFormula === formula.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* 展開詳細信息 */}
                {expandedFormula === formula.id && (
                  <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        ISO 標準依據
                      </h4>
                      <p className="text-sm text-slate-700">{formula.iso_standard}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        計算邏輯
                      </h4>
                      <p className="text-sm text-slate-700">{formula.calculation_logic}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        下游影響
                      </h4>
                      <p className="text-sm text-slate-700">{formula.downstream_impact}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        具體例子
                      </h4>
                      <p className="text-sm text-slate-700">{formula.example}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))
          )}
        </div>

        {/* 底部說明 */}
        <Card className="p-6 mt-8 bg-blue-50 border-l-4 border-l-blue-500">
          <h3 className="font-semibold text-blue-900 mb-2">如何使用本頁面</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• 使用搜尋框快速定位特定公式或概念</li>
            <li>• 使用篩選器按公式類型查看（條件判斷、查表、指數函數、聚合）</li>
            <li>• 點擊任何公式卡片展開詳細的四維度解析</li>
            <li>• 每個公式都包含 ISO 26262 標準的具體對應章節</li>
          </ul>
        </Card>

        {/* 完整報告連結 */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.open('https://github.com/jokersosmart/ISO26262-ASILB-Audit-Report/blob/master/fmeda-report/docs/FMEDA_formula_deep_analysis.md', '_blank')}
          >
            查看完整的 827 個公式深度分析報告
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
