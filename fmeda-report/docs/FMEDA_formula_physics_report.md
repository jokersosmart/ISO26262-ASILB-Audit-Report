# FMEDA 公式物理意義深度分析報告

**聚焦：SSD Controller ASIC 晶片層級**

**作者：Manus AI**
**日期：2026-02-27**

---

## 第一章：報告目的與背景

本報告旨在回答一個核心問題：**FMEDA Excel 中的每一個公式到底在算什麼、根據什麼標準、為什麼要這樣算、以及對 SSD Controller ASIC 部門而言代表什麼意義？**

FMEDA（Failure Modes, Effects and Diagnostic Analysis）是 ISO 26262 要求的量化安全分析方法。它的核心任務是將一顆 IC 的整體失效率（FIT）分解到每一個功能區塊，然後對每個區塊的每一種失效模式進行分類（安全、危險、可偵測、不可偵測），最終計算出 SPFM（單點故障度量）、LFM（潛在故障度量）和 PMHF（概率性硬體失效度量）三個安全指標。

本報告聚焦於**晶片層級（Die Level）**的計算，不涉及封裝廠和製程層級的分析（那屬於另一份報告的範疇）。

---

## 第二章：FIT 值與 Gate Count 的關係 — 核心依據

### 2.1 什麼是 FIT？

FIT（Failure In Time）定義為每十億小時發生一次失效的概率。1 FIT = 10⁻⁹ 次失效/小時。對於車用 IC 而言，典型的 FIT 值在數十到數百之間。這個數值是整個 FMEDA 計算的起點。

### 2.2 IEC TR 62380 的 Die Failure Rate 公式

Excel 中 FailureRateCalc sheet 的核心公式 E23 是：

```
=IF(B21="Package", FailureRateCalcIC!D129,
    (I21 * M21 * EXP(-0.35 * O21) + (U21 * K21)) * R21)
```

這個公式的物理意義是 **IEC TR 62380 Chapter 7 的 Die Failure Rate 計算公式** [1]，其數學表達為：

> **λ_die = (λ₁ × N × e^(-0.35 × a) + λ₂ × P%) × π_temp**

各參數的物理意義如下表所示：

| 參數 | Excel 儲存格 | 物理意義 | 來源 | 對 SSD Controller 的意義 |
|:-----|:------------|:---------|:-----|:------------------------|
| **λ₁** | I21 | IC 類型基礎失效率常數 | IEC 62380 Table 16 | 取決於區塊類型（數位邏輯 = 3.4×10⁻⁶，線性電路 = 0.01） |
| **N** | M21 = BlockList!E2 | 該區塊的電晶體數量 | 設計資料（Gate Count × 4） | SSD Controller 通常有數百萬到數千萬個電晶體 |
| **a** | O21 = X21 - 1998 | 製造年份偏移量（相對於 1998 年） | 公司製造資料 | 反映製程成熟度，年份越新 → e^(-0.35a) 越小 → 失效率越低 |
| **λ₂** | K21 | IC 類型的面積相關失效率常數 | IEC 62380 Table 16 | 數位邏輯 = 1.7，線性電路 = 4.2 |
| **P%** | U21 = BlockList!I2 | 該區塊佔整顆晶片的面積百分比 | 設計資料 | 用於將整體 λ₂ 按面積比例分配到各區塊 |
| **π_temp** | R21 | 溫度加速因子 | Mission Profile 計算 | 車用環境溫度越高，失效率越高 |

### 2.3 為什麼 FIT 與 Gate Count 有關？

這是本報告最核心的問題。答案分為兩個層面：

**物理層面的解釋**：一顆 IC 的失效本質上是其內部微觀結構（電晶體、金屬連線、介電層）發生物理或化學劣化的結果。電晶體數量越多，潛在的失效點就越多，整體失效率自然越高。這就像一條鏈子的強度取決於最弱的一環——環節越多，出現弱環的概率越大。

**IEC 62380 Table 16 的數學模型**：IEC 62380 將 die failure rate 拆分為兩個部分 [1] [2]：

