# 統一術語表（Glossary）

> 本術語表整合 DFA 和 FMEDA 兩份報告中使用的所有核心術語，確保跨報告的一致性。

---

## 安全度量（Safety Metrics）

| 術語 | 全稱 | 定義 | DFA 使用 | FMEDA 使用 |
|:-----|:-----|:-----|:---------|:-----------|
| **SPFM** | Single Point Fault Metric | 單點故障度量，衡量安全機制對單點故障的覆蓋程度 | 作為最終驗證目標 | 逐元件計算 |
| **LFM** | Latent Fault Metric | 潛伏故障度量，衡量對潛伏故障的覆蓋程度 | 作為最終驗證目標 | 逐元件計算 |
| **PMHF** | Probabilistic Metric for random Hardware Failures | 隨機硬體故障的機率度量（單位：FIT） | 作為最終驗證目標 | 逐元件計算 |
| **SFF** | Safe Failure Fraction | 安全故障比例（IEC 61508 專用） | 未使用 | IEC 61508 評估 |
| **PFH** | Probability of dangerous Failure per Hour | 每小時危險故障機率（IEC 61508 專用） | 未使用 | IEC 61508 評估 |

## 故障分類（Fault Classification）

| 術語 | 全稱 | 定義 |
|:-----|:-----|:-----|
| **SPF** | Single Point Fault | 單點故障：單一故障直接導致安全目標違反 |
| **RF** | Residual Fault | 殘餘故障：有安全機制覆蓋但覆蓋率不足（90% ≤ DC < 99%） |
| **MPF-D** | Multi-Point Fault (Detected) | 多點故障（已偵測）：有部分診斷覆蓋（0% < DC < 90%） |
| **MPF-L** | Multi-Point Fault (Latent) | 多點故障（潛伏）：無任何診斷覆蓋（DC = 0%） |
| **Safe Fault** | Safe Fault | 安全故障：不影響安全目標，或被充分覆蓋（DC ≥ 99%） |

## 相依故障（Dependent Failures）

| 術語 | 全稱 | 定義 |
|:-----|:-----|:-----|
| **DFA** | Dependent Failure Analysis | 相依故障分析：分析元件間故障的關聯性 |
| **DFI** | Dependent Failure Initiator | 相依故障起因：可能導致多個元件同時失效的根本原因 |
| **CCF** | Common Cause Failure | 共因故障：由單一根本原因導致的多重故障 |
| **CMF** | Common Mode Failure | 共模故障：多個元件以相同方式失效 |
| **CF** | Cascading Failure | 級聯故障：一個元件的故障引發另一個元件的故障 |

## β 因子（Beta Factor）

| 術語 | 定義 | DFA 數值 | FMEDA 數值 |
|:-----|:-----|:---------|:-----------|
| **βIC** | 晶片內冗餘的共因故障比例因子 | 33%（基礎值） | 47%（啟用增加因子） |
| **β** | 邏輯子系統的共因故障比例因子 | 5%（S=0） | 5%（S=0） |
| **CCCI** | 共因故障起因指標（DFA 專用） | G+I+K+M+O（0-15） | 未使用 |

## 診斷覆蓋率（Diagnostic Coverage）

| 術語 | 全稱 | 定義 |
|:-----|:-----|:-----|
| **DC** | Diagnostic Coverage | 診斷覆蓋率：安全機制偵測到特定故障的能力百分比 |
| **ECC** | Error Correction Code | 錯誤更正碼：SRAM 的主要安全機制 |
| **Parity** | Parity Check | 奇偶校驗：簡單的錯誤偵測機制 |
| **BIST** | Built-In Self Test | 內建自測試：IC 上電時的自我診斷 |
| **WDT** | Watchdog Timer | 看門狗計時器：監控處理器是否正常運行 |
| **CRC** | Cyclic Redundancy Check | 循環冗餘校驗：資料完整性驗證 |

## 失效率（Failure Rate）

| 術語 | 全稱 | 定義 |
|:-----|:-----|:-----|
| **FIT** | Failures In Time | 10⁹ 小時內的故障次數（1 FIT = 10⁻⁹/h） |
| **λ** | Lambda（Failure Rate） | 失效率，通常以 FIT 為單位 |
| **MTBF** | Mean Time Between Failures | 平均故障間隔時間 |
| **MTTF** | Mean Time To Failure | 平均故障時間 |

## ASIL 等級

| 等級 | 風險程度 | SPFM 目標 | LFM 目標 | PMHF 目標 |
|:-----|:---------|:----------|:---------|:----------|
| **ASIL A** | 最低 | 無要求 | 無要求 | < 10⁻⁶/h |
| **ASIL B** | 低 | ≥ 90% | ≥ 60% | < 10⁻⁷/h |
| **ASIL C** | 中 | ≥ 97% | ≥ 80% | < 10⁻⁷/h |
| **ASIL D** | 最高 | ≥ 99% | ≥ 90% | < 10⁻⁸/h |
