# FMEDA Per-Sheet Formula Analysis: BlockTypeEval-IEC61508_opt2

> **Report**: FMEDA
> **Sheet**: BlockTypeEval-IEC61508_opt2
> **Unique Formula Patterns**: 69
> **Total Formula Cells**: 231
> **Analysis Date**: 2026-02-27

---

## Formula Analysis (69 Unique Patterns)

### Pattern 1: `=BlockList!B_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `A2` |
| **Formula** | `=BlockList!B2` |
| **Column Header** | Block / Component Type

Calculation according to IEC 61508 
assumed that SPFs an |
| **Computed Value** | Si MOS: Digital circuits, Micros, DSP |
| **Occurrences** | 6 cells |
| **Applied Range** | `A2`, `A3`, `A4`, `A5`, `A6`, `A7` |

**Cross-References**: `BlockList!B2`

#### Calculation Logic

This formula retrieves the value from cell `B2` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Identifies the functional block or component type within the ASIC/SSD Controller. Each block represents a distinct functional unit (e.g., SRAM, Flash controller, PCIe interface) whose failure behavior must be independently characterized for safety analysis.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **ISO 26262-5:2018**, Table D.3: Diagnostic coverage of safety mechanisms
- **IEC 61508-2:2010**, Section 7.4.3.1.3: Diagnostic coverage requirements

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 2: `=BlockList!C_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `B2` |
| **Formula** | `=BlockList!C2` |
| **Column Header** | Initial / Total Failure Rate
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `B2`, `B3`, `B4`, `B5`, `B6`, `B7` |

**Cross-References**: `BlockList!C2`

#### Calculation Logic

This formula retrieves the value from cell `C2` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 3: `=BlockList!L_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `C2` |
| **Formula** | `=BlockList!L2` |
| **Column Header** | Initial / Total Failure Rate
transient
[FIT] |
| **Computed Value** | #VALUE! |
| **Occurrences** | 6 cells |
| **Applied Range** | `C2`, `C3`, `C4`, `C5`, `C6`, `C7` |

**Cross-References**: `BlockList!L2`

#### Calculation Logic