第一部分 **λ₁ × N × e^(-0.35a)** 代表的是「與電晶體數量成正比的失效率」。這裡的 λ₁ 是一個非常小的常數（例如數位邏輯的 λ₁ = 3.4×10⁻⁶），乘以 N（電晶體數量）後得到基礎失效率。e^(-0.35a) 是一個「製程成熟度折減因子」——製造年份越新（a 越大），這個因子越小，反映了半導體製程隨時間改進的事實。

第二部分 **λ₂ × P%** 代表的是「與晶片面積成正比的失效率」。λ₂ 是一個較大的常數（例如數位邏輯的 λ₂ = 1.7），乘以該區塊佔整體面積的百分比。這部分反映的是「面積相關的缺陷密度」——晶片面積越大，遇到製造缺陷的概率越高。

**對 SSD Controller ASIC 部門的具體意義**：SSD Controller 通常是大型數位 CMOS IC，gate count 在百萬級別。以一個 1000 萬電晶體的 SSD Controller 為例，假設 2020 年製造（a = 22）：

```
λ₁ × N × e^(-0.35 × 22) = 3.4×10⁻⁶ × 10⁷ × e^(-7.7)
                         = 34 × 0.000453
                         = 0.0154 FIT（這部分非常小）
```

而 λ₂ × P% = 1.7 × 1.0 = 1.7 FIT（假設整顆晶片）。

這說明**對於現代製程的大型 ASIC，面積相關的失效率（λ₂ 項）通常是主要貢獻者**，而電晶體數量相關的失效率（λ₁ 項）因為製程成熟度的折減而變得很小。

### 2.4 Table 16 查找表的完整內容

Excel 中 FailureRateCalc 的 AF/AG/AH 列存儲了 IEC 62380 Table 16 的查找表，用於根據 IC 類型查找 λ₁ 和 λ₂ 值：

| IC 類型 (AF 列) | λ₁ (AG 列) | λ₂ (AH 列) | 適用場景 |
|:----------------|:-----------|:-----------|:---------|
| Si MOS: Digital circuits, Micros, DSP | 3.4×10⁻⁶ | 1.7 | **SSD Controller 的數位邏輯核心** |
| Si MOS: Linear circuits | 0.01 | 4.2 | SSD Controller 的類比前端（PHY） |
| Si MOS: Digital/linear circuits (Telecom, CAN...) | 2.7×10⁻⁴ | 20 | 混合信號區塊 |
| Si MOS: ROM | 1.7×10⁻⁷ | 8.8 | ROM 區塊 |
| Si MOS: High speed SRAM, FIFO | 1.7×10⁻⁷ | 8.8 | SRAM 緩衝區 |
| Si MOS: FLASH | 2.6×10⁻⁷ | 34 | Flash 介面相關 |
| Si MOS: EEPROM, flash EEPROM | 6.5×10⁻⁷ | 16 | EEPROM 配置區 |

Excel 中的公式 `=IF($B$21=$AF$2,$AG$2,IF($B$21=$AF$3,$AG$3,...))` 就是一個巢狀 IF 查找，根據 BlockList 中定義的區塊類型，從這張表中查找對應的 λ₁ 和 λ₂ 值。

---

## 第三章：Mission Profile 與溫度加速因子

### 3.1 為什麼需要 Mission Profile？

IEC 62380 的一個核心特色是它不像 SN 29500 那樣只給一個固定的 FIT 值，而是要求使用者提供「Mission Profile」（使用環境描述）來計算實際的失效率 [1] [3]。這對車用 IC 特別重要，因為車輛的使用環境（引擎室 vs 車廂內 vs 後備箱）溫度差異很大。

### 3.2 溫度加速因子 π_temp 的計算

Excel 中 FailureRateCalcIC 的 D128 儲存格包含了完整的 λ_die 計算公式：

```
=(D94*D97*EXP(-0.35*D93)+D95) * (溫度加速因子)
```

其中溫度加速因子的計算涉及 Arrhenius 方程：

> **π_t = exp(Ea/k × (1/T_ref - 1/T_j))**

