# FMEDA Per-Sheet Formula Analysis: BlockEval-IEC61508_opt1

> **Report**: FMEDA
> **Sheet**: BlockEval-IEC61508_opt1
> **Unique Formula Patterns**: 36
> **Total Formula Cells**: 7200
> **Analysis Date**: 2026-02-27

---

## Sheet Context

This sheet implements **IEC 61508 Option 1** safety metric calculations at the **block level**. Option 1 (Route 1H) uses hardware fault tolerance (HFT) and safe failure fraction (SFF) to determine the maximum achievable Safety Integrity Level (SIL). Under this option, the SFF is calculated as:

```
SFF = (λ_safe + λ_dangerous_detected) / λ_total
```

This is contrasted with Option 2 (Route 2H) which uses probabilistic failure rate targets (PFH).

---

## Formula Analysis (36 Unique Patterns)

### Pattern 1: `=BlockList!A_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `A2` |
| **Formula** | `=BlockList!A10` |
| **Column Header** | No. |
| **Computed Value** | 1 |
| **Occurrences** | 200 cells |
| **Applied Range** | `A2`, `A3`, `A4`, `A5`, `A6`, `A7`, `A8`, `A9`, `A10`, `A11` |

**Cross-References**: `BlockList!A10`

#### Calculation Logic

This formula retrieves the value from cell `A10` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Block/component index number for systematic tracking across all evaluation sheets. Ensures traceability from block definition through failure rate calculation to final safety metric evaluation.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 2: `=BlockList!B_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `B2` |
| **Formula** | `=BlockList!B10` |
| **Column Header** | Block / Subblock name

Calculation according to IEC 61508 assumed that SPFs and  |
| **Computed Value** | - |
| **Occurrences** | 200 cells |
| **Applied Range** | `B2`, `B3`, `B4`, `B5`, `B6`, `B7`, `B8`, `B9`, `B10`, `B11` |

**Cross-References**: `BlockList!B10`

#### Calculation Logic

This formula retrieves the value from cell `B10` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Identifies the functional block or component type within the ASIC/SSD Controller. Each block represents a distinct functional unit (e.g., SRAM, Flash controller, PCIe interface) whose failure behavior must be independently characterized for safety analysis.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **ISO 26262-5:2018**, Table D.3: Diagnostic coverage of safety mechanisms
- **IEC 61508-2:2010**, Section 7.4.3.1.3: Diagnostic coverage requirements

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 3: `=BlockList!C_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `C2` |
| **Formula** | `=BlockList!C10` |
| **Column Header** | Block / Component Type
(Block Group) |
| **Computed Value** | - |
| **Occurrences** | 200 cells |
| **Applied Range** | `C2`, `C3`, `C4`, `C5`, `C6`, `C7`, `C8`, `C9`, `C10`, `C11` |

**Cross-References**: `BlockList!C10`

#### Calculation Logic

