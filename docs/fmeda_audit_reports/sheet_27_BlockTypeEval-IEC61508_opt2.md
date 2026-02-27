# FMEDA 深度稽核分析報告：BlockTypeEval-IEC61508_opt2

## 1. Sheet 概述

- **Sheet 名稱**: `BlockTypeEval-IEC61508_opt2`
- **在 FMEDA 報告中的位置**: 第 27 個 sheet
- **維度**: 9 行 × 34 列 (A1:AH9)
- **角色與目的**: 此 sheet 的主要目的是根據 IEC 61508 標準，對電子元件的各種類型（Block Type）進行故障率評估。它將來自 `BlockList` 和 `FMEDA` sheet 的原始故障率數據，依據其安全相關性進行分類、計算與彙總，最終產出如安全故障比例（SFF）和硬件故障概率（PFH）等關鍵安全指標的初步估算。此工作表可視為一個高階儀表板，用於快速評估不同元件類型對整體系統安全的貢獻與風險。

## 2. 內容結構分析

- **欄位標頭的含義與組織方式**: 
  - **A欄**: `Block / Component Type` - 定義了分析的對象，例如 "Si MOS: Digital circuits, Micros, DSP"。
  - **B-D欄**: `Initial / Total Failure Rate` - 原始總失效率，區分為永久性（permanent）、暫態性（transient）及其總和。
  - **E-J欄**: `Safety related Failure Rate` & `Not safety related Failure Rate` - 將總失效率區分為安全相關與非安全相關兩部分。
  - **K-M欄**: `Safety related Failure Rate Distribution` - 計算各元件類型在總安全相關失效率中的佔比。
  - **N-S欄**: `Failure Rate (Safe)` & `Failure Rate (Dangerous)` - 進一步將安全相關失效率細分為安全故障與危險故障。
  - **T-Y欄**: `Failure Rate (Dangerous Detected)` & `Failure Rate (Dangerous Undetected)` - 將危險故障再區分為可被偵測與不可被偵測兩類。
  - **Z-AB欄**: `Failure Rate Distribution (Dangerous Undetected)` - 計算各元件類型在總不可偵測危險故障中的佔比。
  - **AC-AE欄**: `SFF (Safe Failure Fraction)` - 安全故障比例的初步計算。
  - **AF-AH欄**: `PFH (Probability of Failure per Hour)` - 每小時危險失效概率的初步計算。

- **合併儲存格的用途**: 此 sheet 中沒有使用合併儲存格。

- **資料的組織邏輯**: 資料以水平方式組織，每一橫列代表一種類型的電子元件。從左至右，欄位逐步對初始故障率進行分解、歸類與計算，最終在最右側產出 SFF 與 PFH 這兩個核心安全指標。這種瀑布式的計算流程使得數據的追溯與驗證相對直觀。

## 3. 圖片分析

此 sheet 中不包含任何圖片。

## 4. 公式深度分析

此 sheet 包含大量公式，以下列出幾個關鍵的獨特公式模式：

- **`=SUMIFS(BlockList!$F$10:$F$209,BlockList!$R$10:$R$209,A2)`**: 
  - **物理意義**: 從 `BlockList` 工作表中，根據 A2 儲存格定義的元件類型，條件式地加總所有匹配項的安全相關永久性故障率。
  - **引用**: `BlockList` sheet 的 F 欄（安全相關永久性故障率）與 R 欄（元件類型）。
  - **對應標準**: ISO 26262-5, Annex D - `Failure rate estimation of hardware parts`。
  - **正確性驗證**: 需確認 `BlockList` 中的元件類型分類（R欄）是否與本 sheet 的 A 欄一致，且加總範圍（$F$10:$F$209）是否涵蓋所有元件。