This formula retrieves the value from cell `L2` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 4: `=B_N+C_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `D2` |
| **Formula** | `=B2+C2` |
| **Column Header** | Initial / Total Failure Rate permanent and
transient
[FIT] |
| **Computed Value** | #VALUE! |
| **Occurrences** | 7 cells |
| **Applied Range** | `D2`, `D3`, `D4`, `D5`, `D6`, `D7`, `D9` |

**Cross-References**: `B2`, `C2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 5: `=SUMIFS(BlockList!$F_N:$F_N,BlockList!$R_N:$R_N,A_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `E2` |
| **Formula** | `=SUMIFS(BlockList!$F$10:$F$209,BlockList!$R$10:$R$209,A2)` |
| **Column Header** | Safety related Failure Rate
permanent
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 6 cells |
| **Applied Range** | `E2`, `E3`, `E4`, `E5`, `E6`, `E7` |

**Cross-References**: `BlockList!$F$10:$F$209`, `BlockList!$R$10:$R$209`, `A2`

#### Calculation Logic

This formula retrieves the value from cell `$F$10:$F$209,BlockList` in the `SUMIFS(BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 6: `=SUMIFS(BlockList!$G_N:$G_N,BlockList!$R_N:$R_N,A_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `F2` |
| **Formula** | `=SUMIFS(BlockList!$G$10:$G$209,BlockList!$R$10:$R$209,A2)` |
| **Column Header** | Safety related Failure Rate
transient
[FIT] |
| **Computed Value** | #VALUE! |
| **Occurrences** | 6 cells |
| **Applied Range** | `F2`, `F3`, `F4`, `F5`, `F6`, `F7` |

**Cross-References**: `BlockList!$G$10:$G$209`, `BlockList!$R$10:$R$209`, `A2`

#### Calculation Logic

This formula retrieves the value from cell `$G$10:$G$209,BlockList` in the `SUMIFS(BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 7: `=E_N+F_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `G2` |
| **Formula** | `=E2+F2` |
| **Column Header** | Safety related Failure Rate permanent and
transient
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 7 cells |
| **Applied Range** | `G2`, `G3`, `G4`, `G5`, `G6`, `G7`, `G9` |

**Cross-References**: `E2`, `F2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 8: `=B_N-E_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `H2` |
| **Formula** | `=B2-E2` |
| **Column Header** | Not safety related Failure Rate
permanent
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 7 cells |
| **Applied Range** | `H2`, `H3`, `H4`, `H5`, `H6`, `H7`, `H9` |

**Cross-References**: `B2`, `E2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 9: `=C_N-F_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `I2` |
| **Formula** | `=C2-F2` |
| **Column Header** | Not safety related Failure Rate
transient
[FIT] |
| **Computed Value** | #VALUE! |
| **Occurrences** | 7 cells |
| **Applied Range** | `I2`, `I3`, `I4`, `I5`, `I6`, `I7`, `I9` |

**Cross-References**: `C2`, `F2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 10: `=H_N+I_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `J2` |
| **Formula** | `=H2+I2` |
| **Column Header** | Not safety related Failure Rate permanent and
transient
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 7 cells |
| **Applied Range** | `J2`, `J3`, `J4`, `J5`, `J6`, `J7`, `J9` |

**Cross-References**: `H2`, `I2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 11: `=E_N/SUM($E_N:$E_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `K2` |
| **Formula** | `=E2/SUM($E$2:$E$7)` |
| **Column Header** | Safety related Failure Rate Distribution
permanent |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 6 cells |
| **Applied Range** | `K2`, `K3`, `K4`, `K5`, `K6`, `K7` |

**Cross-References**: `E2`, `$E$2:$E$7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 12: `=F_N/SUM($F_N:$F_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `L2` |
| **Formula** | `=F2/SUM($F$2:$F$7)` |
| **Column Header** | Safety related Failure Rate Distribution
transient |
| **Computed Value** | #VALUE! |
| **Occurrences** | 6 cells |
| **Applied Range** | `L2`, `L3`, `L4`, `L5`, `L6`, `L7` |

**Cross-References**: `F2`, `$F$2:$F$7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 13: `=G_N/SUM($G_N:$G_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `M2` |
| **Formula** | `=G2/SUM($G$2:$G$7)` |
| **Column Header** | Safety related Failure Rate Distribution permanent and
transient |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 6 cells |
| **Applied Range** | `M2`, `M3`, `M4`, `M5`, `M6`, `M7` |

**Cross-References**: `G2`, `$G$2:$G$7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 14: `=FMEDA!HW_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `N2` |
| **Formula** | `=FMEDA!HW2` |
| **Column Header** | Failure Rate (Safe)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `N2` |

**Cross-References**: `FMEDA!HW2`

#### Calculation Logic

This formula retrieves the value from cell `HW2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 15: `=FMEDA!JG_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `O2` |
| **Formula** | `=FMEDA!JG2` |
| **Column Header** | Failure Rate (Safe)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `O2` |

**Cross-References**: `FMEDA!JG2`

#### Calculation Logic

This formula retrieves the value from cell `JG2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 16: `=N_N+O_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `P2` |
| **Formula** | `=N2+O2` |
| **Column Header** | Failure Rate (Safe) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 7 cells |
| **Applied Range** | `P2`, `P3`, `P4`, `P5`, `P6`, `P7`, `P9` |

**Cross-References**: `N2`, `O2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 17: `=BlockTypeEvaluation!AI_N+BlockTypeEvaluation!T_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `Q2` |
| **Formula** | `=BlockTypeEvaluation!AI2+BlockTypeEvaluation!T2` |
| **Column Header** | Failure Rate (Dangerous)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `Q2`, `Q3`, `Q4`, `Q5`, `Q6`, `Q7` |

**Cross-References**: `BlockTypeEvaluation!AI2`, `BlockTypeEvaluation!T2`

#### Calculation Logic

This formula retrieves the value from cell `AI2+BlockTypeEvaluation` in the `BlockTypeEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 18: `=BlockTypeEvaluation!AJ_N+BlockTypeEvaluation!U_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `R2` |
| **Formula** | `=BlockTypeEvaluation!AJ2+BlockTypeEvaluation!U2` |
| **Column Header** | Failure Rate (Dangerous)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `R2`, `R3`, `R4`, `R5`, `R6`, `R7` |

**Cross-References**: `BlockTypeEvaluation!AJ2`, `BlockTypeEvaluation!U2`

#### Calculation Logic

This formula retrieves the value from cell `AJ2+BlockTypeEvaluation` in the `BlockTypeEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 19: `=Q_N+R_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `S2` |
| **Formula** | `=Q2+R2` |
| **Column Header** | Failure Rate (Dangerous) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 7 cells |
| **Applied Range** | `S2`, `S3`, `S4`, `S5`, `S6`, `S7`, `S9` |

**Cross-References**: `Q2`, `R2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 20: `=BlockTypeEvaluation!AU_N+BlockTypeEvaluation!AR_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `T2` |
| **Formula** | `=BlockTypeEvaluation!AU2+BlockTypeEvaluation!AR2` |
| **Column Header** | Failure Rate (Dangerous Detected)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `T2`, `T3`, `T4`, `T5`, `T6`, `T7` |

**Cross-References**: `BlockTypeEvaluation!AU2`, `BlockTypeEvaluation!AR2`

#### Calculation Logic

This formula retrieves the value from cell `AU2+BlockTypeEvaluation` in the `BlockTypeEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 21: `=BlockTypeEvaluation!AV_N+BlockTypeEvaluation!AS_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `U2` |
| **Formula** | `=BlockTypeEvaluation!AV2+BlockTypeEvaluation!AS2` |
| **Column Header** | Failure Rate (Dangerous Detected)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `U2`, `U3`, `U4`, `U5`, `U6`, `U7` |

**Cross-References**: `BlockTypeEvaluation!AV2`, `BlockTypeEvaluation!AS2`

#### Calculation Logic

This formula retrieves the value from cell `AV2+BlockTypeEvaluation` in the `BlockTypeEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 22: `=BlockTypeEvaluation!AW_N+BlockTypeEvaluation!AT_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `V2` |
| **Formula** | `=BlockTypeEvaluation!AW2+BlockTypeEvaluation!AT2` |
| **Column Header** | Failure Rate (Dangerous Detected) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `V2`, `V3`, `V4`, `V5`, `V6`, `V7` |

**Cross-References**: `BlockTypeEvaluation!AW2`, `BlockTypeEvaluation!AT2`

#### Calculation Logic

This formula retrieves the value from cell `AW2+BlockTypeEvaluation` in the `BlockTypeEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 23: `=BlockTypeEvaluation!W_N+BlockTypeEvaluation!Z_N+BlockTypeEvaluation!AX_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `W2` |
| **Formula** | `=BlockTypeEvaluation!W2+BlockTypeEvaluation!Z2+BlockTypeEvaluation!AX2` |
| **Column Header** | Failure Rate (Dangerous Undetected)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `W2`, `W3`, `W4`, `W5`, `W6`, `W7` |

**Cross-References**: `BlockTypeEvaluation!W2`, `BlockTypeEvaluation!Z2`, `BlockTypeEvaluation!AX2`

#### Calculation Logic

This formula retrieves the value from cell `W2+BlockTypeEvaluation` in the `BlockTypeEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 24: `=BlockTypeEvaluation!X_N+BlockTypeEvaluation!AA_N+BlockTypeEvaluation!AY_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `X2` |
| **Formula** | `=BlockTypeEvaluation!X2+BlockTypeEvaluation!AA2+BlockTypeEvaluation!AY2` |
| **Column Header** | Failure Rate (Dangerous Undetected)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `X2`, `X3`, `X4`, `X5`, `X6`, `X7` |

**Cross-References**: `BlockTypeEvaluation!X2`, `BlockTypeEvaluation!AA2`, `BlockTypeEvaluation!AY2`

#### Calculation Logic

This formula retrieves the value from cell `X2+BlockTypeEvaluation` in the `BlockTypeEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 25: `=BlockTypeEvaluation!Y_N+BlockTypeEvaluation!AB_N+BlockTypeEvaluation!AZ_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `Y2` |
| **Formula** | `=BlockTypeEvaluation!Y2+BlockTypeEvaluation!AB2+BlockTypeEvaluation!AZ2` |
| **Column Header** | Failure Rate (Dangerous Undetected) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `Y2`, `Y3`, `Y4`, `Y5`, `Y6`, `Y7` |

**Cross-References**: `BlockTypeEvaluation!Y2`, `BlockTypeEvaluation!AB2`, `BlockTypeEvaluation!AZ2`

#### Calculation Logic

This formula retrieves the value from cell `Y2+BlockTypeEvaluation` in the `BlockTypeEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 26: `=IF(W_N=0,"-",W_N/SUM($W_N:$W_N))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `Z2` |
| **Formula** | `=IF(W2=0,"-",W2/SUM($W$2:$W$7))` |
| **Column Header** | Failure Rate Distribution (Dangerous Undetected)
permanent |
| **Computed Value** | - |
| **Occurrences** | 6 cells |
| **Applied Range** | `Z2`, `Z3`, `Z4`, `Z5`, `Z6`, `Z7` |

**Cross-References**: `W2`, `W2`, `$W$2:$W$7`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid (Standard Framework + Company Implementation)**: The conditional logic implements standard-defined thresholds (e.g., SFF ranges from IEC 61508 Tables 2/3), but the specific implementation choices (error handling, default values, edge cases) reflect company engineering decisions.

---

### Pattern 27: `=IF(X_N=0,"-",X_N/SUM($X_N:$X_N))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AA2` |
| **Formula** | `=IF(X2=0,"-",X2/SUM($X$2:$X$7))` |
| **Column Header** | Failure Rate Distribution (Dangerous Undetected) transient |
| **Computed Value** | - |
| **Occurrences** | 6 cells |
| **Applied Range** | `AA2`, `AA3`, `AA4`, `AA5`, `AA6`, `AA7` |

**Cross-References**: `X2`, `X2`, `$X$2:$X$7`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid (Standard Framework + Company Implementation)**: The conditional logic implements standard-defined thresholds (e.g., SFF ranges from IEC 61508 Tables 2/3), but the specific implementation choices (error handling, default values, edge cases) reflect company engineering decisions.

---

### Pattern 28: `=IF(Y_N=0,"-",Y_N/SUM($Y_N:$Y_N))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AB2` |
| **Formula** | `=IF(Y2=0,"-",Y2/SUM($Y$2:$Y$7))` |
| **Column Header** | Failure Rate Distribution (Dangerous Undetected) permanent and transient |
| **Computed Value** | - |
| **Occurrences** | 6 cells |
| **Applied Range** | `AB2`, `AB3`, `AB4`, `AB5`, `AB6`, `AB7` |

**Cross-References**: `Y2`, `Y2`, `$Y$2:$Y$7`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid (Standard Framework + Company Implementation)**: The conditional logic implements standard-defined thresholds (e.g., SFF ranges from IEC 61508 Tables 2/3), but the specific implementation choices (error handling, default values, edge cases) reflect company engineering decisions.

---

### Pattern 29: `=IF(E_N=0,"-",IF(N_N+Q_N=0,"Not calculated",(N_N+T_N)/(N_N+Q_N)))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AC2` |
| **Formula** | `=IF(E2=0,"-",IF(N2+Q2=0,"Not calculated",(N2+T2)/(N2+Q2)))` |
| **Column Header** | SFF 
rough calculation permanent |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 7 cells |
| **Applied Range** | `AC2`, `AC3`, `AC4`, `AC5`, `AC6`, `AC7`, `AC9` |

**Cross-References**: `E2`, `N2`, `Q2`, `N2`, `T2`, `N2`, `Q2`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

The **Safe Failure Fraction (SFF)** represents the proportion of failures that are either safe (do not lead to a hazardous condition) or are detected by diagnostic mechanisms. SFF = (λ_S + λ_DD) / λ_total. For ASIC blocks, a high SFF indicates that most failure modes either fail-safe or are caught by built-in self-test (BIST), ECC, or parity checks. IEC 61508 Table 2/3 maps SFF + HFT to maximum achievable SIL.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC 61508-2:2010**, Section 7.4.3.1.2: Safe Failure Fraction definition

#### Company Estimate vs Standard-Based

**Standard-Based Formula**: The SFF calculation follows the exact definition in IEC 61508-2 Section 7.4.3.1.2. The formula structure (safe + detected dangerous) / total is prescribed by the standard. However, the **classification of failure modes** into safe/dangerous categories involves engineering judgment specific to the ASIC design.

---

### Pattern 30: `=IF(F_N=0,"-",IF(O_N+R_N=0,"Not calculated",(O_N+U_N)/(O_N+R_N)))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AD2` |
| **Formula** | `=IF(F2=0,"-",IF(O2+R2=0,"Not calculated",(O2+U2)/(O2+R2)))` |
| **Column Header** | SFF 
rough calculation transient |
| **Computed Value** | #VALUE! |
| **Occurrences** | 7 cells |
| **Applied Range** | `AD2`, `AD3`, `AD4`, `AD5`, `AD6`, `AD7`, `AD9` |

**Cross-References**: `F2`, `O2`, `R2`, `O2`, `U2`, `O2`, `R2`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

The **Safe Failure Fraction (SFF)** represents the proportion of failures that are either safe (do not lead to a hazardous condition) or are detected by diagnostic mechanisms. SFF = (λ_S + λ_DD) / λ_total. For ASIC blocks, a high SFF indicates that most failure modes either fail-safe or are caught by built-in self-test (BIST), ECC, or parity checks. IEC 61508 Table 2/3 maps SFF + HFT to maximum achievable SIL.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC 61508-2:2010**, Section 7.4.3.1.2: Safe Failure Fraction definition

#### Company Estimate vs Standard-Based

**Standard-Based Formula**: The SFF calculation follows the exact definition in IEC 61508-2 Section 7.4.3.1.2. The formula structure (safe + detected dangerous) / total is prescribed by the standard. However, the **classification of failure modes** into safe/dangerous categories involves engineering judgment specific to the ASIC design.

---

### Pattern 31: `=IF(G_N=0,"-",IF(P_N+S_N=0,"Not calculated",(P_N+V_N)/(P_N+S_N)))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AE2` |
| **Formula** | `=IF(G2=0,"-",IF(P2+S2=0,"Not calculated",(P2+V2)/(P2+S2)))` |
| **Column Header** | SFF 
rough calculation 
permanent and
transient |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 7 cells |
| **Applied Range** | `AE2`, `AE3`, `AE4`, `AE5`, `AE6`, `AE7`, `AE9` |

**Cross-References**: `G2`, `P2`, `S2`, `P2`, `V2`, `P2`, `S2`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

The **Safe Failure Fraction (SFF)** represents the proportion of failures that are either safe (do not lead to a hazardous condition) or are detected by diagnostic mechanisms. SFF = (λ_S + λ_DD) / λ_total. For ASIC blocks, a high SFF indicates that most failure modes either fail-safe or are caught by built-in self-test (BIST), ECC, or parity checks. IEC 61508 Table 2/3 maps SFF + HFT to maximum achievable SIL.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC 61508-2:2010**, Section 7.4.3.1.2: Safe Failure Fraction definition

#### Company Estimate vs Standard-Based

**Standard-Based Formula**: The SFF calculation follows the exact definition in IEC 61508-2 Section 7.4.3.1.2. The formula structure (safe + detected dangerous) / total is prescribed by the standard. However, the **classification of failure modes** into safe/dangerous categories involves engineering judgment specific to the ASIC design.

---

### Pattern 32: `=FMEDA!HX_N+SafetyGoalViolations!F_N*FMEDA!HY_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AF2` |
| **Formula** | `=FMEDA!HX2+SafetyGoalViolations!F37*FMEDA!HY2` |
| **Column Header** | PFH 
rough calculation permanent |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AF2` |

**Cross-References**: `FMEDA!HX2`, `SafetyGoalViolations!F37`, `FMEDA!HY2`

#### Calculation Logic

This formula retrieves the value from cell `HX2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 33: `=FMEDA!JH_N+SafetyGoalViolations!F_N*FMEDA!JI_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AG2` |
| **Formula** | `=FMEDA!JH2+SafetyGoalViolations!F39*FMEDA!JI2` |
| **Column Header** | PFH 
rough calculation transient |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AG2` |

**Cross-References**: `FMEDA!JH2`, `SafetyGoalViolations!F39`, `FMEDA!JI2`

#### Calculation Logic

This formula retrieves the value from cell `JH2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 34: `=AF_N+AG_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AH2` |
| **Formula** | `=AF2+AG2` |
| **Column Header** | PFH
rough calculation
permanent and
transient |
| **Computed Value** | 0 |
| **Occurrences** | 6 cells |
| **Applied Range** | `AH2`, `AH3`, `AH4`, `AH5`, `AH6`, `AH7` |

**Cross-References**: `AF2`, `AG2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 35: `=FMEDA!IC_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `N3` |
| **Formula** | `=FMEDA!IC2` |
| **Column Header** | Failure Rate (Safe)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `N3` |

**Cross-References**: `FMEDA!IC2`

#### Calculation Logic

This formula retrieves the value from cell `IC2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 36: `=FMEDA!JM_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `O3` |
| **Formula** | `=FMEDA!JM2` |
| **Column Header** | Failure Rate (Safe)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `O3` |

**Cross-References**: `FMEDA!JM2`

#### Calculation Logic

This formula retrieves the value from cell `JM2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 37: `=FMEDA!ID_N+SafetyGoalViolations!F_N*FMEDA!IE_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AF3` |
| **Formula** | `=FMEDA!ID2+SafetyGoalViolations!F37*FMEDA!IE2` |
| **Column Header** | PFH 
rough calculation permanent |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AF3` |

**Cross-References**: `FMEDA!ID2`, `SafetyGoalViolations!F37`, `FMEDA!IE2`

#### Calculation Logic

This formula retrieves the value from cell `ID2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 38: `=FMEDA!JN_N+SafetyGoalViolations!F_N*FMEDA!JO_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AG3` |
| **Formula** | `=FMEDA!JN2+SafetyGoalViolations!F39*FMEDA!JO2` |
| **Column Header** | PFH 
rough calculation transient |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AG3` |

**Cross-References**: `FMEDA!JN2`, `SafetyGoalViolations!F39`, `FMEDA!JO2`

#### Calculation Logic

This formula retrieves the value from cell `JN2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 39: `=FMEDA!II_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `N4` |
| **Formula** | `=FMEDA!II2` |
| **Column Header** | Failure Rate (Safe)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `N4` |

**Cross-References**: `FMEDA!II2`

#### Calculation Logic

This formula retrieves the value from cell `II2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 40: `=FMEDA!JS_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `O4` |
| **Formula** | `=FMEDA!JS2` |
| **Column Header** | Failure Rate (Safe)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `O4` |

**Cross-References**: `FMEDA!JS2`

#### Calculation Logic

This formula retrieves the value from cell `JS2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 41: `=FMEDA!IJ_N+SafetyGoalViolations!F_N*FMEDA!IK_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AF4` |
| **Formula** | `=FMEDA!IJ2+SafetyGoalViolations!F37*FMEDA!IK2` |
| **Column Header** | PFH 
rough calculation permanent |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AF4` |

**Cross-References**: `FMEDA!IJ2`, `SafetyGoalViolations!F37`, `FMEDA!IK2`

#### Calculation Logic

This formula retrieves the value from cell `IJ2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 42: `=FMEDA!JT_N+SafetyGoalViolations!F_N*FMEDA!JU_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AG4` |
| **Formula** | `=FMEDA!JT2+SafetyGoalViolations!F39*FMEDA!JU2` |
| **Column Header** | PFH 
rough calculation transient |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AG4` |

**Cross-References**: `FMEDA!JT2`, `SafetyGoalViolations!F39`, `FMEDA!JU2`

#### Calculation Logic

This formula retrieves the value from cell `JT2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 43: `=FMEDA!IO_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `N5` |
| **Formula** | `=FMEDA!IO2` |
| **Column Header** | Failure Rate (Safe)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `N5` |

**Cross-References**: `FMEDA!IO2`

#### Calculation Logic

This formula retrieves the value from cell `IO2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 44: `=FMEDA!JY_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `O5` |
| **Formula** | `=FMEDA!JY2` |
| **Column Header** | Failure Rate (Safe)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `O5` |

**Cross-References**: `FMEDA!JY2`

#### Calculation Logic

This formula retrieves the value from cell `JY2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 45: `=FMEDA!IP_N+SafetyGoalViolations!F_N*FMEDA!IQ_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AF5` |
| **Formula** | `=FMEDA!IP2+SafetyGoalViolations!F37*FMEDA!IQ2` |
| **Column Header** | PFH 
rough calculation permanent |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AF5` |

**Cross-References**: `FMEDA!IP2`, `SafetyGoalViolations!F37`, `FMEDA!IQ2`

#### Calculation Logic

This formula retrieves the value from cell `IP2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 46: `=FMEDA!JZ_N+SafetyGoalViolations!F_N*FMEDA!KA_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AG5` |
| **Formula** | `=FMEDA!JZ2+SafetyGoalViolations!F39*FMEDA!KA2` |
| **Column Header** | PFH 
rough calculation transient |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AG5` |

**Cross-References**: `FMEDA!JZ2`, `SafetyGoalViolations!F39`, `FMEDA!KA2`

#### Calculation Logic

This formula retrieves the value from cell `JZ2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 47: `=FMEDA!IU_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `N6` |
| **Formula** | `=FMEDA!IU2` |
| **Column Header** | Failure Rate (Safe)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `N6` |

**Cross-References**: `FMEDA!IU2`

#### Calculation Logic

This formula retrieves the value from cell `IU2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 48: `=FMEDA!KE_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `O6` |
| **Formula** | `=FMEDA!KE2` |
| **Column Header** | Failure Rate (Safe)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `O6` |

**Cross-References**: `FMEDA!KE2`

#### Calculation Logic

This formula retrieves the value from cell `KE2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 49: `=FMEDA!IV_N+SafetyGoalViolations!F_N*FMEDA!IW_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AF6` |
| **Formula** | `=FMEDA!IV2+SafetyGoalViolations!F37*FMEDA!IW2` |
| **Column Header** | PFH 
rough calculation permanent |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AF6` |

**Cross-References**: `FMEDA!IV2`, `SafetyGoalViolations!F37`, `FMEDA!IW2`

#### Calculation Logic

This formula retrieves the value from cell `IV2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 50: `=FMEDA!KF_N+SafetyGoalViolations!F_N*FMEDA!KG_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AG6` |
| **Formula** | `=FMEDA!KF2+SafetyGoalViolations!F39*FMEDA!KG2` |
| **Column Header** | PFH 
rough calculation transient |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AG6` |

**Cross-References**: `FMEDA!KF2`, `SafetyGoalViolations!F39`, `FMEDA!KG2`

#### Calculation Logic

This formula retrieves the value from cell `KF2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 51: `=FMEDA!JA_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `N7` |
| **Formula** | `=FMEDA!JA2` |
| **Column Header** | Failure Rate (Safe)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `N7` |

**Cross-References**: `FMEDA!JA2`

#### Calculation Logic

This formula retrieves the value from cell `JA2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 52: `=FMEDA!KK_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `O7` |
| **Formula** | `=FMEDA!KK2` |
| **Column Header** | Failure Rate (Safe)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `O7` |

**Cross-References**: `FMEDA!KK2`

#### Calculation Logic

This formula retrieves the value from cell `KK2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 53: `=FMEDA!JB_N+SafetyGoalViolations!F_N*FMEDA!JC_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AF7` |
| **Formula** | `=FMEDA!JB2+SafetyGoalViolations!F37*FMEDA!JC2` |
| **Column Header** | PFH 
rough calculation permanent |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AF7` |

**Cross-References**: `FMEDA!JB2`, `SafetyGoalViolations!F37`, `FMEDA!JC2`

#### Calculation Logic

This formula retrieves the value from cell `JB2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 54: `=FMEDA!KL_N+SafetyGoalViolations!F_N*FMEDA!KM_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AG7` |
| **Formula** | `=FMEDA!KL2+SafetyGoalViolations!F39*FMEDA!KM2` |
| **Column Header** | PFH 
rough calculation transient |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `AG7` |

**Cross-References**: `FMEDA!KL2`, `SafetyGoalViolations!F39`, `FMEDA!KM2`

#### Calculation Logic

This formula retrieves the value from cell `KL2+SafetyGoalViolations` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 55: `=SUM(BlockList!$C_N:$C_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `B9` |
| **Formula** | `=SUM(BlockList!$C$2:$C$7)` |
| **Column Header** | Initial / Total Failure Rate
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `B9` |

**Cross-References**: `BlockList!$C$2:$C$7`

#### Calculation Logic

This formula retrieves the value from cell `$C$2:$C$7)` in the `SUM(BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 56: `=SUM(BlockList!$L_N:$L_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `C9` |
| **Formula** | `=SUM(BlockList!$L$2:$L$7)` |
| **Column Header** | Initial / Total Failure Rate
transient
[FIT] |
| **Computed Value** | #VALUE! |
| **Occurrences** | 1 cells |
| **Applied Range** | `C9` |

**Cross-References**: `BlockList!$L$2:$L$7`

#### Calculation Logic

This formula retrieves the value from cell `$L$2:$L$7)` in the `SUM(BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 57: `=BlockList!$D_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `E9` |
| **Formula** | `=BlockList!$D$2` |
| **Column Header** | Safety related Failure Rate
permanent
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 1 cells |
| **Applied Range** | `E9` |

**Cross-References**: `BlockList!$D$2`

#### Calculation Logic

This formula retrieves the value from cell `$D$2` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 58: `=BlockList!$M_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `F9` |
| **Formula** | `=BlockList!$M$2` |
| **Column Header** | Safety related Failure Rate
transient
[FIT] |
| **Computed Value** | #VALUE! |
| **Occurrences** | 1 cells |
| **Applied Range** | `F9` |

**Cross-References**: `BlockList!$M$2`

#### Calculation Logic

This formula retrieves the value from cell `$M$2` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 59: `=FMEDA!HB_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `N9` |
| **Formula** | `=FMEDA!HB2` |
| **Column Header** | Failure Rate (Safe)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `N9` |

**Cross-References**: `FMEDA!HB2`

#### Calculation Logic

This formula retrieves the value from cell `HB2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 60: `=FMEDA!HM_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `O9` |
| **Formula** | `=FMEDA!HM2` |
| **Column Header** | Failure Rate (Safe)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `O9` |

**Cross-References**: `FMEDA!HM2`

#### Calculation Logic

This formula retrieves the value from cell `HM2` in the `FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 61: `=SUM(Q_N:Q_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `Q9` |
| **Formula** | `=SUM(Q2:Q7)` |
| **Column Header** | Failure Rate (Dangerous)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `Q9` |

**Cross-References**: `Q2:Q7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 62: `=SUM(R_N:R_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `R9` |
| **Formula** | `=SUM(R2:R7)` |
| **Column Header** | Failure Rate (Dangerous)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `R9` |

**Cross-References**: `R2:R7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 63: `=SUM(T_N:T_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `T9` |
| **Formula** | `=SUM(T2:T7)` |
| **Column Header** | Failure Rate (Dangerous Detected)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `T9` |

**Cross-References**: `T2:T7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 64: `=SUM(U_N:U_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `U9` |
| **Formula** | `=SUM(U2:U7)` |
| **Column Header** | Failure Rate (Dangerous Detected)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `U9` |

**Cross-References**: `U2:U7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 65: `=SUM(V_N:V_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `V9` |
| **Formula** | `=SUM(V2:V7)` |
| **Column Header** | Failure Rate (Dangerous Detected) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `V9` |

**Cross-References**: `V2:V7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 66: `=SUM(W_N:W_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `W9` |
| **Formula** | `=SUM(W2:W7)` |
| **Column Header** | Failure Rate (Dangerous Undetected)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `W9` |

**Cross-References**: `W2:W7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 67: `=SUM(X_N:X_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `X9` |
| **Formula** | `=SUM(X2:X7)` |
| **Column Header** | Failure Rate (Dangerous Undetected)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `X9` |

**Cross-References**: `X2:X7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 68: `=SUM(Y_N:Y_N)`

| Property | Value |
|----------|-------|
| **Representative Cell** | `Y9` |
| **Formula** | `=SUM(Y2:Y7)` |
| **Column Header** | Failure Rate (Dangerous Undetected) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 1 cells |
| **Applied Range** | `Y9` |

**Cross-References**: `Y2:Y7`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 69: `=SafetyGoalViolations!D_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AF9` |
| **Formula** | `=SafetyGoalViolations!D52` |
| **Column Header** | PFH 
rough calculation permanent |
| **Computed Value** | 0 |
| **Occurrences** | 3 cells |
| **Applied Range** | `AF9`, `AG9`, `AH9` |

**Cross-References**: `SafetyGoalViolations!D52`

#### Calculation Logic

This formula retrieves the value from cell `D52` in the `SafetyGoalViolations` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Section 7.4.4.2: Route 2H - reliability targets
- **IEC 61508-2:2010**, Table 4: Target failure measures for safety functions

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total unique formula patterns | 69 |
| Total formula cells | 231 |
| Cross-sheet references | 44 |
| Intra-sheet references | 25 |

### Formula Categories

| Category | Count |
|----------|-------|
| Cross Sheet Lookup | 44 |
| Arithmetic | 28 |
| Conditional | 8 |
| Aggregation | 13 |
| Text | 0 |