This formula retrieves the value from cell `C10` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Identifies the functional block or component type within the ASIC/SSD Controller. Each block represents a distinct functional unit (e.g., SRAM, Flash controller, PCIe interface) whose failure behavior must be independently characterized for safety analysis.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 4: `=IF(BlockList!L_N=0,0,IF(BlockList!P_N="",0,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$C_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$C_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$C_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$C_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$C_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$C_N,0))))))*IF(BlockList!$R_N="Area",BlockList!$M_N/IF(BlockList!$R_N=BlockList!$B_N,BlockList!$F_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$F_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$F_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$F_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$F_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$F_N,0)))))),BlockList!$L_N/IF(BlockList!$R_N=BlockList!$B_N,BlockList!$E_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$E_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$E_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$E_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$E_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$E_N,0)))))))))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `D2` |
| **Formula** | `=IF(BlockList!L10=0,0,IF(BlockList!P10="",0,IF(BlockList!$R10=BlockList!$B$2,BlockList!$C$2,IF(BlockList!$R10=BlockList!$B$3,BlockList!$C$3,IF(BlockList!$R10=BlockList!$B$4,BlockList!$C$4,IF(BlockList!$R10=BlockList!$B$5,BlockList!$C$5,IF(BlockList!$R10=BlockList!$B$6,BlockList!$C$6,IF(BlockList!$R10=BlockList!$B$7,BlockList!$C$7,0))))))*IF(BlockList!$R$2="Area",BlockList!$M10/IF(BlockList!$R10=BlockList!$B$2,BlockList!$F$2,IF(BlockList!$R10=BlockList!$B$3,BlockList!$F$3,IF(BlockList!$R10=BlockList!$B$4,BlockList!$F$4,IF(BlockList!$R10=BlockList!$B$5,BlockList!$F$5,IF(BlockList!$R10=BlockList!$B$6,BlockList!$F$6,IF(BlockList!$R10=BlockList!$B$7,BlockList!$F$7,0)))))),BlockList!$L10/IF(BlockList!$R10=BlockList!$B$2,BlockList!$E$2,IF(BlockList!$R10=BlockList!$B$3,BlockList!$E$3,IF(BlockList!$R10=BlockList!$B$4,BlockList!$E$4,IF(BlockList!$R10=BlockList!$B$5,BlockList!$E$5,IF(BlockList!$R10=BlockList!$B$6,BlockList!$E$6,IF(BlockList!$R10=BlockList!$B$7,BlockList!$E$7,0)))))))))` |
| **Column Header** | Initial / Total Failure Rate
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `D2`, `D3`, `D4`, `D5`, `D6`, `D7`, `D8`, `D9`, `D10`, `D11` |

**Cross-References**: `BlockList!L10`, `BlockList!P10`, `BlockList!$R10`, `BlockList!$B$2`, `BlockList!$C$2`, `BlockList!$R10`, `BlockList!$B$3`, `BlockList!$C$3`, `BlockList!$R10`, `BlockList!$B$4`, `BlockList!$C$4`, `BlockList!$R10`, `BlockList!$B$5`, `BlockList!$C$5`, `BlockList!$R10`, `BlockList!$B$6`, `BlockList!$C$6`, `BlockList!$R10`, `BlockList!$B$7`, `BlockList!$C$7`, `BlockList!$R$2`, `BlockList!$M10`, `BlockList!$R10`, `BlockList!$B$2`, `BlockList!$F$2`, `BlockList!$R10`, `BlockList!$B$3`, `BlockList!$F$3`, `BlockList!$R10`, `BlockList!$B$4`, `BlockList!$F$4`, `BlockList!$R10`, `BlockList!$B$5`, `BlockList!$F$5`, `BlockList!$R10`, `BlockList!$B$6`, `BlockList!$F$6`, `BlockList!$R10`, `BlockList!$B$7`, `BlockList!$F$7`, `BlockList!$L10`, `BlockList!$R10`, `BlockList!$B$2`, `BlockList!$E$2`, `BlockList!$R10`, `BlockList!$B$3`, `BlockList!$E$3`, `BlockList!$R10`, `BlockList!$B$4`, `BlockList!$E$4`, `BlockList!$R10`, `BlockList!$B$5`, `BlockList!$E$5`, `BlockList!$R10`, `BlockList!$B$6`, `BlockList!$E$6`, `BlockList!$R10`, `BlockList!$B$7`, `BlockList!$E$7`

#### Calculation Logic

This formula retrieves the value from cell `L10=0,0,IF(BlockList` in the `IF(BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid (Standard Framework + Company Implementation)**: The conditional logic implements standard-defined thresholds (e.g., SFF ranges from IEC 61508 Tables 2/3), but the specific implementation choices (error handling, default values, edge cases) reflect company engineering decisions.

---

### Pattern 5: `=IF(BlockList!N_N=0,0,IF(BlockList!R_N="",0,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$L_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$L_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$L_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$L_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$L_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$L_N,0))))))*BlockList!$N_N/IF(BlockList!$R_N=BlockList!$B_N,BlockList!$N_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$N_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$N_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$N_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$N_N,IF(BlockList!$R_N=BlockList!$B_N,BlockList!$N_N,0))))))))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `E2` |
| **Formula** | `=IF(BlockList!N10=0,0,IF(BlockList!R10="",0,IF(BlockList!$R10=BlockList!$B$2,BlockList!$L$2,IF(BlockList!$R10=BlockList!$B$3,BlockList!$L$3,IF(BlockList!$R10=BlockList!$B$4,BlockList!$L$4,IF(BlockList!$R10=BlockList!$B$5,BlockList!$L$5,IF(BlockList!$R10=BlockList!$B$6,BlockList!$L$6,IF(BlockList!$R10=BlockList!$B$7,BlockList!$L$7,0))))))*BlockList!$N10/IF(BlockList!$R10=BlockList!$B$2,BlockList!$N$2,IF(BlockList!$R10=BlockList!$B$3,BlockList!$N$3,IF(BlockList!$R10=BlockList!$B$4,BlockList!$N$4,IF(BlockList!$R10=BlockList!$B$5,BlockList!$N$5,IF(BlockList!$R10=BlockList!$B$6,BlockList!$N$6,IF(BlockList!$R10=BlockList!$B$7,BlockList!$N$7,0))))))))` |
| **Column Header** | Initial / Total Failure Rate
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `E2`, `E3`, `E4`, `E5`, `E6`, `E7`, `E8`, `E9`, `E10`, `E11` |

**Cross-References**: `BlockList!N10`, `BlockList!R10`, `BlockList!$R10`, `BlockList!$B$2`, `BlockList!$L$2`, `BlockList!$R10`, `BlockList!$B$3`, `BlockList!$L$3`, `BlockList!$R10`, `BlockList!$B$4`, `BlockList!$L$4`, `BlockList!$R10`, `BlockList!$B$5`, `BlockList!$L$5`, `BlockList!$R10`, `BlockList!$B$6`, `BlockList!$L$6`, `BlockList!$R10`, `BlockList!$B$7`, `BlockList!$L$7`, `BlockList!$N10`, `BlockList!$R10`, `BlockList!$B$2`, `BlockList!$N$2`, `BlockList!$R10`, `BlockList!$B$3`, `BlockList!$N$3`, `BlockList!$R10`, `BlockList!$B$4`, `BlockList!$N$4`, `BlockList!$R10`, `BlockList!$B$5`, `BlockList!$N$5`, `BlockList!$R10`, `BlockList!$B$6`, `BlockList!$N$6`, `BlockList!$R10`, `BlockList!$B$7`, `BlockList!$N$7`

#### Calculation Logic

This formula retrieves the value from cell `N10=0,0,IF(BlockList` in the `IF(BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid (Standard Framework + Company Implementation)**: The conditional logic implements standard-defined thresholds (e.g., SFF ranges from IEC 61508 Tables 2/3), but the specific implementation choices (error handling, default values, edge cases) reflect company engineering decisions.

---

### Pattern 6: `=D_N+E_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `F2` |
| **Formula** | `=D2+E2` |
| **Column Header** | Initial / Total Failure Rate permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `F2`, `F3`, `F4`, `F5`, `F6`, `F7`, `F8`, `F9`, `F10`, `F11` |

**Cross-References**: `D2`, `E2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 7: `=BlockList!F_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `G2` |
| **Formula** | `=BlockList!F10` |
| **Column Header** | Safety related Failure Rate
permanent
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 200 cells |
| **Applied Range** | `G2`, `G3`, `G4`, `G5`, `G6`, `G7`, `G8`, `G9`, `G10`, `G11` |

**Cross-References**: `BlockList!F10`

#### Calculation Logic

This formula retrieves the value from cell `F10` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 8: `=BlockList!G_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `H2` |
| **Formula** | `=BlockList!G10` |
| **Column Header** | Safety related Failure Rate
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `H2`, `H3`, `H4`, `H5`, `H6`, `H7`, `H8`, `H9`, `H10`, `H11` |

**Cross-References**: `BlockList!G10`

#### Calculation Logic

This formula retrieves the value from cell `G10` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 9: `=G_N+H_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `I2` |
| **Formula** | `=G2+H2` |
| **Column Header** | Safety related Failure Rate permanent and
transient
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 200 cells |
| **Applied Range** | `I2`, `I3`, `I4`, `I5`, `I6`, `I7`, `I8`, `I9`, `I10`, `I11` |

**Cross-References**: `G2`, `H2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 10: `=D_N-G_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `J2` |
| **Formula** | `=D2-G2` |
| **Column Header** | Not safety related Failure Rate
permanent
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 200 cells |
| **Applied Range** | `J2`, `J3`, `J4`, `J5`, `J6`, `J7`, `J8`, `J9`, `J10`, `J11` |

**Cross-References**: `D2`, `G2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 11: `=E_N-H_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `K2` |
| **Formula** | `=E2-H2` |
| **Column Header** | Not safety related Failure Rate
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `K2`, `K3`, `K4`, `K5`, `K6`, `K7`, `K8`, `K9`, `K10`, `K11` |

**Cross-References**: `E2`, `H2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 12: `=J_N+K_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `L2` |
| **Formula** | `=J2+K2` |
| **Column Header** | Not safety related Failure Rate permanent and
transient
[FIT] |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 200 cells |
| **Applied Range** | `L2`, `L3`, `L4`, `L5`, `L6`, `L7`, `L8`, `L9`, `L10`, `L11` |

**Cross-References**: `J2`, `K2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 13: `=BlockList!I_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `M2` |
| **Formula** | `=BlockList!I10` |
| **Column Header** | Safety related Failure Rate Distribution
permanent |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 200 cells |
| **Applied Range** | `M2`, `M3`, `M4`, `M5`, `M6`, `M7`, `M8`, `M9`, `M10`, `M11` |

**Cross-References**: `BlockList!I10`

#### Calculation Logic

This formula retrieves the value from cell `I10` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 14: `=BlockList!J_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `N2` |
| **Formula** | `=BlockList!J10` |
| **Column Header** | Safety related Failure Rate Distribution
transient |
| **Computed Value** | #VALUE! |
| **Occurrences** | 200 cells |
| **Applied Range** | `N2`, `N3`, `N4`, `N5`, `N6`, `N7`, `N8`, `N9`, `N10`, `N11` |

**Cross-References**: `BlockList!J10`

#### Calculation Logic

This formula retrieves the value from cell `J10` in the `BlockList` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 15: `=(G_N+H_N)/(SUM($G_N:$G_N)+SUM($H_N:$H_N))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `O2` |
| **Formula** | `=(G2+H2)/(SUM($G$2:$G$201)+SUM($H$2:$H$201))` |
| **Column Header** | Safety related Failure Rate Distribution permanent and
transient |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 200 cells |
| **Applied Range** | `O2`, `O3`, `O4`, `O5`, `O6`, `O7`, `O8`, `O9`, `O10`, `O11` |

**Cross-References**: `G2`, `H2`, `$G$2:$G$201`, `$H$2:$H$201`

#### Calculation Logic

This **aggregation formula** sums failure rate contributions across multiple failure modes or components. In IEC 61508 evaluation, summation of failure rates is fundamental: the total failure rate of a block/system is the sum of individual failure mode rates (assuming statistical independence).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Standard-Based Aggregation**: Summation of failure rates follows the fundamental reliability engineering principle that failure rates of independent components are additive (per IEC 61508 and ISO 26262). The company determines the scope of summation (which blocks/modes to include).

---

### Pattern 16: `=BlockEvaluation!P_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `P2` |
| **Formula** | `=BlockEvaluation!P2` |
| **Column Header** | Failure Rate (Safe)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `P2`, `P3`, `P4`, `P5`, `P6`, `P7`, `P8`, `P9`, `P10`, `P11` |

**Cross-References**: `BlockEvaluation!P2`

#### Calculation Logic

This formula retrieves the value from cell `P2` in the `BlockEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 17: `=BlockEvaluation!Q_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `Q2` |
| **Formula** | `=BlockEvaluation!Q2` |
| **Column Header** | Failure Rate (Safe)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `Q2`, `Q3`, `Q4`, `Q5`, `Q6`, `Q7`, `Q8`, `Q9`, `Q10`, `Q11` |

**Cross-References**: `BlockEvaluation!Q2`

#### Calculation Logic

This formula retrieves the value from cell `Q2` in the `BlockEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 18: `=P_N+Q_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `R2` |
| **Formula** | `=P2+Q2` |
| **Column Header** | Failure Rate (Safe) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `R2`, `R3`, `R4`, `R5`, `R6`, `R7`, `R8`, `R9`, `R10`, `R11` |

**Cross-References**: `P2`, `Q2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 19: `=BlockEvaluation!V_N+BlockEvaluation!AK_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `S2` |
| **Formula** | `=BlockEvaluation!V2+BlockEvaluation!AK2` |
| **Column Header** | Failure Rate (Dangerous)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `S2`, `S3`, `S4`, `S5`, `S6`, `S7`, `S8`, `S9`, `S10`, `S11` |

**Cross-References**: `BlockEvaluation!V2`, `BlockEvaluation!AK2`

#### Calculation Logic

This formula retrieves the value from cell `V2+BlockEvaluation` in the `BlockEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 20: `=BlockEvaluation!W_N+BlockEvaluation!AL_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `T2` |
| **Formula** | `=BlockEvaluation!W2+BlockEvaluation!AL2` |
| **Column Header** | Failure Rate (Dangerous)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`, `T11` |

**Cross-References**: `BlockEvaluation!W2`, `BlockEvaluation!AL2`

#### Calculation Logic

This formula retrieves the value from cell `W2+BlockEvaluation` in the `BlockEvaluation` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Data Pipeline (Standard-Based)**: This formula simply retrieves values calculated elsewhere. The underlying calculation methodology follows IEC 61508 / ISO 26262 standards. The company's contribution is in determining which blocks to evaluate and how to partition the ASIC architecture.

---

### Pattern 21: `=S_N+T_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `U2` |
| **Formula** | `=S2+T2` |
| **Column Header** | Failure Rate (Dangerous) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `U2`, `U3`, `U4`, `U5`, `U6`, `U7`, `U8`, `U9`, `U10`, `U11` |

**Cross-References**: `S2`, `T2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 22: `=S_N-Y_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `V2` |
| **Formula** | `=S2-Y2` |
| **Column Header** | Failure Rate (Dangerous Detected)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `V2`, `V3`, `V4`, `V5`, `V6`, `V7`, `V8`, `V9`, `V10`, `V11` |

**Cross-References**: `S2`, `Y2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 23: `=T_N-Z_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `W2` |
| **Formula** | `=T2-Z2` |
| **Column Header** | Failure Rate (Dangerous Detected)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `W2`, `W3`, `W4`, `W5`, `W6`, `W7`, `W8`, `W9`, `W10`, `W11` |

**Cross-References**: `T2`, `Z2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 24: `=V_N+W_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `X2` |
| **Formula** | `=V2+W2` |
| **Column Header** | Failure Rate (Dangerous Detected) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `X2`, `X3`, `X4`, `X5`, `X6`, `X7`, `X8`, `X9`, `X10`, `X11` |

**Cross-References**: `V2`, `W2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 25: `=SUMIFS(FMEDA!LR_N:LR_N,FMEDA!$B_N:$B_N,$B_N)+BlockEvaluation!AE_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `Y2` |
| **Formula** | `=SUMIFS(FMEDA!LR$4:LR$1653,FMEDA!$B$4:$B$1653,$B2)+BlockEvaluation!AE2` |
| **Column Header** | Failure Rate (Dangerous Undetected)
permanent
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `Y2`, `Y3`, `Y4`, `Y5`, `Y6`, `Y7`, `Y8`, `Y9`, `Y10`, `Y11` |

**Cross-References**: `FMEDA!LR$4:LR$1653`, `FMEDA!$B$4:$B$1653`, `$B2`, `BlockEvaluation!AE2`

#### Calculation Logic

This formula retrieves the value from cell `LR$4:LR$1653,FMEDA` in the `SUMIFS(FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 26: `=SUMIFS(FMEDA!LS_N:LS_N,FMEDA!$B_N:$B_N,$B_N)+BlockEvaluation!AF_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `Z2` |
| **Formula** | `=SUMIFS(FMEDA!LS$4:LS$1653,FMEDA!$B$4:$B$1653,$B2)+BlockEvaluation!AF2` |
| **Column Header** | Failure Rate (Dangerous Undetected)
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `Z2`, `Z3`, `Z4`, `Z5`, `Z6`, `Z7`, `Z8`, `Z9`, `Z10`, `Z11` |

**Cross-References**: `FMEDA!LS$4:LS$1653`, `FMEDA!$B$4:$B$1653`, `$B2`, `BlockEvaluation!AF2`

#### Calculation Logic

This formula retrieves the value from cell `LS$4:LS$1653,FMEDA` in the `SUMIFS(FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 27: `=Y_N+Z_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AA2` |
| **Formula** | `=Y2+Z2` |
| **Column Header** | Failure Rate (Dangerous Undetected) permanent and
transient
[FIT] |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `AA2`, `AA3`, `AA4`, `AA5`, `AA6`, `AA7`, `AA8`, `AA9`, `AA10`, `AA11` |

**Cross-References**: `Y2`, `Z2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 28: `=IF(SUM($Y_N:$Y_N)=0,"-",Y_N/SUM($Y_N:$Y_N))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AB2` |
| **Formula** | `=IF(SUM($Y$2:$Y$201)=0,"-",Y2/SUM($Y$2:$Y$201))` |
| **Column Header** | Failure Rate Distribution (Dangerous Undetected)
permanent |
| **Computed Value** | - |
| **Occurrences** | 200 cells |
| **Applied Range** | `AB2`, `AB3`, `AB4`, `AB5`, `AB6`, `AB7`, `AB8`, `AB9`, `AB10`, `AB11` |

**Cross-References**: `$Y$2:$Y$201`, `Y2`, `$Y$2:$Y$201`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid (Standard Framework + Company Implementation)**: The conditional logic implements standard-defined thresholds (e.g., SFF ranges from IEC 61508 Tables 2/3), but the specific implementation choices (error handling, default values, edge cases) reflect company engineering decisions.

---

### Pattern 29: `=IF(SUM($Z_N:$Z_N)=0,"-",Z_N/SUM($Z_N:$Z_N))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AC2` |
| **Formula** | `=IF(SUM($Z$2:$Z$201)=0,"-",Z2/SUM($Z$2:$Z$201))` |
| **Column Header** | Failure Rate Distribution (Dangerous Undetected) transient |
| **Computed Value** | - |
| **Occurrences** | 200 cells |
| **Applied Range** | `AC2`, `AC3`, `AC4`, `AC5`, `AC6`, `AC7`, `AC8`, `AC9`, `AC10`, `AC11` |

**Cross-References**: `$Z$2:$Z$201`, `Z2`, `$Z$2:$Z$201`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid (Standard Framework + Company Implementation)**: The conditional logic implements standard-defined thresholds (e.g., SFF ranges from IEC 61508 Tables 2/3), but the specific implementation choices (error handling, default values, edge cases) reflect company engineering decisions.

---

### Pattern 30: `=IF(SUM($AA_N:$AA_N)=0,"-",AA_N/(SUM($AA_N:$AA_N)))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AD2` |
| **Formula** | `=IF(SUM($AA$2:$AA$201)=0,"-",AA2/(SUM($AA$2:$AA$201)))` |
| **Column Header** | Failure Rate Distribution (Dangerous Undetected) permanent and transient |
| **Computed Value** | - |
| **Occurrences** | 200 cells |
| **Applied Range** | `AD2`, `AD3`, `AD4`, `AD5`, `AD6`, `AD7`, `AD8`, `AD9`, `AD10`, `AD11` |

**Cross-References**: `$AA$2:$AA$201`, `AA2`, `$AA$2:$AA$201`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

Represents the **failure rate** in FIT (Failures In Time = failures per 10⁹ hours). For ASIC components, the base failure rate is typically derived from gate count: λ = λ₀ × (N_gates / 10⁶), where λ₀ comes from IEC TR 62380 Table 16. This is the fundamental input for all safety metric calculations.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC TR 62380:2004**, Table 16: Base failure rates for integrated circuits
- **SN 29500-5:2013**: Expected failure rates for integrated circuits

#### Company Estimate vs Standard-Based

**Hybrid (Standard Framework + Company Implementation)**: The conditional logic implements standard-defined thresholds (e.g., SFF ranges from IEC 61508 Tables 2/3), but the specific implementation choices (error handling, default values, edge cases) reflect company engineering decisions.

---

### Pattern 31: `=IF(G_N=0,"-",IF(P_N+S_N=0,"Not calculated",(P_N+V_N)/(P_N+S_N)))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AE2` |
| **Formula** | `=IF(G2=0,"-",IF(P2+S2=0,"Not calculated",(P2+V2)/(P2+S2)))` |
| **Column Header** | SFF 
rough calculation permanent |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 200 cells |
| **Applied Range** | `AE2`, `AE3`, `AE4`, `AE5`, `AE6`, `AE7`, `AE8`, `AE9`, `AE10`, `AE11` |

**Cross-References**: `G2`, `P2`, `S2`, `P2`, `V2`, `P2`, `S2`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

The **Safe Failure Fraction (SFF)** represents the proportion of failures that are either safe (do not lead to a hazardous condition) or are detected by diagnostic mechanisms. SFF = (λ_S + λ_DD) / λ_total. For ASIC blocks, a high SFF indicates that most failure modes either fail-safe or are caught by built-in self-test (BIST), ECC, or parity checks. IEC 61508 Table 2/3 maps SFF + HFT to maximum achievable SIL.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC 61508-2:2010**, Section 7.4.3.1.2: Safe Failure Fraction definition

#### Company Estimate vs Standard-Based

**Standard-Based Formula**: The SFF calculation follows the exact definition in IEC 61508-2 Section 7.4.3.1.2. The formula structure (safe + detected dangerous) / total is prescribed by the standard. However, the **classification of failure modes** into safe/dangerous categories involves engineering judgment specific to the ASIC design.

---

### Pattern 32: `=IF(H_N=0,"-",IF(Q_N+T_N=0,"Not calculated",(Q_N+W_N)/(Q_N+T_N)))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AF2` |
| **Formula** | `=IF(H2=0,"-",IF(Q2+T2=0,"Not calculated",(Q2+W2)/(Q2+T2)))` |
| **Column Header** | SFF 
rough calculation transient |
| **Computed Value** | - |
| **Occurrences** | 200 cells |
| **Applied Range** | `AF2`, `AF3`, `AF4`, `AF5`, `AF6`, `AF7`, `AF8`, `AF9`, `AF10`, `AF11` |

**Cross-References**: `H2`, `Q2`, `T2`, `Q2`, `W2`, `Q2`, `T2`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

The **Safe Failure Fraction (SFF)** represents the proportion of failures that are either safe (do not lead to a hazardous condition) or are detected by diagnostic mechanisms. SFF = (λ_S + λ_DD) / λ_total. For ASIC blocks, a high SFF indicates that most failure modes either fail-safe or are caught by built-in self-test (BIST), ECC, or parity checks. IEC 61508 Table 2/3 maps SFF + HFT to maximum achievable SIL.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC 61508-2:2010**, Section 7.4.3.1.2: Safe Failure Fraction definition

#### Company Estimate vs Standard-Based

**Standard-Based Formula**: The SFF calculation follows the exact definition in IEC 61508-2 Section 7.4.3.1.2. The formula structure (safe + detected dangerous) / total is prescribed by the standard. However, the **classification of failure modes** into safe/dangerous categories involves engineering judgment specific to the ASIC design.

---

### Pattern 33: `=IF(I_N=0,"-",IF(R_N+U_N=0,"Not calculated",(R_N+X_N)/(R_N+U_N)))`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AG2` |
| **Formula** | `=IF(I2=0,"-",IF(R2+U2=0,"Not calculated",(R2+X2)/(R2+U2)))` |
| **Column Header** | SFF 
rough calculation 
permanent and
transient |
| **Computed Value** | #DIV/0! |
| **Occurrences** | 200 cells |
| **Applied Range** | `AG2`, `AG3`, `AG4`, `AG5`, `AG6`, `AG7`, `AG8`, `AG9`, `AG10`, `AG11` |

**Cross-References**: `I2`, `R2`, `U2`, `R2`, `X2`, `R2`, `U2`

#### Calculation Logic

This conditional formula applies different calculation paths based on the data state. In the context of IEC 61508 block evaluation, it typically handles edge cases such as zero failure rates, undefined diagnostic coverage, or blocks that are not safety-relevant.

#### Physical Meaning & Safety Implications

The **Safe Failure Fraction (SFF)** represents the proportion of failures that are either safe (do not lead to a hazardous condition) or are detected by diagnostic mechanisms. SFF = (λ_S + λ_DD) / λ_total. For ASIC blocks, a high SFF indicates that most failure modes either fail-safe or are caught by built-in self-test (BIST), ECC, or parity checks. IEC 61508 Table 2/3 maps SFF + HFT to maximum achievable SIL.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements
- **IEC 61508-2:2010**, Section 7.4.3.1.2: Safe Failure Fraction definition

#### Company Estimate vs Standard-Based

**Standard-Based Formula**: The SFF calculation follows the exact definition in IEC 61508-2 Section 7.4.3.1.2. The formula structure (safe + detected dangerous) / total is prescribed by the standard. However, the **classification of failure modes** into safe/dangerous categories involves engineering judgment specific to the ASIC design.

---

### Pattern 34: `=(SUMIFS(FMEDA!LR_N:LR_N,FMEDA!$B_N:$B_N,$B_N)*SafetyGoalViolations!$F_N)+BlockEvaluation!AE_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AH2` |
| **Formula** | `=(SUMIFS(FMEDA!LR$4:LR$1653,FMEDA!$B$4:$B$1653,$B2)*SafetyGoalViolations!$F$37)+BlockEvaluation!AE2` |
| **Column Header** | PFH 
rough calculation permanent |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `AH2`, `AH3`, `AH4`, `AH5`, `AH6`, `AH7`, `AH8`, `AH9`, `AH10`, `AH11` |

**Cross-References**: `FMEDA!LR$4:LR$1653`, `FMEDA!$B$4:$B$1653`, `$B2`, `SafetyGoalViolations!$F$37`, `BlockEvaluation!AE2`

#### Calculation Logic

This formula retrieves the value from cell `LR$4:LR$1653,FMEDA` in the `(SUMIFS(FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 35: `=(SUMIFS(FMEDA!LS_N:LS_N,FMEDA!$B_N:$B_N,$B_N)*SafetyGoalViolations!$F_N)+BlockEvaluation!AF_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AI2` |
| **Formula** | `=(SUMIFS(FMEDA!LS$4:LS$1653,FMEDA!$B$4:$B$1653,$B2)*SafetyGoalViolations!$F$39)+BlockEvaluation!AF2` |
| **Column Header** | PFH 
rough calculation transient |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `AI2`, `AI3`, `AI4`, `AI5`, `AI6`, `AI7`, `AI8`, `AI9`, `AI10`, `AI11` |

**Cross-References**: `FMEDA!LS$4:LS$1653`, `FMEDA!$B$4:$B$1653`, `$B2`, `SafetyGoalViolations!$F$39`, `BlockEvaluation!AF2`

#### Calculation Logic

This formula retrieves the value from cell `LS$4:LS$1653,FMEDA` in the `(SUMIFS(FMEDA` sheet. It serves as a data pipeline, pulling pre-calculated values from the source sheet into this evaluation table for IEC 61508 compliance assessment.

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

### Pattern 36: `=AH_N+AI_N`

| Property | Value |
|----------|-------|
| **Representative Cell** | `AJ2` |
| **Formula** | `=AH2+AI2` |
| **Column Header** | PFH
rough calculation
permanent and
transient |
| **Computed Value** | 0 |
| **Occurrences** | 200 cells |
| **Applied Range** | `AJ2`, `AJ3`, `AJ4`, `AJ5`, `AJ6`, `AJ7`, `AJ8`, `AJ9`, `AJ10`, `AJ11` |

**Cross-References**: `AH2`, `AI2`

#### Calculation Logic

This **arithmetic formula** combines or subtracts failure rate components. In IEC 61508 context, subtraction often computes residual failure rates: λ_DU = λ_D - λ_DD (dangerous undetected = total dangerous minus detected).

#### Physical Meaning & Safety Implications

The **Probability of dangerous Failure per Hour (PFH)** is the IEC 61508 Option 2 target metric. For SIL 2 (equivalent to ASIL B), PFH must be < 10⁻⁶/h. PFH accounts for both random hardware failures and the effectiveness of diagnostic mechanisms and proof test intervals.

#### Standard Reference

- **IEC 61508-2:2010**, Table 2 (Type A subsystems) and Table 3 (Type B subsystems): Maps SFF and HFT to maximum achievable SIL
- **IEC 61508-2:2010**, Section 7.4.3: Hardware safety integrity requirements

#### Company Estimate vs Standard-Based

**Hybrid**: The calculation methodology is grounded in IEC 61508 / ISO 26262 standards, but specific parameter values, block definitions, and failure mode classifications involve company-specific engineering judgment based on the ASIC/SSD Controller design.

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total unique formula patterns | 36 |
| Total formula cells | 7200 |
| Cross-sheet references | 17 |
| Intra-sheet references | 19 |

### Formula Categories

| Category | Count |
|----------|-------|
| Cross Sheet Lookup | 17 |
| Arithmetic | 14 |
| Conditional | 12 |
| Aggregation | 1 |
| Text | 0 |