在 Excel 中的具體實現是：

```
π_t_i = EXP(3480 × (1/328 - 1/(273 + Tj_i)))
```

各參數的物理意義：

| 參數 | 數值 | 物理意義 |
|:-----|:-----|:---------|
| **3480** | Ea/k | 活化能 0.3 eV 除以波茲曼常數（注意：MOS 低壓用 3480，不是 4640） |
| **328** | T_ref (K) | 參考溫度 55°C = 328K |
| **Tj_i** | 變數 | 第 i 個溫度階段的接面溫度 |

**為什麼用 3480 而不是 4640？** Excel 中 FailureRateCalcIC 的 G101 公式使用 `EXP(3480*(1/328-1/(273+D108)))`。3480 對應活化能 Ea = 0.3 eV，這是 IEC 62380 對「MOS; BiCMOS (low voltage)」類型 IC 規定的活化能。而 4640 對應 Ea = 0.4 eV，用於 Bipolar 類型 IC。對於 SSD Controller（CMOS 數位 IC），使用 3480 是正確的。

### 3.3 三種 Mission Profile 的選擇

Excel 中 FailureRateCalcIC 的 C91 儲存格提供了三種 Mission Profile 選項：

| Mission Profile | 代號 | 典型應用 | 溫度範圍 |
|:----------------|:-----|:---------|:---------|
| Under-Hood | 1 | 引擎室 | 最高 140°C |
| Passenger Compartment | 2 | 車廂內 | 最高 85°C |
| Motor Control | 3 | 馬達控制 | 最高 100°C |

**對 SSD Controller 的意義**：SSD Controller 通常安裝在車廂內（Passenger Compartment），因此選擇 Mission Profile 2。這意味著溫度加速因子相對較低，FIT 值也較低。如果 SSD 安裝在引擎室附近（Under-Hood），FIT 值會顯著增加。

### 3.4 老化因子 e^(-0.35 × a) 的物理意義

公式中的 `EXP(-0.35*O21)` 是一個「製程成熟度折減因子」。O21 = 製造年份 - 1998。

這個因子的物理意義是：**半導體製程隨時間不斷改進，新製程的缺陷密度更低，因此失效率也更低。** IEC 62380 以 1998 年為基準年，每過一年，失效率就乘以 e^(-0.35) ≈ 0.705，即降低約 30%。

對於 2024 年製造的 SSD Controller（a = 26）：e^(-0.35 × 26) = e^(-9.1) ≈ 0.000111，這意味著電晶體數量相關的失效率（λ₁ × N 項）被折減了約 9000 倍。這就是為什麼對現代 ASIC 而言，λ₂ 項（面積相關）比 λ₁ 項（電晶體數量相關）重要得多。

---

## 第四章：BlockList 的 FIT 分配邏輯

### 4.1 BlockList 的核心功能

BlockList sheet 是整個 FMEDA 計算的「樞紐」。它的功能是將整顆 IC 的總 FIT 值分配到各個功能區塊。Excel 中 BlockList 定義了 6 個區塊類型（B2:B7），每個區塊有對應的電晶體數量（E2:E7）。

### 4.2 BlockList!C2 公式的完整解析

您特別提到的 BlockList!C2 公式：

```
=IF($AJ$2="No",
    FailureRateCalc!E23,
    (FailureRateCalc!E23
     + FailureRateCalcIC!$D$129 * (BlockList!E2/SUM(BlockList!$E$2:$E$7))
     + FailureRateCalcIC!$D$130 * (BlockList!E2/SUM(BlockList!$E$2:$E$7))))
```

這個公式的邏輯是一個**三層決策結構**：

**第一層（IF 條件）**：`$AJ$2="No"` 是一個全域開關，控制是否啟用 Mission Profile 計算。AJ2 的值決定了整個 FMEDA 是使用「簡化計算」還是「完整計算」。

**第二層（True 分支）**：如果 AJ2 = "No"（不啟用 Mission Profile），則直接使用 FailureRateCalc!E23 的基礎 die failure rate。這是一個簡化的計算方式，適用於初步估算。

