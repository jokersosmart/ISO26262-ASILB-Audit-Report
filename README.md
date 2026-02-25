# ISO 26262 ASIL B 車用稽核文件報告

> **專案目標**：對 SiliconMotion SSD Controller IC 的 ISO 26262 ASIL B 功能安全認證文件進行全面深度解析，建立可審計、可追溯、可逆向還原的知識庫。

---

## 專案概覽

本專案涵蓋 ISO 26262 功能安全認證中兩份最核心的量化分析報告：

| 報告 | 文件編號 | 核心功能 | 工作表數 | 公式數 |
|:-----|:---------|:---------|:---------|:-------|
| **DFA（相依故障分析）** | RD-03-009-01 | 分析元件間的相依故障風險，量化共因故障潛力 | 15 | 170 |
| **FMEDA（失效模式效應與診斷分析）** | RD-03-008-01 | 對每個元件-失效模式組合進行量化評估，計算安全度量 | 27 | 597,466 |

這兩份報告互為補充：DFA 從「故障之間的關聯性」出發，FMEDA 從「單一故障的影響與覆蓋」出發，共同構成 IC 層級功能安全論證的完整證據鏈。

---

## 目錄結構

```
ISO26262-ASILB-Audit-Report/
│
├── README.md                          ← 本文件（專案總覽）
│
├── dfa-report/                        ← DFA 相依故障分析報告
│   ├── docs/                          ← 分析報告文件
│   │   ├── 00_MASTER_REPORT.md        ← DFA 總報告
│   │   ├── formula_and_crossref_analysis.md  ← 公式物理意義與跨頁關聯
│   │   ├── image_analysis_complete.md ← 16 張圖片的 AI 辨識報告
│   │   ├── platonic_analysis.md       ← 辯證法與蘇格拉底式提問分析
│   │   └── reference_documents_analysis.md   ← 參考文件解讀
│   ├── images/                        ← 從 Excel 提取的 16 張圖片
│   ├── markdown/                      ← 可逆向還原的完整 Markdown
│   │   └── DFA_Report_Reversible.md   ← 14,349 行，保留公式/樣式/合併儲存格
│   └── original-excel/                ← 原始 Excel 檔案
│       └── RD-03-009-01.ADFA報告DFAReport.xlsx
│
├── fmeda-report/                      ← FMEDA 失效模式效應與診斷分析報告
│   ├── docs/                          ← 分析報告文件
│   │   ├── 00_MASTER_REPORT.md        ← FMEDA 總報告
│   │   ├── formula_and_crossref_analysis.md  ← 公式物理意義與跨頁關聯
│   │   ├── image_analysis.md          ← 16 張圖片的 AI 辨識報告
│   │   ├── dialectic_socratic_analysis.md    ← 辯證法與蘇格拉底式提問分析
│   │   └── reference_documents_analysis.md   ← 參考文件解讀
│   ├── images/                        ← 從 Excel 提取的圖片
│   ├── markdown/                      ← 可逆向還原的完整 Markdown
│   │   └── FMEDA_Report_Reversible.md ← 4,795 行，保留公式/樣式/合併儲存格
│   └── original-excel/                ← 原始 Excel 檔案
│       └── RD-03-008-01FMEDAReport.xlsx
│
├── shared/                            ← 兩份報告共用的資源
│   ├── references/                    ← 共用參考文件解讀
│   │   └── shared_references.md       ← ISO 26262 / IEC 61508 / IEC 61709 等
│   └── terminology/                   ← 共用術語定義
│       └── glossary.md                ← 統一術語表
│
├── scripts/                           ← 所有分析與轉換腳本
│   ├── analyze_dfa.py                 ← DFA Excel 結構分析
│   ├── analyze_fmeda.py               ← FMEDA Excel 結構分析
│   ├── extract_dfa_images.py          ← DFA 圖片提取
│   ├── extract_fmeda_images.py        ← FMEDA 圖片提取
│   ├── dfa_to_reversible_md.py        ← DFA Excel → 可逆 Markdown
│   ├── fmeda_to_reversible_md.py      ← FMEDA Excel → 可逆 Markdown
│   └── md_to_excel.py                 ← Markdown → Excel 逆向還原
│
└── website/                           ← 互動式網站源碼
    └── src/                           ← React + Tailwind 4 前端
        ├── pages/                     ← 15 個頁面（DFA 8 + FMEDA 7）
        ├── components/                ← 共用元件（Layout、UI）
        └── lib/                       ← 資料模型（reportData、fmedaData）
```