- **`=IF(E2=0,"-",IF(N2+Q2=0,"Not calculated",(N2+T2)/(N2+Q2)))`**: 
  - **物理意義**: 計算永久性故障的安全故障比例（SFF）。公式的邏輯是 (安全故障 + 危險已偵測故障) / (安全故障 + 危險故障)。
  - **引用**: 同一列的 E2, N2, Q2, T2 儲存格。
  - **對應標準**: ISO 26262-5, 8.4.5 - `Safe Failure Fraction (SFF)`。
  - **正確性驗證**: 需檢查分母（N2+Q2）是否為零，以避免除零錯誤。同時，需驗證引用的各個故障率分類是否正確。

- **`=FMEDA!HX2+SafetyGoalViolations!F37*FMEDA!HY2`**: 
  - **物理意義**: 計算永久性故障的 PFH。此公式結合了直接的單點/殘餘故障率（`FMEDA!HX2`）以及考慮了診斷覆蓋率後的潛在多點故障率（`SafetyGoalViolations!F37*FMEDA!HY2`）。
  - **引用**: `FMEDA` sheet 與 `SafetyGoalViolations` sheet。
  - **對應標準**: ISO 26262-5, Annex E - `Evaluation of hardware architectural metrics`。
  - **正確性驗證**: 需深入追查 `FMEDA` 與 `SafetyGoalViolations` sheet 中的引用來源，確保其計算基礎（如診斷覆蓋率 DC）的正確性。

## 5. 稽核合規性分析

- **對應的 ISO 26262 條款**:
  - **Part 5, Clause 8**: `Evaluation of the hardware architectural metrics` - 本 sheet 的核心，即計算 SFF 與 PFH。
  - **Part 5, Annex D & E**: 提供故障率估算與硬體架構度量評估的指引。
  - **Part 9, Clause 6**: `ASIL-dependent analysis` - 確保分析的嚴謹度與 ASIL 等級相符。
  - **Part 11**: `Application of ISO 26262 to semiconductors` - 提供了對 Si MOS 等半導體元件進行故障率分析的具體指導。

- **滿足 ASIL B 等級的具體要求**:
  - **SFF**: 對於 ASIL B，SFF 的目標值應大於等於 90%。本 sheet 的計算結果（AC-AE欄）是達成此目標的關鍵證據。
  - **PFH**: 對於 ASIL B，單點/殘餘故障與多點潛在故障的失效率總和應小於 100 FIT。本 sheet 的計算結果（AF-AH欄）直接對應此要求。

- **稽核員可能會問的問題**:
  - 「請解釋 `BlockTypeEval` 這個 sheet 在你們整體 FMEDA 分析中的作用。」
  - 「你們是如何從 `BlockList` 對應到這個 sheet 的元件分類的？請展示其一致性。」
  - 「公式 `AC2` 中計算 SFF 的邏輯是什麼？請解釋其如何對應 ISO 26262 的定義。」
  - 「PFH 的計算引用了 `SafetyGoalViolations` sheet，請說明該 sheet 中的 F37 儲存格代表什麼意義？」

- **需要準備的佐證文件**:
  - `BlockList` sheet，用以證明元件分類與故障率數據來源的正確性。
  - `FMEDA` 主 sheet，用以追溯 PFH 計算中引用的單點/殘餘故障率。
  - `SafetyGoalViolations` sheet，用以解釋多點潛在故障的計算依據。
  - 半導體元件的數據手冊或第三方故障率數據庫（如 IEC TR 62380），以佐證初始故障率的合理性。

## 5. 稽核合規性分析

- **對應的 ISO 26262 條款**:
  - **Part 5, Clause 8**: `Evaluation of the hardware architectural metrics` - 本 sheet 的核心，即計算 SFF 與 PFH。
  - **Part 5, Annex D & E**: 提供故障率估算與硬體架構度量評估的指引。
  - **Part 9, Clause 6**: `ASIL-dependent analysis` - 確保分析的嚴謹度與 ASIL 等級相符。
  - **Part 11**: `Application of ISO 26262 to semiconductors` - 提供了對 Si MOS 等半導體元件進行故障率分析的具體指導。