**第三層（False 分支）**：如果啟用 Mission Profile，則 FIT 值 = 基礎 die FIT + λ_package 按比例分配 + λ_overstress 按比例分配。具體而言：

| 項目 | 公式 | 物理意義 |
|:-----|:-----|:---------|
| 基礎 die FIT | FailureRateCalc!E23 | 該區塊的 die failure rate（已含溫度修正） |
| λ_package 分配 | D129 × (E2/SUM(E2:E7)) | 封裝失效率按電晶體數量比例分配到該區塊 |
| λ_overstress 分配 | D130 × (E2/SUM(E2:E7)) | 過應力失效率按電晶體數量比例分配到該區塊 |

**為什麼要按電晶體數量比例分配？** 因為 λ_package 和 λ_overstress 是整顆 IC 的失效率，但 FMEDA 需要將它們分配到各個功能區塊。最合理的分配方式是按電晶體數量比例——電晶體越多的區塊，承受的封裝應力和過應力風險也越大。

**公司設計考量**：這裡的 `AN7 = 1e-06` 是一個「封裝失效率到暫態失效率的乘數」。公司可能無法直接測量每個區塊的封裝失效率，所以用這個乘數來估算。這是一個工程近似值，不同公司可能會有不同的估計。

### 4.3 BlockList 的 Transient FIT 計算

BlockList!L2 的公式：

```
=IF($AJ$2="No",
    C2*J2,
    FailureRateCalc!E23*J2
    + FailureRateCalcIC!$D$129*(E2/SUM($E$2:$E$7))*$AN$7
    + FailureRateCalcIC!$D$130*(E2/SUM($E$2:$E$7))*$AN$7)
```

這個公式計算的是**暫態失效率（Transient FIT）**。J2 是「暫態失效率與永久失效率的比值」（通常為 10 或 100）。暫態失效（如 SEU — Single Event Upset）在 SSD Controller 中特別重要，因為 SRAM 和暫存器容易受到宇宙射線的影響。

---

## 第五章：FailureRateCalcIC — 完整 IC 層級計算

### 5.1 λ_die 的完整計算（D128）

FailureRateCalcIC!D128 是整個 FMEDA 中最複雜的公式之一：

```
=(D94*D97*EXP(-0.35*D93)+D95) × (溫度加速因子)
```

展開後的物理意義：

```
λ_die = (λ₁ × N_total × e^(-0.35×a) + λ₂) × Σ(τ_on_i × π_t_i) / τ_on
```

其中各項的數據來源：

| 項目 | 儲存格 | 來源 | 說明 |
|:-----|:-------|:-----|:-----|
| λ₁ | D94 = FailureRateCalc!I21 | IEC 62380 Table 16 | 根據 IC 類型查找 |
| N_total | D97 = SUM(BlockList!E2:E7) | 設計資料 | 整顆 IC 的總電晶體數量 |
| a | D93 = BlockList!T2 - 1998 | 製造資料 | 製造年份偏移量 |
| λ₂ | D95 = FailureRateCalc!K21 | IEC 62380 Table 16 | 根據 IC 類型查找 |
| τ_on_i | D116-D123 | Mission Profile | 各溫度階段的工作時間比例 |
| π_t_i | J109-J123 | Arrhenius 計算 | 各溫度階段的溫度加速因子 |

### 5.2 λ_package 的計算（D129）

```
=0.00275 * D101 * Σ(n_i^0.76 × ΔT_i^0.68)
```

這個公式基於 **Coffin-Manson 疲勞模型** [4]，計算封裝因熱循環而產生的失效率：

| 項目 | 儲存格 | 物理意義 |
|:-----|:-------|:---------|
| **0.00275** | 常數 | IEC 62380 的封裝失效率基礎常數 |
| **D101 = π_α** | 0.06 × \|α_s - α_c\|^1.68 | 熱膨脹係數差異因子（基板 vs 封裝材料） |
| **n_i^0.76** | J126-J130 | 溫度循環次數的 0.76 次方（疲勞累積效應） |
| **ΔT_i^0.68** | D125-D127 | 溫度循環幅度的 0.68 次方（Coffin-Manson 指數） |

