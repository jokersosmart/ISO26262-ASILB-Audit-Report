# FMEDA 深度稽核分析報告（SGS 模板）

**文件版本**: v2.0  
**分析日期**: 2026-02-27  
**分析工具**: Manus AI  
**目標**: 通過 ISO 26262 ASIL B 公司稽核  
**模板來源**: SGS FMEDA Analysis Template  

---

## 目錄

1. [執行摘要](#1-執行摘要)
2. [SGS 模板架構總覽](#2-sgs-模板架構總覽)
3. [27 Sheet 稽核風險矩陣](#3-27-sheet-稽核風險矩陣)
4. [稽核重點 Sheet 深度分析](#4-稽核重點-sheet-深度分析)
5. [公式追溯性矩陣](#5-公式追溯性矩陣)
6. [圖片辨識與意義總覽](#6-圖片辨識與意義總覽)
7. [稽核準備檢查清單](#7-稽核準備檢查清單)
8. [逐 Sheet 詳細分析報告索引](#8-逐-sheet-詳細分析報告索引)

---

## 1. 執行摘要

本文件是針對 SGS 提供的 FMEDA（Failure Modes, Effects and Diagnostic Analysis）分析模板的完整稽核準備報告。此模板包含 **27 個工作表（Sheet）**，涵蓋從文件管理、方法論定義、失效率計算、FMEDA 主分析、診斷覆蓋率評估到最終安全度量計算的完整流程。

本報告的核心目的是協助貴公司通過 ISO 26262 ASIL B 等級的稽核，透過逐 sheet 的深度分析，確保每一個工作表的內容、公式、圖片都有明確的稽核依據和合規性說明。

### 關鍵數據

本次分析共涵蓋 **27 個工作表**，其中包含 **92,118 個公式**、**16 張嵌入圖片**，以及 **289 個合併儲存格區域**。在稽核風險評估方面，**16 個 sheet 被評為高風險**，**3 個為中風險**，**8 個為低風險**。高風險 sheet 主要集中在 FMEDA 主分析表（60,921 個公式）、BlockEvaluation（12,600 個公式）以及各 IEC 61508 評估表。

### SGS 模板如何滿足 ISO 26262 稽核要求

SGS 模板的設計嚴格遵循 ISO 26262-5:2018（硬體層級的產品開發）和 ISO 26262-9:2018（ASIL 導向和安全導向分析）的要求。模板透過以下機制確保稽核合規性：

第一，**方法論透明性**：Sheet 3（Process）和 Sheet 8（FlowChart）提供了完整的 FMEDA 分析流程圖，直接對應 ISO 26262-5:2018 Figure 5 的決策樹，讓稽核員可以一目了然地驗證分析方法的正確性。

第二，**失效率計算可追溯性**：Sheet 13（FailureRateCalc）和 Sheet 14（FailureRateCalcIC）實作了 IEC TR 62380 的數學模型，包含完整的參數定義、查表依據和計算公式，確保每一個失效率數值都有明確的來源。

第三，**安全度量自動計算**：Sheet 21-27 的 Evaluation 系列工作表自動計算 SPFM（Single Point Fault Metric）、LFM（Latent Fault Metric）和 PMHF（Probabilistic Metric for random Hardware Failures），並同時支援 ISO 26262 和 IEC 61508 兩套標準的評估。

第四，**診斷覆蓋率管理**：Sheet 16-17（DiagnosisInternal/External）提供了結構化的診斷機制登錄表，確保每個安全機制的覆蓋率都有明確的定義和依據。

第五，**共因故障分析**：Sheet 19-20（CCF Calc.）實作了 IEC 61508-2 Annex D 的 β 因子計算方法，滿足 ISO 26262 對相依故障分析的要求。

---

## 2. SGS 模板架構總覽

SGS FMEDA 模板的 27 個工作表可分為以下六大功能區塊：

### 2.1 文件管理區（Sheet 1-7）

此區塊包含文件的版本控制、封面資訊、分析流程說明、參考文件清單、縮寫定義、術語定義和圖例說明。這些 sheet 雖然不包含計算公式，但對稽核而言至關重要，因為它們建立了整份報告的可追溯性框架。

### 2.2 方法論定義區（Sheet 8-9）

Sheet 8（FlowChart）包含 SGS 模板的核心計算流程圖，定義了從失效模式到各安全度量類別的完整決策路徑。Sheet 9（FailureModes）則列出了所有考慮的失效模式類型。這兩個 sheet 是稽核員驗證分析方法正確性的首要檢查點。

### 2.3 輸入資料區（Sheet 10-14）

此區塊包含 FMEDA 分析所需的所有輸入資料：BlockList（硬體架構分解）、SRAM Tran FIT（SRAM 暫態失效率）、Block-Diagram（方塊圖）、FailureRateCalc（失效率計算參數）和 FailureRateCalcIC（IC 失效率計算）。這些 sheet 的資料品質直接決定了 FMEDA 分析結果的可信度。

### 2.4 核心分析區（Sheet 15-18）

Sheet 15（FMEDA）是整份報告的核心，包含 60,921 個公式，對每個硬體元件的每個失效模式進行分類和計算。Sheet 16-17 記錄診斷機制，Sheet 18 評估安全目標違反情況。

### 2.5 共因故障分析區（Sheet 19-20）

實作 IEC 61508-2 Annex D 的 β 因子計算，分別針對晶片內部冗餘和邏輯冗餘進行共因故障評估。

### 2.6 評估結果區（Sheet 21-27）

此區塊計算最終的安全度量（SPFM、LFM、PMHF），並同時提供 ISO 26262 和 IEC 61508 兩套標準的評估結果。這是稽核員最終判定 Pass/Fail 的關鍵區域。

---

## 3. 27 Sheet 稽核風險矩陣

| # | Sheet 名稱 | 公式數 | 圖片數 | 稽核風險 | 功能區塊 |
|---|-----------|--------|--------|---------|--------|
| 1 | Revision History |  | 1 | 🟢 Low | 文件管理 |
| 2 | Cover | 18 | 1 | 🟢 Low | 文件管理 |
| 3 | Process |  | 1 | 🟢 Low | 文件管理 |
| 4 | References |  |  | 🟢 Low | 文件管理 |
| 5 | Abbreviations |  |  | 🟢 Low | 文件管理 |
| 6 | Definitions |  | 3 | 🔴 High | 文件管理 |
| 7 | Legend |  |  | 🟢 Low | 文件管理 |
| 8 | FlowChart |  | 4 | 🟢 Low | 方法論定義 |
| 9 | FailureModes |  |  | 🟢 Low | 方法論定義 |
| 10 | BlockList | 1448 |  | 🟡 Medium | 輸入資料 |
| 11 | SRAM Tran FIT | 231 |  | 🟡 Medium | 輸入資料 |
| 12 | Block-Diagram |  |  | 🔴 High | 輸入資料 |
| 13 | FailureRateCalc | 127 | 3 | 🔴 High | 輸入資料 |
| 14 | FailureRateCalcIC | 111 |  | 🔴 High | 輸入資料 |
| 15 | FMEDA | 60921 |  | 🔴 High | 核心分析 |
| 16 | DiagnosisInternal |  |  | 🔴 High | 核心分析 |
| 17 | DiagnosisExternal |  |  | 🔴 High | 核心分析 |
| 18 | SafetyGoalViolations | 316 |  | 🔴 High | 核心分析 |
| 19 | CCF Calc. On-Chip Red. | 17 |  | 🟡 Medium | CCF 分析 |
| 20 | CCF Calc. Logic | 67 |  | 🔴 High | CCF 分析 |
| 21 | SGVEvaluation | 1034 | 1 | 🔴 High | 評估結果 |
| 22 | BlockEvaluation | 12600 | 1 | 🔴 High | 評估結果 |
| 23 | BlockEval-IEC61508_opt1 | 7200 |  | 🔴 High | 評估結果 |
| 24 | BlockEval-IEC61508_opt2 | 7200 |  | 🔴 High | 評估結果 |
| 25 | BlockTypeEvaluation | 366 | 1 | 🔴 High | 評估結果 |
| 26 | BlockTypeEval-IEC61508_opt1 | 231 |  | 🔴 High | 評估結果 |
| 27 | BlockTypeEval-IEC61508_opt2 | 231 |  | 🔴 High | 評估結果 |

---

## 4. 稽核重點 Sheet 深度分析

以下列出稽核員最可能深入檢查的 Sheet，按重要性排序：

### 4.1 Sheet 15: FMEDA（核心分析表）

FMEDA 主分析表是整份報告的心臟，包含 60,921 個公式，覆蓋所有硬體元件的所有失效模式。此表的每一行代表一個失效模式，每一列代表分析流程中的一個步驟（從失效率輸入到安全度量分類）。

稽核員會重點檢查：失效模式分佈比例是否合計為 100%、安全目標違反判定是否有依據、診斷覆蓋率數值是否與 Sheet 16-17 一致、以及最終分類（SPF/RF/MPF/Safe）是否符合 Sheet 8 流程圖的邏輯。

### 4.2 Sheet 13-14: FailureRateCalc / FailureRateCalcIC

失效率計算是 FMEDA 的基礎輸入。Sheet 13 包含 IEC TR 62380 的完整數學模型（λ = λ_die + λ_package + λ_overstress），Sheet 14 則將此模型實作為具體的 IC 失效率計算。

稽核員會檢查：使用的 λ₁、λ₂ 值是否正確對應 Table 16 的 IC 類型、溫度因子是否基於實際的任務剖面、製造年份學習因子是否合理、以及最終計算的 FIT 值是否在合理範圍內。

### 4.3 Sheet 21-27: Evaluation 系列

評估結果表計算 SPFM、LFM 和 PMHF 三大安全度量。對 ASIL B 而言，要求 SPFM ≥ 90%、LFM ≥ 60%、PMHF < 10⁻⁷/h。

稽核員會檢查：公式是否正確實作 ISO 26262-5:2018 的定義、加總邏輯是否涵蓋所有相關的失效模式、以及最終數值是否滿足 ASIL B 的門檻要求。

### 4.4 Sheet 18: SafetyGoalViolations

安全目標違反評估表定義了每個失效模式對每個安全目標的影響。此表的判定結果直接影響 FMEDA 主表中的分類邏輯。

稽核員會檢查：安全目標的定義是否與 HARA（Hazard Analysis and Risk Assessment）一致、每個失效模式的 PVSG 判定是否有技術依據、以及是否考慮了所有相關的安全目標。

### 4.5 Sheet 19-20: CCF Calc.

共因故障計算表實作了 IEC 61508-2 Annex D 的 β 因子方法。β 因子代表了冗餘系統中因共同原因而同時失效的概率。

稽核員會檢查：β 因子的評分是否有依據（設計多樣性、物理分離、環境測試等）、計算結果是否正確應用到 FMEDA 主表、以及是否同時考慮了晶片內部冗餘和外部邏輯冗餘。

---

## 5. 公式追溯性矩陣

以下矩陣展示了 FMEDA 模板中關鍵公式與標準條款的對應關係：

| 公式/計算 | 所在 Sheet | 對應標準條款 | 說明 |
|-----------|-----------|-------------|------|
| λ = λ_die + λ_package + λ_overstress | 13, 14 | IEC TR 62380 §7.1 | IC 失效率數學模型 |
| λ_FM = λ × D_FMi | 15 | ISO 26262-5:2018 §8.4.3 | 失效模式失效率 |
| λ_SPF = (1-K_FMCl,RF) × λ_FM,PVSG | 15 | ISO 26262-5:2018 Table D.1 | 單點故障失效率 |
| λ_RF = K_FMCl,RF × λ_FM,PVSG × (1-DC) | 15 | ISO 26262-5:2018 Table D.1 | 殘餘故障失效率 |
| λ_MPF,det = K_FMCl,MPF × λ_FM,MPF | 15 | ISO 26262-5:2018 Table D.1 | 已偵測多點故障 |
| λ_MPF,lat = (1-K_FMCl,MPF) × (1-F_per) × λ_FM,MPF | 15 | ISO 26262-5:2018 Table D.1 | 潛伏多點故障 |
| SPFM = 1 - (Σλ_SPF + Σλ_RF) / Σλ_total | 21, 22, 25 | ISO 26262-5:2018 §9.4.2.2 | 單點故障度量 |
| LFM = 1 - Σλ_MPF,lat / (Σλ_total - Σλ_SPF - Σλ_RF) | 21, 22, 25 | ISO 26262-5:2018 §9.4.2.3 | 潛伏故障度量 |
| PMHF = Σλ_SPF + Σλ_RF + Σ(λ_MPF × λ_IF × T) | 21, 22, 25 | ISO 26262-5:2018 §9.4.2.4 | 隨機硬體故障概率度量 |
| β factor (On-Chip) | 19 | IEC 61508-2 Annex D | 晶片內部冗餘 CCF |
| β factor (Logic) | 20 | IEC 61508-2 Annex D | 邏輯冗餘 CCF |
| SPFM (IEC 61508) | 23, 24, 26, 27 | IEC 61508-2 §7.4.4.2 | IEC 版本安全度量 |

---

## 6. 圖片辨識與意義總覽

SGS 模板中嵌入了 16 張圖片，每張圖片都有明確的稽核功能：

| Sheet | 圖片 | 內容描述 | 稽核意義 |
|-------|------|---------|---------|
| 1 | SGS Logo | SGS 公司標誌 | 證明使用經認證的第三方模板 |
| 2 | SGS Logo (封面) | SGS 公司標誌（封面版） | 文件品質標識 |
| 3 | FMEDA 流程圖 | ISO 26262-5 Figure 5 的實作版本 | 核心方法論依據，定義 5 大故障分類 |
| 6 | 故障時間軸圖 | 故障→偵測→安全狀態的時間關係 | ISO 26262-1 Figure 3，定義時間參數 |
| 6 | 級聯故障圖 | 故障從 Element A 傳播到 Element B | 定義故障傳播路徑分析要求 |
| 6 | 共因故障圖 | 同一根因同時影響多個元件 | CCF 概念定義，對應 Sheet 19-20 |
| 8 | 詳細計算流程圖 | 從失效模式到 7 大分類的完整計算路徑 | SGS 模板核心計算邏輯，含所有公式節點 |
| 8 | 故障分類樹狀圖 | 失效模式的層次分類結構 | ISO 26262-5 Table 3 的視覺化 |
| 8 | ISO 流程圖 | ISO 26262-5 Figure 5 原文 | 標準原文參照 |
| 8 | ISO 註釋 | NOTE 1, EXAMPLE, NOTE 2 | 安全故障判定邊界條件 |
| 13 | 必要資訊表 | IEC TR 62380 參數定義 | 失效率計算所需的所有輸入參數 |
| 13 | Table 16 | IC 基礎失效率查表 | λ₁、λ₂ 值的來源依據 |
| 13 | 數學模型 | IEC TR 62380 完整公式 | 失效率計算的數學基礎 |
| 21 | 帶欄位標記的流程圖 | 流程圖 + FMEDA 欄位對應 | 驗證公式正確性的「地圖」 |
| 22 | 帶欄位標記的流程圖 | 同上（Block 層級） | Block 評估的欄位對應 |
| 25 | 帶欄位標記的流程圖 | 同上（BlockType 層級） | BlockType 評估的欄位對應 |

---

## 7. 稽核準備檢查清單

以下是通過 ISO 26262 ASIL B 稽核前必須完成的檢查項目：

### 7.1 文件完整性

- [ ] 7.1.1 Revision History 是否記錄了所有版本變更
- [ ] 7.1.2 Cover 頁是否包含完整的專案資訊（產品名稱、ASIL 等級、日期、版本）
- [ ] 7.1.3 References 是否列出所有引用的標準和文件
- [ ] 7.1.4 Abbreviations 和 Definitions 是否涵蓋報告中使用的所有術語

### 7.2 方法論正確性

- [ ] 7.2.1 Process 流程圖是否與 ISO 26262-5:2018 Figure 5 一致
- [ ] 7.2.2 FlowChart 的計算流程是否完整覆蓋所有故障分類路徑
- [ ] 7.2.3 FailureModes 是否列出了所有相關的失效模式類型
- [ ] 7.2.4 Legend 的顏色和符號定義是否與報告中的使用一致

### 7.3 輸入資料品質

- [ ] 7.3.1 BlockList 是否完整反映了硬體架構分解
- [ ] 7.3.2 Block-Diagram 是否與實際的硬體架構一致
- [ ] 7.3.3 FailureRateCalc 的參數是否有明確的來源依據
- [ ] 7.3.4 FailureRateCalcIC 的 IC 類型選擇是否正確
- [ ] 7.3.5 SRAM Tran FIT 的暫態失效率是否基於可靠的資料來源
- [ ] 7.3.6 所有失效率數值是否在合理的 FIT 範圍內

### 7.4 FMEDA 分析正確性

- [ ] 7.4.1 每個硬體元件的失效模式分佈比例是否合計為 100%
- [ ] 7.4.2 安全目標違反判定（PVSG）是否有技術依據
- [ ] 7.4.3 診斷覆蓋率數值是否與 DiagnosisInternal/External 一致
- [ ] 7.4.4 安全機制的覆蓋率是否有測試或分析報告支持
- [ ] 7.4.5 故障分類（SPF/RF/MPF/Safe）是否符合 FlowChart 的邏輯
- [ ] 7.4.6 所有公式是否正確引用了相關的儲存格

### 7.5 評估結果驗證

- [ ] 7.5.1 SPFM 是否 ≥ 90%（ASIL B 要求）
- [ ] 7.5.2 LFM 是否 ≥ 60%（ASIL B 要求）
- [ ] 7.5.3 PMHF 是否 < 10⁻⁷/h（ASIL B 要求）
- [ ] 7.5.4 CCF β 因子計算是否有充分的依據
- [ ] 7.5.5 Block 層級和 BlockType 層級的評估結果是否一致
- [ ] 7.5.6 IEC 61508 版本的評估結果是否同時滿足要求

### 7.6 佐證文件

- [ ] 7.6.1 HARA（Hazard Analysis and Risk Assessment）報告
- [ ] 7.6.2 硬體設計規格書
- [ ] 7.6.3 安全機制設計文件
- [ ] 7.6.4 診斷覆蓋率測試報告
- [ ] 7.6.5 失效率資料來源文件（IEC TR 62380, SN 29500 等）
- [ ] 7.6.6 安全概念文件（Safety Concept）
- [ ] 7.6.7 技術安全需求（TSR）文件

---

## 8. 逐 Sheet 詳細分析報告索引

以下為 27 份逐 sheet 深度稽核分析報告的索引。每份報告包含：Sheet 概述、內容結構分析、圖片分析、公式深度分析、稽核合規性分析、以及稽核檢查清單。

### Sheet 1: Revision History 🟢
- **檔案**: [sheet_01_Revision_History.md](./sheet_01_Revision_History.md)
- **稽核風險**: Low
- **公式數**: 
- **圖片數**: 1

### Sheet 2: Cover 🟢
- **檔案**: [sheet_02_Cover.md](./sheet_02_Cover.md)
- **稽核風險**: Low
- **公式數**: 18
- **圖片數**: 1

### Sheet 3: Process 🟢
- **檔案**: [sheet_03_Process.md](./sheet_03_Process.md)
- **稽核風險**: Low
- **公式數**: 
- **圖片數**: 1

### Sheet 4: References 🟢
- **檔案**: [sheet_04_References.md](./sheet_04_References.md)
- **稽核風險**: Low
- **公式數**: 
- **圖片數**: 

### Sheet 5: Abbreviations 🟢
- **檔案**: [sheet_05_Abbreviations.md](./sheet_05_Abbreviations.md)
- **稽核風險**: Low
- **公式數**: 
- **圖片數**: 

### Sheet 6: Definitions 🔴
- **檔案**: [sheet_06_Definitions.md](./sheet_06_Definitions.md)
- **稽核風險**: High
- **公式數**: 
- **圖片數**: 3

### Sheet 7: Legend 🟢
- **檔案**: [sheet_07_Legend.md](./sheet_07_Legend.md)
- **稽核風險**: Low
- **公式數**: 
- **圖片數**: 

### Sheet 8: FlowChart 🟢
- **檔案**: [sheet_08_FlowChart.md](./sheet_08_FlowChart.md)
- **稽核風險**: Low
- **公式數**: 
- **圖片數**: 4

### Sheet 9: FailureModes 🟢
- **檔案**: [sheet_09_FailureModes.md](./sheet_09_FailureModes.md)
- **稽核風險**: Low
- **公式數**: 
- **圖片數**: 

### Sheet 10: BlockList 🟡
- **檔案**: [sheet_10_BlockList.md](./sheet_10_BlockList.md)
- **稽核風險**: Medium
- **公式數**: 1448
- **圖片數**: 

### Sheet 11: SRAM Tran FIT 🟡
- **檔案**: [sheet_11_SRAM_Tran_FIT.md](./sheet_11_SRAM_Tran_FIT.md)
- **稽核風險**: Medium
- **公式數**: 231
- **圖片數**: 

### Sheet 12: Block-Diagram 🔴
- **檔案**: [sheet_12_Block-Diagram.md](./sheet_12_Block-Diagram.md)
- **稽核風險**: High
- **公式數**: 
- **圖片數**: 

### Sheet 13: FailureRateCalc 🔴
- **檔案**: [sheet_13_FailureRateCalc.md](./sheet_13_FailureRateCalc.md)
- **稽核風險**: High
- **公式數**: 127
- **圖片數**: 3

### Sheet 14: FailureRateCalcIC 🔴
- **檔案**: [sheet_14_FailureRateCalcIC.md](./sheet_14_FailureRateCalcIC.md)
- **稽核風險**: High
- **公式數**: 111
- **圖片數**: 

### Sheet 15: FMEDA 🔴
- **檔案**: [sheet_15_FMEDA.md](./sheet_15_FMEDA.md)
- **稽核風險**: High
- **公式數**: 60921
- **圖片數**: 

### Sheet 16: DiagnosisInternal 🔴
- **檔案**: [sheet_16_DiagnosisInternal.md](./sheet_16_DiagnosisInternal.md)
- **稽核風險**: High
- **公式數**: 
- **圖片數**: 

### Sheet 17: DiagnosisExternal 🔴
- **檔案**: [sheet_17_DiagnosisExternal.md](./sheet_17_DiagnosisExternal.md)
- **稽核風險**: High
- **公式數**: 
- **圖片數**: 

### Sheet 18: SafetyGoalViolations 🔴
- **檔案**: [sheet_18_SafetyGoalViolations.md](./sheet_18_SafetyGoalViolations.md)
- **稽核風險**: High
- **公式數**: 316
- **圖片數**: 

### Sheet 19: CCF Calc. On-Chip Red. 🟡
- **檔案**: [sheet_19_CCF_Calc__On-Chip_Red_.md](./sheet_19_CCF_Calc__On-Chip_Red_.md)
- **稽核風險**: Medium
- **公式數**: 17
- **圖片數**: 

### Sheet 20: CCF Calc. Logic 🔴
- **檔案**: [sheet_20_CCF_Calc__Logic.md](./sheet_20_CCF_Calc__Logic.md)
- **稽核風險**: High
- **公式數**: 67
- **圖片數**: 

### Sheet 21: SGVEvaluation 🔴
- **檔案**: [sheet_21_SGVEvaluation.md](./sheet_21_SGVEvaluation.md)
- **稽核風險**: High
- **公式數**: 1034
- **圖片數**: 1

### Sheet 22: BlockEvaluation 🔴
- **檔案**: [sheet_22_BlockEvaluation.md](./sheet_22_BlockEvaluation.md)
- **稽核風險**: High
- **公式數**: 12600
- **圖片數**: 1

### Sheet 23: BlockEval-IEC61508_opt1 🔴
- **檔案**: [sheet_23_BlockEval-IEC61508_opt1.md](./sheet_23_BlockEval-IEC61508_opt1.md)
- **稽核風險**: High
- **公式數**: 7200
- **圖片數**: 

### Sheet 24: BlockEval-IEC61508_opt2 🔴
- **檔案**: [sheet_24_BlockEval-IEC61508_opt2.md](./sheet_24_BlockEval-IEC61508_opt2.md)
- **稽核風險**: High
- **公式數**: 7200
- **圖片數**: 

### Sheet 25: BlockTypeEvaluation 🔴
- **檔案**: [sheet_25_BlockTypeEvaluation.md](./sheet_25_BlockTypeEvaluation.md)
- **稽核風險**: High
- **公式數**: 366
- **圖片數**: 1

### Sheet 26: BlockTypeEval-IEC61508_opt1 🔴
- **檔案**: [sheet_26_BlockTypeEval-IEC61508_opt1.md](./sheet_26_BlockTypeEval-IEC61508_opt1.md)
- **稽核風險**: High
- **公式數**: 231
- **圖片數**: 

### Sheet 27: BlockTypeEval-IEC61508_opt2 🔴
- **檔案**: [sheet_27_BlockTypeEval-IEC61508_opt2.md](./sheet_27_BlockTypeEval-IEC61508_opt2.md)
- **稽核風險**: High
- **公式數**: 231
- **圖片數**: 

---

## 附錄 A: ASIL B 安全度量門檻值

| 安全度量 | ASIL A | ASIL B | ASIL C | ASIL D |
|---------|--------|--------|--------|--------|
| SPFM | ≥ N/A | ≥ 90% | ≥ 97% | ≥ 99% |
| LFM | ≥ N/A | ≥ 60% | ≥ 80% | ≥ 90% |
| PMHF | < 10⁻⁷/h | < 10⁻⁷/h | < 10⁻⁷/h | < 10⁻⁸/h |

> 來源：ISO 26262-5:2018 Table 4, Table 5, Table 6

## 附錄 B: 參考標準與文件

1. ISO 26262-1:2018 - Road vehicles — Functional safety — Part 1: Vocabulary
2. ISO 26262-5:2018 - Road vehicles — Functional safety — Part 5: Product development at the hardware level
3. ISO 26262-9:2018 - Road vehicles — Functional safety — Part 9: ASIL-oriented and safety-oriented analyses
4. ISO 26262-11:2018 - Road vehicles — Functional safety — Part 11: Guidelines on application of ISO 26262 to semiconductors
5. IEC 61508-2:2010 - Functional safety of electrical/electronic/programmable electronic safety-related systems — Part 2
6. IEC TR 62380:2004 - Reliability data handbook — Universal model for reliability prediction of electronics components, PCBs and equipment
7. SN 29500 (Siemens Norm) - Failure rates of electronic components

---

*本報告由 Manus AI 自動生成，基於 SGS FMEDA 模板的完整解析。報告內容僅供稽核準備參考，最終的稽核判定應以稽核員的專業判斷為準。*