---

## 分析方法論

### 1. 結構解析
- 逐一分析每個 sheet 的行列數、合併儲存格、隱藏行列、資料驗證規則
- 提取並記錄所有公式（含跨頁引用關係）
- 提取所有嵌入圖片並進行 AI 辨識

### 2. 公式物理意義解讀
- 將 Excel 公式翻譯為人類可理解的物理意義
- 追蹤每個公式的資料來源（參考哪個 sheet 的哪些欄位）
- 建立完整的計算鏈路圖

### 3. 柏拉圖辯證法（Dialectic Method）
- 對每個核心命題進行「正題 → 反題 → 合題」三段式辯證
- 從對立面的碰撞中達到更高層次的理解

### 4. 蘇格拉底式提問法（Socratic Questioning）
- 運用六大類型追問：澄清、假設探究、證據追問、觀點探究、影響推論、反思提問
- 層層深入直到觸及問題的根本

### 5. 可逆向還原的 Markdown
- 保留所有公式（以 `<!-- FORMULA: =SUM(A1:A10) -->` 註解形式）
- 保留合併儲存格資訊（以 `<!-- MERGE: A1:D3 -->` 註解形式）
- 保留樣式資訊（字體、顏色、對齊方式）
- 可透過 `md_to_excel.py` 腳本逆向還原為 Excel

---

## 核心發現摘要

### DFA 報告
| 指標 | 數值 | 說明 |
|:-----|:-----|:-----|
| CCCI 公式 | G+I+K+M+O | 量化切割集的共因故障潛力（0-15） |
| βIC（晶片內冗餘） | 33% | 基礎值，所有措施未啟用 |
| β（邏輯子系統） | 5% | 最高風險等級（Score S = 0） |

### FMEDA 報告
| 指標 | 數值 | 說明 |
|:-----|:-----|:-----|
| 主表規模 | 1,659 × 463 | 562,887 個公式 |
| βIC（晶片內冗餘） | 47% | 高於 DFA 的 33%，增加因子已啟用 |
| β（邏輯子系統） | 5% | 最高風險等級（Score S = 0） |
| 評估體系 | 3 套 | ISO 26262 + IEC 61508 Opt1/Opt2 |

---

## 參考標準

兩份報告共同引用的核心標準：

1. **ISO 26262:2018** — 道路車輛功能安全（Part 5, 9, 11）
2. **IEC 61508 Ed.2** — 電氣/電子/可程式電子安全相關系統的功能安全
3. **IEC TR 62380** — 電子元件的可靠度數據（失效率預測模型）
4. **IEC 61709** — 電子元件的可靠度參考條件
5. **SN 29500** — Siemens 失效率手冊

---

## 互動式網站

本專案包含一個互動式網站（React + Tailwind 4），提供：
- DFA / FMEDA 雙報告切換導航
- 每個 sheet 的詳細解析頁面
- 公式物理意義搜尋與計算鏈視覺化
- 互動式 β 因子計算器
- 柏拉圖辯證法與蘇格拉底式提問的互動展示
- 資料流向圖與故障分類決策樹

---

## 使用方式

### 還原 Excel
```bash
cd scripts/
python3 md_to_excel.py ../dfa-report/markdown/DFA_Report_Reversible.md output.xlsx
```

### 分析新的 Excel
```bash
cd scripts/
python3 analyze_dfa.py path/to/new_excel.xlsx
```

---

## 授權

本專案僅供內部稽核與學習使用。原始 Excel 檔案及其內容的智慧財產權歸 SiliconMotion 所有。