**對 SSD Controller 的意義**：封裝失效率主要取決於溫度循環的次數和幅度。車用環境的溫度循環比消費級更嚴苛（每天多次啟停），因此 λ_package 會更高。但這部分屬於封裝層級，不是 ASIC 部門直接控制的。

### 5.3 λ_overstress 的計算（D130）

```
=D102 * D103
```

這是最簡單的公式。D102 是 EOS（Electrical Overstress）的基礎失效率，D103 是介面數量因子。λ_overstress 通常與 IC 的外部介面數量和類型有關。

### 5.4 總 FIT 值（D131）

```
=SUM(D128+D129+D130) = λ_die + λ_package + λ_overstress
```

這就是 IEC 62380 的核心公式：**IC 的總失效率 = Die 失效率 + 封裝失效率 + 過應力失效率** [1]。

---

## 第六章：FMEDA 主表的公式邏輯

### 6.1 失效率分配公式（F10）

FMEDA 主表的 F10 公式是將 BlockList 的 FIT 值分配到每個子區塊：

```
=IF(P10="Yes",
    IF(R10="",0,
       IF($R10=$B$2,$C$2,IF($R10=$B$3,$C$3,...)) × IF($R$2...)),
    0)
```

這個公式的邏輯是：

1. **P10="Yes"**：只有安全相關的區塊才需要計算 FIT
2. **R10 查找**：根據區塊類型（R10），從 BlockList 的 B2:B7 中查找對應的 FIT 值
3. **比例分配**：根據該子區塊的電晶體數量佔同類型區塊的比例，分配 FIT 值

### 6.2 失效模式分佈（I 列）

```
=F10/SUM($F$10:$F$982)
```

這個公式計算的是每個子區塊的失效率佔總失效率的百分比，用於驗證所有失效率的總和是否為 100%。

### 6.3 安全目標違反分類（L 列及之後）

FMEDA 主表的 L 列開始是「Safety Goal Violation」分類，每個失效模式被分類為：

| 分類代碼 | 含義 | 對安全指標的影響 |
|:---------|:-----|:----------------|
| **S** | SPF（Single Point Fault） | 計入 SPFM 分母 |
| **M** | MPF（Multiple Point Fault） | 計入 LFM 分母 |
| **N** | Safe（安全失效） | 不影響安全指標 |
| **-** | Not safety related | 不參與計算 |

---

## 第七章：公司需要注意的地方

### 7.1 Gate Count 數據的準確性

整個 FMEDA 計算的基礎是 BlockList 中的電晶體數量（E2:E7）。如果這些數據不準確，所有下游計算都會受到影響。ASIC 部門需要確保：

- Gate count 數據來自最終的 GDS（版圖資料），而不是 RTL 估算
- 每個功能區塊的電晶體數量已經過 EDA 工具驗證
- SRAM 和暫存器的數量需要單獨統計（因為它們的失效模式不同）

### 7.2 IC 類型選擇的影響

FailureRateCalc 的 B21 儲存格決定了使用哪組 λ₁/λ₂ 值。對於 SSD Controller：

- 數位邏輯核心應選擇「Si MOS: Digital circuits, Micros, DSP」（λ₁=3.4×10⁻⁶, λ₂=1.7）
- PHY 類比前端應選擇「Si MOS: Linear circuits」（λ₁=0.01, λ₂=4.2）
- SRAM 區塊應選擇「Si MOS: High speed SRAM, FIFO」（λ₁=1.7×10⁻⁷, λ₂=8.8）

**注意**：類比電路的 λ₁ 比數位電路高了近 3000 倍（0.01 vs 3.4×10⁻⁶），這意味著即使 PHY 的電晶體數量很少，它的 die failure rate 也可能很高。

### 7.3 製造年份的更新