- **滿足 ASIL B 等級的具體要求**:
  - **SFF**: 對於 ASIL B，SFF 的目標值應大於等於 90%。本 sheet 的計算結果（AC-AE欄）是達成此目標的關鍵證據。
  - **PFH**: 對於 ASIL B，單點/殘餘故障與多點潛在故障的失效率總和應小於 100 FIT。本 sheet 的計算結果（AF-AH欄）直接對應此要求。

- **稽核員可能會問的問題**:
  - 「請解釋 `BlockTypeEval` 這個 sheet 在你們整體 FMEDA 分析中的作用。」
  - 「你們是如何從 `BlockList` 對應到這個 sheet 的元件分類的？請展示其一致性。」
  - 「公式 `AC2` 中計算 SFF 的邏輯是什麼？請解釋其如何對應 ISO 26262 的定義。」
  - 「PFH 的計算引用了 `SafetyGoalViolations` sheet，請說明該 sheet 中的 F37 儲存格代表什麼意義？」
  - 「數據樣本中出現大量的 `#DIV/0!` 錯誤，請解釋其根本原因以及對最終結果的影響。」

- **需要準備的佐證文件**:
  - `BlockList` sheet，用以證明元件分類與故障率數據來源的正確性。
  - `FMEDA` 主 sheet，用以追溯 PFH 計算中引用的單點/殘餘故障率。
  - `SafetyGoalViolations` sheet，用以解釋多點潛在故障的計算依據。
  - 半導體元件的數據手冊或第三方故障率數據庫（如 IEC TR 62380），以佐證初始故障率的合理性。
  - 針對計算錯誤的根本原因分析報告 (Root Cause Analysis Report)。

- **稽核發現的潛在風險**:
  - **數據完整性問題**: 從提供的數據樣本中可以觀察到大量的 `#VALUE!` 與 `#DIV/0!` 錯誤。這表明工作表中的某些計算鏈路存在中斷或錯誤的數據類型引用。例如，暫態故障率（transient failure rate）的引入似乎導致了連鎖的計算錯誤。在正式稽核中，這將是一個**嚴重缺陷項 (Major Finding)**，因為它直接影響了 SFF 與 PFH 指標的有效性與可信度。稽核員會要求開發團隊提供完整的根本原因分析，並展示修復後的結果。
  - **稽核風險等級**: 基於上述數據完整性問題，此工作表的**稽核風險等級為「高 (High)」**。在所有計算錯誤被修正並驗證之前，無法確認其是否滿足 ISO 26262 的要求。

## 6. 稽核檢查清單

| 檢查項目 | Pass/Fail 判定標準 |
| :--- | :--- |
| **元件分類一致性** | Pass: 本 sheet 的元件類型（A欄）與 `BlockList` 中的分類完全對應。Fail: 存在不一致或遺漏。 |
| **故障率加總正確性** | Pass: `SUMIFS` 等加總公式的範圍與條件設定正確，無遺漏或重複計算。Fail: 公式範圍錯誤或條件不符。 |
| **SFF 計算公式正確性** | Pass: SFF 公式符合 ISO 26262-5 對 (λ_S + λ_DP) / (λ_S + λ_D) 的定義。Fail: 公式邏輯錯誤。 |
| **PFH 計算公式正確性** | Pass: PFH 公式正確反映了單點、殘餘及潛在多點故障的貢獻。Fail: 公式未能涵蓋所有相關故障類型。 |
| **跨工作表引用有效性** | Pass: 所有對 `BlockList`, `FMEDA`, `SafetyGoalViolations` 等 sheet 的引用均指向正確的儲存格。Fail: 存在無效或錯誤的引用。 |
| **計算完整性與正確性** | Pass: 工作表中不存在 `#VALUE!`、`#DIV/0!` 或其他計算錯誤。所有公式均能產出有效的數值結果。Fail: 存在任何計算錯誤，導致關鍵指標無法正確計算。 |
| **ASIL B 指標達成** | Pass: 計算出的 SFF ≥ 90% 且 PFH < 100 FIT。Fail: 未能滿足任一指標。 |