每次量產新版本的 SSD Controller 時，需要更新 BlockList!T2 的製造年份。這會影響老化因子 e^(-0.35a)，進而影響整體 FIT 值。年份越新，FIT 值越低。

### 7.4 Mission Profile 的選擇

AJ2 的開關（"Yes"/"No"）決定是否啟用 Mission Profile 計算。對於正式的 ISO 26262 認證，**必須啟用 Mission Profile**（AJ2 = "Yes"），並且選擇正確的使用環境（Passenger Compartment / Under-Hood / Motor Control）。

### 7.5 暫態失效率的考量

SSD Controller 中的 SRAM 和暫存器容易受到宇宙射線引起的 SEU（Single Event Upset）。BlockList 的 J 列（暫態/永久比值）需要根據實際的 SER（Soft Error Rate）測試數據來設定，而不是使用預設值。

---

## 第八章：公式之間的完整計算鏈

以下是從原始設計數據到最終安全指標的完整計算鏈路：

```
設計資料（Gate Count, 面積, 製造年份）
    ↓
BlockList（定義功能區塊和電晶體分配）
    ↓
FailureRateCalc（查找 λ₁, λ₂ → 計算各區塊 die FIT）
    ↓
FailureRateCalcIC（計算 λ_die, λ_package, λ_overstress → 總 FIT）
    ↓
BlockList（將總 FIT 分配到各區塊 → C2:C7）
    ↓
FMEDA 主表（將區塊 FIT 分配到子區塊 → F10:F982）
    ↓
FMEDA 主表（失效模式分類 → S/M/N/-）
    ↓
DiagnosisInternal / DiagnosisExternal（診斷覆蓋率）
    ↓
SafetyGoalViolations（安全目標違反統計）
    ↓
BlockEvaluation / BlockTypeEvaluation（SPFM, LFM, PMHF 計算）
```

---

## 第九章：與 DFA 報告的交叉關聯

FMEDA 和 DFA 是同一個 Safety Case 的兩個面向。它們共享以下計算：

| 共享項目 | FMEDA 中的位置 | DFA 中的位置 | 關聯方式 |
|:---------|:--------------|:------------|:---------|
| β 因子（CCF） | CCF Calc. On-Chip Red. | CCF Calc. On-Chip Red. | 相同的 β = 33%（晶片內冗餘） |
| BlockList | BlockList sheet | BlockList sheet | 相同的功能區塊定義 |
| FIT 值 | FailureRateCalc | 引用 FMEDA 結果 | DFA 使用 FMEDA 計算的 FIT 值 |
| 安全度量 | BlockEvaluation | Evaluation | SPFM, LFM, PMHF |

---

## 參考文獻

[1] IEC TR 62380:2004, "Reliability Data Handbook — Universal Model for Reliability Prediction of Electronics Components, PCBs and Equipment." International Electrotechnical Commission, 2004.

[2] Analog Devices, "Know Your Safety Application Notes — Part 1: Failure Rates." Bryan Borres, Aug 2025. https://www.analog.com/en/resources/technical-articles/know-your-safety-part-1.html

[3] Texas Instruments, "IEC TR 62380 FIT Rate Scaling for different mission profile." D. Tatman, 06/2020. https://e2e.ti.com/cfs-file/__key/communityserver-discussions-components-files/388/IEC-TR-62380-failure-rate-mission-profile-scaling.pdf

[4] L.F. Coffin, "A Study of the Effects of Cyclic Thermal Stresses on a Ductile Metal." Transactions of ASME, 76, 931-950, 1954.

[5] ISO 26262-11:2018, "Road vehicles — Functional safety — Part 11: Guidelines on application of ISO 26262 to semiconductors." International Organization for Standardization, 2018.

[6] ISO 26262-5:2018, "Road vehicles — Functional safety — Part 5: Product development at the hardware level." International Organization for Standardization, 2018.

[7] IEC 61508:2010, "Functional safety of electrical/electronic/programmable electronic safety-related systems." International Electrotechnical Commission, 2010.

[8] SN 29500 Part 2, "Expected Values for Integrated Circuits." Siemens Norm, 2010.
