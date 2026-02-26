# RD-03-008-01FMEDAReport.xlsx - 邏輯上不同的公式

**總公式數**: 567973
**邏輯上不同的公式**: 827
**平均重複次數**: 686.8

## CONDITIONAL 公式 (374 個)

### CONDITIONAL-1

**出現次數**: 6

**原始公式** (第一次出現在 BlockList!C2):
```excel
=IF($AJ$2="No",FailureRateCalc!E23,(FailureRateCalc!E23+FailureRateCalcIC!$D$129*(BlockList!E2/SUM(BlockList!$E$2:$E$7))+FailureRateCalcIC!$D$130*(BlockList!E2/SUM(BlockList!$E$2:$E$7))))
```

**正規化公式**:
```
=IF($AJ$ROW="No",FailureRateCalc!E_ROW,(FailureRateCalc!E_ROW+FailureRateCalcIC!$D$ROW*(BlockList!E_ROW/SUM(BlockList!$E$ROW:$E$ROW))+FailureRateCalcIC!$D$ROW*(BlockList!E_ROW/SUM(BlockList!$E$ROW:$E$ROW))))
```

**出現位置**:
- BlockList!C2
- BlockList!C3
- BlockList!C4
- BlockList!C5
- BlockList!C6
- BlockList!C7

---

### CONDITIONAL-2

**出現次數**: 6

**原始公式** (第一次出現在 BlockList!E2):
```excel
=SUMIF($R$10:$R$209,$B2,$L$10:$L$209)
```

**正規化公式**:
```
=SUMIF($R$ROW:$R$ROW,$B_ROW,$L$ROW:$L$ROW)
```

**出現位置**:
- BlockList!E2
- BlockList!E3
- BlockList!E4
- BlockList!E5
- BlockList!E6
- BlockList!E7

---

### CONDITIONAL-3

**出現次數**: 6

**原始公式** (第一次出現在 BlockList!F2):
```excel
=SUMIF($R$10:$R$209,$B2,$M$10:$M$209)
```

**正規化公式**:
```
=SUMIF($R$ROW:$R$ROW,$B_ROW,$M$ROW:$M$ROW)
```

**出現位置**:
- BlockList!F2
- BlockList!F3
- BlockList!F4
- BlockList!F5
- BlockList!F6
- BlockList!F7

---

### CONDITIONAL-4

**出現次數**: 6

**原始公式** (第一次出現在 BlockList!I2):
```excel
=IF(G2=0,0,E2/SUM($G$2:$G$7))
```

**正規化公式**:
```
=IF(G_ROW=0,0,E_ROW/SUM($G$ROW:$G$ROW))
```

**出現位置**:
- BlockList!I2
- BlockList!I3
- BlockList!I4
- BlockList!I5
- BlockList!I6
- BlockList!I7

---

### CONDITIONAL-5

**出現次數**: 6

**原始公式** (第一次出現在 BlockList!L2):
```excel
=IF($AJ$2="No",C2*J2,FailureRateCalc!E23*J2+FailureRateCalcIC!$D$129*(E2/SUM($E$2:$E$7))*$AN$7+FailureRateCalcIC!$D$130*(E2/SUM($E$2:$E$7))*$AN$7)
```

**正規化公式**:
```
=IF($AJ$ROW="No",C_ROW*J_ROW,FailureRateCalc!E_ROW*J_ROW+FailureRateCalcIC!$D$ROW*(E_ROW/SUM($E$ROW:$E$ROW))*$AN$ROW+FailureRateCalcIC!$D$ROW*(E_ROW/SUM($E$ROW:$E$ROW))*$AN$ROW)
```

**出現位置**:
- BlockList!L2
- BlockList!L3
- BlockList!L4
- BlockList!L5
- BlockList!L6
- BlockList!L7

---

### CONDITIONAL-6

**出現次數**: 6

**原始公式** (第一次出現在 BlockList!N2):
```excel
=SUMIF($R$10:$R$209,$B2,$N$10:$N$209)
```

**正規化公式**:
```
=SUMIF($R$ROW:$R$ROW,$B_ROW,$N$ROW:$N$ROW)
```

**出現位置**:
- BlockList!N2
- BlockList!N3
- BlockList!N4
- BlockList!N5
- BlockList!N6
- BlockList!N7

---

### CONDITIONAL-7

**出現次數**: 1

**原始公式** (第一次出現在 BlockList!V7):
```excel
=IF(V2="-","-",VLOOKUP($V$2,Gatedensity,5))
```

**正規化公式**:
```
=IF(V_ROW="-","-",VLOOKUP($V$ROW,Gatedensity,5))
```

**出現位置**:
- BlockList!V7

---

### CONDITIONAL-8

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!F10):
```excel
=IF(P10="Yes",IF(R10="",0,IF($R10=$B$2,$C$2,IF($R10=$B$3,$C$3,IF($R10=$B$4,$C$4,IF($R10=$B$5,$C$5,IF($R10=$B$6,$C$6,IF($R10=$B$7,$C$7,0))))))*IF($R$2="Area",$M10/IF($R10=$B$2,$F$2,IF($R10=$B$3,$F$3,IF($R10=$B$4,$F$4,IF($R10=$B$5,$F$5,IF($R10=$B$6,$F$6,IF($R10=$B$7,$F$7,0)))))),$L10/IF($R10=$B$2,$E$2,IF($R10=$B$3,$E$3,IF($R10=$B$4,$E$4,IF($R10=$B$5,$E$5,IF($R10=$B$6,$E$6,IF($R10=$B$7,$E$7,0)))))))),0)
```

**正規化公式**:
```
=IF(P_ROW="Yes",IF(R_ROW="",0,IF($R_ROW=$B$ROW,$C$ROW,IF($R_ROW=$B$ROW,$C$ROW,IF($R_ROW=$B$ROW,$C$ROW,IF($R_ROW=$B$ROW,$C$ROW,IF($R_ROW=$B$ROW,$C$ROW,IF($R_ROW=$B$ROW,$C$ROW,0))))))*IF($R$ROW="Area",$M_ROW/IF($R_ROW=$B$ROW,$F$ROW,IF($R_ROW=$B$ROW,$F$ROW,IF($R_ROW=$B$ROW,$F$ROW,IF($R_ROW=$B$ROW,$F$ROW,IF($R_ROW=$B$ROW,$F$ROW,IF($R_ROW=$B$ROW,$F$ROW,0)))))),$L_ROW/IF($R_ROW=$B$ROW,$E$ROW,IF($R_ROW=$B$ROW,$E$ROW,IF($R_ROW=$B$ROW,$E$ROW,IF($R_ROW=$B$ROW,$E$ROW,IF($R_ROW=$B$ROW,$E$ROW,IF($R_ROW=$B$ROW,$E$ROW,0)))))))),0)
```

**出現位置**:
- BlockList!F10
- BlockList!F11
- BlockList!F12
- BlockList!F13
- BlockList!F14
- BlockList!F15
- BlockList!F16
- BlockList!F17
- BlockList!F18
- BlockList!F19
- ... 及其他 190 個

---

### CONDITIONAL-9

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!G10):
```excel
=IF(P10="Yes",IF(R10="",0,V10*IF($R10=$B$2,$L$2,IF($R10=$B$3,$L$3,IF($R10=$B$4,$L$4,IF($R10=$B$5,$L$5,IF($R10=$B$6,$L$6,IF($R10=$B$7,$L$7,0))))))*
IF($R$7="Area",
$M10/IF($R10=$B$2,IF($F$2=0,1,$F$2),IF($R10=$B$3,IF($F$3=0,1,$F$3),IF($R10=$B$4,IF($F$4=0,1,$F$4),IF($R10=$B$5,IF($F$5=0,1,$F$5),IF($R10=$B$6,IF($F$6=0,1,$F$6),IF($R10=$B$7,IF($F$7=0,1,$F$7),0)))))),
IF($R$7="Transistors",
$L10/IF($R10=$B$2,IF($E$2=0,1,$E$2),IF($R10=$B$3,IF($E$3=0,1,$E$3),IF($R10=$B$4,IF($E$4=0,1,$E$4),IF($R10=$B$5,IF($E$5=0,1,$E$5),IF($R10=$B$6,IF($E$6=0,1,$E$6),IF($R10=$B$7,IF($E$7=0,1,$E$7),0)))))),
$N10/IF($R10=$B$2,IF($N$2=0,1,$N$2),IF($R10=$B$3,IF($N$3=0,1,$N$3),IF($R10=$B$4,IF($N$4=0,1,$N$4),IF($R10=$B$5,IF($N$5=0,1,$N$5),IF($R10=$B$6,IF($N$6=0,1,$N$6),IF($R10=$B$7,IF($N$7=0,1,$N$7),0))))))))
),0)
```

**正規化公式**:
```
=IF(P_ROW="Yes",IF(R_ROW="",0,V_ROW*IF($R_ROW=$B$ROW,$L$ROW,IF($R_ROW=$B$ROW,$L$ROW,IF($R_ROW=$B$ROW,$L$ROW,IF($R_ROW=$B$ROW,$L$ROW,IF($R_ROW=$B$ROW,$L$ROW,IF($R_ROW=$B$ROW,$L$ROW,0))))))*
IF($R$ROW="Area",
$M_ROW/IF($R_ROW=$B$ROW,IF($F$ROW=0,1,$F$ROW),IF($R_ROW=$B$ROW,IF($F$ROW=0,1,$F$ROW),IF($R_ROW=$B$ROW,IF($F$ROW=0,1,$F$ROW),IF($R_ROW=$B$ROW,IF($F$ROW=0,1,$F$ROW),IF($R_ROW=$B$ROW,IF($F$ROW=0,1,$F$ROW),IF($R_ROW=$B$ROW,IF($F$ROW=0,1,$F$ROW),0)))))),
IF($R$ROW="Transistors",
$L_ROW/IF($R_ROW=$B$ROW,IF($E$ROW=0,1,$E$ROW),IF($R_ROW=$B$ROW,IF($E$ROW=0,1,$E$ROW),IF($R_ROW=$B$ROW,IF($E$ROW=0,1,$E$ROW),IF($R_ROW=$B$ROW,IF($E$ROW=0,1,$E$ROW),IF($R_ROW=$B$ROW,IF($E$ROW=0,1,$E$ROW),IF($R_ROW=$B$ROW,IF($E$ROW=0,1,$E$ROW),0)))))),
$N_ROW/IF($R_ROW=$B$ROW,IF($N$ROW=0,1,$N$ROW),IF($R_ROW=$B$ROW,IF($N$ROW=0,1,$N$ROW),IF($R_ROW=$B$ROW,IF($N$ROW=0,1,$N$ROW),IF($R_ROW=$B$ROW,IF($N$ROW=0,1,$N$ROW),IF($R_ROW=$B$ROW,IF($N$ROW=0,1,$N$ROW),IF($R_ROW=$B$ROW,IF($N$ROW=0,1,$N$ROW),0))))))))
),0)
```

**出現位置**:
- BlockList!G10
- BlockList!G11
- BlockList!G12
- BlockList!G13
- BlockList!G14
- BlockList!G15
- BlockList!G16
- BlockList!G17
- BlockList!G18
- BlockList!G19
- ... 及其他 190 個

---

### CONDITIONAL-10

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!L10):
```excel
=IF($AN$2=FailureRateCalc!$AJ$1,M10/$V$7,
IF($T10=$AL10,AM10,IF($T10=$AQ10,AR10,IF($T10=$AV10,AW10,IF($T10=$BA10,BB10,IF($T10=$BF10,BG10,IF($T10=$BK10,BL10,IF($T10=$BP10,BQ10,IF($T10=$BU10,BV10,IF($T10=$BZ10,CA10,IF($T10=$CE10,CF10,IF($T10=$CJ10,CK10,IF($T10=$CO10,CP10,IF($T10=$CT10,CU10,IF($T10=$CY10,CZ10,IF($T10=$DD10,DE10,IF($T10=$DI10,DJ10,0)))))))))))))))))
```

**正規化公式**:
```
=IF($AN$ROW=FailureRateCalc!$AJ$ROW,M_ROW/$V$ROW,
IF($T_ROW=$AL_ROW,AM_ROW,IF($T_ROW=$AQ_ROW,AR_ROW,IF($T_ROW=$AV_ROW,AW_ROW,IF($T_ROW=$BA_ROW,BB_ROW,IF($T_ROW=$BF_ROW,BG_ROW,IF($T_ROW=$BK_ROW,BL_ROW,IF($T_ROW=$BP_ROW,BQ_ROW,IF($T_ROW=$BU_ROW,BV_ROW,IF($T_ROW=$BZ_ROW,CA_ROW,IF($T_ROW=$CE_ROW,CF_ROW,IF($T_ROW=$CJ_ROW,CK_ROW,IF($T_ROW=$CO_ROW,CP_ROW,IF($T_ROW=$CT_ROW,CU_ROW,IF($T_ROW=$CY_ROW,CZ_ROW,IF($T_ROW=$DD_ROW,DE_ROW,IF($T_ROW=$DI_ROW,DJ_ROW,0)))))))))))))))))
```

**出現位置**:
- BlockList!L10
- BlockList!L11
- BlockList!L12
- BlockList!L13
- BlockList!L14
- BlockList!L15
- BlockList!L16
- BlockList!L17
- BlockList!L18
- BlockList!L19
- ... 及其他 190 個

---

### CONDITIONAL-11

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!M10):
```excel
=IF($T10=$AL10,AN10,IF($T10=$AQ10,AS10,IF($T10=$AV10,AX10,IF($T10=$BA10,BC10,IF($T10=$BF10,BH10,IF($T10=$BK10,BM10,IF($T10=$BP10,BR10,IF($T10=$BU10,BW10,IF($T10=$BZ10,CB10,IF($T10=$CE10,CG10,IF($T10=$CJ10,CL10,IF($T10=$CO10,CQ10,IF($T10=$CT10,CV10,IF($T10=$CY10,DA10,IF($T10=$DD10,DF10,IF($T10=$DI10,DK10,0))))))))))))))))
```

**正規化公式**:
```
=IF($T_ROW=$AL_ROW,AN_ROW,IF($T_ROW=$AQ_ROW,AS_ROW,IF($T_ROW=$AV_ROW,AX_ROW,IF($T_ROW=$BA_ROW,BC_ROW,IF($T_ROW=$BF_ROW,BH_ROW,IF($T_ROW=$BK_ROW,BM_ROW,IF($T_ROW=$BP_ROW,BR_ROW,IF($T_ROW=$BU_ROW,BW_ROW,IF($T_ROW=$BZ_ROW,CB_ROW,IF($T_ROW=$CE_ROW,CG_ROW,IF($T_ROW=$CJ_ROW,CL_ROW,IF($T_ROW=$CO_ROW,CQ_ROW,IF($T_ROW=$CT_ROW,CV_ROW,IF($T_ROW=$CY_ROW,DA_ROW,IF($T_ROW=$DD_ROW,DF_ROW,IF($T_ROW=$DI_ROW,DK_ROW,0))))))))))))))))
```

**出現位置**:
- BlockList!M10
- BlockList!M11
- BlockList!M12
- BlockList!M13
- BlockList!M14
- BlockList!M15
- BlockList!M16
- BlockList!M17
- BlockList!M18
- BlockList!M19
- ... 及其他 190 個

---

### CONDITIONAL-12

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!N10):
```excel
=IF($T10=$AL10,AO10,IF($T10=$AQ10,AT10,IF($T10=$AV10,AY10,IF($T10=$BA10,BD10,IF($T10=$BF10,BI10,IF($T10=$BK10,BN10,IF($T10=$BP10,BS10,IF($T10=$BU10,BX10,IF($T10=$BZ10,CC10,IF($T10=$CE10,CH10,IF($T10=$CJ10,CM10,IF($T10=$CO10,CR10,IF($T10=$CT10,CW10,IF($T10=$CY10,DB10,IF($T10=$DD10,DG10,IF($T10=$DI10,DL10,0))))))))))))))))
```

**正規化公式**:
```
=IF($T_ROW=$AL_ROW,AO_ROW,IF($T_ROW=$AQ_ROW,AT_ROW,IF($T_ROW=$AV_ROW,AY_ROW,IF($T_ROW=$BA_ROW,BD_ROW,IF($T_ROW=$BF_ROW,BI_ROW,IF($T_ROW=$BK_ROW,BN_ROW,IF($T_ROW=$BP_ROW,BS_ROW,IF($T_ROW=$BU_ROW,BX_ROW,IF($T_ROW=$BZ_ROW,CC_ROW,IF($T_ROW=$CE_ROW,CH_ROW,IF($T_ROW=$CJ_ROW,CM_ROW,IF($T_ROW=$CO_ROW,CR_ROW,IF($T_ROW=$CT_ROW,CW_ROW,IF($T_ROW=$CY_ROW,DB_ROW,IF($T_ROW=$DD_ROW,DG_ROW,IF($T_ROW=$DI_ROW,DL_ROW,0))))))))))))))))
```

**出現位置**:
- BlockList!N10
- BlockList!N11
- BlockList!N12
- BlockList!N13
- BlockList!N14
- BlockList!N15
- BlockList!N16
- BlockList!N17
- BlockList!N18
- BlockList!N19
- ... 及其他 190 個

---

### CONDITIONAL-13

**出現次數**: 6

**原始公式** (第一次出現在 FailureRateCalc!I21):
```excel
=IF($B$21=$AF$2,$AG$2,IF($B$21=$AF$3,$AG$3,IF($B$21=$AF$4,$AG$4,IF($B$21=$AF$5,$AG$5,IF($B$21=$AF$6,$AG$6,IF($B$21=$AF$7,$AG$7,IF($B$21=$AF$8,$AG$8,IF($B$21=$AF$9,$AG$9,IF($B$21=$AF$10,$AG$10,IF($B$21=$AF$11,$AG$11,IF($B$21=$AF$12,$AG$12,IF($B$21=$AF$13,$AG$13,IF($B$21=$AF$14,$AG$14,IF($B$21=$AF$15,$AG$15,IF($B$21=$AF$16,$AG$16,IF($B$21=$AF$17,$AG$17,IF($B$21=$AF$18,$AG$18,IF($B$21=$AF$19,$AG$19,IF($B$21=$AF$20,$AG$20,IF($B$21=$AF$21,$AG$21,IF($B$21=$AF$22,$AG$22,IF($B$21=$AF$23,$AG$23,IF($B$21=$AF$24,$AG$24,IF($B$21=$AF$25,$AG$25,IF($B$21=$AF$26,$AG$26,IF($B$21=$AF$27,$AG$27,IF($B$21=$AF$28,$AG$28,IF($B$21=$AF$29,$AG$29,IF($B$21=$AF$30,$AG$30,IF($B$21=$AF$31,$AG$31,IF($B$21=$AF$32,$AG$32,IF($B$21=$AF$33,$AG$33,IF($B$21=$AF$34,$AG$34,IF($B$21=$AF$35,$AG$35,IF($B$21=$AF$36,$AG$36,IF($B$21=$AF$37,$AG$37,0))))))))))))))))))))))))))))))))))))
```

**正規化公式**:
```
=IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,IF($B$ROW=$AF$ROW,$AG$ROW,0))))))))))))))))))))))))))))))))))))
```

**出現位置**:
- FailureRateCalc!I21
- FailureRateCalc!I25
- FailureRateCalc!I29
- FailureRateCalc!I33
- FailureRateCalc!I37
- FailureRateCalc!I41

---

### CONDITIONAL-14

**出現次數**: 6

**原始公式** (第一次出現在 FailureRateCalc!K21):
```excel
=IF($B$21=$AF$2,$AH$2,IF($B$21=$AF$3,$AH$3,IF($B$21=$AF$4,$AH$4,IF($B$21=$AF$5,$AH$5,IF($B$21=$AF$6,$AH$6,IF($B$21=$AF$7,$AH$7,IF($B$21=$AF$8,$AH$8,IF($B$21=$AF$9,$AH$9,IF($B$21=$AF$10,$AH$10,IF($B$21=$AF$11,$AH$11,IF($B$21=$AF$12,$AH$12,IF($B$21=$AF$13,$AH$13,IF($B$21=$AF$14,$AH$14,IF($B$21=$AF$15,$AH$15,IF($B$21=$AF$16,$AH$16,IF($B$21=$AF$17,$AH$17,IF($B$21=$AF$18,$AH$18,IF($B$21=$AF$19,$AH$19,IF($B$21=$AF$20,$AH$20,IF($B$21=$AF$21,$AH$21,IF($B$21=$AF$22,$AH$22,IF($B$21=$AF$23,$AH$23,IF($B$21=$AF$24,$AH$24,IF($B$21=$AF$25,$AH$25,IF($B$21=$AF$26,$AH$26,IF($B$21=$AF$27,$AH$27,IF($B$21=$AF$28,$AH$28,IF($B$21=$AF$29,$AH$29,IF($B$21=$AF$30,$AH$30,IF($B$21=$AF$31,$AH$31,IF($B$21=$AF$32,$AH$32,IF($B$21=$AF$33,$AH$33,IF($B$21=$AF$34,$AH$34,IF($B$21=$AF$35,$AH$35,IF($B$21=$AF$36,$AH$36,IF($B$21=$AF$37,$AH$37,0))))))))))))))))))))))))))))))))))))
```

**正規化公式**:
```
=IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,IF($B$ROW=$AF$ROW,$AH$ROW,0))))))))))))))))))))))))))))))))))))
```

**出現位置**:
- FailureRateCalc!K21
- FailureRateCalc!K25
- FailureRateCalc!K29
- FailureRateCalc!K33
- FailureRateCalc!K37
- FailureRateCalc!K41

---

### CONDITIONAL-15

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!R21):
```excel
=IF(BlockList!AJ7="Yes",FailureRateCalcIC!B129,1)
```

**正規化公式**:
```
=IF(BlockList!AJ_ROW="Yes",FailureRateCalcIC!B_ROW,1)
```

**出現位置**:
- FailureRateCalc!R21

---

### CONDITIONAL-16

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D91):
```excel
= IF(C91=J106,3,IF(C91=I107,2,IF(C91=H107,1,0)))
```

**正規化公式**:
```
= IF(C_ROW=J_ROW,3,IF(C_ROW=I_ROW,2,IF(C_ROW=H_ROW,1,0)))
```

**出現位置**:
- FailureRateCalcIC!D91

---

### CONDITIONAL-17

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D98):
```excel
=IF(B98=FailureRateCalc!AL6,21.5,IF(B98=FailureRateCalc!AL7,6.5,5))
```

**正規化公式**:
```
=IF(B_ROW=FailureRateCalc!AL_ROW,21.5,IF(B_ROW=FailureRateCalc!AL_ROW,6.5,5))
```

**出現位置**:
- FailureRateCalcIC!D98

---

### CONDITIONAL-18

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D100):
```excel
=IF(B100=FailureRateCalc!AL1,16,IF(B100=FailureRateCalc!AL2,20,IF(B100=FailureRateCalc!AL3,6.5,5.4)))
```

**正規化公式**:
```
=IF(B_ROW=FailureRateCalc!AL_ROW,16,IF(B_ROW=FailureRateCalc!AL_ROW,20,IF(B_ROW=FailureRateCalc!AL_ROW,6.5,5.4)))
```

**出現位置**:
- FailureRateCalcIC!D100

---

### CONDITIONAL-19

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D102):
```excel
=IF(B102=J97,0,1)
```

**正規化公式**:
```
=IF(B_ROW=J_ROW,0,1)
```

**出現位置**:
- FailureRateCalcIC!D102

---

### CONDITIONAL-20

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D103):
```excel
=IF(B102=J90,10,IF(B102=J91,15,IF(B102=J92,40,IF(B102=J93,70,IF(B102=J94,100,IF(B102=J95,20,IF(B102=J96,40,0)))))))
```

**正規化公式**:
```
=IF(B_ROW=J_ROW,10,IF(B_ROW=J_ROW,15,IF(B_ROW=J_ROW,40,IF(B_ROW=J_ROW,70,IF(B_ROW=J_ROW,100,IF(B_ROW=J_ROW,20,IF(B_ROW=J_ROW,40,0)))))))
```

**出現位置**:
- FailureRateCalcIC!D103

---

### CONDITIONAL-21

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D104):
```excel
=IF(B104=FailureRateCalc!AJ37,1.4,IF(B104=FailureRateCalc!AJ38,1.2,IF(B104=FailureRateCalc!AJ39,1,0.7)))
```

**正規化公式**:
```
=IF(B_ROW=FailureRateCalc!AJ_ROW,1.4,IF(B_ROW=FailureRateCalc!AJ_ROW,1.2,IF(B_ROW=FailureRateCalc!AJ_ROW,1,0.7)))
```

**出現位置**:
- FailureRateCalcIC!D104

---

### CONDITIONAL-22

**出現次數**: 8

**原始公式** (第一次出現在 FailureRateCalcIC!D108):
```excel
=IF(D91=3,J108+D106,IF(D91=2,I108+D106,IF(D91=1,H108+D106,"FAIL")))
```

**正規化公式**:
```
=IF(D_ROW=3,J_ROW+D_ROW,IF(D_ROW=2,I_ROW+D_ROW,IF(D_ROW=1,H_ROW+D_ROW,"FAIL")))
```

**出現位置**:
- FailureRateCalcIC!D108
- FailureRateCalcIC!D109
- FailureRateCalcIC!D110
- FailureRateCalcIC!D111
- FailureRateCalcIC!D112
- FailureRateCalcIC!D113
- FailureRateCalcIC!D114
- FailureRateCalcIC!D115

---

### CONDITIONAL-23

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D124):
```excel
=IF(D91=3,(J108*J109+J110*J111+J112*J113+J114*J115+J116*J117+J118*J119+J120*J121+J122*J123)/J124,IF(D91=2,(I108*I109+I110*I111+I112*I113)/I124,IF(D91=1,(H108*H109+H110*H111+H112*H113)/H124,"FALSE")))
```

**正規化公式**:
```
=IF(D_ROW=3,(J_ROW*J_ROW+J_ROW*J_ROW+J_ROW*J_ROW+J_ROW*J_ROW+J_ROW*J_ROW+J_ROW*J_ROW+J_ROW*J_ROW+J_ROW*J_ROW)/J_ROW,IF(D_ROW=2,(I_ROW*I_ROW+I_ROW*I_ROW+I_ROW*I_ROW)/I_ROW,IF(D_ROW=1,(H_ROW*H_ROW+H_ROW*H_ROW+H_ROW*H_ROW)/H_ROW,"FALSE")))
```

**出現位置**:
- FailureRateCalcIC!D124

---

### CONDITIONAL-24

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D127):
```excel
=IF(D91=3,J131,IF(D91=2,I131,IF(D91=1,H131,"FALSE")))
```

**正規化公式**:
```
=IF(D_ROW=3,J_ROW,IF(D_ROW=2,I_ROW,IF(D_ROW=1,H_ROW,"FALSE")))
```

**出現位置**:
- FailureRateCalcIC!D127

---

### CONDITIONAL-25

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!B129):
```excel
=IF(D91=3,(D116*J109+D117*J111+D118*J113+D119*J115+D120*J117+D121*J119+D122*J121+D123*J123)/(J124),IF(D91=2,(D116*I109+D117*I111+D118*I113)/(I124),IF(D91=1,(D116*H109+D117*H111+D118*H113)/(H124),"""FALSE")))
```

**正規化公式**:
```
=IF(D_ROW=3,(D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW)/(J_ROW),IF(D_ROW=2,(D_ROW*I_ROW+D_ROW*I_ROW+D_ROW*I_ROW)/(I_ROW),IF(D_ROW=1,(D_ROW*H_ROW+D_ROW*H_ROW+D_ROW*H_ROW)/(H_ROW),"""FALSE")))
```

**出現位置**:
- FailureRateCalcIC!B129

---

### CONDITIONAL-26

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D129):
```excel
=0.00275*D101*(IF(D91=3,(J126^0.76*D125^0.68+J128^0.76*D126^0.68+J130^0.76*D127^0.68),IF(D91=2,(I126^0.76*D125^0.68+I128^0.76*D126^0.68+I130^0.76*D127^0.68),IF(D91=1,(H126^0.76*D125^0.68+H128^0.76*D126^0.68+H130^0.76*D127^0.68),"FALSE"))))*D96
```

**正規化公式**:
```
=0.00275*D_ROW*(IF(D_ROW=3,(J_ROW^0.76*D_ROW^0.68+J_ROW^0.76*D_ROW^0.68+J_ROW^0.76*D_ROW^0.68),IF(D_ROW=2,(I_ROW^0.76*D_ROW^0.68+I_ROW^0.76*D_ROW^0.68+I_ROW^0.76*D_ROW^0.68),IF(D_ROW=1,(H_ROW^0.76*D_ROW^0.68+H_ROW^0.76*D_ROW^0.68+H_ROW^0.76*D_ROW^0.68),"FALSE"))))*D_ROW
```

**出現位置**:
- FailureRateCalcIC!D129

---

### CONDITIONAL-27

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CM1):
```excel
=IF(SUM(CL2,CM2)=0,"Not calculated",1-CM2/CO2)
```

**正規化公式**:
```
=IF(SUM(CL_ROW,CM_ROW)=0,"Not calculated",1-CM_ROW/CO_ROW)
```

**出現位置**:
- FMEDA!CM1

---

### CONDITIONAL-28

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CO1):
```excel
=IF(SUM(CL2,CN2,CP2)=0,"Not calculated",1-CN2/(CO2-CM2))
```

**正規化公式**:
```
=IF(SUM(CL_ROW,CN_ROW,CP_ROW)=0,"Not calculated",1-CN_ROW/(CO_ROW-CM_ROW))
```

**出現位置**:
- FMEDA!CO1

---

### CONDITIONAL-29

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CS1):
```excel
=IF(SUM(CR2,CS2)=0,"Not calculated",1-CS2/CU2)
```

**正規化公式**:
```
=IF(SUM(CR_ROW,CS_ROW)=0,"Not calculated",1-CS_ROW/CU_ROW)
```

**出現位置**:
- FMEDA!CS1

---

### CONDITIONAL-30

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CU1):
```excel
=IF(SUM(CR2,CT2,CV2)=0,"Not calculated",1-CT2/(CU2-CS2))
```

**正規化公式**:
```
=IF(SUM(CR_ROW,CT_ROW,CV_ROW)=0,"Not calculated",1-CT_ROW/(CU_ROW-CS_ROW))
```

**出現位置**:
- FMEDA!CU1

---

### CONDITIONAL-31

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CY1):
```excel
=IF(SUM(CX2,CY2)=0,"Not calculated",1-CY2/DA2)
```

**正規化公式**:
```
=IF(SUM(CX_ROW,CY_ROW)=0,"Not calculated",1-CY_ROW/DA_ROW)
```

**出現位置**:
- FMEDA!CY1

---

### CONDITIONAL-32

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DA1):
```excel
=IF(SUM(CX2,CZ2,DB2)=0,"Not calculated",1-CZ2/(DA2-CY2))
```

**正規化公式**:
```
=IF(SUM(CX_ROW,CZ_ROW,DB_ROW)=0,"Not calculated",1-CZ_ROW/(DA_ROW-CY_ROW))
```

**出現位置**:
- FMEDA!DA1

---

### CONDITIONAL-33

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DE1):
```excel
=IF(SUM(DD2,DE2)=0,"Not calculated",1-DE2/DG2)
```

**正規化公式**:
```
=IF(SUM(DD_ROW,DE_ROW)=0,"Not calculated",1-DE_ROW/DG_ROW)
```

**出現位置**:
- FMEDA!DE1

---

### CONDITIONAL-34

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DG1):
```excel
=IF(SUM(DD2,DF2,DH2)=0,"Not calculated",1-DF2/(DG2-DE2))
```

**正規化公式**:
```
=IF(SUM(DD_ROW,DF_ROW,DH_ROW)=0,"Not calculated",1-DF_ROW/(DG_ROW-DE_ROW))
```

**出現位置**:
- FMEDA!DG1

---

### CONDITIONAL-35

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DK1):
```excel
=IF(SUM(DJ2,DK2)=0,"Not calculated",1-DK2/DM2)
```

**正規化公式**:
```
=IF(SUM(DJ_ROW,DK_ROW)=0,"Not calculated",1-DK_ROW/DM_ROW)
```

**出現位置**:
- FMEDA!DK1

---

### CONDITIONAL-36

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DM1):
```excel
=IF(SUM(DJ2,DL2,DN2)=0,"Not calculated",1-DL2/(DM2-DK2))
```

**正規化公式**:
```
=IF(SUM(DJ_ROW,DL_ROW,DN_ROW)=0,"Not calculated",1-DL_ROW/(DM_ROW-DK_ROW))
```

**出現位置**:
- FMEDA!DM1

---

### CONDITIONAL-37

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DQ1):
```excel
=IF(SUM(DP2,DQ2)=0,"Not calculated",1-DQ2/DS2)
```

**正規化公式**:
```
=IF(SUM(DP_ROW,DQ_ROW)=0,"Not calculated",1-DQ_ROW/DS_ROW)
```

**出現位置**:
- FMEDA!DQ1

---

### CONDITIONAL-38

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DS1):
```excel
=IF(SUM(DP2,DR2,DT2)=0,"Not calculated",1-DR2/(DS2-DQ2))
```

**正規化公式**:
```
=IF(SUM(DP_ROW,DR_ROW,DT_ROW)=0,"Not calculated",1-DR_ROW/(DS_ROW-DQ_ROW))
```

**出現位置**:
- FMEDA!DS1

---

### CONDITIONAL-39

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DW1):
```excel
=IF(SUM(DV2,DW2)=0,"Not calculated",1-DW2/DY2)
```

**正規化公式**:
```
=IF(SUM(DV_ROW,DW_ROW)=0,"Not calculated",1-DW_ROW/DY_ROW)
```

**出現位置**:
- FMEDA!DW1

---

### CONDITIONAL-40

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DY1):
```excel
=IF(SUM(DV2,DX2,DZ2)=0,"Not calculated",1-DX2/(DY2-DW2))
```

**正規化公式**:
```
=IF(SUM(DV_ROW,DX_ROW,DZ_ROW)=0,"Not calculated",1-DX_ROW/(DY_ROW-DW_ROW))
```

**出現位置**:
- FMEDA!DY1

---

### CONDITIONAL-41

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EC1):
```excel
=IF(SUM(EB2,EC2)=0,"Not calculated",1-EC2/EE2)
```

**正規化公式**:
```
=IF(SUM(EB_ROW,EC_ROW)=0,"Not calculated",1-EC_ROW/EE_ROW)
```

**出現位置**:
- FMEDA!EC1

---

### CONDITIONAL-42

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EE1):
```excel
=IF(SUM(EB2,ED2,EF2)=0,"Not calculated",1-ED2/(EE2-EC2))
```

**正規化公式**:
```
=IF(SUM(EB_ROW,ED_ROW,EF_ROW)=0,"Not calculated",1-ED_ROW/(EE_ROW-EC_ROW))
```

**出現位置**:
- FMEDA!EE1

---

### CONDITIONAL-43

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EI1):
```excel
=IF(SUM(EH2,EI2)=0,"Not calculated",1-EI2/EK2)
```

**正規化公式**:
```
=IF(SUM(EH_ROW,EI_ROW)=0,"Not calculated",1-EI_ROW/EK_ROW)
```

**出現位置**:
- FMEDA!EI1

---

### CONDITIONAL-44

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EK1):
```excel
=IF(SUM(EH2,EJ2,EL2)=0,"Not calculated",1-EJ2/(EK2-EI2))
```

**正規化公式**:
```
=IF(SUM(EH_ROW,EJ_ROW,EL_ROW)=0,"Not calculated",1-EJ_ROW/(EK_ROW-EI_ROW))
```

**出現位置**:
- FMEDA!EK1

---

### CONDITIONAL-45

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EO1):
```excel
=IF(SUM(EN2,EO2)=0,"Not calculated",1-EO2/EQ2)
```

**正規化公式**:
```
=IF(SUM(EN_ROW,EO_ROW)=0,"Not calculated",1-EO_ROW/EQ_ROW)
```

**出現位置**:
- FMEDA!EO1

---

### CONDITIONAL-46

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EQ1):
```excel
=IF(SUM(EN2,EP2,ER2)=0,"Not calculated",1-EP2/(EQ2-EO2))
```

**正規化公式**:
```
=IF(SUM(EN_ROW,EP_ROW,ER_ROW)=0,"Not calculated",1-EP_ROW/(EQ_ROW-EO_ROW))
```

**出現位置**:
- FMEDA!EQ1

---

### CONDITIONAL-47

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EU1):
```excel
=IF(SUM(ET2,EU2)=0,"Not calculated",1-EU2/EW2)
```

**正規化公式**:
```
=IF(SUM(ET_ROW,EU_ROW)=0,"Not calculated",1-EU_ROW/EW_ROW)
```

**出現位置**:
- FMEDA!EU1

---

### CONDITIONAL-48

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EW1):
```excel
=IF(SUM(ET2,EV2,EX2)=0,"Not calculated",1-EV2/(EW2-EU2))
```

**正規化公式**:
```
=IF(SUM(ET_ROW,EV_ROW,EX_ROW)=0,"Not calculated",1-EV_ROW/(EW_ROW-EU_ROW))
```

**出現位置**:
- FMEDA!EW1

---

### CONDITIONAL-49

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FA1):
```excel
=IF(SUM(EZ2,FA2)=0,"Not calculated",1-FA2/FC2)
```

**正規化公式**:
```
=IF(SUM(EZ_ROW,FA_ROW)=0,"Not calculated",1-FA_ROW/FC_ROW)
```

**出現位置**:
- FMEDA!FA1

---

### CONDITIONAL-50

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FC1):
```excel
=IF(SUM(EZ2,FB2,FD2)=0,"Not calculated",1-FB2/(FC2-FA2))
```

**正規化公式**:
```
=IF(SUM(EZ_ROW,FB_ROW,FD_ROW)=0,"Not calculated",1-FB_ROW/(FC_ROW-FA_ROW))
```

**出現位置**:
- FMEDA!FC1

---

### CONDITIONAL-51

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FG1):
```excel
=IF(SUM(FF2,FG2)=0,"Not calculated",1-FG2/FI2)
```

**正規化公式**:
```
=IF(SUM(FF_ROW,FG_ROW)=0,"Not calculated",1-FG_ROW/FI_ROW)
```

**出現位置**:
- FMEDA!FG1

---

### CONDITIONAL-52

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FI1):
```excel
=IF(SUM(FF2,FH2,FJ2)=0,"Not calculated",1-FH2/(FI2-FG2))
```

**正規化公式**:
```
=IF(SUM(FF_ROW,FH_ROW,FJ_ROW)=0,"Not calculated",1-FH_ROW/(FI_ROW-FG_ROW))
```

**出現位置**:
- FMEDA!FI1

---

### CONDITIONAL-53

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FM1):
```excel
=IF(SUM(FL2,FM2)=0,"Not calculated",1-FM2/FO2)
```

**正規化公式**:
```
=IF(SUM(FL_ROW,FM_ROW)=0,"Not calculated",1-FM_ROW/FO_ROW)
```

**出現位置**:
- FMEDA!FM1

---

### CONDITIONAL-54

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FO1):
```excel
=IF(SUM(FL2,FN2,FP2)=0,"Not calculated",1-FN2/(FO2-FM2))
```

**正規化公式**:
```
=IF(SUM(FL_ROW,FN_ROW,FP_ROW)=0,"Not calculated",1-FN_ROW/(FO_ROW-FM_ROW))
```

**出現位置**:
- FMEDA!FO1

---

### CONDITIONAL-55

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FS1):
```excel
=IF(SUM(FR2,FS2)=0,"Not calculated",1-FS2/FU2)
```

**正規化公式**:
```
=IF(SUM(FR_ROW,FS_ROW)=0,"Not calculated",1-FS_ROW/FU_ROW)
```

**出現位置**:
- FMEDA!FS1

---

### CONDITIONAL-56

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FU1):
```excel
=IF(SUM(FR2,FT2,FV2)=0,"Not calculated",1-FT2/(FU2-FS2))
```

**正規化公式**:
```
=IF(SUM(FR_ROW,FT_ROW,FV_ROW)=0,"Not calculated",1-FT_ROW/(FU_ROW-FS_ROW))
```

**出現位置**:
- FMEDA!FU1

---

### CONDITIONAL-57

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FY1):
```excel
=IF(SUM(FX2,FY2)=0,"Not calculated",1-FY2/GA2)
```

**正規化公式**:
```
=IF(SUM(FX_ROW,FY_ROW)=0,"Not calculated",1-FY_ROW/GA_ROW)
```

**出現位置**:
- FMEDA!FY1

---

### CONDITIONAL-58

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GA1):
```excel
=IF(SUM(FX2,FZ2,GB2)=0,"Not calculated",1-FZ2/(GA2-FY2))
```

**正規化公式**:
```
=IF(SUM(FX_ROW,FZ_ROW,GB_ROW)=0,"Not calculated",1-FZ_ROW/(GA_ROW-FY_ROW))
```

**出現位置**:
- FMEDA!GA1

---

### CONDITIONAL-59

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GE1):
```excel
=IF(SUM(GD2,GE2)=0,"Not calculated",1-GE2/GG2)
```

**正規化公式**:
```
=IF(SUM(GD_ROW,GE_ROW)=0,"Not calculated",1-GE_ROW/GG_ROW)
```

**出現位置**:
- FMEDA!GE1

---

### CONDITIONAL-60

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GG1):
```excel
=IF(SUM(GD2,GF2,GH2)=0,"Not calculated",1-GF2/(GG2-GE2))
```

**正規化公式**:
```
=IF(SUM(GD_ROW,GF_ROW,GH_ROW)=0,"Not calculated",1-GF_ROW/(GG_ROW-GE_ROW))
```

**出現位置**:
- FMEDA!GG1

---

### CONDITIONAL-61

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GK1):
```excel
=IF(SUM(GJ2,GK2)=0,"Not calculated",1-GK2/GM2)
```

**正規化公式**:
```
=IF(SUM(GJ_ROW,GK_ROW)=0,"Not calculated",1-GK_ROW/GM_ROW)
```

**出現位置**:
- FMEDA!GK1

---

### CONDITIONAL-62

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GM1):
```excel
=IF(SUM(GJ2,GL2,GN2)=0,"Not calculated",1-GL2/(GM2-GK2))
```

**正規化公式**:
```
=IF(SUM(GJ_ROW,GL_ROW,GN_ROW)=0,"Not calculated",1-GL_ROW/(GM_ROW-GK_ROW))
```

**出現位置**:
- FMEDA!GM1

---

### CONDITIONAL-63

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GQ1):
```excel
=IF(SUM(GP2,GQ2)=0,"Not calculated",1-GQ2/GS2)
```

**正規化公式**:
```
=IF(SUM(GP_ROW,GQ_ROW)=0,"Not calculated",1-GQ_ROW/GS_ROW)
```

**出現位置**:
- FMEDA!GQ1

---

### CONDITIONAL-64

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GS1):
```excel
=IF(SUM(GP2,GR2,GT2)=0,"Not calculated",1-GR2/(GS2-GQ2))
```

**正規化公式**:
```
=IF(SUM(GP_ROW,GR_ROW,GT_ROW)=0,"Not calculated",1-GR_ROW/(GS_ROW-GQ_ROW))
```

**出現位置**:
- FMEDA!GS1

---

### CONDITIONAL-65

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GW1):
```excel
=IF(SUM(GV2,GW2)=0,"Not calculated",1-GW2/GY2)
```

**正規化公式**:
```
=IF(SUM(GV_ROW,GW_ROW)=0,"Not calculated",1-GW_ROW/GY_ROW)
```

**出現位置**:
- FMEDA!GW1

---

### CONDITIONAL-66

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GY1):
```excel
=IF(SUM(GV2,GX2,GZ2)=0,"Not calculated",1-GX2/(GY2-GW2))
```

**正規化公式**:
```
=IF(SUM(GV_ROW,GX_ROW,GZ_ROW)=0,"Not calculated",1-GX_ROW/(GY_ROW-GW_ROW))
```

**出現位置**:
- FMEDA!GY1

---

### CONDITIONAL-67

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HC1):
```excel
=IF(SUM(I4:I9649)=0,"Not calculated",1-HC2/HE2)
```

**正規化公式**:
```
=IF(SUM(I_ROW:I_ROW)=0,"Not calculated",1-HC_ROW/HE_ROW)
```

**出現位置**:
- FMEDA!HC1

---

### CONDITIONAL-68

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HE1):
```excel
=IF(OR(HD2=0,SUM(I4:I9649)=0),"Not calculated",1-HD2/(HE2-HC2))
```

**正規化公式**:
```
=IF(OR(HD_ROW=0,SUM(I_ROW:I_ROW)=0),"Not calculated",1-HD_ROW/(HE_ROW-HC_ROW))
```

**出現位置**:
- FMEDA!HE1

---

### CONDITIONAL-69

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HN1):
```excel
=IF(SUM(J4:J9649)=0,"Not calculated",1-HN2/HP2)
```

**正規化公式**:
```
=IF(SUM(J_ROW:J_ROW)=0,"Not calculated",1-HN_ROW/HP_ROW)
```

**出現位置**:
- FMEDA!HN1

---

### CONDITIONAL-70

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HP1):
```excel
=IF(OR(HO2=0,SUM(J4:J9649)=0),"Not calculated",1-HO2/(HP2-HN2))
```

**正規化公式**:
```
=IF(OR(HO_ROW=0,SUM(J_ROW:J_ROW)=0),"Not calculated",1-HO_ROW/(HP_ROW-HN_ROW))
```

**出現位置**:
- FMEDA!HP1

---

### CONDITIONAL-71

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HX1):
```excel
=IF(HZ2=0,"Not calculated",1-HX2/HZ2)
```

**正規化公式**:
```
=IF(HZ_ROW=0,"Not calculated",1-HX_ROW/HZ_ROW)
```

**出現位置**:
- FMEDA!HX1

---

### CONDITIONAL-72

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HZ1):
```excel
=IF(OR(HY2=0,HZ2=0),"Not calculated",1-HY2/(HZ2-HX2))
```

**正規化公式**:
```
=IF(OR(HY_ROW=0,HZ_ROW=0),"Not calculated",1-HY_ROW/(HZ_ROW-HX_ROW))
```

**出現位置**:
- FMEDA!HZ1

---

### CONDITIONAL-73

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!ID1):
```excel
=IF(IF2=0,"Not calculated",1-ID2/IF2)
```

**正規化公式**:
```
=IF(IF_ROW=0,"Not calculated",1-ID_ROW/IF_ROW)
```

**出現位置**:
- FMEDA!ID1

---

### CONDITIONAL-74

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IF1):
```excel
=IF(OR(IE2=0,IF2=0),"Not calculated",1-IE2/(IF2-ID2))
```

**正規化公式**:
```
=IF(OR(IE_ROW=0,IF_ROW=0),"Not calculated",1-IE_ROW/(IF_ROW-ID_ROW))
```

**出現位置**:
- FMEDA!IF1

---

### CONDITIONAL-75

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IJ1):
```excel
=IF(IL2=0,"Not calculated",1-IJ2/IL2)
```

**正規化公式**:
```
=IF(IL_ROW=0,"Not calculated",1-IJ_ROW/IL_ROW)
```

**出現位置**:
- FMEDA!IJ1

---

### CONDITIONAL-76

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IL1):
```excel
=IF(OR(IK2=0,IL2=0),"Not calculated",1-IK2/(IL2-IJ2))
```

**正規化公式**:
```
=IF(OR(IK_ROW=0,IL_ROW=0),"Not calculated",1-IK_ROW/(IL_ROW-IJ_ROW))
```

**出現位置**:
- FMEDA!IL1

---

### CONDITIONAL-77

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IP1):
```excel
=IF(IR2=0,"Not calculated",1-IP2/IR2)
```

**正規化公式**:
```
=IF(IR_ROW=0,"Not calculated",1-IP_ROW/IR_ROW)
```

**出現位置**:
- FMEDA!IP1

---

### CONDITIONAL-78

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IR1):
```excel
=IF(OR(IQ2=0,IR2=0),"Not calculated",1-IQ2/(IR2-IP2))
```

**正規化公式**:
```
=IF(OR(IQ_ROW=0,IR_ROW=0),"Not calculated",1-IQ_ROW/(IR_ROW-IP_ROW))
```

**出現位置**:
- FMEDA!IR1

---

### CONDITIONAL-79

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IV1):
```excel
=IF(IX2=0,"Not calculated",1-IV2/IX2)
```

**正規化公式**:
```
=IF(IX_ROW=0,"Not calculated",1-IV_ROW/IX_ROW)
```

**出現位置**:
- FMEDA!IV1

---

### CONDITIONAL-80

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IX1):
```excel
=IF(OR(IW2=0,IX2=0),"Not calculated",1-IW2/(IX2-IV2))
```

**正規化公式**:
```
=IF(OR(IW_ROW=0,IX_ROW=0),"Not calculated",1-IW_ROW/(IX_ROW-IV_ROW))
```

**出現位置**:
- FMEDA!IX1

---

### CONDITIONAL-81

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JB1):
```excel
=IF(JD2=0,"Not calculated",1-JB2/JD2)
```

**正規化公式**:
```
=IF(JD_ROW=0,"Not calculated",1-JB_ROW/JD_ROW)
```

**出現位置**:
- FMEDA!JB1

---

### CONDITIONAL-82

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JD1):
```excel
=IF(OR(JC2=0,JD2=0),"Not calculated",1-JC2/(JD2-JB2))
```

**正規化公式**:
```
=IF(OR(JC_ROW=0,JD_ROW=0),"Not calculated",1-JC_ROW/(JD_ROW-JB_ROW))
```

**出現位置**:
- FMEDA!JD1

---

### CONDITIONAL-83

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JH1):
```excel
=IF(JJ2=0,"Not calculated",1-JH2/JJ2)
```

**正規化公式**:
```
=IF(JJ_ROW=0,"Not calculated",1-JH_ROW/JJ_ROW)
```

**出現位置**:
- FMEDA!JH1

---

### CONDITIONAL-84

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JJ1):
```excel
=IF(OR(JI2=0,JJ2=0),"Not calculated",1-JI2/(JJ2-JH2))
```

**正規化公式**:
```
=IF(OR(JI_ROW=0,JJ_ROW=0),"Not calculated",1-JI_ROW/(JJ_ROW-JH_ROW))
```

**出現位置**:
- FMEDA!JJ1

---

### CONDITIONAL-85

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JN1):
```excel
=IF(JP2=0,"Not calculated",1-JN2/JP2)
```

**正規化公式**:
```
=IF(JP_ROW=0,"Not calculated",1-JN_ROW/JP_ROW)
```

**出現位置**:
- FMEDA!JN1

---

### CONDITIONAL-86

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JP1):
```excel
=IF(OR(JO2=0,JP2=0),"Not calculated",1-JO2/(JP2-JN2))
```

**正規化公式**:
```
=IF(OR(JO_ROW=0,JP_ROW=0),"Not calculated",1-JO_ROW/(JP_ROW-JN_ROW))
```

**出現位置**:
- FMEDA!JP1

---

### CONDITIONAL-87

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JT1):
```excel
=IF(JV2=0,"Not calculated",1-JT2/JV2)
```

**正規化公式**:
```
=IF(JV_ROW=0,"Not calculated",1-JT_ROW/JV_ROW)
```

**出現位置**:
- FMEDA!JT1

---

### CONDITIONAL-88

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JV1):
```excel
=IF(OR(JU2=0,JV2=0),"Not calculated",1-JU2/(JV2-JT2))
```

**正規化公式**:
```
=IF(OR(JU_ROW=0,JV_ROW=0),"Not calculated",1-JU_ROW/(JV_ROW-JT_ROW))
```

**出現位置**:
- FMEDA!JV1

---

### CONDITIONAL-89

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JZ1):
```excel
=IF(KB2=0,"Not calculated",1-JZ2/KB2)
```

**正規化公式**:
```
=IF(KB_ROW=0,"Not calculated",1-JZ_ROW/KB_ROW)
```

**出現位置**:
- FMEDA!JZ1

---

### CONDITIONAL-90

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KB1):
```excel
=IF(OR(KA2=0,KB2=0),"Not calculated",1-KA2/(KB2-JZ2))
```

**正規化公式**:
```
=IF(OR(KA_ROW=0,KB_ROW=0),"Not calculated",1-KA_ROW/(KB_ROW-JZ_ROW))
```

**出現位置**:
- FMEDA!KB1

---

### CONDITIONAL-91

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KF1):
```excel
=IF(KH2=0,"Not calculated",1-KF2/KH2)
```

**正規化公式**:
```
=IF(KH_ROW=0,"Not calculated",1-KF_ROW/KH_ROW)
```

**出現位置**:
- FMEDA!KF1

---

### CONDITIONAL-92

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KH1):
```excel
=IF(OR(KG2=0,KH2=0),"Not calculated",1-KG2/(KH2-KF2))
```

**正規化公式**:
```
=IF(OR(KG_ROW=0,KH_ROW=0),"Not calculated",1-KG_ROW/(KH_ROW-KF_ROW))
```

**出現位置**:
- FMEDA!KH1

---

### CONDITIONAL-93

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KL1):
```excel
=IF(KN2=0,"Not calculated",1-KL2/KN2)
```

**正規化公式**:
```
=IF(KN_ROW=0,"Not calculated",1-KL_ROW/KN_ROW)
```

**出現位置**:
- FMEDA!KL1

---

### CONDITIONAL-94

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KN1):
```excel
=IF(OR(KM2=0,KN2=0),"Not calculated",1-KM2/(KN2-KL2))
```

**正規化公式**:
```
=IF(OR(KM_ROW=0,KN_ROW=0),"Not calculated",1-KM_ROW/(KN_ROW-KL_ROW))
```

**出現位置**:
- FMEDA!KN1

---

### CONDITIONAL-95

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MH1):
```excel
=IF(SUM(MG2,MH2)=0,"Not calculated",1-MH2/MJ2)
```

**正規化公式**:
```
=IF(SUM(MG_ROW,MH_ROW)=0,"Not calculated",1-MH_ROW/MJ_ROW)
```

**出現位置**:
- FMEDA!MH1

---

### CONDITIONAL-96

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MJ1):
```excel
=IF(SUM(MG2,MI2,MK2)=0,"Not calculated",1-MI2/(MJ2-MH2))
```

**正規化公式**:
```
=IF(SUM(MG_ROW,MI_ROW,MK_ROW)=0,"Not calculated",1-MI_ROW/(MJ_ROW-MH_ROW))
```

**出現位置**:
- FMEDA!MJ1

---

### CONDITIONAL-97

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MN1):
```excel
=IF(SUM(MM2,MN2)=0,"Not calculated",1-MN2/MP2)
```

**正規化公式**:
```
=IF(SUM(MM_ROW,MN_ROW)=0,"Not calculated",1-MN_ROW/MP_ROW)
```

**出現位置**:
- FMEDA!MN1

---

### CONDITIONAL-98

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MP1):
```excel
=IF(SUM(MM2,MO2,MQ2)=0,"Not calculated",1-MO2/(MP2-MN2))
```

**正規化公式**:
```
=IF(SUM(MM_ROW,MO_ROW,MQ_ROW)=0,"Not calculated",1-MO_ROW/(MP_ROW-MN_ROW))
```

**出現位置**:
- FMEDA!MP1

---

### CONDITIONAL-99

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MT1):
```excel
=IF(SUM(MS2,MT2)=0,"Not calculated",1-MT2/MV2)
```

**正規化公式**:
```
=IF(SUM(MS_ROW,MT_ROW)=0,"Not calculated",1-MT_ROW/MV_ROW)
```

**出現位置**:
- FMEDA!MT1

---

### CONDITIONAL-100

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MV1):
```excel
=IF(SUM(MS2,MU2,MW2)=0,"Not calculated",1-MU2/(MV2-MT2))
```

**正規化公式**:
```
=IF(SUM(MS_ROW,MU_ROW,MW_ROW)=0,"Not calculated",1-MU_ROW/(MV_ROW-MT_ROW))
```

**出現位置**:
- FMEDA!MV1

---

### CONDITIONAL-101

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MZ1):
```excel
=IF(SUM(MY2,MZ2)=0,"Not calculated",1-MZ2/NB2)
```

**正規化公式**:
```
=IF(SUM(MY_ROW,MZ_ROW)=0,"Not calculated",1-MZ_ROW/NB_ROW)
```

**出現位置**:
- FMEDA!MZ1

---

### CONDITIONAL-102

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NB1):
```excel
=IF(SUM(MY2,NA2,NC2)=0,"Not calculated",1-NA2/(NB2-MZ2))
```

**正規化公式**:
```
=IF(SUM(MY_ROW,NA_ROW,NC_ROW)=0,"Not calculated",1-NA_ROW/(NB_ROW-MZ_ROW))
```

**出現位置**:
- FMEDA!NB1

---

### CONDITIONAL-103

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NF1):
```excel
=IF(SUM(NE2,NF2)=0,"Not calculated",1-NF2/NH2)
```

**正規化公式**:
```
=IF(SUM(NE_ROW,NF_ROW)=0,"Not calculated",1-NF_ROW/NH_ROW)
```

**出現位置**:
- FMEDA!NF1

---

### CONDITIONAL-104

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NH1):
```excel
=IF(SUM(NE2,NG2,NI2)=0,"Not calculated",1-NG2/(NH2-NF2))
```

**正規化公式**:
```
=IF(SUM(NE_ROW,NG_ROW,NI_ROW)=0,"Not calculated",1-NG_ROW/(NH_ROW-NF_ROW))
```

**出現位置**:
- FMEDA!NH1

---

### CONDITIONAL-105

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NL1):
```excel
=IF(SUM(NK2,NL2)=0,"Not calculated",1-NL2/NN2)
```

**正規化公式**:
```
=IF(SUM(NK_ROW,NL_ROW)=0,"Not calculated",1-NL_ROW/NN_ROW)
```

**出現位置**:
- FMEDA!NL1

---

### CONDITIONAL-106

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NN1):
```excel
=IF(SUM(NK2,NM2,NO2)=0,"Not calculated",1-NM2/(NN2-NL2))
```

**正規化公式**:
```
=IF(SUM(NK_ROW,NM_ROW,NO_ROW)=0,"Not calculated",1-NM_ROW/(NN_ROW-NL_ROW))
```

**出現位置**:
- FMEDA!NN1

---

### CONDITIONAL-107

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NR1):
```excel
=IF(SUM(NQ2,NR2)=0,"Not calculated",1-NR2/NT2)
```

**正規化公式**:
```
=IF(SUM(NQ_ROW,NR_ROW)=0,"Not calculated",1-NR_ROW/NT_ROW)
```

**出現位置**:
- FMEDA!NR1

---

### CONDITIONAL-108

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NT1):
```excel
=IF(SUM(NQ2,NS2,NU2)=0,"Not calculated",1-NS2/(NT2-NR2))
```

**正規化公式**:
```
=IF(SUM(NQ_ROW,NS_ROW,NU_ROW)=0,"Not calculated",1-NS_ROW/(NT_ROW-NR_ROW))
```

**出現位置**:
- FMEDA!NT1

---

### CONDITIONAL-109

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NX1):
```excel
=IF(SUM(NW2,NX2)=0,"Not calculated",1-NX2/NZ2)
```

**正規化公式**:
```
=IF(SUM(NW_ROW,NX_ROW)=0,"Not calculated",1-NX_ROW/NZ_ROW)
```

**出現位置**:
- FMEDA!NX1

---

### CONDITIONAL-110

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NZ1):
```excel
=IF(SUM(NW2,NY2,OA2)=0,"Not calculated",1-NY2/(NZ2-NX2))
```

**正規化公式**:
```
=IF(SUM(NW_ROW,NY_ROW,OA_ROW)=0,"Not calculated",1-NY_ROW/(NZ_ROW-NX_ROW))
```

**出現位置**:
- FMEDA!NZ1

---

### CONDITIONAL-111

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OD1):
```excel
=IF(SUM(OC2,OD2)=0,"Not calculated",1-OD2/OF2)
```

**正規化公式**:
```
=IF(SUM(OC_ROW,OD_ROW)=0,"Not calculated",1-OD_ROW/OF_ROW)
```

**出現位置**:
- FMEDA!OD1

---

### CONDITIONAL-112

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OF1):
```excel
=IF(SUM(OC2,OE2,OG2)=0,"Not calculated",1-OE2/(OF2-OD2))
```

**正規化公式**:
```
=IF(SUM(OC_ROW,OE_ROW,OG_ROW)=0,"Not calculated",1-OE_ROW/(OF_ROW-OD_ROW))
```

**出現位置**:
- FMEDA!OF1

---

### CONDITIONAL-113

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OJ1):
```excel
=IF(SUM(OI2,OJ2)=0,"Not calculated",1-OJ2/OL2)
```

**正規化公式**:
```
=IF(SUM(OI_ROW,OJ_ROW)=0,"Not calculated",1-OJ_ROW/OL_ROW)
```

**出現位置**:
- FMEDA!OJ1

---

### CONDITIONAL-114

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OL1):
```excel
=IF(SUM(OI2,OK2,OM2)=0,"Not calculated",1-OK2/(OL2-OJ2))
```

**正規化公式**:
```
=IF(SUM(OI_ROW,OK_ROW,OM_ROW)=0,"Not calculated",1-OK_ROW/(OL_ROW-OJ_ROW))
```

**出現位置**:
- FMEDA!OL1

---

### CONDITIONAL-115

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OP1):
```excel
=IF(SUM(OO2,OP2)=0,"Not calculated",1-OP2/OR2)
```

**正規化公式**:
```
=IF(SUM(OO_ROW,OP_ROW)=0,"Not calculated",1-OP_ROW/OR_ROW)
```

**出現位置**:
- FMEDA!OP1

---

### CONDITIONAL-116

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OR1):
```excel
=IF(SUM(OO2,OQ2,OS2)=0,"Not calculated",1-OQ2/(OR2-OP2))
```

**正規化公式**:
```
=IF(SUM(OO_ROW,OQ_ROW,OS_ROW)=0,"Not calculated",1-OQ_ROW/(OR_ROW-OP_ROW))
```

**出現位置**:
- FMEDA!OR1

---

### CONDITIONAL-117

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OV1):
```excel
=IF(SUM(OU2,OV2)=0,"Not calculated",1-OV2/OX2)
```

**正規化公式**:
```
=IF(SUM(OU_ROW,OV_ROW)=0,"Not calculated",1-OV_ROW/OX_ROW)
```

**出現位置**:
- FMEDA!OV1

---

### CONDITIONAL-118

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OX1):
```excel
=IF(SUM(OU2,OW2,OY2)=0,"Not calculated",1-OW2/(OX2-OV2))
```

**正規化公式**:
```
=IF(SUM(OU_ROW,OW_ROW,OY_ROW)=0,"Not calculated",1-OW_ROW/(OX_ROW-OV_ROW))
```

**出現位置**:
- FMEDA!OX1

---

### CONDITIONAL-119

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PB1):
```excel
=IF(SUM(PA2,PB2)=0,"Not calculated",1-PB2/PD2)
```

**正規化公式**:
```
=IF(SUM(PA_ROW,PB_ROW)=0,"Not calculated",1-PB_ROW/PD_ROW)
```

**出現位置**:
- FMEDA!PB1

---

### CONDITIONAL-120

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PD1):
```excel
=IF(SUM(PA2,PC2,PE2)=0,"Not calculated",1-PC2/(PD2-PB2))
```

**正規化公式**:
```
=IF(SUM(PA_ROW,PC_ROW,PE_ROW)=0,"Not calculated",1-PC_ROW/(PD_ROW-PB_ROW))
```

**出現位置**:
- FMEDA!PD1

---

### CONDITIONAL-121

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PH1):
```excel
=IF(SUM(PG2,PH2)=0,"Not calculated",1-PH2/PJ2)
```

**正規化公式**:
```
=IF(SUM(PG_ROW,PH_ROW)=0,"Not calculated",1-PH_ROW/PJ_ROW)
```

**出現位置**:
- FMEDA!PH1

---

### CONDITIONAL-122

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PJ1):
```excel
=IF(SUM(PG2,PI2,PK2)=0,"Not calculated",1-PI2/(PJ2-PH2))
```

**正規化公式**:
```
=IF(SUM(PG_ROW,PI_ROW,PK_ROW)=0,"Not calculated",1-PI_ROW/(PJ_ROW-PH_ROW))
```

**出現位置**:
- FMEDA!PJ1

---

### CONDITIONAL-123

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PN1):
```excel
=IF(SUM(PM2,PN2)=0,"Not calculated",1-PN2/PP2)
```

**正規化公式**:
```
=IF(SUM(PM_ROW,PN_ROW)=0,"Not calculated",1-PN_ROW/PP_ROW)
```

**出現位置**:
- FMEDA!PN1

---

### CONDITIONAL-124

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PP1):
```excel
=IF(SUM(PM2,PO2,PQ2)=0,"Not calculated",1-PO2/(PP2-PN2))
```

**正規化公式**:
```
=IF(SUM(PM_ROW,PO_ROW,PQ_ROW)=0,"Not calculated",1-PO_ROW/(PP_ROW-PN_ROW))
```

**出現位置**:
- FMEDA!PP1

---

### CONDITIONAL-125

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PT1):
```excel
=IF(SUM(PS2,PT2)=0,"Not calculated",1-PT2/PV2)
```

**正規化公式**:
```
=IF(SUM(PS_ROW,PT_ROW)=0,"Not calculated",1-PT_ROW/PV_ROW)
```

**出現位置**:
- FMEDA!PT1

---

### CONDITIONAL-126

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PV1):
```excel
=IF(SUM(PS2,PU2,PW2)=0,"Not calculated",1-PU2/(PV2-PT2))
```

**正規化公式**:
```
=IF(SUM(PS_ROW,PU_ROW,PW_ROW)=0,"Not calculated",1-PU_ROW/(PV_ROW-PT_ROW))
```

**出現位置**:
- FMEDA!PV1

---

### CONDITIONAL-127

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PZ1):
```excel
=IF(SUM(PY2,PZ2)=0,"Not calculated",1-PZ2/QB2)
```

**正規化公式**:
```
=IF(SUM(PY_ROW,PZ_ROW)=0,"Not calculated",1-PZ_ROW/QB_ROW)
```

**出現位置**:
- FMEDA!PZ1

---

### CONDITIONAL-128

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QB1):
```excel
=IF(SUM(PY2,QA2,QC2)=0,"Not calculated",1-QA2/(QB2-PZ2))
```

**正規化公式**:
```
=IF(SUM(PY_ROW,QA_ROW,QC_ROW)=0,"Not calculated",1-QA_ROW/(QB_ROW-PZ_ROW))
```

**出現位置**:
- FMEDA!QB1

---

### CONDITIONAL-129

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QF1):
```excel
=IF(SUM(QE2,QF2)=0,"Not calculated",1-QF2/QH2)
```

**正規化公式**:
```
=IF(SUM(QE_ROW,QF_ROW)=0,"Not calculated",1-QF_ROW/QH_ROW)
```

**出現位置**:
- FMEDA!QF1

---

### CONDITIONAL-130

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QH1):
```excel
=IF(SUM(QE2,QG2,QI2)=0,"Not calculated",1-QG2/(QH2-QF2))
```

**正規化公式**:
```
=IF(SUM(QE_ROW,QG_ROW,QI_ROW)=0,"Not calculated",1-QG_ROW/(QH_ROW-QF_ROW))
```

**出現位置**:
- FMEDA!QH1

---

### CONDITIONAL-131

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QL1):
```excel
=IF(SUM(QK2,QL2)=0,"Not calculated",1-QL2/QN2)
```

**正規化公式**:
```
=IF(SUM(QK_ROW,QL_ROW)=0,"Not calculated",1-QL_ROW/QN_ROW)
```

**出現位置**:
- FMEDA!QL1

---

### CONDITIONAL-132

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QN1):
```excel
=IF(SUM(QK2,QM2,QO2)=0,"Not calculated",1-QM2/(QN2-QL2))
```

**正規化公式**:
```
=IF(SUM(QK_ROW,QM_ROW,QO_ROW)=0,"Not calculated",1-QM_ROW/(QN_ROW-QL_ROW))
```

**出現位置**:
- FMEDA!QN1

---

### CONDITIONAL-133

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QR1):
```excel
=IF(SUM(QQ2,QR2)=0,"Not calculated",1-QR2/QT2)
```

**正規化公式**:
```
=IF(SUM(QQ_ROW,QR_ROW)=0,"Not calculated",1-QR_ROW/QT_ROW)
```

**出現位置**:
- FMEDA!QR1

---

### CONDITIONAL-134

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QT1):
```excel
=IF(SUM(QQ2,QS2,QU2)=0,"Not calculated",1-QS2/(QT2-QR2))
```

**正規化公式**:
```
=IF(SUM(QQ_ROW,QS_ROW,QU_ROW)=0,"Not calculated",1-QS_ROW/(QT_ROW-QR_ROW))
```

**出現位置**:
- FMEDA!QT1

---

### CONDITIONAL-135

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BR4):
```excel
=IF(HC4>0,IF(HC4=BO4,"No","Yes"),"NA")
```

**正規化公式**:
```
=IF(HC_ROW>0,IF(HC_ROW=BO_ROW,"No","Yes"),"NA")
```

**出現位置**:
- FMEDA!BR4
- FMEDA!BR5
- FMEDA!BR6
- FMEDA!BR7
- FMEDA!BR8
- FMEDA!BR9
- FMEDA!BR10
- FMEDA!BR11
- FMEDA!BR12
- FMEDA!BR13
- ... 及其他 1640 個

---

### CONDITIONAL-136

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BV4):
```excel
=IF($HC$2=0,0,BT4/$HC$2)
```

**正規化公式**:
```
=IF($HC$ROW=0,0,BT_ROW/$HC$ROW)
```

**出現位置**:
- FMEDA!BV4
- FMEDA!BV5
- FMEDA!BV6
- FMEDA!BV7
- FMEDA!BV8
- FMEDA!BV9
- FMEDA!BV10
- FMEDA!BV11
- FMEDA!BV12
- FMEDA!BV13
- ... 及其他 1640 個

---

### CONDITIONAL-137

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BY4):
```excel
=IF($HD$2=0,0,BW4/$HD$2)
```

**正規化公式**:
```
=IF($HD$ROW=0,0,BW_ROW/$HD$ROW)
```

**出現位置**:
- FMEDA!BY4
- FMEDA!BY5
- FMEDA!BY6
- FMEDA!BY7
- FMEDA!BY8
- FMEDA!BY9
- FMEDA!BY10
- FMEDA!BY11
- FMEDA!BY12
- FMEDA!BY13
- ... 及其他 1640 個

---

### CONDITIONAL-138

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CC4):
```excel
=IF(HN4>0,IF(HN4=BZ4,"No","Yes"),"NA")
```

**正規化公式**:
```
=IF(HN_ROW>0,IF(HN_ROW=BZ_ROW,"No","Yes"),"NA")
```

**出現位置**:
- FMEDA!CC4
- FMEDA!CC5
- FMEDA!CC6
- FMEDA!CC7
- FMEDA!CC8
- FMEDA!CC9
- FMEDA!CC10
- FMEDA!CC11
- FMEDA!CC12
- FMEDA!CC13
- ... 及其他 1640 個

---

### CONDITIONAL-139

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CG4):
```excel
=IF($HN$2=0,0,CE4/$HN$2)
```

**正規化公式**:
```
=IF($HN$ROW=0,0,CE_ROW/$HN$ROW)
```

**出現位置**:
- FMEDA!CG4
- FMEDA!CG5
- FMEDA!CG6
- FMEDA!CG7
- FMEDA!CG8
- FMEDA!CG9
- FMEDA!CG10
- FMEDA!CG11
- FMEDA!CG12
- FMEDA!CG13
- ... 及其他 1640 個

---

### CONDITIONAL-140

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CJ4):
```excel
=IF($HO$2=0,0,CH4/$HO$2)
```

**正規化公式**:
```
=IF($HO$ROW=0,0,CH_ROW/$HO$ROW)
```

**出現位置**:
- FMEDA!CJ4
- FMEDA!CJ5
- FMEDA!CJ6
- FMEDA!CJ7
- FMEDA!CJ8
- FMEDA!CJ9
- FMEDA!CJ10
- FMEDA!CJ11
- FMEDA!CJ12
- FMEDA!CJ13
- ... 及其他 1640 個

---

### CONDITIONAL-141

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CL4):
```excel
=IF(L4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(L_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!CL4
- FMEDA!CL5
- FMEDA!CL6
- FMEDA!CL7
- FMEDA!CL8
- FMEDA!CL9
- FMEDA!CL10
- FMEDA!CL11
- FMEDA!CL12
- FMEDA!CL13
- ... 及其他 1640 個

---

### CONDITIONAL-142

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CM4):
```excel
=IF(L4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(L_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!CM4
- FMEDA!CM5
- FMEDA!CM6
- FMEDA!CM7
- FMEDA!CM8
- FMEDA!CM9
- FMEDA!CM10
- FMEDA!CM11
- FMEDA!CM12
- FMEDA!CM13
- ... 及其他 1640 個

---

### CONDITIONAL-143

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CN4):
```excel
=SUM(IF(L4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",L4="S"),(F4*I4-CM4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(L_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",L_ROW="S"),(F_ROW*I_ROW-CM_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!CN4
- FMEDA!CN5
- FMEDA!CN6
- FMEDA!CN7
- FMEDA!CN8
- FMEDA!CN9
- FMEDA!CN10
- FMEDA!CN11
- FMEDA!CN12
- FMEDA!CN13
- ... 及其他 1640 個

---

### CONDITIONAL-144

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CO4):
```excel
=IF(OR(L4="S",L4="M",L4="N"),F4*I4,0)
```

**正規化公式**:
```
=IF(OR(L_ROW="S",L_ROW="M",L_ROW="N"),F_ROW*I_ROW,0)
```

**出現位置**:
- FMEDA!CO4
- FMEDA!CO5
- FMEDA!CO6
- FMEDA!CO7
- FMEDA!CO8
- FMEDA!CO9
- FMEDA!CO10
- FMEDA!CO11
- FMEDA!CO12
- FMEDA!CO13
- ... 及其他 1640 個

---

### CONDITIONAL-145

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CP4):
```excel
=SUM(IF(L4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",L4="S"),(F4*I4-CM4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(L_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",L_ROW="S"),(F_ROW*I_ROW-CM_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!CP4
- FMEDA!CP5
- FMEDA!CP6
- FMEDA!CP7
- FMEDA!CP8
- FMEDA!CP9
- FMEDA!CP10
- FMEDA!CP11
- FMEDA!CP12
- FMEDA!CP13
- ... 及其他 1640 個

---

### CONDITIONAL-146

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CR4):
```excel
=IF(M4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(M_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!CR4
- FMEDA!CR5
- FMEDA!CR6
- FMEDA!CR7
- FMEDA!CR8
- FMEDA!CR9
- FMEDA!CR10
- FMEDA!CR11
- FMEDA!CR12
- FMEDA!CR13
- ... 及其他 1640 個

---

### CONDITIONAL-147

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CS4):
```excel
=IF(M4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(M_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!CS4
- FMEDA!CS5
- FMEDA!CS6
- FMEDA!CS7
- FMEDA!CS8
- FMEDA!CS9
- FMEDA!CS10
- FMEDA!CS11
- FMEDA!CS12
- FMEDA!CS13
- ... 及其他 1640 個

---

### CONDITIONAL-148

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CT4):
```excel
=SUM(IF(M4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",M4="S"),(F4*I4-CS4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(M_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",M_ROW="S"),(F_ROW*I_ROW-CS_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!CT4
- FMEDA!CT5
- FMEDA!CT6
- FMEDA!CT7
- FMEDA!CT8
- FMEDA!CT9
- FMEDA!CT10
- FMEDA!CT11
- FMEDA!CT12
- FMEDA!CT13
- ... 及其他 1640 個

---

### CONDITIONAL-149

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CU4):
```excel
=IF(OR(M4="S",M4="M",M4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(M_ROW="S",M_ROW="M",M_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!CU4
- FMEDA!CU5
- FMEDA!CU6
- FMEDA!CU7
- FMEDA!CU8
- FMEDA!CU9
- FMEDA!CU10
- FMEDA!CU11
- FMEDA!CU12
- FMEDA!CU13
- ... 及其他 1640 個

---

### CONDITIONAL-150

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CV4):
```excel
=SUM(IF(M4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",M4="S"),(F4*I4-CS4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(M_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",M_ROW="S"),(F_ROW*I_ROW-CS_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!CV4
- FMEDA!CV5
- FMEDA!CV6
- FMEDA!CV7
- FMEDA!CV8
- FMEDA!CV9
- FMEDA!CV10
- FMEDA!CV11
- FMEDA!CV12
- FMEDA!CV13
- ... 及其他 1640 個

---

### CONDITIONAL-151

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CX4):
```excel
=IF(N4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(N_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!CX4
- FMEDA!CX5
- FMEDA!CX6
- FMEDA!CX7
- FMEDA!CX8
- FMEDA!CX9
- FMEDA!CX10
- FMEDA!CX11
- FMEDA!CX12
- FMEDA!CX13
- ... 及其他 1640 個

---

### CONDITIONAL-152

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CY4):
```excel
=IF(N4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(N_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!CY4
- FMEDA!CY5
- FMEDA!CY6
- FMEDA!CY7
- FMEDA!CY8
- FMEDA!CY9
- FMEDA!CY10
- FMEDA!CY11
- FMEDA!CY12
- FMEDA!CY13
- ... 及其他 1640 個

---

### CONDITIONAL-153

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CZ4):
```excel
=SUM(IF(N4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",N4="S"),(F4*I4-CY4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(N_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",N_ROW="S"),(F_ROW*I_ROW-CY_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!CZ4
- FMEDA!CZ5
- FMEDA!CZ6
- FMEDA!CZ7
- FMEDA!CZ8
- FMEDA!CZ9
- FMEDA!CZ10
- FMEDA!CZ11
- FMEDA!CZ12
- FMEDA!CZ13
- ... 及其他 1640 個

---

### CONDITIONAL-154

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DA4):
```excel
=IF(OR(N4="S",N4="M",N4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(N_ROW="S",N_ROW="M",N_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DA4
- FMEDA!DA5
- FMEDA!DA6
- FMEDA!DA7
- FMEDA!DA8
- FMEDA!DA9
- FMEDA!DA10
- FMEDA!DA11
- FMEDA!DA12
- FMEDA!DA13
- ... 及其他 1640 個

---

### CONDITIONAL-155

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DB4):
```excel
=SUM(IF(N4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",N4="S"),(F4*I4-CY4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(N_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",N_ROW="S"),(F_ROW*I_ROW-CY_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DB4
- FMEDA!DB5
- FMEDA!DB6
- FMEDA!DB7
- FMEDA!DB8
- FMEDA!DB9
- FMEDA!DB10
- FMEDA!DB11
- FMEDA!DB12
- FMEDA!DB13
- ... 及其他 1640 個

---

### CONDITIONAL-156

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DD4):
```excel
=IF(O4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(O_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DD4
- FMEDA!DD5
- FMEDA!DD6
- FMEDA!DD7
- FMEDA!DD8
- FMEDA!DD9
- FMEDA!DD10
- FMEDA!DD11
- FMEDA!DD12
- FMEDA!DD13
- ... 及其他 1640 個

---

### CONDITIONAL-157

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DE4):
```excel
=IF(O4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(O_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!DE4
- FMEDA!DE5
- FMEDA!DE6
- FMEDA!DE7
- FMEDA!DE8
- FMEDA!DE9
- FMEDA!DE10
- FMEDA!DE11
- FMEDA!DE12
- FMEDA!DE13
- ... 及其他 1640 個

---

### CONDITIONAL-158

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DF4):
```excel
=SUM(IF(O4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",O4="S"),(F4*I4-DE4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(O_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",O_ROW="S"),(F_ROW*I_ROW-DE_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DF4
- FMEDA!DF5
- FMEDA!DF6
- FMEDA!DF7
- FMEDA!DF8
- FMEDA!DF9
- FMEDA!DF10
- FMEDA!DF11
- FMEDA!DF12
- FMEDA!DF13
- ... 及其他 1640 個

---

### CONDITIONAL-159

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DG4):
```excel
=IF(OR(O4="S",O4="M",O4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(O_ROW="S",O_ROW="M",O_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DG4
- FMEDA!DG5
- FMEDA!DG6
- FMEDA!DG7
- FMEDA!DG8
- FMEDA!DG9
- FMEDA!DG10
- FMEDA!DG11
- FMEDA!DG12
- FMEDA!DG13
- ... 及其他 1640 個

---

### CONDITIONAL-160

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DH4):
```excel
=SUM(IF(O4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",O4="S"),(F4*I4-DE4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(O_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",O_ROW="S"),(F_ROW*I_ROW-DE_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DH4
- FMEDA!DH5
- FMEDA!DH6
- FMEDA!DH7
- FMEDA!DH8
- FMEDA!DH9
- FMEDA!DH10
- FMEDA!DH11
- FMEDA!DH12
- FMEDA!DH13
- ... 及其他 1640 個

---

### CONDITIONAL-161

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DJ4):
```excel
=IF(P4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(P_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DJ4
- FMEDA!DJ5
- FMEDA!DJ6
- FMEDA!DJ7
- FMEDA!DJ8
- FMEDA!DJ9
- FMEDA!DJ10
- FMEDA!DJ11
- FMEDA!DJ12
- FMEDA!DJ13
- ... 及其他 1640 個

---

### CONDITIONAL-162

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DK4):
```excel
=IF(P4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(P_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!DK4
- FMEDA!DK5
- FMEDA!DK6
- FMEDA!DK7
- FMEDA!DK8
- FMEDA!DK9
- FMEDA!DK10
- FMEDA!DK11
- FMEDA!DK12
- FMEDA!DK13
- ... 及其他 1640 個

---

### CONDITIONAL-163

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DL4):
```excel
=SUM(IF(P4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",P4="S"),(F4*I4-DK4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(P_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",P_ROW="S"),(F_ROW*I_ROW-DK_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DL4
- FMEDA!DL5
- FMEDA!DL6
- FMEDA!DL7
- FMEDA!DL8
- FMEDA!DL9
- FMEDA!DL10
- FMEDA!DL11
- FMEDA!DL12
- FMEDA!DL13
- ... 及其他 1640 個

---

### CONDITIONAL-164

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DM4):
```excel
=IF(OR(P4="S",P4="M",P4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(P_ROW="S",P_ROW="M",P_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DM4
- FMEDA!DM5
- FMEDA!DM6
- FMEDA!DM7
- FMEDA!DM8
- FMEDA!DM9
- FMEDA!DM10
- FMEDA!DM11
- FMEDA!DM12
- FMEDA!DM13
- ... 及其他 1640 個

---

### CONDITIONAL-165

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DN4):
```excel
=SUM(IF(P4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",P4="S"),(F4*I4-DK4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(P_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",P_ROW="S"),(F_ROW*I_ROW-DK_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DN4
- FMEDA!DN5
- FMEDA!DN6
- FMEDA!DN7
- FMEDA!DN8
- FMEDA!DN9
- FMEDA!DN10
- FMEDA!DN11
- FMEDA!DN12
- FMEDA!DN13
- ... 及其他 1640 個

---

### CONDITIONAL-166

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DP4):
```excel
=IF(Q4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(Q_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DP4
- FMEDA!DP5
- FMEDA!DP6
- FMEDA!DP7
- FMEDA!DP8
- FMEDA!DP9
- FMEDA!DP10
- FMEDA!DP11
- FMEDA!DP12
- FMEDA!DP13
- ... 及其他 1640 個

---

### CONDITIONAL-167

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DQ4):
```excel
=IF(Q4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(Q_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!DQ4
- FMEDA!DQ5
- FMEDA!DQ6
- FMEDA!DQ7
- FMEDA!DQ8
- FMEDA!DQ9
- FMEDA!DQ10
- FMEDA!DQ11
- FMEDA!DQ12
- FMEDA!DQ13
- ... 及其他 1640 個

---

### CONDITIONAL-168

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DR4):
```excel
=SUM(IF(Q4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",Q4="S"),(F4*I4-DQ4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Q_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Q_ROW="S"),(F_ROW*I_ROW-DQ_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DR4
- FMEDA!DR5
- FMEDA!DR6
- FMEDA!DR7
- FMEDA!DR8
- FMEDA!DR9
- FMEDA!DR10
- FMEDA!DR11
- FMEDA!DR12
- FMEDA!DR13
- ... 及其他 1640 個

---

### CONDITIONAL-169

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DS4):
```excel
=IF(OR(Q4="S",Q4="M",Q4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(Q_ROW="S",Q_ROW="M",Q_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DS4
- FMEDA!DS5
- FMEDA!DS6
- FMEDA!DS7
- FMEDA!DS8
- FMEDA!DS9
- FMEDA!DS10
- FMEDA!DS11
- FMEDA!DS12
- FMEDA!DS13
- ... 及其他 1640 個

---

### CONDITIONAL-170

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DT4):
```excel
=SUM(IF(Q4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",Q4="S"),(F4*I4-DQ4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Q_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Q_ROW="S"),(F_ROW*I_ROW-DQ_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DT4
- FMEDA!DT5
- FMEDA!DT6
- FMEDA!DT7
- FMEDA!DT8
- FMEDA!DT9
- FMEDA!DT10
- FMEDA!DT11
- FMEDA!DT12
- FMEDA!DT13
- ... 及其他 1640 個

---

### CONDITIONAL-171

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DV4):
```excel
=IF(R4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(R_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DV4
- FMEDA!DV5
- FMEDA!DV6
- FMEDA!DV7
- FMEDA!DV8
- FMEDA!DV9
- FMEDA!DV10
- FMEDA!DV11
- FMEDA!DV12
- FMEDA!DV13
- ... 及其他 1640 個

---

### CONDITIONAL-172

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DW4):
```excel
=IF(R4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(R_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!DW4
- FMEDA!DW5
- FMEDA!DW6
- FMEDA!DW7
- FMEDA!DW8
- FMEDA!DW9
- FMEDA!DW10
- FMEDA!DW11
- FMEDA!DW12
- FMEDA!DW13
- ... 及其他 1640 個

---

### CONDITIONAL-173

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DX4):
```excel
=SUM(IF(R4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",R4="S"),(F4*I4-DW4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(R_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",R_ROW="S"),(F_ROW*I_ROW-DW_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DX4
- FMEDA!DX5
- FMEDA!DX6
- FMEDA!DX7
- FMEDA!DX8
- FMEDA!DX9
- FMEDA!DX10
- FMEDA!DX11
- FMEDA!DX12
- FMEDA!DX13
- ... 及其他 1640 個

---

### CONDITIONAL-174

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DY4):
```excel
=IF(OR(R4="S",R4="M",R4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(R_ROW="S",R_ROW="M",R_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!DY4
- FMEDA!DY5
- FMEDA!DY6
- FMEDA!DY7
- FMEDA!DY8
- FMEDA!DY9
- FMEDA!DY10
- FMEDA!DY11
- FMEDA!DY12
- FMEDA!DY13
- ... 及其他 1640 個

---

### CONDITIONAL-175

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!DZ4):
```excel
=SUM(IF(R4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",R4="S"),(F4*I4-DW4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(R_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",R_ROW="S"),(F_ROW*I_ROW-DW_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!DZ4
- FMEDA!DZ5
- FMEDA!DZ6
- FMEDA!DZ7
- FMEDA!DZ8
- FMEDA!DZ9
- FMEDA!DZ10
- FMEDA!DZ11
- FMEDA!DZ12
- FMEDA!DZ13
- ... 及其他 1640 個

---

### CONDITIONAL-176

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EB4):
```excel
=IF(S4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(S_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!EB4
- FMEDA!EB5
- FMEDA!EB6
- FMEDA!EB7
- FMEDA!EB8
- FMEDA!EB9
- FMEDA!EB10
- FMEDA!EB11
- FMEDA!EB12
- FMEDA!EB13
- ... 及其他 1640 個

---

### CONDITIONAL-177

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EC4):
```excel
=IF(S4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(S_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!EC4
- FMEDA!EC5
- FMEDA!EC6
- FMEDA!EC7
- FMEDA!EC8
- FMEDA!EC9
- FMEDA!EC10
- FMEDA!EC11
- FMEDA!EC12
- FMEDA!EC13
- ... 及其他 1640 個

---

### CONDITIONAL-178

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!ED4):
```excel
=SUM(IF(S4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",S4="S"),(F4*I4-EC4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(S_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",S_ROW="S"),(F_ROW*I_ROW-EC_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!ED4
- FMEDA!ED5
- FMEDA!ED6
- FMEDA!ED7
- FMEDA!ED8
- FMEDA!ED9
- FMEDA!ED10
- FMEDA!ED11
- FMEDA!ED12
- FMEDA!ED13
- ... 及其他 1640 個

---

### CONDITIONAL-179

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EE4):
```excel
=IF(OR(S4="S",S4="M",S4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(S_ROW="S",S_ROW="M",S_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!EE4
- FMEDA!EE5
- FMEDA!EE6
- FMEDA!EE7
- FMEDA!EE8
- FMEDA!EE9
- FMEDA!EE10
- FMEDA!EE11
- FMEDA!EE12
- FMEDA!EE13
- ... 及其他 1640 個

---

### CONDITIONAL-180

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EF4):
```excel
=SUM(IF(S4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",S4="S"),(F4*I4-EC4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(S_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",S_ROW="S"),(F_ROW*I_ROW-EC_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!EF4
- FMEDA!EF5
- FMEDA!EF6
- FMEDA!EF7
- FMEDA!EF8
- FMEDA!EF9
- FMEDA!EF10
- FMEDA!EF11
- FMEDA!EF12
- FMEDA!EF13
- ... 及其他 1640 個

---

### CONDITIONAL-181

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EH4):
```excel
=IF(T4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(T_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!EH4
- FMEDA!EH5
- FMEDA!EH6
- FMEDA!EH7
- FMEDA!EH8
- FMEDA!EH9
- FMEDA!EH10
- FMEDA!EH11
- FMEDA!EH12
- FMEDA!EH13
- ... 及其他 1640 個

---

### CONDITIONAL-182

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EI4):
```excel
=IF(T4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(T_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!EI4
- FMEDA!EI5
- FMEDA!EI6
- FMEDA!EI7
- FMEDA!EI8
- FMEDA!EI9
- FMEDA!EI10
- FMEDA!EI11
- FMEDA!EI12
- FMEDA!EI13
- ... 及其他 1640 個

---

### CONDITIONAL-183

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EJ4):
```excel
=SUM(IF(T4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",T4="S"),(F4*I4-EI4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(T_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",T_ROW="S"),(F_ROW*I_ROW-EI_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!EJ4
- FMEDA!EJ5
- FMEDA!EJ6
- FMEDA!EJ7
- FMEDA!EJ8
- FMEDA!EJ9
- FMEDA!EJ10
- FMEDA!EJ11
- FMEDA!EJ12
- FMEDA!EJ13
- ... 及其他 1640 個

---

### CONDITIONAL-184

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EK4):
```excel
=IF(OR(T4="S",T4="M",T4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(T_ROW="S",T_ROW="M",T_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!EK4
- FMEDA!EK5
- FMEDA!EK6
- FMEDA!EK7
- FMEDA!EK8
- FMEDA!EK9
- FMEDA!EK10
- FMEDA!EK11
- FMEDA!EK12
- FMEDA!EK13
- ... 及其他 1640 個

---

### CONDITIONAL-185

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EL4):
```excel
=SUM(IF(T4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",T4="S"),(F4*I4-EI4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(T_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",T_ROW="S"),(F_ROW*I_ROW-EI_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!EL4
- FMEDA!EL5
- FMEDA!EL6
- FMEDA!EL7
- FMEDA!EL8
- FMEDA!EL9
- FMEDA!EL10
- FMEDA!EL11
- FMEDA!EL12
- FMEDA!EL13
- ... 及其他 1640 個

---

### CONDITIONAL-186

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EN4):
```excel
=IF(U4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(U_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!EN4
- FMEDA!EN5
- FMEDA!EN6
- FMEDA!EN7
- FMEDA!EN8
- FMEDA!EN9
- FMEDA!EN10
- FMEDA!EN11
- FMEDA!EN12
- FMEDA!EN13
- ... 及其他 1640 個

---

### CONDITIONAL-187

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EO4):
```excel
=IF(U4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(U_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!EO4
- FMEDA!EO5
- FMEDA!EO6
- FMEDA!EO7
- FMEDA!EO8
- FMEDA!EO9
- FMEDA!EO10
- FMEDA!EO11
- FMEDA!EO12
- FMEDA!EO13
- ... 及其他 1640 個

---

### CONDITIONAL-188

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EP4):
```excel
=SUM(IF(U4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",U4="S"),(F4*I4-EO4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(U_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",U_ROW="S"),(F_ROW*I_ROW-EO_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!EP4
- FMEDA!EP5
- FMEDA!EP6
- FMEDA!EP7
- FMEDA!EP8
- FMEDA!EP9
- FMEDA!EP10
- FMEDA!EP11
- FMEDA!EP12
- FMEDA!EP13
- ... 及其他 1640 個

---

### CONDITIONAL-189

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EQ4):
```excel
=IF(OR(U4="S",U4="M",U4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(U_ROW="S",U_ROW="M",U_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!EQ4
- FMEDA!EQ5
- FMEDA!EQ6
- FMEDA!EQ7
- FMEDA!EQ8
- FMEDA!EQ9
- FMEDA!EQ10
- FMEDA!EQ11
- FMEDA!EQ12
- FMEDA!EQ13
- ... 及其他 1640 個

---

### CONDITIONAL-190

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!ER4):
```excel
=SUM(IF(U4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",U4="S"),(F4*I4-EO4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(U_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",U_ROW="S"),(F_ROW*I_ROW-EO_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!ER4
- FMEDA!ER5
- FMEDA!ER6
- FMEDA!ER7
- FMEDA!ER8
- FMEDA!ER9
- FMEDA!ER10
- FMEDA!ER11
- FMEDA!ER12
- FMEDA!ER13
- ... 及其他 1640 個

---

### CONDITIONAL-191

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!ET4):
```excel
=IF(V4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(V_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!ET4
- FMEDA!ET5
- FMEDA!ET6
- FMEDA!ET7
- FMEDA!ET8
- FMEDA!ET9
- FMEDA!ET10
- FMEDA!ET11
- FMEDA!ET12
- FMEDA!ET13
- ... 及其他 1640 個

---

### CONDITIONAL-192

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EU4):
```excel
=IF(V4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(V_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!EU4
- FMEDA!EU5
- FMEDA!EU6
- FMEDA!EU7
- FMEDA!EU8
- FMEDA!EU9
- FMEDA!EU10
- FMEDA!EU11
- FMEDA!EU12
- FMEDA!EU13
- ... 及其他 1640 個

---

### CONDITIONAL-193

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EV4):
```excel
=SUM(IF(V4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",V4="S"),(F4*I4-EU4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(V_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",V_ROW="S"),(F_ROW*I_ROW-EU_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!EV4
- FMEDA!EV5
- FMEDA!EV6
- FMEDA!EV7
- FMEDA!EV8
- FMEDA!EV9
- FMEDA!EV10
- FMEDA!EV11
- FMEDA!EV12
- FMEDA!EV13
- ... 及其他 1640 個

---

### CONDITIONAL-194

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EW4):
```excel
=IF(OR(V4="S",V4="M",V4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(V_ROW="S",V_ROW="M",V_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!EW4
- FMEDA!EW5
- FMEDA!EW6
- FMEDA!EW7
- FMEDA!EW8
- FMEDA!EW9
- FMEDA!EW10
- FMEDA!EW11
- FMEDA!EW12
- FMEDA!EW13
- ... 及其他 1640 個

---

### CONDITIONAL-195

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EX4):
```excel
=SUM(IF(V4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",V4="S"),(F4*I4-EU4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(V_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",V_ROW="S"),(F_ROW*I_ROW-EU_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!EX4
- FMEDA!EX5
- FMEDA!EX6
- FMEDA!EX7
- FMEDA!EX8
- FMEDA!EX9
- FMEDA!EX10
- FMEDA!EX11
- FMEDA!EX12
- FMEDA!EX13
- ... 及其他 1640 個

---

### CONDITIONAL-196

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!EZ4):
```excel
=IF(W4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(W_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!EZ4
- FMEDA!EZ5
- FMEDA!EZ6
- FMEDA!EZ7
- FMEDA!EZ8
- FMEDA!EZ9
- FMEDA!EZ10
- FMEDA!EZ11
- FMEDA!EZ12
- FMEDA!EZ13
- ... 及其他 1640 個

---

### CONDITIONAL-197

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FA4):
```excel
=IF(W4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(W_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!FA4
- FMEDA!FA5
- FMEDA!FA6
- FMEDA!FA7
- FMEDA!FA8
- FMEDA!FA9
- FMEDA!FA10
- FMEDA!FA11
- FMEDA!FA12
- FMEDA!FA13
- ... 及其他 1640 個

---

### CONDITIONAL-198

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FB4):
```excel
=SUM(IF(W4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",W4="S"),(F4*I4-FA4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(W_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",W_ROW="S"),(F_ROW*I_ROW-FA_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FB4
- FMEDA!FB5
- FMEDA!FB6
- FMEDA!FB7
- FMEDA!FB8
- FMEDA!FB9
- FMEDA!FB10
- FMEDA!FB11
- FMEDA!FB12
- FMEDA!FB13
- ... 及其他 1640 個

---

### CONDITIONAL-199

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FC4):
```excel
=IF(OR(W4="S",W4="M",W4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(W_ROW="S",W_ROW="M",W_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!FC4
- FMEDA!FC5
- FMEDA!FC6
- FMEDA!FC7
- FMEDA!FC8
- FMEDA!FC9
- FMEDA!FC10
- FMEDA!FC11
- FMEDA!FC12
- FMEDA!FC13
- ... 及其他 1640 個

---

### CONDITIONAL-200

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FD4):
```excel
=SUM(IF(W4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",W4="S"),(F4*I4-FA4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(W_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",W_ROW="S"),(F_ROW*I_ROW-FA_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FD4
- FMEDA!FD5
- FMEDA!FD6
- FMEDA!FD7
- FMEDA!FD8
- FMEDA!FD9
- FMEDA!FD10
- FMEDA!FD11
- FMEDA!FD12
- FMEDA!FD13
- ... 及其他 1640 個

---

### CONDITIONAL-201

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FF4):
```excel
=IF(X4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(X_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!FF4
- FMEDA!FF5
- FMEDA!FF6
- FMEDA!FF7
- FMEDA!FF8
- FMEDA!FF9
- FMEDA!FF10
- FMEDA!FF11
- FMEDA!FF12
- FMEDA!FF13
- ... 及其他 1640 個

---

### CONDITIONAL-202

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FG4):
```excel
=IF(X4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(X_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!FG4
- FMEDA!FG5
- FMEDA!FG6
- FMEDA!FG7
- FMEDA!FG8
- FMEDA!FG9
- FMEDA!FG10
- FMEDA!FG11
- FMEDA!FG12
- FMEDA!FG13
- ... 及其他 1640 個

---

### CONDITIONAL-203

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FH4):
```excel
=SUM(IF(X4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",X4="S"),(F4*I4-FG4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(X_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",X_ROW="S"),(F_ROW*I_ROW-FG_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FH4
- FMEDA!FH5
- FMEDA!FH6
- FMEDA!FH7
- FMEDA!FH8
- FMEDA!FH9
- FMEDA!FH10
- FMEDA!FH11
- FMEDA!FH12
- FMEDA!FH13
- ... 及其他 1640 個

---

### CONDITIONAL-204

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FI4):
```excel
=IF(OR(X4="S",X4="M",X4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(X_ROW="S",X_ROW="M",X_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!FI4
- FMEDA!FI5
- FMEDA!FI6
- FMEDA!FI7
- FMEDA!FI8
- FMEDA!FI9
- FMEDA!FI10
- FMEDA!FI11
- FMEDA!FI12
- FMEDA!FI13
- ... 及其他 1640 個

---

### CONDITIONAL-205

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FJ4):
```excel
=SUM(IF(X4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",X4="S"),(F4*I4-FG4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(X_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",X_ROW="S"),(F_ROW*I_ROW-FG_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FJ4
- FMEDA!FJ5
- FMEDA!FJ6
- FMEDA!FJ7
- FMEDA!FJ8
- FMEDA!FJ9
- FMEDA!FJ10
- FMEDA!FJ11
- FMEDA!FJ12
- FMEDA!FJ13
- ... 及其他 1640 個

---

### CONDITIONAL-206

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FL4):
```excel
=IF(Y4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(Y_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!FL4
- FMEDA!FL5
- FMEDA!FL6
- FMEDA!FL7
- FMEDA!FL8
- FMEDA!FL9
- FMEDA!FL10
- FMEDA!FL11
- FMEDA!FL12
- FMEDA!FL13
- ... 及其他 1640 個

---

### CONDITIONAL-207

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FM4):
```excel
=IF(Y4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(Y_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!FM4
- FMEDA!FM5
- FMEDA!FM6
- FMEDA!FM7
- FMEDA!FM8
- FMEDA!FM9
- FMEDA!FM10
- FMEDA!FM11
- FMEDA!FM12
- FMEDA!FM13
- ... 及其他 1640 個

---

### CONDITIONAL-208

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FN4):
```excel
=SUM(IF(Y4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",Y4="S"),(F4*I4-FM4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Y_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Y_ROW="S"),(F_ROW*I_ROW-FM_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FN4
- FMEDA!FN5
- FMEDA!FN6
- FMEDA!FN7
- FMEDA!FN8
- FMEDA!FN9
- FMEDA!FN10
- FMEDA!FN11
- FMEDA!FN12
- FMEDA!FN13
- ... 及其他 1640 個

---

### CONDITIONAL-209

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FO4):
```excel
=IF(OR(Y4="S",Y4="M",Y4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(Y_ROW="S",Y_ROW="M",Y_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!FO4
- FMEDA!FO5
- FMEDA!FO6
- FMEDA!FO7
- FMEDA!FO8
- FMEDA!FO9
- FMEDA!FO10
- FMEDA!FO11
- FMEDA!FO12
- FMEDA!FO13
- ... 及其他 1640 個

---

### CONDITIONAL-210

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FP4):
```excel
=SUM(IF(Y4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",Y4="S"),(F4*I4-FM4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Y_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Y_ROW="S"),(F_ROW*I_ROW-FM_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FP4
- FMEDA!FP5
- FMEDA!FP6
- FMEDA!FP7
- FMEDA!FP8
- FMEDA!FP9
- FMEDA!FP10
- FMEDA!FP11
- FMEDA!FP12
- FMEDA!FP13
- ... 及其他 1640 個

---

### CONDITIONAL-211

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FR4):
```excel
=IF(Z4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(Z_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!FR4
- FMEDA!FR5
- FMEDA!FR6
- FMEDA!FR7
- FMEDA!FR8
- FMEDA!FR9
- FMEDA!FR10
- FMEDA!FR11
- FMEDA!FR12
- FMEDA!FR13
- ... 及其他 1640 個

---

### CONDITIONAL-212

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FS4):
```excel
=IF(Z4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(Z_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!FS4
- FMEDA!FS5
- FMEDA!FS6
- FMEDA!FS7
- FMEDA!FS8
- FMEDA!FS9
- FMEDA!FS10
- FMEDA!FS11
- FMEDA!FS12
- FMEDA!FS13
- ... 及其他 1640 個

---

### CONDITIONAL-213

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FT4):
```excel
=SUM(IF(Z4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",Z4="S"),(F4*I4-FS4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Z_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Z_ROW="S"),(F_ROW*I_ROW-FS_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FT4
- FMEDA!FT5
- FMEDA!FT6
- FMEDA!FT7
- FMEDA!FT8
- FMEDA!FT9
- FMEDA!FT10
- FMEDA!FT11
- FMEDA!FT12
- FMEDA!FT13
- ... 及其他 1640 個

---

### CONDITIONAL-214

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FU4):
```excel
=IF(OR(Z4="S",Z4="M",Z4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(Z_ROW="S",Z_ROW="M",Z_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!FU4
- FMEDA!FU5
- FMEDA!FU6
- FMEDA!FU7
- FMEDA!FU8
- FMEDA!FU9
- FMEDA!FU10
- FMEDA!FU11
- FMEDA!FU12
- FMEDA!FU13
- ... 及其他 1640 個

---

### CONDITIONAL-215

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FV4):
```excel
=SUM(IF(Z4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",Z4="S"),(F4*I4-FS4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Z_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Z_ROW="S"),(F_ROW*I_ROW-FS_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FV4
- FMEDA!FV5
- FMEDA!FV6
- FMEDA!FV7
- FMEDA!FV8
- FMEDA!FV9
- FMEDA!FV10
- FMEDA!FV11
- FMEDA!FV12
- FMEDA!FV13
- ... 及其他 1640 個

---

### CONDITIONAL-216

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FX4):
```excel
=IF(AA4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(AA_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!FX4
- FMEDA!FX5
- FMEDA!FX6
- FMEDA!FX7
- FMEDA!FX8
- FMEDA!FX9
- FMEDA!FX10
- FMEDA!FX11
- FMEDA!FX12
- FMEDA!FX13
- ... 及其他 1640 個

---

### CONDITIONAL-217

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FY4):
```excel
=IF(AA4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AA_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!FY4
- FMEDA!FY5
- FMEDA!FY6
- FMEDA!FY7
- FMEDA!FY8
- FMEDA!FY9
- FMEDA!FY10
- FMEDA!FY11
- FMEDA!FY12
- FMEDA!FY13
- ... 及其他 1640 個

---

### CONDITIONAL-218

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!FZ4):
```excel
=SUM(IF(AA4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AA4="S"),(F4*I4-FY4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AA_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AA_ROW="S"),(F_ROW*I_ROW-FY_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!FZ4
- FMEDA!FZ5
- FMEDA!FZ6
- FMEDA!FZ7
- FMEDA!FZ8
- FMEDA!FZ9
- FMEDA!FZ10
- FMEDA!FZ11
- FMEDA!FZ12
- FMEDA!FZ13
- ... 及其他 1640 個

---

### CONDITIONAL-219

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GA4):
```excel
=IF(OR(AA4="S",AA4="M",AA4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(AA_ROW="S",AA_ROW="M",AA_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GA4
- FMEDA!GA5
- FMEDA!GA6
- FMEDA!GA7
- FMEDA!GA8
- FMEDA!GA9
- FMEDA!GA10
- FMEDA!GA11
- FMEDA!GA12
- FMEDA!GA13
- ... 及其他 1640 個

---

### CONDITIONAL-220

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GB4):
```excel
=SUM(IF(AA4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AA4="S"),(F4*I4-FY4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AA_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AA_ROW="S"),(F_ROW*I_ROW-FY_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GB4
- FMEDA!GB5
- FMEDA!GB6
- FMEDA!GB7
- FMEDA!GB8
- FMEDA!GB9
- FMEDA!GB10
- FMEDA!GB11
- FMEDA!GB12
- FMEDA!GB13
- ... 及其他 1640 個

---

### CONDITIONAL-221

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GD4):
```excel
=IF(AB4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(AB_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GD4
- FMEDA!GD5
- FMEDA!GD6
- FMEDA!GD7
- FMEDA!GD8
- FMEDA!GD9
- FMEDA!GD10
- FMEDA!GD11
- FMEDA!GD12
- FMEDA!GD13
- ... 及其他 1640 個

---

### CONDITIONAL-222

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GE4):
```excel
=IF(AB4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AB_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!GE4
- FMEDA!GE5
- FMEDA!GE6
- FMEDA!GE7
- FMEDA!GE8
- FMEDA!GE9
- FMEDA!GE10
- FMEDA!GE11
- FMEDA!GE12
- FMEDA!GE13
- ... 及其他 1640 個

---

### CONDITIONAL-223

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GF4):
```excel
=SUM(IF(AB4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AB4="S"),(F4*I4-GE4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AB_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AB_ROW="S"),(F_ROW*I_ROW-GE_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GF4
- FMEDA!GF5
- FMEDA!GF6
- FMEDA!GF7
- FMEDA!GF8
- FMEDA!GF9
- FMEDA!GF10
- FMEDA!GF11
- FMEDA!GF12
- FMEDA!GF13
- ... 及其他 1640 個

---

### CONDITIONAL-224

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GG4):
```excel
=IF(OR(AB4="S",AB4="M",AB4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(AB_ROW="S",AB_ROW="M",AB_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GG4
- FMEDA!GG5
- FMEDA!GG6
- FMEDA!GG7
- FMEDA!GG8
- FMEDA!GG9
- FMEDA!GG10
- FMEDA!GG11
- FMEDA!GG12
- FMEDA!GG13
- ... 及其他 1640 個

---

### CONDITIONAL-225

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GH4):
```excel
=SUM(IF(AB4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AB4="S"),(F4*I4-GE4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AB_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AB_ROW="S"),(F_ROW*I_ROW-GE_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GH4
- FMEDA!GH5
- FMEDA!GH6
- FMEDA!GH7
- FMEDA!GH8
- FMEDA!GH9
- FMEDA!GH10
- FMEDA!GH11
- FMEDA!GH12
- FMEDA!GH13
- ... 及其他 1640 個

---

### CONDITIONAL-226

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GJ4):
```excel
=IF(AC4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(AC_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GJ4
- FMEDA!GJ5
- FMEDA!GJ6
- FMEDA!GJ7
- FMEDA!GJ8
- FMEDA!GJ9
- FMEDA!GJ10
- FMEDA!GJ11
- FMEDA!GJ12
- FMEDA!GJ13
- ... 及其他 1640 個

---

### CONDITIONAL-227

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GK4):
```excel
=IF(AC4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AC_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!GK4
- FMEDA!GK5
- FMEDA!GK6
- FMEDA!GK7
- FMEDA!GK8
- FMEDA!GK9
- FMEDA!GK10
- FMEDA!GK11
- FMEDA!GK12
- FMEDA!GK13
- ... 及其他 1640 個

---

### CONDITIONAL-228

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GL4):
```excel
=SUM(IF(AC4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AC4="S"),(F4*I4-GK4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AC_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AC_ROW="S"),(F_ROW*I_ROW-GK_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GL4
- FMEDA!GL5
- FMEDA!GL6
- FMEDA!GL7
- FMEDA!GL8
- FMEDA!GL9
- FMEDA!GL10
- FMEDA!GL11
- FMEDA!GL12
- FMEDA!GL13
- ... 及其他 1640 個

---

### CONDITIONAL-229

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GM4):
```excel
=IF(OR(AC4="S",AC4="M",AC4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(AC_ROW="S",AC_ROW="M",AC_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GM4
- FMEDA!GM5
- FMEDA!GM6
- FMEDA!GM7
- FMEDA!GM8
- FMEDA!GM9
- FMEDA!GM10
- FMEDA!GM11
- FMEDA!GM12
- FMEDA!GM13
- ... 及其他 1640 個

---

### CONDITIONAL-230

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GN4):
```excel
=SUM(IF(AC4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AC4="S"),(F4*I4-GK4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AC_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AC_ROW="S"),(F_ROW*I_ROW-GK_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GN4
- FMEDA!GN5
- FMEDA!GN6
- FMEDA!GN7
- FMEDA!GN8
- FMEDA!GN9
- FMEDA!GN10
- FMEDA!GN11
- FMEDA!GN12
- FMEDA!GN13
- ... 及其他 1640 個

---

### CONDITIONAL-231

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GP4):
```excel
=IF(AD4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(AD_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GP4
- FMEDA!GP5
- FMEDA!GP6
- FMEDA!GP7
- FMEDA!GP8
- FMEDA!GP9
- FMEDA!GP10
- FMEDA!GP11
- FMEDA!GP12
- FMEDA!GP13
- ... 及其他 1640 個

---

### CONDITIONAL-232

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GQ4):
```excel
=IF(AD4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AD_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!GQ4
- FMEDA!GQ5
- FMEDA!GQ6
- FMEDA!GQ7
- FMEDA!GQ8
- FMEDA!GQ9
- FMEDA!GQ10
- FMEDA!GQ11
- FMEDA!GQ12
- FMEDA!GQ13
- ... 及其他 1640 個

---

### CONDITIONAL-233

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GR4):
```excel
=SUM(IF(AD4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AD4="S"),(F4*I4-GQ4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AD_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AD_ROW="S"),(F_ROW*I_ROW-GQ_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GR4
- FMEDA!GR5
- FMEDA!GR6
- FMEDA!GR7
- FMEDA!GR8
- FMEDA!GR9
- FMEDA!GR10
- FMEDA!GR11
- FMEDA!GR12
- FMEDA!GR13
- ... 及其他 1640 個

---

### CONDITIONAL-234

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GS4):
```excel
=IF(OR(AD4="S",AD4="M",AD4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(AD_ROW="S",AD_ROW="M",AD_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GS4
- FMEDA!GS5
- FMEDA!GS6
- FMEDA!GS7
- FMEDA!GS8
- FMEDA!GS9
- FMEDA!GS10
- FMEDA!GS11
- FMEDA!GS12
- FMEDA!GS13
- ... 及其他 1640 個

---

### CONDITIONAL-235

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GT4):
```excel
=SUM(IF(AD4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AD4="S"),(F4*I4-GQ4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AD_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AD_ROW="S"),(F_ROW*I_ROW-GQ_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GT4
- FMEDA!GT5
- FMEDA!GT6
- FMEDA!GT7
- FMEDA!GT8
- FMEDA!GT9
- FMEDA!GT10
- FMEDA!GT11
- FMEDA!GT12
- FMEDA!GT13
- ... 及其他 1640 個

---

### CONDITIONAL-236

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GV4):
```excel
=IF(AE4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(AE_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GV4
- FMEDA!GV5
- FMEDA!GV6
- FMEDA!GV7
- FMEDA!GV8
- FMEDA!GV9
- FMEDA!GV10
- FMEDA!GV11
- FMEDA!GV12
- FMEDA!GV13
- ... 及其他 1640 個

---

### CONDITIONAL-237

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GW4):
```excel
=IF(AE4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AE_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!GW4
- FMEDA!GW5
- FMEDA!GW6
- FMEDA!GW7
- FMEDA!GW8
- FMEDA!GW9
- FMEDA!GW10
- FMEDA!GW11
- FMEDA!GW12
- FMEDA!GW13
- ... 及其他 1640 個

---

### CONDITIONAL-238

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GX4):
```excel
=SUM(IF(AE4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AE4="S"),(F4*I4-GW4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AE_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AE_ROW="S"),(F_ROW*I_ROW-GW_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GX4
- FMEDA!GX5
- FMEDA!GX6
- FMEDA!GX7
- FMEDA!GX8
- FMEDA!GX9
- FMEDA!GX10
- FMEDA!GX11
- FMEDA!GX12
- FMEDA!GX13
- ... 及其他 1640 個

---

### CONDITIONAL-239

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GY4):
```excel
=IF(OR(AE4="S",AE4="M",AE4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(AE_ROW="S",AE_ROW="M",AE_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!GY4
- FMEDA!GY5
- FMEDA!GY6
- FMEDA!GY7
- FMEDA!GY8
- FMEDA!GY9
- FMEDA!GY10
- FMEDA!GY11
- FMEDA!GY12
- FMEDA!GY13
- ... 及其他 1640 個

---

### CONDITIONAL-240

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!GZ4):
```excel
=SUM(IF(AE4="M",$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),IF(AND(HH4="Y",AE4="S"),(F4*I4-GW4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AE_ROW="M",$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AE_ROW="S"),(F_ROW*I_ROW-GW_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!GZ4
- FMEDA!GZ5
- FMEDA!GZ6
- FMEDA!GZ7
- FMEDA!GZ8
- FMEDA!GZ9
- FMEDA!GZ10
- FMEDA!GZ11
- FMEDA!GZ12
- FMEDA!GZ13
- ... 及其他 1640 個

---

### CONDITIONAL-241

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HB4):
```excel
=IF(HJ4="N",$F4*$I4,0)
```

**正規化公式**:
```
=IF(HJ_ROW="N",$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!HB4
- FMEDA!HB5
- FMEDA!HB6
- FMEDA!HB7
- FMEDA!HB8
- FMEDA!HB9
- FMEDA!HB10
- FMEDA!HB11
- FMEDA!HB12
- FMEDA!HB13
- ... 及其他 1640 個

---

### CONDITIONAL-242

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HC4):
```excel
=IF(HJ4="S",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(HJ_ROW="S",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!HC4
- FMEDA!HC5
- FMEDA!HC6
- FMEDA!HC7
- FMEDA!HC8
- FMEDA!HC9
- FMEDA!HC10
- FMEDA!HC11
- FMEDA!HC12
- FMEDA!HC13
- ... 及其他 1640 個

---

### CONDITIONAL-243

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HD4):
```excel
=SUM(
IF(AND(HJ4="M",HT4="M"),$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),
IF(AND(HJ4="M",HT4="S"),$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0),
IF(AND(HK4="Y",HJ4="S"),(F4*I4-HC4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(
IF(AND(HJ_ROW="M",HT_ROW="M"),$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),
IF(AND(HJ_ROW="M",HT_ROW="S"),$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0),
IF(AND(HK_ROW="Y",HJ_ROW="S"),(F_ROW*I_ROW-HC_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!HD4
- FMEDA!HD5
- FMEDA!HD6
- FMEDA!HD7
- FMEDA!HD8
- FMEDA!HD9
- FMEDA!HD10
- FMEDA!HD11
- FMEDA!HD12
- FMEDA!HD13
- ... 及其他 1640 個

---

### CONDITIONAL-244

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HE4):
```excel
=IF(OR(HJ4="S",HJ4="M",HJ4="N"),$F4*$I4,0)
```

**正規化公式**:
```
=IF(OR(HJ_ROW="S",HJ_ROW="M",HJ_ROW="N"),$F_ROW*$I_ROW,0)
```

**出現位置**:
- FMEDA!HE4
- FMEDA!HE5
- FMEDA!HE6
- FMEDA!HE7
- FMEDA!HE8
- FMEDA!HE9
- FMEDA!HE10
- FMEDA!HE11
- FMEDA!HE12
- FMEDA!HE13
- ... 及其他 1640 個

---

### CONDITIONAL-245

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HF4):
```excel
=SUM(
IF(AND(HJ4="M",HT4="M"),$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0),
IF(AND(HJ4="M",HT4="S"),$F4*$I4*(IF(SafetyGoalViolations!$M$25="Internal",$AP4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AP4)*(1-$AV4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AP4)*(1-$BB4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AP4)*(1-$BH4),"invalid"))))),0),
IF(AND(HK4="Y",HJ4="S"),(F4*I4-HC4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(
IF(AND(HJ_ROW="M",HT_ROW="M"),$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0),
IF(AND(HJ_ROW="M",HT_ROW="S"),$F_ROW*$I_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AP_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AP_ROW)*(1-$AV_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AP_ROW)*(1-$BB_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AP_ROW)*(1-$BH_ROW),"invalid"))))),0),
IF(AND(HK_ROW="Y",HJ_ROW="S"),(F_ROW*I_ROW-HC_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!HF4
- FMEDA!HF5
- FMEDA!HF6
- FMEDA!HF7
- FMEDA!HF8
- FMEDA!HF9
- FMEDA!HF10
- FMEDA!HF11
- FMEDA!HF12
- FMEDA!HF13
- ... 及其他 1640 個

---

### CONDITIONAL-246

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HH4):
```excel
=IF(SafetyGoalViolations!$M$25="Internal",FMEDA!AG4,IF(SafetyGoalViolations!$M$25="UseCase1",FMEDA!AI4,IF(SafetyGoalViolations!$M$25="UseCase2",FMEDA!AK4,IF(SafetyGoalViolations!$M$25="UseCase3",FMEDA!AM4,"invalid"))))
```

**正規化公式**:
```
=IF(SafetyGoalViolations!$M$ROW="Internal",FMEDA!AG_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",FMEDA!AI_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase2",FMEDA!AK_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase3",FMEDA!AM_ROW,"invalid"))))
```

**出現位置**:
- FMEDA!HH4
- FMEDA!HH5
- FMEDA!HH6
- FMEDA!HH7
- FMEDA!HH8
- FMEDA!HH9
- FMEDA!HH10
- FMEDA!HH11
- FMEDA!HH12
- FMEDA!HH13
- ... 及其他 1640 個

---

### CONDITIONAL-247

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HJ4):
```excel
=IF(OR(
AND($L4="S",SafetyGoalViolations!$M$3="Y",SafetyGoalViolations!$O$3="S"),
AND($M4="S",SafetyGoalViolations!$M$4="Y",SafetyGoalViolations!$O$4="S"),
AND($N4="S",SafetyGoalViolations!$M$5="Y",SafetyGoalViolations!$O$5="S"),
AND($O4="S",SafetyGoalViolations!$M$6="Y",SafetyGoalViolations!$O$6="S"),
AND($P4="S",SafetyGoalViolations!$M$7="Y",SafetyGoalViolations!$O$7="S"),
AND($Q4="S",SafetyGoalViolations!$M$8="Y",SafetyGoalViolations!$O$8="S"),
AND($R4="S",SafetyGoalViolations!$M$9="Y",SafetyGoalViolations!$O$9="S"),
AND($S4="S",SafetyGoalViolations!$M$10="Y",SafetyGoalViolations!$O$10="S"),
AND($T4="S",SafetyGoalViolations!$M$11="Y",SafetyGoalViolations!$O$11="S"),
AND($U4="S",SafetyGoalViolations!$M$12="Y",SafetyGoalViolations!$O$12="S"),
AND($V4="S",SafetyGoalViolations!$M$13="Y",SafetyGoalViolations!$O$13="S"),
AND($W4="S",SafetyGoalViolations!$M$14="Y",SafetyGoalViolations!$O$14="S"),
AND($X4="S",SafetyGoalViolations!$M$15="Y",SafetyGoalViolations!$O$15="S"),
AND($Y4="S",SafetyGoalViolations!$M$16="Y",SafetyGoalViolations!$O$16="S"),
AND($Z4="S",SafetyGoalViolations!$M$17="Y",SafetyGoalViolations!$O$17="S"),
AND($AA4="S",SafetyGoalViolations!$M$18="Y",SafetyGoalViolations!$O$18="S"),
AND($AB4="S",SafetyGoalViolations!$M$19="Y",SafetyGoalViolations!$O$19="S"),
AND($AC4="S",SafetyGoalViolations!$M$20="Y",SafetyGoalViolations!$O$20="S"),
AND($AD4="S",SafetyGoalViolations!$M$21="Y",SafetyGoalViolations!$O$21="S"),
AND($AE4="S",SafetyGoalViolations!$M$22="Y",SafetyGoalViolations!$O$22="S")),
"S",

IF(OR(
OR(AND($L4="M",SafetyGoalViolations!$M$3="Y",SafetyGoalViolations!$O$3="S"),AND($L4="S",SafetyGoalViolations!$M$3="Y",SafetyGoalViolations!$O$3="M")),
OR(AND($M4="M",SafetyGoalViolations!$M$4="Y",SafetyGoalViolations!$O$4="S"),AND($M4="S",SafetyGoalViolations!$M$4="Y",SafetyGoalViolations!$O$4="M")),
OR(AND($N4="M",SafetyGoalViolations!$M$5="Y",SafetyGoalViolations!$O$5="S"),AND($N4="S",SafetyGoalViolations!$M$5="Y",SafetyGoalViolations!$O$5="M")),
OR(AND($O4="M",SafetyGoalViolations!$M$6="Y",SafetyGoalViolations!$O$6="S"),AND($O4="S",SafetyGoalViolations!$M$6="Y",SafetyGoalViolations!$O$6="M")),
OR(AND($P4="M",SafetyGoalViolations!$M$7="Y",SafetyGoalViolations!$O$7="S"),AND($P4="S",SafetyGoalViolations!$M$7="Y",SafetyGoalViolations!$O$7="M")),
OR(AND($Q4="M",SafetyGoalViolations!$M$8="Y",SafetyGoalViolations!$O$8="S"),AND($Q4="S",SafetyGoalViolations!$M$8="Y",SafetyGoalViolations!$O$8="M")),
OR(AND($R4="M",SafetyGoalViolations!$M$9="Y",SafetyGoalViolations!$O$9="S"),AND($R4="S",SafetyGoalViolations!$M$9="Y",SafetyGoalViolations!$O$9="M")),
OR(AND($S4="M",SafetyGoalViolations!$M$10="Y",SafetyGoalViolations!$O$10="S"),AND($S4="S",SafetyGoalViolations!$M$10="Y",SafetyGoalViolations!$O$10="M")),
OR(AND($T4="M",SafetyGoalViolations!$M$11="Y",SafetyGoalViolations!$O$11="S"),AND($T4="S",SafetyGoalViolations!$M$11="Y",SafetyGoalViolations!$O$11="M")),
OR(AND($T4="M",SafetyGoalViolations!$M$11="Y",SafetyGoalViolations!$O$11="S"),AND($U4="S",SafetyGoalViolations!$M$12="Y",SafetyGoalViolations!$O$12="M")),
OR(AND($V4="M",SafetyGoalViolations!$M$13="Y",SafetyGoalViolations!$O$13="S"),AND($V4="S",SafetyGoalViolations!$M$13="Y",SafetyGoalViolations!$O$13="M")),
OR(AND($W4="M",SafetyGoalViolations!$M$14="Y",SafetyGoalViolations!$O$14="S"),AND($W4="S",SafetyGoalViolations!$M$14="Y",SafetyGoalViolations!$O$14="M")),
OR(AND($X4="M",SafetyGoalViolations!$M$15="Y",SafetyGoalViolations!$O$15="S"),AND($X4="S",SafetyGoalViolations!$M$15="Y",SafetyGoalViolations!$O$15="M")),
OR(AND($Y4="M",SafetyGoalViolations!$M$16="Y",SafetyGoalViolations!$O$16="S"),AND($Y4="S",SafetyGoalViolations!$M$16="Y",SafetyGoalViolations!$O$16="M")),
OR(AND($Z4="M",SafetyGoalViolations!$M$17="Y",SafetyGoalViolations!$O$17="S"),AND($Z4="S",SafetyGoalViolations!$M$17="Y",SafetyGoalViolations!$O$17="M")),
OR(AND($AA4="M",SafetyGoalViolations!$M$18="Y",SafetyGoalViolations!$O$18="S"),AND($AA4="S",SafetyGoalViolations!$M$18="Y",SafetyGoalViolations!$O$18="M")),
OR(AND($AB4="M",SafetyGoalViolations!$M$19="Y",SafetyGoalViolations!$O$19="S"),AND($AB4="S",SafetyGoalViolations!$M$19="Y",SafetyGoalViolations!$O$19="M")),
OR(AND($AC4="M",SafetyGoalViolations!$M$20="Y",SafetyGoalViolations!$O$20="S"),AND($AC4="S",SafetyGoalViolations!$M$20="Y",SafetyGoalViolations!$O$20="M")),
OR(AND($AD4="M",SafetyGoalViolations!$M$21="Y",SafetyGoalViolations!$O$21="S"),AND($AD4="S",SafetyGoalViolations!$M$21="Y",SafetyGoalViolations!$O$21="M")),
OR(AND($AE4="M",SafetyGoalViolations!$M$22="Y",SafetyGoalViolations!$O$22="S"),AND($AE4="S",SafetyGoalViolations!$M$22="Y",SafetyGoalViolations!$O$22="M"))),
"M",

IF(OR(
OR(AND($L4="N",SafetyGoalViolations!$M$3="Y"),AND($L4="M",SafetyGoalViolations!$M$3="Y",SafetyGoalViolations!$O$3="M")),
OR(AND($M4="N",SafetyGoalViolations!$M$4="Y"),AND($M4="M",SafetyGoalViolations!$M$4="Y",SafetyGoalViolations!$O$4="M")),
OR(AND($N4="N",SafetyGoalViolations!$M$5="Y"),AND($N4="M",SafetyGoalViolations!$M$5="Y",SafetyGoalViolations!$O$5="M")),
OR(AND($O4="N",SafetyGoalViolations!$M$6="Y"),AND($O4="M",SafetyGoalViolations!$M$6="Y",SafetyGoalViolations!$O$6="M")),
OR(AND($P4="N",SafetyGoalViolations!$M$7="Y"),AND($P4="M",SafetyGoalViolations!$M$7="Y",SafetyGoalViolations!$O$7="M")),
OR(AND($Q4="N",SafetyGoalViolations!$M$8="Y"),AND($Q4="M",SafetyGoalViolations!$M$8="Y",SafetyGoalViolations!$O$8="M")),
OR(AND($R4="N",SafetyGoalViolations!$M$9="Y"),AND($R4="M",SafetyGoalViolations!$M$9="Y",SafetyGoalViolations!$O$9="M")),
OR(AND($S4="N",SafetyGoalViolations!$M$10="Y"),AND($S4="M",SafetyGoalViolations!$M$10="Y",SafetyGoalViolations!$O$10="M")),
OR(AND($T4="N",SafetyGoalViolations!$M$11="Y"),AND($T4="M",SafetyGoalViolations!$M$11="Y",SafetyGoalViolations!$O$11="M")),
OR(AND($U4="N",SafetyGoalViolations!$M$12="Y"),AND($U4="M",SafetyGoalViolations!$M$12="Y",SafetyGoalViolations!$O$12="M")),
OR(AND($V4="N",SafetyGoalViolations!$M$13="Y"),AND($V4="M",SafetyGoalViolations!$M$13="Y",SafetyGoalViolations!$O$13="M")),
OR(AND($W4="N",SafetyGoalViolations!$M$14="Y"),AND($W4="M",SafetyGoalViolations!$M$14="Y",SafetyGoalViolations!$O$14="M")),
OR(AND($X4="N",SafetyGoalViolations!$M$15="Y"),AND($X4="M",SafetyGoalViolations!$M$15="Y",SafetyGoalViolations!$O$15="M")),
OR(AND($Y4="N",SafetyGoalViolations!$M$16="Y"),AND($Y4="M",SafetyGoalViolations!$M$16="Y",SafetyGoalViolations!$O$16="M")),
OR(AND($Z4="N",SafetyGoalViolations!$M$17="Y"),AND($Z4="M",SafetyGoalViolations!$M$17="Y",SafetyGoalViolations!$O$17="M")),
OR(AND($AA4="N",SafetyGoalViolations!$M$18="Y"),AND($AA4="M",SafetyGoalViolations!$M$18="Y",SafetyGoalViolations!$O$18="M")),
OR(AND($AB4="N",SafetyGoalViolations!$M$19="Y"),AND($AB4="M",SafetyGoalViolations!$M$19="Y",SafetyGoalViolations!$O$19="M")),
OR(AND($AC4="N",SafetyGoalViolations!$M$20="Y"),AND($AC4="M",SafetyGoalViolations!$M$20="Y",SafetyGoalViolations!$O$20="M")),
OR(AND($AD4="N",SafetyGoalViolations!$M$21="Y"),AND($AD4="M",SafetyGoalViolations!$M$21="Y",SafetyGoalViolations!$O$21="M")),
OR(AND($AE4="N",SafetyGoalViolations!$M$22="Y"),AND($AE4="M",SafetyGoalViolations!$M$22="Y",SafetyGoalViolations!$O$22="M"))),
"N",

"-")))
```

**正規化公式**:
```
=IF(OR(
AND($L_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($M_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($N_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($O_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($P_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($Q_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($R_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($S_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($T_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($U_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($V_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($W_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($X_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($Y_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($Z_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($AA_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($AB_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($AC_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($AD_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),
AND($AE_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S")),
"S",

IF(OR(
OR(AND($L_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($L_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($M_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($M_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($N_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($N_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($O_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($O_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($P_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($P_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($Q_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($Q_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($R_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($R_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($S_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($S_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($T_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($T_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($T_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($U_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($V_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($V_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($W_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($W_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($X_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($X_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($Y_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($Y_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($Z_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($Z_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AA_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($AA_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AB_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($AB_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AC_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($AC_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AD_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($AD_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AE_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="S"),AND($AE_ROW="S",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M"))),
"M",

IF(OR(
OR(AND($L_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($L_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($M_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($M_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($N_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($N_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($O_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($O_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($P_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($P_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($Q_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($Q_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($R_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($R_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($S_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($S_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($T_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($T_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($U_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($U_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($V_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($V_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($W_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($W_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($X_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($X_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($Y_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($Y_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($Z_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($Z_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AA_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AA_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AB_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AB_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AC_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AC_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AD_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AD_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M")),
OR(AND($AE_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AE_ROW="M",SafetyGoalViolations!$M$ROW="Y",SafetyGoalViolations!$O$ROW="M"))),
"N",

"-")))
```

**出現位置**:
- FMEDA!HJ4
- FMEDA!HJ5
- FMEDA!HJ6
- FMEDA!HJ7
- FMEDA!HJ8
- FMEDA!HJ9
- FMEDA!HJ10
- FMEDA!HJ11
- FMEDA!HJ12
- FMEDA!HJ13
- ... 及其他 1640 個

---

### CONDITIONAL-248

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HK4):
```excel
=IF(OR(AND($HH4="Y",SafetyGoalViolations!$M$3="Y"),AND($HH4="Y",SafetyGoalViolations!$M$4="Y"),AND($HH4="Y",SafetyGoalViolations!$M$5="Y"),AND($HH4="Y",SafetyGoalViolations!$M$6="Y"),AND($HH4="Y",SafetyGoalViolations!$M$7="Y"),AND($HH4="Y",SafetyGoalViolations!$M$8="Y"),AND($HH4="Y",SafetyGoalViolations!$M$9="Y"),AND($HH4="Y",SafetyGoalViolations!$M$10="Y"),AND($HH4="Y",SafetyGoalViolations!$M$11="Y"),AND($HH4="Y",SafetyGoalViolations!$M$12="Y"),AND($HH4="Y",SafetyGoalViolations!$M$13="Y"),AND($HH4="Y",SafetyGoalViolations!$M$14="Y"),AND($HH4="Y",SafetyGoalViolations!$M$15="Y"),AND($HH4="Y",SafetyGoalViolations!$M$16="Y"),AND($HH4="Y",SafetyGoalViolations!$M$17="Y"),AND($HH4="S",SafetyGoalViolations!$M$18="Y"),AND($HH4="Y",SafetyGoalViolations!$M$19="Y"),AND($HH4="Y",SafetyGoalViolations!$M$20="Y"),AND($HH4="Y",SafetyGoalViolations!$M$21="Y"),AND($HH4="Y",SafetyGoalViolations!$M$22="Y")),"Y","N")
```

**正規化公式**:
```
=IF(OR(AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y"),AND($HH_ROW="Y",SafetyGoalViolations!$M$ROW="Y")),"Y","N")
```

**出現位置**:
- FMEDA!HK4
- FMEDA!HK5
- FMEDA!HK6
- FMEDA!HK7
- FMEDA!HK8
- FMEDA!HK9
- FMEDA!HK10
- FMEDA!HK11
- FMEDA!HK12
- FMEDA!HK13
- ... 及其他 1640 個

---

### CONDITIONAL-249

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HM4):
```excel
=IF(HJ4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(HJ_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!HM4
- FMEDA!HM5
- FMEDA!HM6
- FMEDA!HM7
- FMEDA!HM8
- FMEDA!HM9
- FMEDA!HM10
- FMEDA!HM11
- FMEDA!HM12
- FMEDA!HM13
- ... 及其他 1640 個

---

### CONDITIONAL-250

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HN4):
```excel
=IF(HJ4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(HJ_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!HN4
- FMEDA!HN5
- FMEDA!HN6
- FMEDA!HN7
- FMEDA!HN8
- FMEDA!HN9
- FMEDA!HN10
- FMEDA!HN11
- FMEDA!HN12
- FMEDA!HN13
- ... 及其他 1640 個

---

### CONDITIONAL-251

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HO4):
```excel
=SUM(IF(HJ4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HK4="Y",HJ4="S"),(G4*J4-HN4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(HJ_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HK_ROW="Y",HJ_ROW="S"),(G_ROW*J_ROW-HN_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!HO4
- FMEDA!HO5
- FMEDA!HO6
- FMEDA!HO7
- FMEDA!HO8
- FMEDA!HO9
- FMEDA!HO10
- FMEDA!HO11
- FMEDA!HO12
- FMEDA!HO13
- ... 及其他 1640 個

---

### CONDITIONAL-252

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HP4):
```excel
=IF(OR(HJ4="S",HJ4="M",HJ4="N"),$G4*$J4,0)
```

**正規化公式**:
```
=IF(OR(HJ_ROW="S",HJ_ROW="M",HJ_ROW="N"),$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!HP4
- FMEDA!HP5
- FMEDA!HP6
- FMEDA!HP7
- FMEDA!HP8
- FMEDA!HP9
- FMEDA!HP10
- FMEDA!HP11
- FMEDA!HP12
- FMEDA!HP13
- ... 及其他 1640 個

---

### CONDITIONAL-253

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HQ4):
```excel
=SUM(IF(HJ4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HK4="Y",HJ4="S"),(G4*J4-HN4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(HJ_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HK_ROW="Y",HJ_ROW="S"),(G_ROW*J_ROW-HN_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!HQ4
- FMEDA!HQ5
- FMEDA!HQ6
- FMEDA!HQ7
- FMEDA!HQ8
- FMEDA!HQ9
- FMEDA!HQ10
- FMEDA!HQ11
- FMEDA!HQ12
- FMEDA!HQ13
- ... 及其他 1640 個

---

### CONDITIONAL-254

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!HT4):
```excel
=IF(OR(AND($L4="S",SafetyGoalViolations!$M$3="Y"),AND($M4="S",SafetyGoalViolations!$M$4="Y"),AND($N4="S",SafetyGoalViolations!$M$5="Y"),AND($O4="S",SafetyGoalViolations!$M$6="Y"),AND($P4="S",SafetyGoalViolations!$M$7="Y"),AND($Q4="S",SafetyGoalViolations!$M$8="Y"),AND($R4="S",SafetyGoalViolations!$M$9="Y"),AND($S4="S",SafetyGoalViolations!$M$10="Y"),AND($T4="S",SafetyGoalViolations!$M$11="Y"),AND($U4="S",SafetyGoalViolations!$M$12="Y"),AND($V4="S",SafetyGoalViolations!$M$13="Y"),AND($W4="S",SafetyGoalViolations!$M$14="Y"),AND($X4="S",SafetyGoalViolations!$M$15="Y"),AND($Y4="S",SafetyGoalViolations!$M$16="Y"),AND($Z4="S",SafetyGoalViolations!$M$17="Y"),AND($AA4="S",SafetyGoalViolations!$M$18="Y"),AND($AB4="S",SafetyGoalViolations!$M$19="Y"),AND($AC4="S",SafetyGoalViolations!$M$20="Y"),AND($AD4="S",SafetyGoalViolations!$M$21="Y"),AND($AE4="S",SafetyGoalViolations!$M$22="Y")),"S",

IF(OR(AND($L4="M",SafetyGoalViolations!$M$3="Y"),AND($M4="M",SafetyGoalViolations!$M$4="Y"),AND($N4="M",SafetyGoalViolations!$M$5="Y"),AND($O4="M",SafetyGoalViolations!$M$6="Y"),AND($P4="M",SafetyGoalViolations!$M$7="Y"),AND($Q4="M",SafetyGoalViolations!$M$8="Y"),AND($R4="M",SafetyGoalViolations!$M$9="Y"),AND($S4="M",SafetyGoalViolations!$M$10="Y"),AND($T4="M",SafetyGoalViolations!$M$11="Y"),AND($U4="M",SafetyGoalViolations!$M$12="Y"),AND($V4="M",SafetyGoalViolations!$M$13="Y"),AND($W4="M",SafetyGoalViolations!$M$14="Y"),AND($X4="M",SafetyGoalViolations!$M$15="Y"),AND($Y4="M",SafetyGoalViolations!$M$16="Y"),AND($Z4="M",SafetyGoalViolations!$M$17="Y"),AND($AA4="M",SafetyGoalViolations!$M$18="Y"),AND($AB4="M",SafetyGoalViolations!$M$19="Y"),AND($AC4="M",SafetyGoalViolations!$M$20="Y"),AND($AD4="M",SafetyGoalViolations!$M$21="Y"),AND($AE4="M",SafetyGoalViolations!$M$22="Y")),"M",

IF(OR(AND($L4="N",SafetyGoalViolations!$M$3="Y"),AND($M4="N",SafetyGoalViolations!$M$4="Y"),AND($N4="N",SafetyGoalViolations!$M$5="Y"),AND($O4="N",SafetyGoalViolations!$M$6="Y"),AND($P4="N",SafetyGoalViolations!$M$7="Y"),AND($Q4="N",SafetyGoalViolations!$M$8="Y"),AND($R4="N",SafetyGoalViolations!$M$9="Y"),AND($S4="N",SafetyGoalViolations!$M$10="Y"),AND($T4="N",SafetyGoalViolations!$M$11="Y"),AND($U4="N",SafetyGoalViolations!$M$12="Y"),AND($V4="N",SafetyGoalViolations!$M$13="Y"),AND($W4="N",SafetyGoalViolations!$M$14="Y"),AND($X4="N",SafetyGoalViolations!$M$15="Y"),AND($Y4="N",SafetyGoalViolations!$M$16="Y"),AND($Z4="N",SafetyGoalViolations!$M$17="Y"),AND($AA4="N",SafetyGoalViolations!$M$18="Y"),AND($AB4="N",SafetyGoalViolations!$M$19="Y"),AND($AC4="N",SafetyGoalViolations!$M$20="Y"),AND($AD4="N",SafetyGoalViolations!$M$21="Y"),AND($AE4="N",SafetyGoalViolations!$M$22="Y")),"N",

"-")))
```

**正規化公式**:
```
=IF(OR(AND($L_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($M_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($N_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($O_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($P_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($Q_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($R_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($S_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($T_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($U_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($V_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($W_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($X_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($Y_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($Z_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($AA_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($AB_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($AC_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($AD_ROW="S",SafetyGoalViolations!$M$ROW="Y"),AND($AE_ROW="S",SafetyGoalViolations!$M$ROW="Y")),"S",

IF(OR(AND($L_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($M_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($N_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($O_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($P_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($Q_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($R_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($S_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($T_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($U_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($V_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($W_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($X_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($Y_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($Z_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($AA_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($AB_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($AC_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($AD_ROW="M",SafetyGoalViolations!$M$ROW="Y"),AND($AE_ROW="M",SafetyGoalViolations!$M$ROW="Y")),"M",

IF(OR(AND($L_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($M_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($N_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($O_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($P_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($Q_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($R_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($S_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($T_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($U_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($V_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($W_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($X_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($Y_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($Z_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AA_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AB_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AC_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AD_ROW="N",SafetyGoalViolations!$M$ROW="Y"),AND($AE_ROW="N",SafetyGoalViolations!$M$ROW="Y")),"N",

"-")))
```

**出現位置**:
- FMEDA!HT4
- FMEDA!HT5
- FMEDA!HT6
- FMEDA!HT7
- FMEDA!HT8
- FMEDA!HT9
- FMEDA!HT10
- FMEDA!HT11
- FMEDA!HT12
- FMEDA!HT13
- ... 及其他 1640 個

---

### CONDITIONAL-255

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!HW4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,FMEDA!$HB4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,FMEDA!$HB_ROW,0)
```

**出現位置**:
- FMEDA!HW4
- FMEDA!IC4
- FMEDA!II4
- FMEDA!IO4
- FMEDA!IU4
- FMEDA!JA4
- FMEDA!HW5
- FMEDA!IC5
- FMEDA!II5
- FMEDA!IO5
- ... 及其他 9890 個

---

### CONDITIONAL-256

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!HX4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,FMEDA!$HC4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,FMEDA!$HC_ROW,0)
```

**出現位置**:
- FMEDA!HX4
- FMEDA!ID4
- FMEDA!IJ4
- FMEDA!IP4
- FMEDA!IV4
- FMEDA!JB4
- FMEDA!HX5
- FMEDA!ID5
- FMEDA!IJ5
- FMEDA!IP5
- ... 及其他 9890 個

---

### CONDITIONAL-257

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!HY4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,FMEDA!$HD4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,FMEDA!$HD_ROW,0)
```

**出現位置**:
- FMEDA!HY4
- FMEDA!IE4
- FMEDA!IK4
- FMEDA!IQ4
- FMEDA!IW4
- FMEDA!JC4
- FMEDA!HY5
- FMEDA!IE5
- FMEDA!IK5
- FMEDA!IQ5
- ... 及其他 9890 個

---

### CONDITIONAL-258

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!HZ4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,F4*I4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,F_ROW*I_ROW,0)
```

**出現位置**:
- FMEDA!HZ4
- FMEDA!IF4
- FMEDA!IL4
- FMEDA!IR4
- FMEDA!IX4
- FMEDA!JD4
- FMEDA!HZ5
- FMEDA!IF5
- FMEDA!IL5
- FMEDA!IR5
- ... 及其他 9890 個

---

### CONDITIONAL-259

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!IA4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,FMEDA!$HF4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,FMEDA!$HF_ROW,0)
```

**出現位置**:
- FMEDA!IA4
- FMEDA!IG4
- FMEDA!IM4
- FMEDA!IS4
- FMEDA!IY4
- FMEDA!JE4
- FMEDA!IA5
- FMEDA!IG5
- FMEDA!IM5
- FMEDA!IS5
- ... 及其他 9890 個

---

### CONDITIONAL-260

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!JG4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,FMEDA!$HM4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,FMEDA!$HM_ROW,0)
```

**出現位置**:
- FMEDA!JG4
- FMEDA!JM4
- FMEDA!JS4
- FMEDA!JY4
- FMEDA!KE4
- FMEDA!KK4
- FMEDA!JG5
- FMEDA!JM5
- FMEDA!JS5
- FMEDA!JY5
- ... 及其他 9890 個

---

### CONDITIONAL-261

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!JH4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,FMEDA!$HN4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,FMEDA!$HN_ROW,0)
```

**出現位置**:
- FMEDA!JH4
- FMEDA!JN4
- FMEDA!JT4
- FMEDA!JZ4
- FMEDA!KF4
- FMEDA!KL4
- FMEDA!JH5
- FMEDA!JN5
- FMEDA!JT5
- FMEDA!JZ5
- ... 及其他 9890 個

---

### CONDITIONAL-262

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!JI4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,FMEDA!$HO4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,FMEDA!$HO_ROW,0)
```

**出現位置**:
- FMEDA!JI4
- FMEDA!JO4
- FMEDA!JU4
- FMEDA!KA4
- FMEDA!KG4
- FMEDA!KM4
- FMEDA!JI5
- FMEDA!JO5
- FMEDA!JU5
- FMEDA!KA5
- ... 及其他 9890 個

---

### CONDITIONAL-263

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!JJ4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,G4*J4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!JJ4
- FMEDA!JP4
- FMEDA!JV4
- FMEDA!KB4
- FMEDA!KH4
- FMEDA!KN4
- FMEDA!JJ5
- FMEDA!JP5
- FMEDA!JV5
- FMEDA!KB5
- ... 及其他 9890 個

---

### CONDITIONAL-264

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!JK4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,FMEDA!$HQ4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,FMEDA!$HQ_ROW,0)
```

**出現位置**:
- FMEDA!JK4
- FMEDA!JQ4
- FMEDA!JW4
- FMEDA!KC4
- FMEDA!KI4
- FMEDA!KO4
- FMEDA!JK5
- FMEDA!JQ5
- FMEDA!JW5
- FMEDA!KC5
- ... 及其他 9890 個

---

### CONDITIONAL-265

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!KQ4):
```excel
=IF(AND(HK4="Y",HJ4="S"),(F4*I4-HC4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AND(HK_ROW="Y",HJ_ROW="S"),(F_ROW*I_ROW-HC_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!KQ4
- FMEDA!KQ5
- FMEDA!KQ6
- FMEDA!KQ7
- FMEDA!KQ8
- FMEDA!KQ9
- FMEDA!KQ10
- FMEDA!KQ11
- FMEDA!KQ12
- FMEDA!KQ13
- ... 及其他 1640 個

---

### CONDITIONAL-266

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!KR4):
```excel
=IF(AND(FMEDA!HK4="Y",FMEDA!HJ4="S"),(FMEDA!G4*FMEDA!J4-FMEDA!HN4)*(1-IF(SafetyGoalViolations!$M$25="Internal",FMEDA!$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-FMEDA!$AT4)*(1-FMEDA!$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-FMEDA!$AT4)*(1-FMEDA!$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-FMEDA!$AT4)*(1-FMEDA!$BL4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AND(FMEDA!HK_ROW="Y",FMEDA!HJ_ROW="S"),(FMEDA!G_ROW*FMEDA!J_ROW-FMEDA!HN_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",FMEDA!$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$BL_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!KR4
- FMEDA!KR5
- FMEDA!KR6
- FMEDA!KR7
- FMEDA!KR8
- FMEDA!KR9
- FMEDA!KR10
- FMEDA!KR11
- FMEDA!KR12
- FMEDA!KR13
- ... 及其他 1640 個

---

### CONDITIONAL-267

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!KS4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,IF(AND(FMEDA!HK4="Y",FMEDA!HJ4="S"),(FMEDA!F4*FMEDA!I4-FMEDA!HC4)*(1-IF(SafetyGoalViolations!$M$25="Internal",FMEDA!$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-FMEDA!$AT4)*(1-FMEDA!$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-FMEDA!$AT4)*(1-FMEDA!$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-FMEDA!$AT4)*(1-FMEDA!$BL4),"invalid"))))),0),0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,IF(AND(FMEDA!HK_ROW="Y",FMEDA!HJ_ROW="S"),(FMEDA!F_ROW*FMEDA!I_ROW-FMEDA!HC_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",FMEDA!$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$BL_ROW),"invalid"))))),0),0)
```

**出現位置**:
- FMEDA!KS4
- FMEDA!KT4
- FMEDA!KU4
- FMEDA!KV4
- FMEDA!KW4
- FMEDA!KX4
- FMEDA!KS5
- FMEDA!KT5
- FMEDA!KU5
- FMEDA!KV5
- ... 及其他 9890 個

---

### CONDITIONAL-268

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!KY4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,IF(AND(FMEDA!HK4="Y",FMEDA!HJ4="S"),(FMEDA!G4*FMEDA!J4-FMEDA!HN4)*(1-IF(SafetyGoalViolations!$M$25="Internal",FMEDA!$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-FMEDA!$AT4)*(1-FMEDA!$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-FMEDA!$AT4)*(1-FMEDA!$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-FMEDA!$AT4)*(1-FMEDA!$BL4),"invalid"))))),0),0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,IF(AND(FMEDA!HK_ROW="Y",FMEDA!HJ_ROW="S"),(FMEDA!G_ROW*FMEDA!J_ROW-FMEDA!HN_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",FMEDA!$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-FMEDA!$AT_ROW)*(1-FMEDA!$BL_ROW),"invalid"))))),0),0)
```

**出現位置**:
- FMEDA!KY4
- FMEDA!KZ4
- FMEDA!LA4
- FMEDA!LB4
- FMEDA!LC4
- FMEDA!LD4
- FMEDA!KY5
- FMEDA!KZ5
- FMEDA!LA5
- FMEDA!LB5
- ... 及其他 9890 個

---

### CONDITIONAL-269

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!LE4):
```excel
=IF(AND(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,HJ4="M"),BO4,0)
```

**正規化公式**:
```
=IF(AND(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,HJ_ROW="M"),BO_ROW,0)
```

**出現位置**:
- FMEDA!LE4
- FMEDA!LF4
- FMEDA!LG4
- FMEDA!LH4
- FMEDA!LI4
- FMEDA!LJ4
- FMEDA!LE5
- FMEDA!LF5
- FMEDA!LG5
- FMEDA!LH5
- ... 及其他 9890 個

---

### CONDITIONAL-270

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!LK4):
```excel
=IF(AND(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,HJ4="M"),BZ4,0)
```

**正規化公式**:
```
=IF(AND(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,HJ_ROW="M"),BZ_ROW,0)
```

**出現位置**:
- FMEDA!LK4
- FMEDA!LL4
- FMEDA!LM4
- FMEDA!LN4
- FMEDA!LO4
- FMEDA!LP4
- FMEDA!LK5
- FMEDA!LL5
- FMEDA!LM5
- FMEDA!LN5
- ... 及其他 9890 個

---

### CONDITIONAL-271

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!LR4):
```excel
=IF(HJ4="M",$F4*$I4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AQ4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AQ4)*(1-$AW4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AQ4)*(1-$BC4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AQ4)*(1-$BI4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(HJ_ROW="M",$F_ROW*$I_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AQ_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AQ_ROW)*(1-$AW_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AQ_ROW)*(1-$BC_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AQ_ROW)*(1-$BI_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!LR4
- FMEDA!LR5
- FMEDA!LR6
- FMEDA!LR7
- FMEDA!LR8
- FMEDA!LR9
- FMEDA!LR10
- FMEDA!LR11
- FMEDA!LR12
- FMEDA!LR13
- ... 及其他 1640 個

---

### CONDITIONAL-272

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!LS4):
```excel
=IF(HJ4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(HJ_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!LS4
- FMEDA!LS5
- FMEDA!LS6
- FMEDA!LS7
- FMEDA!LS8
- FMEDA!LS9
- FMEDA!LS10
- FMEDA!LS11
- FMEDA!LS12
- FMEDA!LS13
- ... 及其他 1640 個

---

### CONDITIONAL-273

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!LT4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,LR4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,LR_ROW,0)
```

**出現位置**:
- FMEDA!LT4
- FMEDA!LU4
- FMEDA!LV4
- FMEDA!LW4
- FMEDA!LX4
- FMEDA!LY4
- FMEDA!LT5
- FMEDA!LU5
- FMEDA!LV5
- FMEDA!LW5
- ... 及其他 9890 個

---

### CONDITIONAL-274

**出現次數**: 9900

**原始公式** (第一次出現在 FMEDA!LZ4):
```excel
=IF(VLOOKUP($B4,BlockList!$B$10:$R$209,17,FALSE)=BlockList!$B$2,LS4,0)
```

**正規化公式**:
```
=IF(VLOOKUP($B_ROW,BlockList!$B$ROW:$R$ROW,17,FALSE)=BlockList!$B$ROW,LS_ROW,0)
```

**出現位置**:
- FMEDA!LZ4
- FMEDA!MA4
- FMEDA!MB4
- FMEDA!MC4
- FMEDA!MD4
- FMEDA!ME4
- FMEDA!LZ5
- FMEDA!MA5
- FMEDA!MB5
- FMEDA!MC5
- ... 及其他 9890 個

---

### CONDITIONAL-275

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MG4):
```excel
=IF(L4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(L_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!MG4
- FMEDA!MG5
- FMEDA!MG6
- FMEDA!MG7
- FMEDA!MG8
- FMEDA!MG9
- FMEDA!MG10
- FMEDA!MG11
- FMEDA!MG12
- FMEDA!MG13
- ... 及其他 1640 個

---

### CONDITIONAL-276

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MH4):
```excel
=IF(L4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(L_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!MH4
- FMEDA!MH5
- FMEDA!MH6
- FMEDA!MH7
- FMEDA!MH8
- FMEDA!MH9
- FMEDA!MH10
- FMEDA!MH11
- FMEDA!MH12
- FMEDA!MH13
- ... 及其他 1640 個

---

### CONDITIONAL-277

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MI4):
```excel
=SUM(IF(L4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",L4="S"),(G4*J4-MH4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(L_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",L_ROW="S"),(G_ROW*J_ROW-MH_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!MI4
- FMEDA!MI5
- FMEDA!MI6
- FMEDA!MI7
- FMEDA!MI8
- FMEDA!MI9
- FMEDA!MI10
- FMEDA!MI11
- FMEDA!MI12
- FMEDA!MI13
- ... 及其他 1640 個

---

### CONDITIONAL-278

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MJ4):
```excel
=IF(OR(L4="S",L4="M",L4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(L_ROW="S",L_ROW="M",L_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!MJ4
- FMEDA!MJ5
- FMEDA!MJ6
- FMEDA!MJ7
- FMEDA!MJ8
- FMEDA!MJ9
- FMEDA!MJ10
- FMEDA!MJ11
- FMEDA!MJ12
- FMEDA!MJ13
- ... 及其他 1640 個

---

### CONDITIONAL-279

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MK4):
```excel
=SUM(IF(L4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",L4="S"),(G4*J4-MH4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(L_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",L_ROW="S"),(G_ROW*J_ROW-MH_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!MK4
- FMEDA!MK5
- FMEDA!MK6
- FMEDA!MK7
- FMEDA!MK8
- FMEDA!MK9
- FMEDA!MK10
- FMEDA!MK11
- FMEDA!MK12
- FMEDA!MK13
- ... 及其他 1640 個

---

### CONDITIONAL-280

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MM4):
```excel
=IF(M4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(M_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!MM4
- FMEDA!MM5
- FMEDA!MM6
- FMEDA!MM7
- FMEDA!MM8
- FMEDA!MM9
- FMEDA!MM10
- FMEDA!MM11
- FMEDA!MM12
- FMEDA!MM13
- ... 及其他 1640 個

---

### CONDITIONAL-281

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MN4):
```excel
=IF(M4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(M_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!MN4
- FMEDA!MN5
- FMEDA!MN6
- FMEDA!MN7
- FMEDA!MN8
- FMEDA!MN9
- FMEDA!MN10
- FMEDA!MN11
- FMEDA!MN12
- FMEDA!MN13
- ... 及其他 1640 個

---

### CONDITIONAL-282

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MO4):
```excel
=SUM(IF(M4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",M4="S"),(G4*J4-MN4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(M_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",M_ROW="S"),(G_ROW*J_ROW-MN_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!MO4
- FMEDA!MO5
- FMEDA!MO6
- FMEDA!MO7
- FMEDA!MO8
- FMEDA!MO9
- FMEDA!MO10
- FMEDA!MO11
- FMEDA!MO12
- FMEDA!MO13
- ... 及其他 1640 個

---

### CONDITIONAL-283

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MP4):
```excel
=IF(OR(M4="S",M4="M",M4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(M_ROW="S",M_ROW="M",M_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!MP4
- FMEDA!MP5
- FMEDA!MP6
- FMEDA!MP7
- FMEDA!MP8
- FMEDA!MP9
- FMEDA!MP10
- FMEDA!MP11
- FMEDA!MP12
- FMEDA!MP13
- ... 及其他 1640 個

---

### CONDITIONAL-284

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MQ4):
```excel
=SUM(IF(M4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",M4="S"),(G4*J4-MN4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(M_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",M_ROW="S"),(G_ROW*J_ROW-MN_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!MQ4
- FMEDA!MQ5
- FMEDA!MQ6
- FMEDA!MQ7
- FMEDA!MQ8
- FMEDA!MQ9
- FMEDA!MQ10
- FMEDA!MQ11
- FMEDA!MQ12
- FMEDA!MQ13
- ... 及其他 1640 個

---

### CONDITIONAL-285

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MS4):
```excel
=IF(N4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(N_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!MS4
- FMEDA!MS5
- FMEDA!MS6
- FMEDA!MS7
- FMEDA!MS8
- FMEDA!MS9
- FMEDA!MS10
- FMEDA!MS11
- FMEDA!MS12
- FMEDA!MS13
- ... 及其他 1640 個

---

### CONDITIONAL-286

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MT4):
```excel
=IF(N4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(N_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!MT4
- FMEDA!MT5
- FMEDA!MT6
- FMEDA!MT7
- FMEDA!MT8
- FMEDA!MT9
- FMEDA!MT10
- FMEDA!MT11
- FMEDA!MT12
- FMEDA!MT13
- ... 及其他 1640 個

---

### CONDITIONAL-287

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MU4):
```excel
=SUM(IF(N4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",N4="S"),(G4*J4-MT4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(N_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",N_ROW="S"),(G_ROW*J_ROW-MT_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!MU4
- FMEDA!MU5
- FMEDA!MU6
- FMEDA!MU7
- FMEDA!MU8
- FMEDA!MU9
- FMEDA!MU10
- FMEDA!MU11
- FMEDA!MU12
- FMEDA!MU13
- ... 及其他 1640 個

---

### CONDITIONAL-288

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MV4):
```excel
=IF(OR(N4="S",N4="M",N4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(N_ROW="S",N_ROW="M",N_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!MV4
- FMEDA!MV5
- FMEDA!MV6
- FMEDA!MV7
- FMEDA!MV8
- FMEDA!MV9
- FMEDA!MV10
- FMEDA!MV11
- FMEDA!MV12
- FMEDA!MV13
- ... 及其他 1640 個

---

### CONDITIONAL-289

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MW4):
```excel
=SUM(IF(N4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",N4="S"),(G4*J4-MT4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(N_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",N_ROW="S"),(G_ROW*J_ROW-MT_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!MW4
- FMEDA!MW5
- FMEDA!MW6
- FMEDA!MW7
- FMEDA!MW8
- FMEDA!MW9
- FMEDA!MW10
- FMEDA!MW11
- FMEDA!MW12
- FMEDA!MW13
- ... 及其他 1640 個

---

### CONDITIONAL-290

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MY4):
```excel
=IF(O4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(O_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!MY4
- FMEDA!MY5
- FMEDA!MY6
- FMEDA!MY7
- FMEDA!MY8
- FMEDA!MY9
- FMEDA!MY10
- FMEDA!MY11
- FMEDA!MY12
- FMEDA!MY13
- ... 及其他 1640 個

---

### CONDITIONAL-291

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!MZ4):
```excel
=IF(O4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(O_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!MZ4
- FMEDA!MZ5
- FMEDA!MZ6
- FMEDA!MZ7
- FMEDA!MZ8
- FMEDA!MZ9
- FMEDA!MZ10
- FMEDA!MZ11
- FMEDA!MZ12
- FMEDA!MZ13
- ... 及其他 1640 個

---

### CONDITIONAL-292

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NA4):
```excel
=SUM(IF(O4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",O4="S"),(G4*J4-MZ4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(O_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",O_ROW="S"),(G_ROW*J_ROW-MZ_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NA4
- FMEDA!NA5
- FMEDA!NA6
- FMEDA!NA7
- FMEDA!NA8
- FMEDA!NA9
- FMEDA!NA10
- FMEDA!NA11
- FMEDA!NA12
- FMEDA!NA13
- ... 及其他 1640 個

---

### CONDITIONAL-293

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NB4):
```excel
=IF(OR(O4="S",O4="M",O4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(O_ROW="S",O_ROW="M",O_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!NB4
- FMEDA!NB5
- FMEDA!NB6
- FMEDA!NB7
- FMEDA!NB8
- FMEDA!NB9
- FMEDA!NB10
- FMEDA!NB11
- FMEDA!NB12
- FMEDA!NB13
- ... 及其他 1640 個

---

### CONDITIONAL-294

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NC4):
```excel
=SUM(IF(O4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",O4="S"),(G4*J4-MZ4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(O_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",O_ROW="S"),(G_ROW*J_ROW-MZ_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NC4
- FMEDA!NC5
- FMEDA!NC6
- FMEDA!NC7
- FMEDA!NC8
- FMEDA!NC9
- FMEDA!NC10
- FMEDA!NC11
- FMEDA!NC12
- FMEDA!NC13
- ... 及其他 1640 個

---

### CONDITIONAL-295

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NE4):
```excel
=IF(P4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(P_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!NE4
- FMEDA!NE5
- FMEDA!NE6
- FMEDA!NE7
- FMEDA!NE8
- FMEDA!NE9
- FMEDA!NE10
- FMEDA!NE11
- FMEDA!NE12
- FMEDA!NE13
- ... 及其他 1640 個

---

### CONDITIONAL-296

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NF4):
```excel
=IF(P4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(P_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!NF4
- FMEDA!NF5
- FMEDA!NF6
- FMEDA!NF7
- FMEDA!NF8
- FMEDA!NF9
- FMEDA!NF10
- FMEDA!NF11
- FMEDA!NF12
- FMEDA!NF13
- ... 及其他 1640 個

---

### CONDITIONAL-297

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NG4):
```excel
=SUM(IF(P4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",P4="S"),(G4*J4-NF4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(P_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",P_ROW="S"),(G_ROW*J_ROW-NF_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NG4
- FMEDA!NG5
- FMEDA!NG6
- FMEDA!NG7
- FMEDA!NG8
- FMEDA!NG9
- FMEDA!NG10
- FMEDA!NG11
- FMEDA!NG12
- FMEDA!NG13
- ... 及其他 1640 個

---

### CONDITIONAL-298

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NH4):
```excel
=IF(OR(P4="S",P4="M",P4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(P_ROW="S",P_ROW="M",P_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!NH4
- FMEDA!NH5
- FMEDA!NH6
- FMEDA!NH7
- FMEDA!NH8
- FMEDA!NH9
- FMEDA!NH10
- FMEDA!NH11
- FMEDA!NH12
- FMEDA!NH13
- ... 及其他 1640 個

---

### CONDITIONAL-299

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NI4):
```excel
=SUM(IF(P4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",P4="S"),(G4*J4-NF4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(P_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",P_ROW="S"),(G_ROW*J_ROW-NF_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NI4
- FMEDA!NI5
- FMEDA!NI6
- FMEDA!NI7
- FMEDA!NI8
- FMEDA!NI9
- FMEDA!NI10
- FMEDA!NI11
- FMEDA!NI12
- FMEDA!NI13
- ... 及其他 1640 個

---

### CONDITIONAL-300

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NK4):
```excel
=IF(Q4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(Q_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!NK4
- FMEDA!NK5
- FMEDA!NK6
- FMEDA!NK7
- FMEDA!NK8
- FMEDA!NK9
- FMEDA!NK10
- FMEDA!NK11
- FMEDA!NK12
- FMEDA!NK13
- ... 及其他 1640 個

---

### CONDITIONAL-301

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NL4):
```excel
=IF(Q4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(Q_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!NL4
- FMEDA!NL5
- FMEDA!NL6
- FMEDA!NL7
- FMEDA!NL8
- FMEDA!NL9
- FMEDA!NL10
- FMEDA!NL11
- FMEDA!NL12
- FMEDA!NL13
- ... 及其他 1640 個

---

### CONDITIONAL-302

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NM4):
```excel
=SUM(IF(Q4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",Q4="S"),(G4*J4-NL4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Q_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Q_ROW="S"),(G_ROW*J_ROW-NL_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NM4
- FMEDA!NM5
- FMEDA!NM6
- FMEDA!NM7
- FMEDA!NM8
- FMEDA!NM9
- FMEDA!NM10
- FMEDA!NM11
- FMEDA!NM12
- FMEDA!NM13
- ... 及其他 1640 個

---

### CONDITIONAL-303

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NN4):
```excel
=IF(OR(Q4="S",Q4="M",Q4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(Q_ROW="S",Q_ROW="M",Q_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!NN4
- FMEDA!NN5
- FMEDA!NN6
- FMEDA!NN7
- FMEDA!NN8
- FMEDA!NN9
- FMEDA!NN10
- FMEDA!NN11
- FMEDA!NN12
- FMEDA!NN13
- ... 及其他 1640 個

---

### CONDITIONAL-304

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NO4):
```excel
=SUM(IF(Q4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",Q4="S"),(G4*J4-NL4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Q_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Q_ROW="S"),(G_ROW*J_ROW-NL_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NO4
- FMEDA!NO5
- FMEDA!NO6
- FMEDA!NO7
- FMEDA!NO8
- FMEDA!NO9
- FMEDA!NO10
- FMEDA!NO11
- FMEDA!NO12
- FMEDA!NO13
- ... 及其他 1640 個

---

### CONDITIONAL-305

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NQ4):
```excel
=IF(R4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(R_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!NQ4
- FMEDA!NQ5
- FMEDA!NQ6
- FMEDA!NQ7
- FMEDA!NQ8
- FMEDA!NQ9
- FMEDA!NQ10
- FMEDA!NQ11
- FMEDA!NQ12
- FMEDA!NQ13
- ... 及其他 1640 個

---

### CONDITIONAL-306

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NR4):
```excel
=IF(R4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(R_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!NR4
- FMEDA!NR5
- FMEDA!NR6
- FMEDA!NR7
- FMEDA!NR8
- FMEDA!NR9
- FMEDA!NR10
- FMEDA!NR11
- FMEDA!NR12
- FMEDA!NR13
- ... 及其他 1640 個

---

### CONDITIONAL-307

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NS4):
```excel
=SUM(IF(R4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",R4="S"),(G4*J4-NR4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(R_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",R_ROW="S"),(G_ROW*J_ROW-NR_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NS4
- FMEDA!NS5
- FMEDA!NS6
- FMEDA!NS7
- FMEDA!NS8
- FMEDA!NS9
- FMEDA!NS10
- FMEDA!NS11
- FMEDA!NS12
- FMEDA!NS13
- ... 及其他 1640 個

---

### CONDITIONAL-308

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NT4):
```excel
=IF(OR(R4="S",R4="M",R4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(R_ROW="S",R_ROW="M",R_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!NT4
- FMEDA!NT5
- FMEDA!NT6
- FMEDA!NT7
- FMEDA!NT8
- FMEDA!NT9
- FMEDA!NT10
- FMEDA!NT11
- FMEDA!NT12
- FMEDA!NT13
- ... 及其他 1640 個

---

### CONDITIONAL-309

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NU4):
```excel
=SUM(IF(R4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",R4="S"),(G4*J4-NR4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(R_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",R_ROW="S"),(G_ROW*J_ROW-NR_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NU4
- FMEDA!NU5
- FMEDA!NU6
- FMEDA!NU7
- FMEDA!NU8
- FMEDA!NU9
- FMEDA!NU10
- FMEDA!NU11
- FMEDA!NU12
- FMEDA!NU13
- ... 及其他 1640 個

---

### CONDITIONAL-310

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NW4):
```excel
=IF(S4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(S_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!NW4
- FMEDA!NW5
- FMEDA!NW6
- FMEDA!NW7
- FMEDA!NW8
- FMEDA!NW9
- FMEDA!NW10
- FMEDA!NW11
- FMEDA!NW12
- FMEDA!NW13
- ... 及其他 1640 個

---

### CONDITIONAL-311

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NX4):
```excel
=IF(S4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(S_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!NX4
- FMEDA!NX5
- FMEDA!NX6
- FMEDA!NX7
- FMEDA!NX8
- FMEDA!NX9
- FMEDA!NX10
- FMEDA!NX11
- FMEDA!NX12
- FMEDA!NX13
- ... 及其他 1640 個

---

### CONDITIONAL-312

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NY4):
```excel
=SUM(IF(S4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",S4="S"),(G4*J4-NX4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(S_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",S_ROW="S"),(G_ROW*J_ROW-NX_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!NY4
- FMEDA!NY5
- FMEDA!NY6
- FMEDA!NY7
- FMEDA!NY8
- FMEDA!NY9
- FMEDA!NY10
- FMEDA!NY11
- FMEDA!NY12
- FMEDA!NY13
- ... 及其他 1640 個

---

### CONDITIONAL-313

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!NZ4):
```excel
=IF(OR(S4="S",S4="M",S4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(S_ROW="S",S_ROW="M",S_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!NZ4
- FMEDA!NZ5
- FMEDA!NZ6
- FMEDA!NZ7
- FMEDA!NZ8
- FMEDA!NZ9
- FMEDA!NZ10
- FMEDA!NZ11
- FMEDA!NZ12
- FMEDA!NZ13
- ... 及其他 1640 個

---

### CONDITIONAL-314

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OA4):
```excel
=SUM(IF(S4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",S4="S"),(G4*J4-NX4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(S_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",S_ROW="S"),(G_ROW*J_ROW-NX_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OA4
- FMEDA!OA5
- FMEDA!OA6
- FMEDA!OA7
- FMEDA!OA8
- FMEDA!OA9
- FMEDA!OA10
- FMEDA!OA11
- FMEDA!OA12
- FMEDA!OA13
- ... 及其他 1640 個

---

### CONDITIONAL-315

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OC4):
```excel
=IF(T4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(T_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!OC4
- FMEDA!OC5
- FMEDA!OC6
- FMEDA!OC7
- FMEDA!OC8
- FMEDA!OC9
- FMEDA!OC10
- FMEDA!OC11
- FMEDA!OC12
- FMEDA!OC13
- ... 及其他 1640 個

---

### CONDITIONAL-316

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OD4):
```excel
=IF(T4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(T_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!OD4
- FMEDA!OD5
- FMEDA!OD6
- FMEDA!OD7
- FMEDA!OD8
- FMEDA!OD9
- FMEDA!OD10
- FMEDA!OD11
- FMEDA!OD12
- FMEDA!OD13
- ... 及其他 1640 個

---

### CONDITIONAL-317

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OE4):
```excel
=SUM(IF(T4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",T4="S"),(G4*J4-OD4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(T_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",T_ROW="S"),(G_ROW*J_ROW-OD_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OE4
- FMEDA!OE5
- FMEDA!OE6
- FMEDA!OE7
- FMEDA!OE8
- FMEDA!OE9
- FMEDA!OE10
- FMEDA!OE11
- FMEDA!OE12
- FMEDA!OE13
- ... 及其他 1640 個

---

### CONDITIONAL-318

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OF4):
```excel
=IF(OR(T4="S",T4="M",T4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(T_ROW="S",T_ROW="M",T_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!OF4
- FMEDA!OF5
- FMEDA!OF6
- FMEDA!OF7
- FMEDA!OF8
- FMEDA!OF9
- FMEDA!OF10
- FMEDA!OF11
- FMEDA!OF12
- FMEDA!OF13
- ... 及其他 1640 個

---

### CONDITIONAL-319

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OG4):
```excel
=SUM(IF(T4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",T4="S"),(G4*J4-OD4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(T_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",T_ROW="S"),(G_ROW*J_ROW-OD_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OG4
- FMEDA!OG5
- FMEDA!OG6
- FMEDA!OG7
- FMEDA!OG8
- FMEDA!OG9
- FMEDA!OG10
- FMEDA!OG11
- FMEDA!OG12
- FMEDA!OG13
- ... 及其他 1640 個

---

### CONDITIONAL-320

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OI4):
```excel
=IF(U4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(U_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!OI4
- FMEDA!OI5
- FMEDA!OI6
- FMEDA!OI7
- FMEDA!OI8
- FMEDA!OI9
- FMEDA!OI10
- FMEDA!OI11
- FMEDA!OI12
- FMEDA!OI13
- ... 及其他 1640 個

---

### CONDITIONAL-321

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OJ4):
```excel
=IF(U4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(U_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!OJ4
- FMEDA!OJ5
- FMEDA!OJ6
- FMEDA!OJ7
- FMEDA!OJ8
- FMEDA!OJ9
- FMEDA!OJ10
- FMEDA!OJ11
- FMEDA!OJ12
- FMEDA!OJ13
- ... 及其他 1640 個

---

### CONDITIONAL-322

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OK4):
```excel
=SUM(IF(U4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",U4="S"),(G4*J4-OJ4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(U_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",U_ROW="S"),(G_ROW*J_ROW-OJ_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OK4
- FMEDA!OK5
- FMEDA!OK6
- FMEDA!OK7
- FMEDA!OK8
- FMEDA!OK9
- FMEDA!OK10
- FMEDA!OK11
- FMEDA!OK12
- FMEDA!OK13
- ... 及其他 1640 個

---

### CONDITIONAL-323

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OL4):
```excel
=IF(OR(U4="S",U4="M",U4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(U_ROW="S",U_ROW="M",U_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!OL4
- FMEDA!OL5
- FMEDA!OL6
- FMEDA!OL7
- FMEDA!OL8
- FMEDA!OL9
- FMEDA!OL10
- FMEDA!OL11
- FMEDA!OL12
- FMEDA!OL13
- ... 及其他 1640 個

---

### CONDITIONAL-324

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OM4):
```excel
=SUM(IF(U4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",U4="S"),(G4*J4-OJ4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(U_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",U_ROW="S"),(G_ROW*J_ROW-OJ_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OM4
- FMEDA!OM5
- FMEDA!OM6
- FMEDA!OM7
- FMEDA!OM8
- FMEDA!OM9
- FMEDA!OM10
- FMEDA!OM11
- FMEDA!OM12
- FMEDA!OM13
- ... 及其他 1640 個

---

### CONDITIONAL-325

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OO4):
```excel
=IF(V4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(V_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!OO4
- FMEDA!OO5
- FMEDA!OO6
- FMEDA!OO7
- FMEDA!OO8
- FMEDA!OO9
- FMEDA!OO10
- FMEDA!OO11
- FMEDA!OO12
- FMEDA!OO13
- ... 及其他 1640 個

---

### CONDITIONAL-326

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OP4):
```excel
=IF(V4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(V_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!OP4
- FMEDA!OP5
- FMEDA!OP6
- FMEDA!OP7
- FMEDA!OP8
- FMEDA!OP9
- FMEDA!OP10
- FMEDA!OP11
- FMEDA!OP12
- FMEDA!OP13
- ... 及其他 1640 個

---

### CONDITIONAL-327

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OQ4):
```excel
=SUM(IF(V4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",V4="S"),(G4*J4-OP4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(V_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",V_ROW="S"),(G_ROW*J_ROW-OP_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OQ4
- FMEDA!OQ5
- FMEDA!OQ6
- FMEDA!OQ7
- FMEDA!OQ8
- FMEDA!OQ9
- FMEDA!OQ10
- FMEDA!OQ11
- FMEDA!OQ12
- FMEDA!OQ13
- ... 及其他 1640 個

---

### CONDITIONAL-328

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OR4):
```excel
=IF(OR(V4="S",V4="M",V4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(V_ROW="S",V_ROW="M",V_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!OR4
- FMEDA!OR5
- FMEDA!OR6
- FMEDA!OR7
- FMEDA!OR8
- FMEDA!OR9
- FMEDA!OR10
- FMEDA!OR11
- FMEDA!OR12
- FMEDA!OR13
- ... 及其他 1640 個

---

### CONDITIONAL-329

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OS4):
```excel
=SUM(IF(V4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",V4="S"),(G4*J4-OP4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(V_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",V_ROW="S"),(G_ROW*J_ROW-OP_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OS4
- FMEDA!OS5
- FMEDA!OS6
- FMEDA!OS7
- FMEDA!OS8
- FMEDA!OS9
- FMEDA!OS10
- FMEDA!OS11
- FMEDA!OS12
- FMEDA!OS13
- ... 及其他 1640 個

---

### CONDITIONAL-330

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OU4):
```excel
=IF(W4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(W_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!OU4
- FMEDA!OU5
- FMEDA!OU6
- FMEDA!OU7
- FMEDA!OU8
- FMEDA!OU9
- FMEDA!OU10
- FMEDA!OU11
- FMEDA!OU12
- FMEDA!OU13
- ... 及其他 1640 個

---

### CONDITIONAL-331

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OV4):
```excel
=IF(W4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(W_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!OV4
- FMEDA!OV5
- FMEDA!OV6
- FMEDA!OV7
- FMEDA!OV8
- FMEDA!OV9
- FMEDA!OV10
- FMEDA!OV11
- FMEDA!OV12
- FMEDA!OV13
- ... 及其他 1640 個

---

### CONDITIONAL-332

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OW4):
```excel
=SUM(IF(W4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",W4="S"),(G4*J4-OV4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(W_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",W_ROW="S"),(G_ROW*J_ROW-OV_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OW4
- FMEDA!OW5
- FMEDA!OW6
- FMEDA!OW7
- FMEDA!OW8
- FMEDA!OW9
- FMEDA!OW10
- FMEDA!OW11
- FMEDA!OW12
- FMEDA!OW13
- ... 及其他 1640 個

---

### CONDITIONAL-333

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OX4):
```excel
=IF(OR(W4="S",W4="M",W4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(W_ROW="S",W_ROW="M",W_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!OX4
- FMEDA!OX5
- FMEDA!OX6
- FMEDA!OX7
- FMEDA!OX8
- FMEDA!OX9
- FMEDA!OX10
- FMEDA!OX11
- FMEDA!OX12
- FMEDA!OX13
- ... 及其他 1640 個

---

### CONDITIONAL-334

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!OY4):
```excel
=SUM(IF(W4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",W4="S"),(G4*J4-OV4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(W_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",W_ROW="S"),(G_ROW*J_ROW-OV_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!OY4
- FMEDA!OY5
- FMEDA!OY6
- FMEDA!OY7
- FMEDA!OY8
- FMEDA!OY9
- FMEDA!OY10
- FMEDA!OY11
- FMEDA!OY12
- FMEDA!OY13
- ... 及其他 1640 個

---

### CONDITIONAL-335

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PA4):
```excel
=IF(X4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(X_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!PA4
- FMEDA!PA5
- FMEDA!PA6
- FMEDA!PA7
- FMEDA!PA8
- FMEDA!PA9
- FMEDA!PA10
- FMEDA!PA11
- FMEDA!PA12
- FMEDA!PA13
- ... 及其他 1640 個

---

### CONDITIONAL-336

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PB4):
```excel
=IF(X4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(X_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!PB4
- FMEDA!PB5
- FMEDA!PB6
- FMEDA!PB7
- FMEDA!PB8
- FMEDA!PB9
- FMEDA!PB10
- FMEDA!PB11
- FMEDA!PB12
- FMEDA!PB13
- ... 及其他 1640 個

---

### CONDITIONAL-337

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PC4):
```excel
=SUM(IF(X4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",X4="S"),(G4*J4-PB4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(X_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",X_ROW="S"),(G_ROW*J_ROW-PB_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!PC4
- FMEDA!PC5
- FMEDA!PC6
- FMEDA!PC7
- FMEDA!PC8
- FMEDA!PC9
- FMEDA!PC10
- FMEDA!PC11
- FMEDA!PC12
- FMEDA!PC13
- ... 及其他 1640 個

---

### CONDITIONAL-338

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PD4):
```excel
=IF(OR(X4="S",X4="M",X4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(X_ROW="S",X_ROW="M",X_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!PD4
- FMEDA!PD5
- FMEDA!PD6
- FMEDA!PD7
- FMEDA!PD8
- FMEDA!PD9
- FMEDA!PD10
- FMEDA!PD11
- FMEDA!PD12
- FMEDA!PD13
- ... 及其他 1640 個

---

### CONDITIONAL-339

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PE4):
```excel
=SUM(IF(X4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",X4="S"),(G4*J4-PB4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(X_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",X_ROW="S"),(G_ROW*J_ROW-PB_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!PE4
- FMEDA!PE5
- FMEDA!PE6
- FMEDA!PE7
- FMEDA!PE8
- FMEDA!PE9
- FMEDA!PE10
- FMEDA!PE11
- FMEDA!PE12
- FMEDA!PE13
- ... 及其他 1640 個

---

### CONDITIONAL-340

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PG4):
```excel
=IF(Y4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(Y_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!PG4
- FMEDA!PG5
- FMEDA!PG6
- FMEDA!PG7
- FMEDA!PG8
- FMEDA!PG9
- FMEDA!PG10
- FMEDA!PG11
- FMEDA!PG12
- FMEDA!PG13
- ... 及其他 1640 個

---

### CONDITIONAL-341

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PH4):
```excel
=IF(Y4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(Y_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!PH4
- FMEDA!PH5
- FMEDA!PH6
- FMEDA!PH7
- FMEDA!PH8
- FMEDA!PH9
- FMEDA!PH10
- FMEDA!PH11
- FMEDA!PH12
- FMEDA!PH13
- ... 及其他 1640 個

---

### CONDITIONAL-342

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PI4):
```excel
=SUM(IF(Y4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",Y4="S"),(G4*J4-PH4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Y_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Y_ROW="S"),(G_ROW*J_ROW-PH_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!PI4
- FMEDA!PI5
- FMEDA!PI6
- FMEDA!PI7
- FMEDA!PI8
- FMEDA!PI9
- FMEDA!PI10
- FMEDA!PI11
- FMEDA!PI12
- FMEDA!PI13
- ... 及其他 1640 個

---

### CONDITIONAL-343

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PJ4):
```excel
=IF(OR(Y4="S",Y4="M",Y4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(Y_ROW="S",Y_ROW="M",Y_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!PJ4
- FMEDA!PJ5
- FMEDA!PJ6
- FMEDA!PJ7
- FMEDA!PJ8
- FMEDA!PJ9
- FMEDA!PJ10
- FMEDA!PJ11
- FMEDA!PJ12
- FMEDA!PJ13
- ... 及其他 1640 個

---

### CONDITIONAL-344

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PK4):
```excel
=SUM(IF(Y4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",Y4="S"),(G4*J4-PH4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Y_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Y_ROW="S"),(G_ROW*J_ROW-PH_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!PK4
- FMEDA!PK5
- FMEDA!PK6
- FMEDA!PK7
- FMEDA!PK8
- FMEDA!PK9
- FMEDA!PK10
- FMEDA!PK11
- FMEDA!PK12
- FMEDA!PK13
- ... 及其他 1640 個

---

### CONDITIONAL-345

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PM4):
```excel
=IF(Z4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(Z_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!PM4
- FMEDA!PM5
- FMEDA!PM6
- FMEDA!PM7
- FMEDA!PM8
- FMEDA!PM9
- FMEDA!PM10
- FMEDA!PM11
- FMEDA!PM12
- FMEDA!PM13
- ... 及其他 1640 個

---

### CONDITIONAL-346

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PN4):
```excel
=IF(Z4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(Z_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!PN4
- FMEDA!PN5
- FMEDA!PN6
- FMEDA!PN7
- FMEDA!PN8
- FMEDA!PN9
- FMEDA!PN10
- FMEDA!PN11
- FMEDA!PN12
- FMEDA!PN13
- ... 及其他 1640 個

---

### CONDITIONAL-347

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PO4):
```excel
=SUM(IF(Z4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",Z4="S"),(G4*J4-PN4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Z_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Z_ROW="S"),(G_ROW*J_ROW-PN_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!PO4
- FMEDA!PO5
- FMEDA!PO6
- FMEDA!PO7
- FMEDA!PO8
- FMEDA!PO9
- FMEDA!PO10
- FMEDA!PO11
- FMEDA!PO12
- FMEDA!PO13
- ... 及其他 1640 個

---

### CONDITIONAL-348

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PP4):
```excel
=IF(OR(Z4="S",Z4="M",Z4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(Z_ROW="S",Z_ROW="M",Z_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!PP4
- FMEDA!PP5
- FMEDA!PP6
- FMEDA!PP7
- FMEDA!PP8
- FMEDA!PP9
- FMEDA!PP10
- FMEDA!PP11
- FMEDA!PP12
- FMEDA!PP13
- ... 及其他 1640 個

---

### CONDITIONAL-349

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PQ4):
```excel
=SUM(IF(Z4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",Z4="S"),(G4*J4-PN4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(Z_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",Z_ROW="S"),(G_ROW*J_ROW-PN_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!PQ4
- FMEDA!PQ5
- FMEDA!PQ6
- FMEDA!PQ7
- FMEDA!PQ8
- FMEDA!PQ9
- FMEDA!PQ10
- FMEDA!PQ11
- FMEDA!PQ12
- FMEDA!PQ13
- ... 及其他 1640 個

---

### CONDITIONAL-350

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PS4):
```excel
=IF(AA4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(AA_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!PS4
- FMEDA!PS5
- FMEDA!PS6
- FMEDA!PS7
- FMEDA!PS8
- FMEDA!PS9
- FMEDA!PS10
- FMEDA!PS11
- FMEDA!PS12
- FMEDA!PS13
- ... 及其他 1640 個

---

### CONDITIONAL-351

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PT4):
```excel
=IF(AA4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AA_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!PT4
- FMEDA!PT5
- FMEDA!PT6
- FMEDA!PT7
- FMEDA!PT8
- FMEDA!PT9
- FMEDA!PT10
- FMEDA!PT11
- FMEDA!PT12
- FMEDA!PT13
- ... 及其他 1640 個

---

### CONDITIONAL-352

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PU4):
```excel
=SUM(IF(AA4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AA4="S"),(G4*J4-PT4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AA_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AA_ROW="S"),(G_ROW*J_ROW-PT_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!PU4
- FMEDA!PU5
- FMEDA!PU6
- FMEDA!PU7
- FMEDA!PU8
- FMEDA!PU9
- FMEDA!PU10
- FMEDA!PU11
- FMEDA!PU12
- FMEDA!PU13
- ... 及其他 1640 個

---

### CONDITIONAL-353

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PV4):
```excel
=IF(OR(AA4="S",AA4="M",AA4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(AA_ROW="S",AA_ROW="M",AA_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!PV4
- FMEDA!PV5
- FMEDA!PV6
- FMEDA!PV7
- FMEDA!PV8
- FMEDA!PV9
- FMEDA!PV10
- FMEDA!PV11
- FMEDA!PV12
- FMEDA!PV13
- ... 及其他 1640 個

---

### CONDITIONAL-354

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PW4):
```excel
=SUM(IF(AA4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AA4="S"),(G4*J4-PT4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AA_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AA_ROW="S"),(G_ROW*J_ROW-PT_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!PW4
- FMEDA!PW5
- FMEDA!PW6
- FMEDA!PW7
- FMEDA!PW8
- FMEDA!PW9
- FMEDA!PW10
- FMEDA!PW11
- FMEDA!PW12
- FMEDA!PW13
- ... 及其他 1640 個

---

### CONDITIONAL-355

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PY4):
```excel
=IF(AB4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(AB_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!PY4
- FMEDA!PY5
- FMEDA!PY6
- FMEDA!PY7
- FMEDA!PY8
- FMEDA!PY9
- FMEDA!PY10
- FMEDA!PY11
- FMEDA!PY12
- FMEDA!PY13
- ... 及其他 1640 個

---

### CONDITIONAL-356

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!PZ4):
```excel
=IF(AB4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AB_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!PZ4
- FMEDA!PZ5
- FMEDA!PZ6
- FMEDA!PZ7
- FMEDA!PZ8
- FMEDA!PZ9
- FMEDA!PZ10
- FMEDA!PZ11
- FMEDA!PZ12
- FMEDA!PZ13
- ... 及其他 1640 個

---

### CONDITIONAL-357

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QA4):
```excel
=SUM(IF(AB4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AB4="S"),(G4*J4-PZ4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AB_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AB_ROW="S"),(G_ROW*J_ROW-PZ_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!QA4
- FMEDA!QA5
- FMEDA!QA6
- FMEDA!QA7
- FMEDA!QA8
- FMEDA!QA9
- FMEDA!QA10
- FMEDA!QA11
- FMEDA!QA12
- FMEDA!QA13
- ... 及其他 1640 個

---

### CONDITIONAL-358

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QB4):
```excel
=IF(OR(AB4="S",AB4="M",AB4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(AB_ROW="S",AB_ROW="M",AB_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!QB4
- FMEDA!QB5
- FMEDA!QB6
- FMEDA!QB7
- FMEDA!QB8
- FMEDA!QB9
- FMEDA!QB10
- FMEDA!QB11
- FMEDA!QB12
- FMEDA!QB13
- ... 及其他 1640 個

---

### CONDITIONAL-359

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QC4):
```excel
=SUM(IF(AB4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AB4="S"),(G4*J4-PZ4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AB_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AB_ROW="S"),(G_ROW*J_ROW-PZ_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!QC4
- FMEDA!QC5
- FMEDA!QC6
- FMEDA!QC7
- FMEDA!QC8
- FMEDA!QC9
- FMEDA!QC10
- FMEDA!QC11
- FMEDA!QC12
- FMEDA!QC13
- ... 及其他 1640 個

---

### CONDITIONAL-360

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QE4):
```excel
=IF(AC4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(AC_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!QE4
- FMEDA!QE5
- FMEDA!QE6
- FMEDA!QE7
- FMEDA!QE8
- FMEDA!QE9
- FMEDA!QE10
- FMEDA!QE11
- FMEDA!QE12
- FMEDA!QE13
- ... 及其他 1640 個

---

### CONDITIONAL-361

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QF4):
```excel
=IF(AC4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AC_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!QF4
- FMEDA!QF5
- FMEDA!QF6
- FMEDA!QF7
- FMEDA!QF8
- FMEDA!QF9
- FMEDA!QF10
- FMEDA!QF11
- FMEDA!QF12
- FMEDA!QF13
- ... 及其他 1640 個

---

### CONDITIONAL-362

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QG4):
```excel
=SUM(IF(AC4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AC4="S"),(G4*J4-QF4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AC_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AC_ROW="S"),(G_ROW*J_ROW-QF_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!QG4
- FMEDA!QG5
- FMEDA!QG6
- FMEDA!QG7
- FMEDA!QG8
- FMEDA!QG9
- FMEDA!QG10
- FMEDA!QG11
- FMEDA!QG12
- FMEDA!QG13
- ... 及其他 1640 個

---

### CONDITIONAL-363

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QH4):
```excel
=IF(OR(AC4="S",AC4="M",AC4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(AC_ROW="S",AC_ROW="M",AC_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!QH4
- FMEDA!QH5
- FMEDA!QH6
- FMEDA!QH7
- FMEDA!QH8
- FMEDA!QH9
- FMEDA!QH10
- FMEDA!QH11
- FMEDA!QH12
- FMEDA!QH13
- ... 及其他 1640 個

---

### CONDITIONAL-364

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QI4):
```excel
=SUM(IF(AC4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AC4="S"),(G4*J4-QF4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AC_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AC_ROW="S"),(G_ROW*J_ROW-QF_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!QI4
- FMEDA!QI5
- FMEDA!QI6
- FMEDA!QI7
- FMEDA!QI8
- FMEDA!QI9
- FMEDA!QI10
- FMEDA!QI11
- FMEDA!QI12
- FMEDA!QI13
- ... 及其他 1640 個

---

### CONDITIONAL-365

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QK4):
```excel
=IF(AD4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(AD_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!QK4
- FMEDA!QK5
- FMEDA!QK6
- FMEDA!QK7
- FMEDA!QK8
- FMEDA!QK9
- FMEDA!QK10
- FMEDA!QK11
- FMEDA!QK12
- FMEDA!QK13
- ... 及其他 1640 個

---

### CONDITIONAL-366

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QL4):
```excel
=IF(AD4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AD_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!QL4
- FMEDA!QL5
- FMEDA!QL6
- FMEDA!QL7
- FMEDA!QL8
- FMEDA!QL9
- FMEDA!QL10
- FMEDA!QL11
- FMEDA!QL12
- FMEDA!QL13
- ... 及其他 1640 個

---

### CONDITIONAL-367

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QM4):
```excel
=SUM(IF(AD4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AD4="S"),(G4*J4-QL4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AD_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AD_ROW="S"),(G_ROW*J_ROW-QL_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!QM4
- FMEDA!QM5
- FMEDA!QM6
- FMEDA!QM7
- FMEDA!QM8
- FMEDA!QM9
- FMEDA!QM10
- FMEDA!QM11
- FMEDA!QM12
- FMEDA!QM13
- ... 及其他 1640 個

---

### CONDITIONAL-368

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QN4):
```excel
=IF(OR(AD4="S",AD4="M",AD4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(AD_ROW="S",AD_ROW="M",AD_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!QN4
- FMEDA!QN5
- FMEDA!QN6
- FMEDA!QN7
- FMEDA!QN8
- FMEDA!QN9
- FMEDA!QN10
- FMEDA!QN11
- FMEDA!QN12
- FMEDA!QN13
- ... 及其他 1640 個

---

### CONDITIONAL-369

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QO4):
```excel
=SUM(IF(AD4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AD4="S"),(G4*J4-QL4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AD_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AD_ROW="S"),(G_ROW*J_ROW-QL_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!QO4
- FMEDA!QO5
- FMEDA!QO6
- FMEDA!QO7
- FMEDA!QO8
- FMEDA!QO9
- FMEDA!QO10
- FMEDA!QO11
- FMEDA!QO12
- FMEDA!QO13
- ... 及其他 1640 個

---

### CONDITIONAL-370

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QQ4):
```excel
=IF(AE4="N",$G4*$J4,0)
```

**正規化公式**:
```
=IF(AE_ROW="N",$G_ROW*$J_ROW,0)
```

**出現位置**:
- FMEDA!QQ4
- FMEDA!QQ5
- FMEDA!QQ6
- FMEDA!QQ7
- FMEDA!QQ8
- FMEDA!QQ9
- FMEDA!QQ10
- FMEDA!QQ11
- FMEDA!QQ12
- FMEDA!QQ13
- ... 及其他 1640 個

---

### CONDITIONAL-371

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QR4):
```excel
=IF(AE4="S",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0)
```

**正規化公式**:
```
=IF(AE_ROW="S",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0)
```

**出現位置**:
- FMEDA!QR4
- FMEDA!QR5
- FMEDA!QR6
- FMEDA!QR7
- FMEDA!QR8
- FMEDA!QR9
- FMEDA!QR10
- FMEDA!QR11
- FMEDA!QR12
- FMEDA!QR13
- ... 及其他 1640 個

---

### CONDITIONAL-372

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QS4):
```excel
=SUM(IF(AE4="M",$G4*$J4*(1-IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AE4="S"),(G4*J4-QR4)*(1-IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AE_ROW="M",$G_ROW*$J_ROW*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AE_ROW="S"),(G_ROW*J_ROW-QR_ROW)*(1-IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!QS4
- FMEDA!QS5
- FMEDA!QS6
- FMEDA!QS7
- FMEDA!QS8
- FMEDA!QS9
- FMEDA!QS10
- FMEDA!QS11
- FMEDA!QS12
- FMEDA!QS13
- ... 及其他 1640 個

---

### CONDITIONAL-373

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QT4):
```excel
=IF(OR(AE4="S",AE4="M",AE4="N"),G4*J4,0)
```

**正規化公式**:
```
=IF(OR(AE_ROW="S",AE_ROW="M",AE_ROW="N"),G_ROW*J_ROW,0)
```

**出現位置**:
- FMEDA!QT4
- FMEDA!QT5
- FMEDA!QT6
- FMEDA!QT7
- FMEDA!QT8
- FMEDA!QT9
- FMEDA!QT10
- FMEDA!QT11
- FMEDA!QT12
- FMEDA!QT13
- ... 及其他 1640 個

---

### CONDITIONAL-374

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!QU4):
```excel
=SUM(IF(AE4="M",$G4*$J4*(IF(SafetyGoalViolations!$M$25="Internal",$AR4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AR4)*(1-$AX4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AR4)*(1-$BD4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AR4)*(1-$BJ4),"invalid"))))),0),IF(AND(HH4="Y",AE4="S"),(G4*J4-QR4)*(IF(SafetyGoalViolations!$M$25="Internal",$AT4,IF(SafetyGoalViolations!$M$25="UseCase1",1-(1-$AT4)*(1-$AZ4),IF(SafetyGoalViolations!$M$25="UseCase2",1-(1-$AT4)*(1-$BF4),IF(SafetyGoalViolations!$M$25="UseCase3",1-(1-$AT4)*(1-$BL4),"invalid"))))),0))
```

**正規化公式**:
```
=SUM(IF(AE_ROW="M",$G_ROW*$J_ROW*(IF(SafetyGoalViolations!$M$ROW="Internal",$AR_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AR_ROW)*(1-$AX_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AR_ROW)*(1-$BD_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AR_ROW)*(1-$BJ_ROW),"invalid"))))),0),IF(AND(HH_ROW="Y",AE_ROW="S"),(G_ROW*J_ROW-QR_ROW)*(IF(SafetyGoalViolations!$M$ROW="Internal",$AT_ROW,IF(SafetyGoalViolations!$M$ROW="UseCase1",1-(1-$AT_ROW)*(1-$AZ_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase2",1-(1-$AT_ROW)*(1-$BF_ROW),IF(SafetyGoalViolations!$M$ROW="UseCase3",1-(1-$AT_ROW)*(1-$BL_ROW),"invalid"))))),0))
```

**出現位置**:
- FMEDA!QU4
- FMEDA!QU5
- FMEDA!QU6
- FMEDA!QU7
- FMEDA!QU8
- FMEDA!QU9
- FMEDA!QU10
- FMEDA!QU11
- FMEDA!QU12
- FMEDA!QU13
- ... 及其他 1640 個

---

## LOOKUP 公式 (15 個)

### LOOKUP-1

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D105):
```excel
=VLOOKUP(C105,F90:H97,3,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:H_ROW,3,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D105

---

### LOOKUP-2

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D116):
```excel
=VLOOKUP(C92,F101:N104,2,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:N_ROW,2,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D116

---

### LOOKUP-3

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D117):
```excel
=VLOOKUP(C92,F101:N104,3,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:N_ROW,3,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D117

---

### LOOKUP-4

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D118):
```excel
=VLOOKUP(C92,F101:N104,4,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:N_ROW,4,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D118

---

### LOOKUP-5

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D119):
```excel
=VLOOKUP(C92,F101:N104,5,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:N_ROW,5,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D119

---

### LOOKUP-6

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D120):
```excel
=VLOOKUP(C92,F101:N104,6,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:N_ROW,6,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D120

---

### LOOKUP-7

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D121):
```excel
=VLOOKUP(C92,F101:N104,7,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:N_ROW,7,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D121

---

### LOOKUP-8

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D122):
```excel
=VLOOKUP(C92,F101:N104,8,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:N_ROW,8,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D122

---

### LOOKUP-9

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D123):
```excel
=VLOOKUP(C92,F101:N104,9,FALSE)
```

**正規化公式**:
```
=VLOOKUP(C_ROW,F_ROW:N_ROW,9,FALSE)
```

**出現位置**:
- FailureRateCalcIC!D123

---

### LOOKUP-10

**出現次數**: 165

**原始公式** (第一次出現在 FMEDA!A4):
```excel
=VLOOKUP(B4,BlockList!$B$10:$EG$982,136,FALSE)
```

**正規化公式**:
```
=VLOOKUP(B_ROW,BlockList!$B$ROW:$EG$ROW,136,FALSE)
```

**出現位置**:
- FMEDA!A4
- FMEDA!A14
- FMEDA!A24
- FMEDA!A34
- FMEDA!A44
- FMEDA!A54
- FMEDA!A64
- FMEDA!A74
- FMEDA!A84
- FMEDA!A94
- ... 及其他 155 個

---

### LOOKUP-11

**出現次數**: 165

**原始公式** (第一次出現在 FMEDA!C4):
```excel
=VLOOKUP(B4,BlockList!$B$10:$F$982,2,FALSE)
```

**正規化公式**:
```
=VLOOKUP(B_ROW,BlockList!$B$ROW:$F$ROW,2,FALSE)
```

**出現位置**:
- FMEDA!C4
- FMEDA!C14
- FMEDA!C24
- FMEDA!C34
- FMEDA!C44
- FMEDA!C54
- FMEDA!C64
- FMEDA!C74
- FMEDA!C84
- FMEDA!C94
- ... 及其他 155 個

---

### LOOKUP-12

**出現次數**: 165

**原始公式** (第一次出現在 FMEDA!D4):
```excel
=VLOOKUP(B4,BlockList!$B$10:$F$982,3,FALSE)
```

**正規化公式**:
```
=VLOOKUP(B_ROW,BlockList!$B$ROW:$F$ROW,3,FALSE)
```

**出現位置**:
- FMEDA!D4
- FMEDA!D14
- FMEDA!D24
- FMEDA!D34
- FMEDA!D44
- FMEDA!D54
- FMEDA!D64
- FMEDA!D74
- FMEDA!D84
- FMEDA!D94
- ... 及其他 155 個

---

### LOOKUP-13

**出現次數**: 165

**原始公式** (第一次出現在 FMEDA!E4):
```excel
=VLOOKUP(B4,BlockList!$B$10:$F$982,4,FALSE)
```

**正規化公式**:
```
=VLOOKUP(B_ROW,BlockList!$B$ROW:$F$ROW,4,FALSE)
```

**出現位置**:
- FMEDA!E4
- FMEDA!E14
- FMEDA!E24
- FMEDA!E34
- FMEDA!E44
- FMEDA!E54
- FMEDA!E64
- FMEDA!E74
- FMEDA!E84
- FMEDA!E94
- ... 及其他 155 個

---

### LOOKUP-14

**出現次數**: 165

**原始公式** (第一次出現在 FMEDA!F4):
```excel
=VLOOKUP(B4,BlockList!$B$10:$F$982,5,FALSE)
```

**正規化公式**:
```
=VLOOKUP(B_ROW,BlockList!$B$ROW:$F$ROW,5,FALSE)
```

**出現位置**:
- FMEDA!F4
- FMEDA!F14
- FMEDA!F24
- FMEDA!F34
- FMEDA!F44
- FMEDA!F54
- FMEDA!F64
- FMEDA!F74
- FMEDA!F84
- FMEDA!F94
- ... 及其他 155 個

---

### LOOKUP-15

**出現次數**: 165

**原始公式** (第一次出現在 FMEDA!G4):
```excel
=VLOOKUP(B4,BlockList!$B$10:$G$982,6,FALSE)
```

**正規化公式**:
```
=VLOOKUP(B_ROW,BlockList!$B$ROW:$G$ROW,6,FALSE)
```

**出現位置**:
- FMEDA!G4
- FMEDA!G14
- FMEDA!G24
- FMEDA!G34
- FMEDA!G44
- FMEDA!G54
- FMEDA!G64
- FMEDA!G74
- FMEDA!G84
- FMEDA!G94
- ... 及其他 155 個

---

## EXPONENTIAL 公式 (6 個)

### EXPONENTIAL-1

**出現次數**: 6

**原始公式** (第一次出現在 FailureRateCalc!E23):
```excel
=IF(B21="Package",FailureRateCalcIC!D129,(I21*M21*EXP(-0.35*O21)+(U21*K21))*R21)
```

**正規化公式**:
```
=IF(B_ROW="Package",FailureRateCalcIC!D_ROW,(I_ROW*M_ROW*EXP(-0.35*O_ROW)+(U_ROW*K_ROW))*R_ROW)
```

**出現位置**:
- FailureRateCalc!E23
- FailureRateCalc!E27
- FailureRateCalc!E31
- FailureRateCalc!E35
- FailureRateCalc!E39
- FailureRateCalc!E43

---

### EXPONENTIAL-2

**出現次數**: 8

**原始公式** (第一次出現在 FailureRateCalcIC!G101):
```excel
=EXP(3480*(1/328-1/(273+D108)))
```

**正規化公式**:
```
=EXP(3480*(1/328-1/(273+D_ROW)))
```

**出現位置**:
- FailureRateCalcIC!G101
- FailureRateCalcIC!H101
- FailureRateCalcIC!I101
- FailureRateCalcIC!J101
- FailureRateCalcIC!K101
- FailureRateCalcIC!L101
- FailureRateCalcIC!M101
- FailureRateCalcIC!N101

---

### EXPONENTIAL-3

**出現次數**: 8

**原始公式** (第一次出現在 FailureRateCalcIC!G102):
```excel
=EXP(4640*(1/328-1/(273+D108)))
```

**正規化公式**:
```
=EXP(4640*(1/328-1/(273+D_ROW)))
```

**出現位置**:
- FailureRateCalcIC!G102
- FailureRateCalcIC!H102
- FailureRateCalcIC!I102
- FailureRateCalcIC!J102
- FailureRateCalcIC!K102
- FailureRateCalcIC!L102
- FailureRateCalcIC!M102
- FailureRateCalcIC!N102

---

### EXPONENTIAL-4

**出現次數**: 8

**原始公式** (第一次出現在 FailureRateCalcIC!G103):
```excel
=EXP(3480*(1/373-1/(273+D108)))
```

**正規化公式**:
```
=EXP(3480*(1/373-1/(273+D_ROW)))
```

**出現位置**:
- FailureRateCalcIC!G103
- FailureRateCalcIC!H103
- FailureRateCalcIC!I103
- FailureRateCalcIC!J103
- FailureRateCalcIC!K103
- FailureRateCalcIC!L103
- FailureRateCalcIC!M103
- FailureRateCalcIC!N103

---

### EXPONENTIAL-5

**出現次數**: 8

**原始公式** (第一次出現在 FailureRateCalcIC!G104):
```excel
=EXP(4640*(1/373-1/(273+D108)))
```

**正規化公式**:
```
=EXP(4640*(1/373-1/(273+D_ROW)))
```

**出現位置**:
- FailureRateCalcIC!G104
- FailureRateCalcIC!H104
- FailureRateCalcIC!I104
- FailureRateCalcIC!J104
- FailureRateCalcIC!K104
- FailureRateCalcIC!L104
- FailureRateCalcIC!M104
- FailureRateCalcIC!N104

---

### EXPONENTIAL-6

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D128):
```excel
=(D94*D97*EXP(-0.35*D93)+D95)*(IF(D91=3,(D116*J109+D117*J111+D118*J113+D119*J115+D120*J117+D121*J119+D122*J121+D123*J123)/(J124),IF(D91=2,(D116*I109+D117*I111+D118*I113)/(I124),IF(D91=1,(D116*H109+D117*H111+D118*H113)/(H124),"""FALSE"))))
```

**正規化公式**:
```
=(D_ROW*D_ROW*EXP(-0.35*D_ROW)+D_ROW)*(IF(D_ROW=3,(D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW+D_ROW*J_ROW)/(J_ROW),IF(D_ROW=2,(D_ROW*I_ROW+D_ROW*I_ROW+D_ROW*I_ROW)/(I_ROW),IF(D_ROW=1,(D_ROW*H_ROW+D_ROW*H_ROW+D_ROW*H_ROW)/(H_ROW),"""FALSE"))))
```

**出現位置**:
- FailureRateCalcIC!D128

---

## AGGREGATE 公式 (354 個)

### AGGREGATE-1

**出現次數**: 1

**原始公式** (第一次出現在 BlockList!D2):
```excel
=SUM($F$10:$F$9981)
```

**正規化公式**:
```
=SUM($F$ROW:$F$ROW)
```

**出現位置**:
- BlockList!D2

---

### AGGREGATE-2

**出現次數**: 1

**原始公式** (第一次出現在 BlockList!M2):
```excel
=SUM($G$10:$G$9981)
```

**正規化公式**:
```
=SUM($G$ROW:$G$ROW)
```

**出現位置**:
- BlockList!M2

---

### AGGREGATE-3

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!I10):
```excel
=$F10/SUM($F$10:$F$982)
```

**正規化公式**:
```
=$F_ROW/SUM($F$ROW:$F$ROW)
```

**出現位置**:
- BlockList!I10
- BlockList!I11
- BlockList!I12
- BlockList!I13
- BlockList!I14
- BlockList!I15
- BlockList!I16
- BlockList!I17
- BlockList!I18
- BlockList!I19
- ... 及其他 190 個

---

### AGGREGATE-4

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!J10):
```excel
=$G10/SUM($G$10:$G$982)
```

**正規化公式**:
```
=$G_ROW/SUM($G$ROW:$G$ROW)
```

**出現位置**:
- BlockList!J10
- BlockList!J11
- BlockList!J12
- BlockList!J13
- BlockList!J14
- BlockList!J15
- BlockList!J16
- BlockList!J17
- BlockList!J18
- BlockList!J19
- ... 及其他 190 個

---

### AGGREGATE-5

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO3):
```excel
=AVERAGE(50,60)
```

**正規化公式**:
```
=AVERAGE(50,60)
```

**出現位置**:
- FailureRateCalc!AO3

---

### AGGREGATE-6

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO4):
```excel
=AVERAGE(64,57,60,54,56)
```

**正規化公式**:
```
=AVERAGE(64,57,60,54,56)
```

**出現位置**:
- FailureRateCalc!AO4

---

### AGGREGATE-7

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP4):
```excel
=AVERAGE(40,60,54,56)
```

**正規化公式**:
```
=AVERAGE(40,60,54,56)
```

**出現位置**:
- FailureRateCalc!AP4

---

### AGGREGATE-8

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR4):
```excel
=AVERAGE(98.48/8500000000,122/10000000000,90/8000000000,113.31/10300000000,74.13/6900000000,83.27/6900000000,112/8500000000,112/8500000000)*1000000
```

**正規化公式**:
```
=AVERAGE(98.48/8500000000,122/10000000000,90/8000000000,113.31/10300000000,74.13/6900000000,83.27/6900000000,112/8500000000,112/8500000000)*1000000
```

**出現位置**:
- FailureRateCalc!AR4

---

### AGGREGATE-9

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO5):
```excel
=AVERAGE(54,66,68,64)
```

**正規化公式**:
```
=AVERAGE(54,66,68,64)
```

**出現位置**:
- FailureRateCalc!AO5

---

### AGGREGATE-10

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP5):
```excel
=AVERAGE(53,42)
```

**正規化公式**:
```
=AVERAGE(53,42)
```

**出現位置**:
- FailureRateCalc!AP5

---

### AGGREGATE-11

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ5):
```excel
=AVERAGE(0.0441,0.0312,0.0367,0.042,0.049,0.04,0.053)
```

**正規化公式**:
```
=AVERAGE(0.0441,0.0312,0.0367,0.042,0.049,0.04,0.053)
```

**出現位置**:
- FailureRateCalc!AQ5

---

### AGGREGATE-12

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR5):
```excel
=AVERAGE(398/18000000000,96.4/4300000000,96.72/5500000000,89.23/4300000000,94/5300000000)*1000000
```

**正規化公式**:
```
=AVERAGE(398/18000000000,96.4/4300000000,96.72/5500000000,89.23/4300000000,94/5300000000)*1000000
```

**出現位置**:
- FailureRateCalc!AR5

---

### AGGREGATE-13

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO6):
```excel
=AVERAGE(70,78,80,90)
```

**正規化公式**:
```
=AVERAGE(70,78,80,90)
```

**出現位置**:
- FailureRateCalc!AO6

---

### AGGREGATE-14

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP6):
```excel
=AVERAGE(52,64,64,64)
```

**正規化公式**:
```
=AVERAGE(52,64,64,64)
```

**出現位置**:
- FailureRateCalc!AP6

---

### AGGREGATE-15

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ6):
```excel
=AVERAGE(0.0706,0.0499,0.0588,0.08,0.064,0.09,0.081,0.09,0.081)
```

**正規化公式**:
```
=AVERAGE(0.0706,0.0499,0.0588,0.08,0.064,0.09,0.081,0.09,0.081)
```

**出現位置**:
- FailureRateCalc!AQ6

---

### AGGREGATE-16

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR6):
```excel
=AVERAGE(768/19.2,695/8,696/9.7213/4.8,213/4.8,192/4.8,683/8,456/7.2,133/1.9,122/1.75)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(768/19.2,695/8,696/9.7213/4.8,213/4.8,192/4.8,683/8,456/7.2,133/1.9,122/1.75)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR6

---

### AGGREGATE-17

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR7):
```excel
=AVERAGE(360/7000000000,125/3300000000,110/4000000000143.9/3000000000,104.5/2000000000)*1000000
```

**正規化公式**:
```
=AVERAGE(360/7000000000,125/3300000000,110/4000000000143.9/3000000000,104.5/2000000000)*1000000
```

**出現位置**:
- FailureRateCalc!AR7

---

### AGGREGATE-18

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO8):
```excel
=AVERAGE(90,86)
```

**正規化公式**:
```
=AVERAGE(90,86)
```

**出現位置**:
- FailureRateCalc!AO8

---

### AGGREGATE-19

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP8):
```excel
=AVERAGE(64,64)
```

**正規化公式**:
```
=AVERAGE(64,64)
```

**出現位置**:
- FailureRateCalc!AP8

---

### AGGREGATE-20

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ8):
```excel
=AVERAGE(0.081,0.081,0.102)
```

**正規化公式**:
```
=AVERAGE(0.081,0.081,0.102)
```

**出現位置**:
- FailureRateCalc!AQ8

---

### AGGREGATE-21

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR8):
```excel
=AVERAGE(795/5450000000,128/3000000000)*1000000
```

**正規化公式**:
```
=AVERAGE(795/5450000000,128/3000000000)*1000000
```

**出現位置**:
- FailureRateCalc!AR8

---

### AGGREGATE-22

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO9):
```excel
=AVERAGE(90,108,100)
```

**正規化公式**:
```
=AVERAGE(90,108,100)
```

**出現位置**:
- FailureRateCalc!AO9

---

### AGGREGATE-23

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP9):
```excel
=AVERAGE(80,90,80)
```

**正規化公式**:
```
=AVERAGE(80,90,80)
```

**出現位置**:
- FailureRateCalc!AP9

---

### AGGREGATE-24

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ9):
```excel
=AVERAGE(0.103,0.092,0.108,0.088,0.126,0.144)
```

**正規化公式**:
```
=AVERAGE(0.103,0.092,0.108,0.088,0.126,0.144)
```

**出現位置**:
- FailureRateCalc!AQ9

---

### AGGREGATE-25

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR9):
```excel
=AVERAGE(678/3.99,661/5.56,541/4.31,355/2.6,177/1.4,650/4.2,256/1.86,720/5)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(678/3.99,661/5.56,541/4.31,355/2.6,177/1.4,650/4.2,256/1.86,720/5)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR9

---

### AGGREGATE-26

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO10):
```excel
=AVERAGE(117,113.4,120)
```

**正規化公式**:
```
=AVERAGE(117,113.4,120)
```

**出現位置**:
- FailureRateCalc!AO10

---

### AGGREGATE-27

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP10):
```excel
=AVERAGE(90,90,90)
```

**正規化公式**:
```
=AVERAGE(90,90,90)
```

**出現位置**:
- FailureRateCalc!AP10

---

### AGGREGATE-28

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ10):
```excel
=AVERAGE(0.127,0.155,0.12,0.197,0.124)
```

**正規化公式**:
```
=AVERAGE(0.127,0.155,0.12,0.197,0.124)
```

**出現位置**:
- FailureRateCalc!AQ10

---

### AGGREGATE-29

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR10):
```excel
=AVERAGE(102/1,600/2.995)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(102/1,600/2.995)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR10

---

### AGGREGATE-30

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO11):
```excel
=AVERAGE(112.5,130,126,120,130)
```

**正規化公式**:
```
=AVERAGE(112.5,130,126,120,130)
```

**出現位置**:
- FailureRateCalc!AO11

---

### AGGREGATE-31

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP11):
```excel
=AVERAGE(112.5,100,100,100,100)
```

**正規化公式**:
```
=AVERAGE(112.5,100,100,100,100)
```

**出現位置**:
- FailureRateCalc!AP11

---

### AGGREGATE-32

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ11):
```excel
=AVERAGE(0.199,0.148,0.171,0.15,0.124,0.149)
```

**正規化公式**:
```
=AVERAGE(0.199,0.148,0.171,0.15,0.124,0.149)
```

**出現位置**:
- FailureRateCalc!AQ11

---

### AGGREGATE-33

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR11):
```excel
=AVERAGE(544/3.1,597/2.75,567/2.1246/1.303,315/1.264/0.432,512/2.6,434/2.27,216/1.16)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(544/3.1,597/2.75,567/2.1246/1.303,315/1.264/0.432,512/2.6,434/2.27,216/1.16)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR11

---

### AGGREGATE-34

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO12):
```excel
=AVERAGE(162,129,168,140)
```

**正規化公式**:
```
=AVERAGE(162,129,168,140)
```

**出現位置**:
- FailureRateCalc!AO12

---

### AGGREGATE-35

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP12):
```excel
=AVERAGE(120,117)
```

**正規化公式**:
```
=AVERAGE(120,117)
```

**出現位置**:
- FailureRateCalc!AP12

---

### AGGREGATE-36

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ12):
```excel
=AVERAGE(0.252,0.195,0.25)
```

**正規化公式**:
```
=AVERAGE(0.252,0.195,0.25)
```

**出現位置**:
- FailureRateCalc!AQ12

---

### AGGREGATE-37

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR12):
```excel
=AVERAGE(484/1.87,377/1)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(484/1.87,377/1)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR12

---

### AGGREGATE-38

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO13):
```excel
=AVERAGE(180,190,180,190)
```

**正規化公式**:
```
=AVERAGE(180,190,180,190)
```

**出現位置**:
- FailureRateCalc!AO13

---

### AGGREGATE-39

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP13):
```excel
=AVERAGE(160)
```

**正規化公式**:
```
=AVERAGE(160)
```

**出現位置**:
- FailureRateCalc!AP13

---

### AGGREGATE-40

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ13):
```excel
=AVERAGE(0.346,0.3816,0.225,0.225,0.248,0.29,0.359,0.37)
```

**正規化公式**:
```
=AVERAGE(0.346,0.3816,0.225,0.225,0.248,0.29,0.359,0.37)
```

**出現位置**:
- FailureRateCalc!AQ13

---

### AGGREGATE-41

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR13):
```excel
=AVERAGE(512/1.4,567/1.2,513/0.76,346/0.904,503/1.9258/0.758,263/0.731,107/0.411)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(512/1.4,567/1.2,513/0.76,346/0.904,503/1.9258/0.758,263/0.731,107/0.411)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR13

---

### AGGREGATE-42

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO14):
```excel
=AVERAGE(220,250,200,160)
```

**正規化公式**:
```
=AVERAGE(220,250,200,160)
```

**出現位置**:
- FailureRateCalc!AO14

---

### AGGREGATE-43

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP14):
```excel
=AVERAGE(210,180,180)
```

**正規化公式**:
```
=AVERAGE(210,180,180)
```

**出現位置**:
- FailureRateCalc!AP14

---

### AGGREGATE-44

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ14):
```excel
=AVERAGE(0.68,0.57,0.54,0.65,0.4,0.49,0.54,0.676,0.499,0.525)
```

**正規化公式**:
```
=AVERAGE(0.68,0.57,0.54,0.65,0.4,0.49,0.54,0.676,0.499,0.525)
```

**出現位置**:
- FailureRateCalc!AQ14

---

### AGGREGATE-45

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR14):
```excel
=AVERAGE(111/0.169,341/0.789,283/0.463,143/0.291,162/0.362,90/0.184)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(111/0.169,341/0.789,283/0.463,143/0.291,162/0.362,90/0.184)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR14

---

### AGGREGATE-46

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO15):
```excel
=AVERAGE(260,240,245)
```

**正規化公式**:
```
=AVERAGE(260,240,245)
```

**出現位置**:
- FailureRateCalc!AO15

---

### AGGREGATE-47

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP15):
```excel
=AVERAGE(220,240,245)
```

**正規化公式**:
```
=AVERAGE(220,240,245)
```

**出現位置**:
- FailureRateCalc!AP15

---

### AGGREGATE-48

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ15):
```excel
=AVERAGE(1,0.999,0.999,1.07,0.999)
```

**正規化公式**:
```
=AVERAGE(1,0.999,0.999,1.07,0.999)
```

**出現位置**:
- FailureRateCalc!AQ15

---

### AGGREGATE-49

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR15):
```excel
=AVERAGE(596/1.7,221/0.25,206/0.228,143/0.169,294/0.4,110/0.112)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(596/1.7,221/0.25,206/0.228,143/0.169,294/0.4,110/0.112)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR15

---

### AGGREGATE-50

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO16):
```excel
=AVERAGE(319,310,350,320,350,350)
```

**正規化公式**:
```
=AVERAGE(319,310,350,320,350,350)
```

**出現位置**:
- FailureRateCalc!AO16

---

### AGGREGATE-51

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP16):
```excel
=AVERAGE(345,340,350,320,350,350)
```

**正規化公式**:
```
=AVERAGE(345,340,350,320,350,350)
```

**出現位置**:
- FailureRateCalc!AP16

---

### AGGREGATE-52

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ16):
```excel
=AVERAGE(2.09,2.45,2.14,1.98,1.8)
```

**正規化公式**:
```
=AVERAGE(2.09,2.45,2.14,1.98,1.8)
```

**出現位置**:
- FailureRateCalc!AQ16

---

### AGGREGATE-53

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR16):
```excel
=AVERAGE(432/0.592,374/0.41,193/0.1059,101/0.0543,145/0.055,81/0.045,290/0.191)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(432/0.592,374/0.41,193/0.1059,101/0.0543,145/0.055,81/0.045,290/0.191)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR16

---

### AGGREGATE-54

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO17):
```excel
=AVERAGE(480,430,420)
```

**正規化公式**:
```
=AVERAGE(480,430,420)
```

**出現位置**:
- FailureRateCalc!AO17

---

### AGGREGATE-55

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP17):
```excel
=AVERAGE(500,460,440)
```

**正規化公式**:
```
=AVERAGE(500,460,440)
```

**出現位置**:
- FailureRateCalc!AP17

---

### AGGREGATE-56

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ17):
```excel
=AVERAGE(4.18,4.65)
```

**正規化公式**:
```
=AVERAGE(4.18,4.65)
```

**出現位置**:
- FailureRateCalc!AQ17

---

### AGGREGATE-57

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR17):
```excel
=AVERAGE(397/0.152,421/0.22,217/0.042,80/0.021,43/0.021,180/0.0274,240/0.0135)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(397/0.152,421/0.22,217/0.042,80/0.021,43/0.021,180/0.0274,240/0.0135)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR17

---

### AGGREGATE-58

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO18):
```excel
=AVERAGE(500,640)
```

**正規化公式**:
```
=AVERAGE(500,640)
```

**出現位置**:
- FailureRateCalc!AO18

---

### AGGREGATE-59

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP18):
```excel
=AVERAGE(640,700,880,850,840,940,900,640)
```

**正規化公式**:
```
=AVERAGE(640,700,880,850,840,940,900,640)
```

**出現位置**:
- FailureRateCalc!AP18

---

### AGGREGATE-60

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ18):
```excel
=AVERAGE(10.26,9.26,8.6,10.5,11.5,11.3,7.556,12.77)
```

**正規化公式**:
```
=AVERAGE(10.26,9.26,8.6,10.5,11.5,11.3,7.556,12.77)
```

**出現位置**:
- FailureRateCalc!AQ18

---

### AGGREGATE-61

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR18):
```excel
=AVERAGE(184/0.022,118/0.0213,128/0.0095,113/0.0075)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(184/0.022,118/0.0213,128/0.0095,113/0.0075)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR18

---

### AGGREGATE-62

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AO19):
```excel
=AVERAGE(550)
```

**正規化公式**:
```
=AVERAGE(550)
```

**出現位置**:
- FailureRateCalc!AO19

---

### AGGREGATE-63

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AP19):
```excel
=AVERAGE(880)
```

**正規化公式**:
```
=AVERAGE(880)
```

**出現位置**:
- FailureRateCalc!AP19

---

### AGGREGATE-64

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ19):
```excel
=AVERAGE(21.67,18.1)
```

**正規化公式**:
```
=AVERAGE(21.67,18.1)
```

**出現位置**:
- FailureRateCalc!AQ19

---

### AGGREGATE-65

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR19):
```excel
=AVERAGE(4.8/0.000111,162/0.0088,195/0.0075,50/0.0025)*1000000/1000000000
```

**正規化公式**:
```
=AVERAGE(4.8/0.000111,162/0.0088,195/0.0075,50/0.0025)*1000000/1000000000
```

**出現位置**:
- FailureRateCalc!AR19

---

### AGGREGATE-66

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR20):
```excel
=AVERAGE(251/4.3,307/5.5,267/2.8)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(251/4.3,307/5.5,267/2.8)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR20

---

### AGGREGATE-67

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR21):
```excel
=AVERAGE(121/2.8,218/2.5,152/1.2)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(121/2.8,218/2.5,152/1.2)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR21

---

### AGGREGATE-68

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR22):
```excel
=AVERAGE(294/3.1,10/0.6,143/0.6,102/0.273)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(294/3.1,10/0.6,143/0.6,102/0.273)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR22

---

### AGGREGATE-69

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR23):
```excel
=AVERAGE(213/1.35,173/1.18)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(213/1.35,173/1.18)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR23

---

### AGGREGATE-70

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR24):
```excel
=AVERAGE(61/0.18,104/0.275,49/0.134)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(61/0.18,104/0.275,49/0.134)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR24

---

### AGGREGATE-71

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR25):
```excel
=AVERAGE(30.25/0.027,85/0.19)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(30.25/0.027,85/0.19)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR25

---

### AGGREGATE-72

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR26):
```excel
=AVERAGE(50/0.025,9/0.022,60/0.55,6/0.0115,44/0.068,33/0.029,33/0.029,20/0.0065)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(50/0.025,9/0.022,60/0.55,6/0.0115,44/0.068,33/0.029,33/0.029,20/0.0065)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR26

---

### AGGREGATE-73

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR27):
```excel
=AVERAGE(21/0.009,27/0.005)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(21/0.009,27/0.005)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR27

---

### AGGREGATE-74

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR28):
```excel
=AVERAGE(20/0.006,16/0.003,32/0.011)*1000000/1000000
```

**正規化公式**:
```
=AVERAGE(20/0.006,16/0.003,32/0.011)*1000000/1000000
```

**出現位置**:
- FailureRateCalc!AR28

---

### AGGREGATE-75

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D97):
```excel
=SUM(BlockList!E2:E7)
```

**正規化公式**:
```
=SUM(BlockList!E_ROW:E_ROW)
```

**出現位置**:
- FailureRateCalcIC!D97

---

### AGGREGATE-76

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D131):
```excel
=SUM(D128+D129+D130)
```

**正規化公式**:
```
=SUM(D_ROW+D_ROW+D_ROW)
```

**出現位置**:
- FailureRateCalcIC!D131

---

### AGGREGATE-77

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!I1):
```excel
=SUM(I4:I1653)
```

**正規化公式**:
```
=SUM(I_ROW:I_ROW)
```

**出現位置**:
- FMEDA!I1

---

### AGGREGATE-78

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!J1):
```excel
=SUM(J4:J1653)
```

**正規化公式**:
```
=SUM(J_ROW:J_ROW)
```

**出現位置**:
- FMEDA!J1

---

### AGGREGATE-79

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CL2):
```excel
=SUM(CL4:CL9589)
```

**正規化公式**:
```
=SUM(CL_ROW:CL_ROW)
```

**出現位置**:
- FMEDA!CL2

---

### AGGREGATE-80

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CM2):
```excel
=SUM(CM4:CM9589)
```

**正規化公式**:
```
=SUM(CM_ROW:CM_ROW)
```

**出現位置**:
- FMEDA!CM2

---

### AGGREGATE-81

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CN2):
```excel
=SUM(CN4:CN9649)
```

**正規化公式**:
```
=SUM(CN_ROW:CN_ROW)
```

**出現位置**:
- FMEDA!CN2

---

### AGGREGATE-82

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CO2):
```excel
=SUM(CO4:CO9649)
```

**正規化公式**:
```
=SUM(CO_ROW:CO_ROW)
```

**出現位置**:
- FMEDA!CO2

---

### AGGREGATE-83

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CP2):
```excel
=SUM(CP4:CP9649)
```

**正規化公式**:
```
=SUM(CP_ROW:CP_ROW)
```

**出現位置**:
- FMEDA!CP2

---

### AGGREGATE-84

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CR2):
```excel
=SUM(CR4:CR9589)
```

**正規化公式**:
```
=SUM(CR_ROW:CR_ROW)
```

**出現位置**:
- FMEDA!CR2

---

### AGGREGATE-85

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CS2):
```excel
=SUM(CS4:CS9649)
```

**正規化公式**:
```
=SUM(CS_ROW:CS_ROW)
```

**出現位置**:
- FMEDA!CS2

---

### AGGREGATE-86

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CT2):
```excel
=SUM(CT4:CT9649)
```

**正規化公式**:
```
=SUM(CT_ROW:CT_ROW)
```

**出現位置**:
- FMEDA!CT2

---

### AGGREGATE-87

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CU2):
```excel
=SUM(CU4:CU9649)
```

**正規化公式**:
```
=SUM(CU_ROW:CU_ROW)
```

**出現位置**:
- FMEDA!CU2

---

### AGGREGATE-88

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CV2):
```excel
=SUM(CV4:CV9649)
```

**正規化公式**:
```
=SUM(CV_ROW:CV_ROW)
```

**出現位置**:
- FMEDA!CV2

---

### AGGREGATE-89

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CX2):
```excel
=SUM(CX4:CX9649)
```

**正規化公式**:
```
=SUM(CX_ROW:CX_ROW)
```

**出現位置**:
- FMEDA!CX2

---

### AGGREGATE-90

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CY2):
```excel
=SUM(CY4:CY9589)
```

**正規化公式**:
```
=SUM(CY_ROW:CY_ROW)
```

**出現位置**:
- FMEDA!CY2

---

### AGGREGATE-91

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!CZ2):
```excel
=SUM(CZ4:CZ9649)
```

**正規化公式**:
```
=SUM(CZ_ROW:CZ_ROW)
```

**出現位置**:
- FMEDA!CZ2

---

### AGGREGATE-92

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DA2):
```excel
=SUM(DA4:DA9649)
```

**正規化公式**:
```
=SUM(DA_ROW:DA_ROW)
```

**出現位置**:
- FMEDA!DA2

---

### AGGREGATE-93

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DB2):
```excel
=SUM(DB4:DB9649)
```

**正規化公式**:
```
=SUM(DB_ROW:DB_ROW)
```

**出現位置**:
- FMEDA!DB2

---

### AGGREGATE-94

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DD2):
```excel
=SUM(DD4:DD9649)
```

**正規化公式**:
```
=SUM(DD_ROW:DD_ROW)
```

**出現位置**:
- FMEDA!DD2

---

### AGGREGATE-95

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DE2):
```excel
=SUM(DE4:DE9589)
```

**正規化公式**:
```
=SUM(DE_ROW:DE_ROW)
```

**出現位置**:
- FMEDA!DE2

---

### AGGREGATE-96

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DF2):
```excel
=SUM(DF4:DF9649)
```

**正規化公式**:
```
=SUM(DF_ROW:DF_ROW)
```

**出現位置**:
- FMEDA!DF2

---

### AGGREGATE-97

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DG2):
```excel
=SUM(DG4:DG9649)
```

**正規化公式**:
```
=SUM(DG_ROW:DG_ROW)
```

**出現位置**:
- FMEDA!DG2

---

### AGGREGATE-98

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DH2):
```excel
=SUM(DH4:DH9649)
```

**正規化公式**:
```
=SUM(DH_ROW:DH_ROW)
```

**出現位置**:
- FMEDA!DH2

---

### AGGREGATE-99

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DJ2):
```excel
=SUM(DJ4:DJ9649)
```

**正規化公式**:
```
=SUM(DJ_ROW:DJ_ROW)
```

**出現位置**:
- FMEDA!DJ2

---

### AGGREGATE-100

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DK2):
```excel
=SUM(DK4:DK9589)
```

**正規化公式**:
```
=SUM(DK_ROW:DK_ROW)
```

**出現位置**:
- FMEDA!DK2

---

### AGGREGATE-101

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DL2):
```excel
=SUM(DL4:DL9649)
```

**正規化公式**:
```
=SUM(DL_ROW:DL_ROW)
```

**出現位置**:
- FMEDA!DL2

---

### AGGREGATE-102

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DM2):
```excel
=SUM(DM4:DM9649)
```

**正規化公式**:
```
=SUM(DM_ROW:DM_ROW)
```

**出現位置**:
- FMEDA!DM2

---

### AGGREGATE-103

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DN2):
```excel
=SUM(DN4:DN9649)
```

**正規化公式**:
```
=SUM(DN_ROW:DN_ROW)
```

**出現位置**:
- FMEDA!DN2

---

### AGGREGATE-104

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DP2):
```excel
=SUM(DP4:DP9649)
```

**正規化公式**:
```
=SUM(DP_ROW:DP_ROW)
```

**出現位置**:
- FMEDA!DP2

---

### AGGREGATE-105

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DQ2):
```excel
=SUM(DQ4:DQ9589)
```

**正規化公式**:
```
=SUM(DQ_ROW:DQ_ROW)
```

**出現位置**:
- FMEDA!DQ2

---

### AGGREGATE-106

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DR2):
```excel
=SUM(DR4:DR9649)
```

**正規化公式**:
```
=SUM(DR_ROW:DR_ROW)
```

**出現位置**:
- FMEDA!DR2

---

### AGGREGATE-107

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DS2):
```excel
=SUM(DS4:DS9649)
```

**正規化公式**:
```
=SUM(DS_ROW:DS_ROW)
```

**出現位置**:
- FMEDA!DS2

---

### AGGREGATE-108

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DT2):
```excel
=SUM(DT4:DT9649)
```

**正規化公式**:
```
=SUM(DT_ROW:DT_ROW)
```

**出現位置**:
- FMEDA!DT2

---

### AGGREGATE-109

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DV2):
```excel
=SUM(DV4:DV9649)
```

**正規化公式**:
```
=SUM(DV_ROW:DV_ROW)
```

**出現位置**:
- FMEDA!DV2

---

### AGGREGATE-110

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DW2):
```excel
=SUM(DW4:DW9589)
```

**正規化公式**:
```
=SUM(DW_ROW:DW_ROW)
```

**出現位置**:
- FMEDA!DW2

---

### AGGREGATE-111

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DX2):
```excel
=SUM(DX4:DX9649)
```

**正規化公式**:
```
=SUM(DX_ROW:DX_ROW)
```

**出現位置**:
- FMEDA!DX2

---

### AGGREGATE-112

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DY2):
```excel
=SUM(DY4:DY9649)
```

**正規化公式**:
```
=SUM(DY_ROW:DY_ROW)
```

**出現位置**:
- FMEDA!DY2

---

### AGGREGATE-113

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!DZ2):
```excel
=SUM(DZ4:DZ9649)
```

**正規化公式**:
```
=SUM(DZ_ROW:DZ_ROW)
```

**出現位置**:
- FMEDA!DZ2

---

### AGGREGATE-114

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EB2):
```excel
=SUM(EB4:EB9649)
```

**正規化公式**:
```
=SUM(EB_ROW:EB_ROW)
```

**出現位置**:
- FMEDA!EB2

---

### AGGREGATE-115

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EC2):
```excel
=SUM(EC4:EC9589)
```

**正規化公式**:
```
=SUM(EC_ROW:EC_ROW)
```

**出現位置**:
- FMEDA!EC2

---

### AGGREGATE-116

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!ED2):
```excel
=SUM(ED4:ED9649)
```

**正規化公式**:
```
=SUM(ED_ROW:ED_ROW)
```

**出現位置**:
- FMEDA!ED2

---

### AGGREGATE-117

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EE2):
```excel
=SUM(EE4:EE9649)
```

**正規化公式**:
```
=SUM(EE_ROW:EE_ROW)
```

**出現位置**:
- FMEDA!EE2

---

### AGGREGATE-118

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EF2):
```excel
=SUM(EF4:EF9649)
```

**正規化公式**:
```
=SUM(EF_ROW:EF_ROW)
```

**出現位置**:
- FMEDA!EF2

---

### AGGREGATE-119

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EH2):
```excel
=SUM(EH4:EH9649)
```

**正規化公式**:
```
=SUM(EH_ROW:EH_ROW)
```

**出現位置**:
- FMEDA!EH2

---

### AGGREGATE-120

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EI2):
```excel
=SUM(EI4:EI9589)
```

**正規化公式**:
```
=SUM(EI_ROW:EI_ROW)
```

**出現位置**:
- FMEDA!EI2

---

### AGGREGATE-121

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EJ2):
```excel
=SUM(EJ4:EJ9649)
```

**正規化公式**:
```
=SUM(EJ_ROW:EJ_ROW)
```

**出現位置**:
- FMEDA!EJ2

---

### AGGREGATE-122

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EK2):
```excel
=SUM(EK4:EK9649)
```

**正規化公式**:
```
=SUM(EK_ROW:EK_ROW)
```

**出現位置**:
- FMEDA!EK2

---

### AGGREGATE-123

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EL2):
```excel
=SUM(EL4:EL9649)
```

**正規化公式**:
```
=SUM(EL_ROW:EL_ROW)
```

**出現位置**:
- FMEDA!EL2

---

### AGGREGATE-124

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EN2):
```excel
=SUM(EN4:EN9649)
```

**正規化公式**:
```
=SUM(EN_ROW:EN_ROW)
```

**出現位置**:
- FMEDA!EN2

---

### AGGREGATE-125

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EO2):
```excel
=SUM(EO4:EO9589)
```

**正規化公式**:
```
=SUM(EO_ROW:EO_ROW)
```

**出現位置**:
- FMEDA!EO2

---

### AGGREGATE-126

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EP2):
```excel
=SUM(EP4:EP9649)
```

**正規化公式**:
```
=SUM(EP_ROW:EP_ROW)
```

**出現位置**:
- FMEDA!EP2

---

### AGGREGATE-127

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EQ2):
```excel
=SUM(EQ4:EQ9649)
```

**正規化公式**:
```
=SUM(EQ_ROW:EQ_ROW)
```

**出現位置**:
- FMEDA!EQ2

---

### AGGREGATE-128

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!ER2):
```excel
=SUM(ER4:ER9649)
```

**正規化公式**:
```
=SUM(ER_ROW:ER_ROW)
```

**出現位置**:
- FMEDA!ER2

---

### AGGREGATE-129

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!ET2):
```excel
=SUM(ET4:ET9589)
```

**正規化公式**:
```
=SUM(ET_ROW:ET_ROW)
```

**出現位置**:
- FMEDA!ET2

---

### AGGREGATE-130

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EU2):
```excel
=SUM(EU4:EU9589)
```

**正規化公式**:
```
=SUM(EU_ROW:EU_ROW)
```

**出現位置**:
- FMEDA!EU2

---

### AGGREGATE-131

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EV2):
```excel
=SUM(EV4:EV9649)
```

**正規化公式**:
```
=SUM(EV_ROW:EV_ROW)
```

**出現位置**:
- FMEDA!EV2

---

### AGGREGATE-132

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EW2):
```excel
=SUM(EW4:EW9649)
```

**正規化公式**:
```
=SUM(EW_ROW:EW_ROW)
```

**出現位置**:
- FMEDA!EW2

---

### AGGREGATE-133

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EX2):
```excel
=SUM(EX4:EX9649)
```

**正規化公式**:
```
=SUM(EX_ROW:EX_ROW)
```

**出現位置**:
- FMEDA!EX2

---

### AGGREGATE-134

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!EZ2):
```excel
=SUM(EZ4:EZ9589)
```

**正規化公式**:
```
=SUM(EZ_ROW:EZ_ROW)
```

**出現位置**:
- FMEDA!EZ2

---

### AGGREGATE-135

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FA2):
```excel
=SUM(FA4:FA9649)
```

**正規化公式**:
```
=SUM(FA_ROW:FA_ROW)
```

**出現位置**:
- FMEDA!FA2

---

### AGGREGATE-136

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FB2):
```excel
=SUM(FB4:FB9649)
```

**正規化公式**:
```
=SUM(FB_ROW:FB_ROW)
```

**出現位置**:
- FMEDA!FB2

---

### AGGREGATE-137

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FC2):
```excel
=SUM(FC4:FC9649)
```

**正規化公式**:
```
=SUM(FC_ROW:FC_ROW)
```

**出現位置**:
- FMEDA!FC2

---

### AGGREGATE-138

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FD2):
```excel
=SUM(FD4:FD9649)
```

**正規化公式**:
```
=SUM(FD_ROW:FD_ROW)
```

**出現位置**:
- FMEDA!FD2

---

### AGGREGATE-139

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FF2):
```excel
=SUM(FF4:FF9649)
```

**正規化公式**:
```
=SUM(FF_ROW:FF_ROW)
```

**出現位置**:
- FMEDA!FF2

---

### AGGREGATE-140

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FG2):
```excel
=SUM(FG4:FG9589)
```

**正規化公式**:
```
=SUM(FG_ROW:FG_ROW)
```

**出現位置**:
- FMEDA!FG2

---

### AGGREGATE-141

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FH2):
```excel
=SUM(FH4:FH9649)
```

**正規化公式**:
```
=SUM(FH_ROW:FH_ROW)
```

**出現位置**:
- FMEDA!FH2

---

### AGGREGATE-142

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FI2):
```excel
=SUM(FI4:FI9649)
```

**正規化公式**:
```
=SUM(FI_ROW:FI_ROW)
```

**出現位置**:
- FMEDA!FI2

---

### AGGREGATE-143

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FJ2):
```excel
=SUM(FJ4:FJ9649)
```

**正規化公式**:
```
=SUM(FJ_ROW:FJ_ROW)
```

**出現位置**:
- FMEDA!FJ2

---

### AGGREGATE-144

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FL2):
```excel
=SUM(FL4:FL9649)
```

**正規化公式**:
```
=SUM(FL_ROW:FL_ROW)
```

**出現位置**:
- FMEDA!FL2

---

### AGGREGATE-145

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FM2):
```excel
=SUM(FM4:FM9589)
```

**正規化公式**:
```
=SUM(FM_ROW:FM_ROW)
```

**出現位置**:
- FMEDA!FM2

---

### AGGREGATE-146

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FN2):
```excel
=SUM(FN4:FN9649)
```

**正規化公式**:
```
=SUM(FN_ROW:FN_ROW)
```

**出現位置**:
- FMEDA!FN2

---

### AGGREGATE-147

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FO2):
```excel
=SUM(FO4:FO9649)
```

**正規化公式**:
```
=SUM(FO_ROW:FO_ROW)
```

**出現位置**:
- FMEDA!FO2

---

### AGGREGATE-148

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FP2):
```excel
=SUM(FP4:FP9649)
```

**正規化公式**:
```
=SUM(FP_ROW:FP_ROW)
```

**出現位置**:
- FMEDA!FP2

---

### AGGREGATE-149

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FR2):
```excel
=SUM(FR4:FR9649)
```

**正規化公式**:
```
=SUM(FR_ROW:FR_ROW)
```

**出現位置**:
- FMEDA!FR2

---

### AGGREGATE-150

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FS2):
```excel
=SUM(FS4:FS9589)
```

**正規化公式**:
```
=SUM(FS_ROW:FS_ROW)
```

**出現位置**:
- FMEDA!FS2

---

### AGGREGATE-151

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FT2):
```excel
=SUM(FT4:FT9649)
```

**正規化公式**:
```
=SUM(FT_ROW:FT_ROW)
```

**出現位置**:
- FMEDA!FT2

---

### AGGREGATE-152

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FU2):
```excel
=SUM(FU4:FU9649)
```

**正規化公式**:
```
=SUM(FU_ROW:FU_ROW)
```

**出現位置**:
- FMEDA!FU2

---

### AGGREGATE-153

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FV2):
```excel
=SUM(FV4:FV9649)
```

**正規化公式**:
```
=SUM(FV_ROW:FV_ROW)
```

**出現位置**:
- FMEDA!FV2

---

### AGGREGATE-154

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FX2):
```excel
=SUM(FX4:FX9649)
```

**正規化公式**:
```
=SUM(FX_ROW:FX_ROW)
```

**出現位置**:
- FMEDA!FX2

---

### AGGREGATE-155

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FY2):
```excel
=SUM(FY4:FY9589)
```

**正規化公式**:
```
=SUM(FY_ROW:FY_ROW)
```

**出現位置**:
- FMEDA!FY2

---

### AGGREGATE-156

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!FZ2):
```excel
=SUM(FZ4:FZ9649)
```

**正規化公式**:
```
=SUM(FZ_ROW:FZ_ROW)
```

**出現位置**:
- FMEDA!FZ2

---

### AGGREGATE-157

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GA2):
```excel
=SUM(GA4:GA9649)
```

**正規化公式**:
```
=SUM(GA_ROW:GA_ROW)
```

**出現位置**:
- FMEDA!GA2

---

### AGGREGATE-158

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GB2):
```excel
=SUM(GB4:GB9649)
```

**正規化公式**:
```
=SUM(GB_ROW:GB_ROW)
```

**出現位置**:
- FMEDA!GB2

---

### AGGREGATE-159

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GD2):
```excel
=SUM(GD4:GD9649)
```

**正規化公式**:
```
=SUM(GD_ROW:GD_ROW)
```

**出現位置**:
- FMEDA!GD2

---

### AGGREGATE-160

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GE2):
```excel
=SUM(GE4:GE9589)
```

**正規化公式**:
```
=SUM(GE_ROW:GE_ROW)
```

**出現位置**:
- FMEDA!GE2

---

### AGGREGATE-161

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GF2):
```excel
=SUM(GF4:GF9649)
```

**正規化公式**:
```
=SUM(GF_ROW:GF_ROW)
```

**出現位置**:
- FMEDA!GF2

---

### AGGREGATE-162

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GG2):
```excel
=SUM(GG4:GG9649)
```

**正規化公式**:
```
=SUM(GG_ROW:GG_ROW)
```

**出現位置**:
- FMEDA!GG2

---

### AGGREGATE-163

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GH2):
```excel
=SUM(GH4:GH9649)
```

**正規化公式**:
```
=SUM(GH_ROW:GH_ROW)
```

**出現位置**:
- FMEDA!GH2

---

### AGGREGATE-164

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GJ2):
```excel
=SUM(GJ4:GJ9649)
```

**正規化公式**:
```
=SUM(GJ_ROW:GJ_ROW)
```

**出現位置**:
- FMEDA!GJ2

---

### AGGREGATE-165

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GK2):
```excel
=SUM(GK4:GK9589)
```

**正規化公式**:
```
=SUM(GK_ROW:GK_ROW)
```

**出現位置**:
- FMEDA!GK2

---

### AGGREGATE-166

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GL2):
```excel
=SUM(GL4:GL9649)
```

**正規化公式**:
```
=SUM(GL_ROW:GL_ROW)
```

**出現位置**:
- FMEDA!GL2

---

### AGGREGATE-167

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GM2):
```excel
=SUM(GM4:GM9649)
```

**正規化公式**:
```
=SUM(GM_ROW:GM_ROW)
```

**出現位置**:
- FMEDA!GM2

---

### AGGREGATE-168

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GN2):
```excel
=SUM(GN4:GN9649)
```

**正規化公式**:
```
=SUM(GN_ROW:GN_ROW)
```

**出現位置**:
- FMEDA!GN2

---

### AGGREGATE-169

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GP2):
```excel
=SUM(GP4:GP9649)
```

**正規化公式**:
```
=SUM(GP_ROW:GP_ROW)
```

**出現位置**:
- FMEDA!GP2

---

### AGGREGATE-170

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GQ2):
```excel
=SUM(GQ4:GQ9589)
```

**正規化公式**:
```
=SUM(GQ_ROW:GQ_ROW)
```

**出現位置**:
- FMEDA!GQ2

---

### AGGREGATE-171

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GR2):
```excel
=SUM(GR4:GR9649)
```

**正規化公式**:
```
=SUM(GR_ROW:GR_ROW)
```

**出現位置**:
- FMEDA!GR2

---

### AGGREGATE-172

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GS2):
```excel
=SUM(GS4:GS9649)
```

**正規化公式**:
```
=SUM(GS_ROW:GS_ROW)
```

**出現位置**:
- FMEDA!GS2

---

### AGGREGATE-173

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GT2):
```excel
=SUM(GT4:GT9649)
```

**正規化公式**:
```
=SUM(GT_ROW:GT_ROW)
```

**出現位置**:
- FMEDA!GT2

---

### AGGREGATE-174

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GV2):
```excel
=SUM(GV4:GV9649)
```

**正規化公式**:
```
=SUM(GV_ROW:GV_ROW)
```

**出現位置**:
- FMEDA!GV2

---

### AGGREGATE-175

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GW2):
```excel
=SUM(GW4:GW9589)
```

**正規化公式**:
```
=SUM(GW_ROW:GW_ROW)
```

**出現位置**:
- FMEDA!GW2

---

### AGGREGATE-176

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GX2):
```excel
=SUM(GX4:GX9649)
```

**正規化公式**:
```
=SUM(GX_ROW:GX_ROW)
```

**出現位置**:
- FMEDA!GX2

---

### AGGREGATE-177

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GY2):
```excel
=SUM(GY4:GY9649)
```

**正規化公式**:
```
=SUM(GY_ROW:GY_ROW)
```

**出現位置**:
- FMEDA!GY2

---

### AGGREGATE-178

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!GZ2):
```excel
=SUM(GZ4:GZ9649)
```

**正規化公式**:
```
=SUM(GZ_ROW:GZ_ROW)
```

**出現位置**:
- FMEDA!GZ2

---

### AGGREGATE-179

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HB2):
```excel
=SUM(HB4:HB9649)
```

**正規化公式**:
```
=SUM(HB_ROW:HB_ROW)
```

**出現位置**:
- FMEDA!HB2

---

### AGGREGATE-180

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HC2):
```excel
=SUM(HC4:HC9589)
```

**正規化公式**:
```
=SUM(HC_ROW:HC_ROW)
```

**出現位置**:
- FMEDA!HC2

---

### AGGREGATE-181

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HD2):
```excel
=SUM(HD4:HD9649)
```

**正規化公式**:
```
=SUM(HD_ROW:HD_ROW)
```

**出現位置**:
- FMEDA!HD2

---

### AGGREGATE-182

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HE2):
```excel
=SUM(HE4:HE9649)
```

**正規化公式**:
```
=SUM(HE_ROW:HE_ROW)
```

**出現位置**:
- FMEDA!HE2

---

### AGGREGATE-183

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HF2):
```excel
=SUM(HF4:HF9649)
```

**正規化公式**:
```
=SUM(HF_ROW:HF_ROW)
```

**出現位置**:
- FMEDA!HF2

---

### AGGREGATE-184

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HM2):
```excel
=SUM(HM4:HM9649)
```

**正規化公式**:
```
=SUM(HM_ROW:HM_ROW)
```

**出現位置**:
- FMEDA!HM2

---

### AGGREGATE-185

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HN2):
```excel
=SUM(HN4:HN9589)
```

**正規化公式**:
```
=SUM(HN_ROW:HN_ROW)
```

**出現位置**:
- FMEDA!HN2

---

### AGGREGATE-186

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HO2):
```excel
=SUM(HO4:HO9649)
```

**正規化公式**:
```
=SUM(HO_ROW:HO_ROW)
```

**出現位置**:
- FMEDA!HO2

---

### AGGREGATE-187

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HP2):
```excel
=SUM(HP4:HP9649)
```

**正規化公式**:
```
=SUM(HP_ROW:HP_ROW)
```

**出現位置**:
- FMEDA!HP2

---

### AGGREGATE-188

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HQ2):
```excel
=SUM(HQ4:HQ9649)
```

**正規化公式**:
```
=SUM(HQ_ROW:HQ_ROW)
```

**出現位置**:
- FMEDA!HQ2

---

### AGGREGATE-189

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HW2):
```excel
=SUM(HW4:HW9649)
```

**正規化公式**:
```
=SUM(HW_ROW:HW_ROW)
```

**出現位置**:
- FMEDA!HW2

---

### AGGREGATE-190

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HX2):
```excel
=SUM(HX4:HX9589)
```

**正規化公式**:
```
=SUM(HX_ROW:HX_ROW)
```

**出現位置**:
- FMEDA!HX2

---

### AGGREGATE-191

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HY2):
```excel
=SUM(HY4:HY9649)
```

**正規化公式**:
```
=SUM(HY_ROW:HY_ROW)
```

**出現位置**:
- FMEDA!HY2

---

### AGGREGATE-192

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HZ2):
```excel
=SUM(HZ4:HZ9649)
```

**正規化公式**:
```
=SUM(HZ_ROW:HZ_ROW)
```

**出現位置**:
- FMEDA!HZ2

---

### AGGREGATE-193

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IA2):
```excel
=SUM(IA4:IA9649)
```

**正規化公式**:
```
=SUM(IA_ROW:IA_ROW)
```

**出現位置**:
- FMEDA!IA2

---

### AGGREGATE-194

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IC2):
```excel
=SUM(IC4:IC9649)
```

**正規化公式**:
```
=SUM(IC_ROW:IC_ROW)
```

**出現位置**:
- FMEDA!IC2

---

### AGGREGATE-195

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!ID2):
```excel
=SUM(ID4:ID9589)
```

**正規化公式**:
```
=SUM(ID_ROW:ID_ROW)
```

**出現位置**:
- FMEDA!ID2

---

### AGGREGATE-196

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IE2):
```excel
=SUM(IE4:IE9649)
```

**正規化公式**:
```
=SUM(IE_ROW:IE_ROW)
```

**出現位置**:
- FMEDA!IE2

---

### AGGREGATE-197

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IF2):
```excel
=SUM(IF4:IF9649)
```

**正規化公式**:
```
=SUM(IF_ROW:IF_ROW)
```

**出現位置**:
- FMEDA!IF2

---

### AGGREGATE-198

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IG2):
```excel
=SUM(IG4:IG9649)
```

**正規化公式**:
```
=SUM(IG_ROW:IG_ROW)
```

**出現位置**:
- FMEDA!IG2

---

### AGGREGATE-199

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!II2):
```excel
=SUM(II4:II9649)
```

**正規化公式**:
```
=SUM(II_ROW:II_ROW)
```

**出現位置**:
- FMEDA!II2

---

### AGGREGATE-200

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IJ2):
```excel
=SUM(IJ4:IJ9589)
```

**正規化公式**:
```
=SUM(IJ_ROW:IJ_ROW)
```

**出現位置**:
- FMEDA!IJ2

---

### AGGREGATE-201

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IK2):
```excel
=SUM(IK4:IK9649)
```

**正規化公式**:
```
=SUM(IK_ROW:IK_ROW)
```

**出現位置**:
- FMEDA!IK2

---

### AGGREGATE-202

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IL2):
```excel
=SUM(IL4:IL9649)
```

**正規化公式**:
```
=SUM(IL_ROW:IL_ROW)
```

**出現位置**:
- FMEDA!IL2

---

### AGGREGATE-203

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IM2):
```excel
=SUM(IM4:IM9649)
```

**正規化公式**:
```
=SUM(IM_ROW:IM_ROW)
```

**出現位置**:
- FMEDA!IM2

---

### AGGREGATE-204

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IO2):
```excel
=SUM(IO4:IO9649)
```

**正規化公式**:
```
=SUM(IO_ROW:IO_ROW)
```

**出現位置**:
- FMEDA!IO2

---

### AGGREGATE-205

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IP2):
```excel
=SUM(IP4:IP9589)
```

**正規化公式**:
```
=SUM(IP_ROW:IP_ROW)
```

**出現位置**:
- FMEDA!IP2

---

### AGGREGATE-206

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IQ2):
```excel
=SUM(IQ4:IQ9649)
```

**正規化公式**:
```
=SUM(IQ_ROW:IQ_ROW)
```

**出現位置**:
- FMEDA!IQ2

---

### AGGREGATE-207

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IR2):
```excel
=SUM(IR4:IR9649)
```

**正規化公式**:
```
=SUM(IR_ROW:IR_ROW)
```

**出現位置**:
- FMEDA!IR2

---

### AGGREGATE-208

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IS2):
```excel
=SUM(IS4:IS9649)
```

**正規化公式**:
```
=SUM(IS_ROW:IS_ROW)
```

**出現位置**:
- FMEDA!IS2

---

### AGGREGATE-209

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IU2):
```excel
=SUM(IU4:IU9649)
```

**正規化公式**:
```
=SUM(IU_ROW:IU_ROW)
```

**出現位置**:
- FMEDA!IU2

---

### AGGREGATE-210

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IV2):
```excel
=SUM(IV4:IV9589)
```

**正規化公式**:
```
=SUM(IV_ROW:IV_ROW)
```

**出現位置**:
- FMEDA!IV2

---

### AGGREGATE-211

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IW2):
```excel
=SUM(IW4:IW9649)
```

**正規化公式**:
```
=SUM(IW_ROW:IW_ROW)
```

**出現位置**:
- FMEDA!IW2

---

### AGGREGATE-212

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IX2):
```excel
=SUM(IX4:IX9649)
```

**正規化公式**:
```
=SUM(IX_ROW:IX_ROW)
```

**出現位置**:
- FMEDA!IX2

---

### AGGREGATE-213

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!IY2):
```excel
=SUM(IY4:IY9649)
```

**正規化公式**:
```
=SUM(IY_ROW:IY_ROW)
```

**出現位置**:
- FMEDA!IY2

---

### AGGREGATE-214

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JA2):
```excel
=SUM(JA4:JA9649)
```

**正規化公式**:
```
=SUM(JA_ROW:JA_ROW)
```

**出現位置**:
- FMEDA!JA2

---

### AGGREGATE-215

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JB2):
```excel
=SUM(JB4:JB9589)
```

**正規化公式**:
```
=SUM(JB_ROW:JB_ROW)
```

**出現位置**:
- FMEDA!JB2

---

### AGGREGATE-216

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JC2):
```excel
=SUM(JC4:JC9649)
```

**正規化公式**:
```
=SUM(JC_ROW:JC_ROW)
```

**出現位置**:
- FMEDA!JC2

---

### AGGREGATE-217

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JD2):
```excel
=SUM(JD4:JD9649)
```

**正規化公式**:
```
=SUM(JD_ROW:JD_ROW)
```

**出現位置**:
- FMEDA!JD2

---

### AGGREGATE-218

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JE2):
```excel
=SUM(JE4:JE9649)
```

**正規化公式**:
```
=SUM(JE_ROW:JE_ROW)
```

**出現位置**:
- FMEDA!JE2

---

### AGGREGATE-219

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JG2):
```excel
=SUM(JG4:JG9649)
```

**正規化公式**:
```
=SUM(JG_ROW:JG_ROW)
```

**出現位置**:
- FMEDA!JG2

---

### AGGREGATE-220

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JH2):
```excel
=SUM(JH4:JH9589)
```

**正規化公式**:
```
=SUM(JH_ROW:JH_ROW)
```

**出現位置**:
- FMEDA!JH2

---

### AGGREGATE-221

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JI2):
```excel
=SUM(JI4:JI9649)
```

**正規化公式**:
```
=SUM(JI_ROW:JI_ROW)
```

**出現位置**:
- FMEDA!JI2

---

### AGGREGATE-222

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JJ2):
```excel
=SUM(JJ4:JJ9649)
```

**正規化公式**:
```
=SUM(JJ_ROW:JJ_ROW)
```

**出現位置**:
- FMEDA!JJ2

---

### AGGREGATE-223

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JK2):
```excel
=SUM(JK4:JK9649)
```

**正規化公式**:
```
=SUM(JK_ROW:JK_ROW)
```

**出現位置**:
- FMEDA!JK2

---

### AGGREGATE-224

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JM2):
```excel
=SUM(JM4:JM9649)
```

**正規化公式**:
```
=SUM(JM_ROW:JM_ROW)
```

**出現位置**:
- FMEDA!JM2

---

### AGGREGATE-225

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JN2):
```excel
=SUM(JN4:JN9589)
```

**正規化公式**:
```
=SUM(JN_ROW:JN_ROW)
```

**出現位置**:
- FMEDA!JN2

---

### AGGREGATE-226

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JO2):
```excel
=SUM(JO4:JO9649)
```

**正規化公式**:
```
=SUM(JO_ROW:JO_ROW)
```

**出現位置**:
- FMEDA!JO2

---

### AGGREGATE-227

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JP2):
```excel
=SUM(JP4:JP9649)
```

**正規化公式**:
```
=SUM(JP_ROW:JP_ROW)
```

**出現位置**:
- FMEDA!JP2

---

### AGGREGATE-228

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JQ2):
```excel
=SUM(JQ4:JQ9649)
```

**正規化公式**:
```
=SUM(JQ_ROW:JQ_ROW)
```

**出現位置**:
- FMEDA!JQ2

---

### AGGREGATE-229

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JS2):
```excel
=SUM(JS4:JS9649)
```

**正規化公式**:
```
=SUM(JS_ROW:JS_ROW)
```

**出現位置**:
- FMEDA!JS2

---

### AGGREGATE-230

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JT2):
```excel
=SUM(JT4:JT9589)
```

**正規化公式**:
```
=SUM(JT_ROW:JT_ROW)
```

**出現位置**:
- FMEDA!JT2

---

### AGGREGATE-231

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JU2):
```excel
=SUM(JU4:JU9649)
```

**正規化公式**:
```
=SUM(JU_ROW:JU_ROW)
```

**出現位置**:
- FMEDA!JU2

---

### AGGREGATE-232

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JV2):
```excel
=SUM(JV4:JV9649)
```

**正規化公式**:
```
=SUM(JV_ROW:JV_ROW)
```

**出現位置**:
- FMEDA!JV2

---

### AGGREGATE-233

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JW2):
```excel
=SUM(JW4:JW9649)
```

**正規化公式**:
```
=SUM(JW_ROW:JW_ROW)
```

**出現位置**:
- FMEDA!JW2

---

### AGGREGATE-234

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JY2):
```excel
=SUM(JY4:JY9649)
```

**正規化公式**:
```
=SUM(JY_ROW:JY_ROW)
```

**出現位置**:
- FMEDA!JY2

---

### AGGREGATE-235

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!JZ2):
```excel
=SUM(JZ4:JZ9589)
```

**正規化公式**:
```
=SUM(JZ_ROW:JZ_ROW)
```

**出現位置**:
- FMEDA!JZ2

---

### AGGREGATE-236

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KA2):
```excel
=SUM(KA4:KA9649)
```

**正規化公式**:
```
=SUM(KA_ROW:KA_ROW)
```

**出現位置**:
- FMEDA!KA2

---

### AGGREGATE-237

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KB2):
```excel
=SUM(KB4:KB9649)
```

**正規化公式**:
```
=SUM(KB_ROW:KB_ROW)
```

**出現位置**:
- FMEDA!KB2

---

### AGGREGATE-238

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KC2):
```excel
=SUM(KC4:KC9649)
```

**正規化公式**:
```
=SUM(KC_ROW:KC_ROW)
```

**出現位置**:
- FMEDA!KC2

---

### AGGREGATE-239

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KE2):
```excel
=SUM(KE4:KE9649)
```

**正規化公式**:
```
=SUM(KE_ROW:KE_ROW)
```

**出現位置**:
- FMEDA!KE2

---

### AGGREGATE-240

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KF2):
```excel
=SUM(KF4:KF9589)
```

**正規化公式**:
```
=SUM(KF_ROW:KF_ROW)
```

**出現位置**:
- FMEDA!KF2

---

### AGGREGATE-241

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KG2):
```excel
=SUM(KG4:KG9649)
```

**正規化公式**:
```
=SUM(KG_ROW:KG_ROW)
```

**出現位置**:
- FMEDA!KG2

---

### AGGREGATE-242

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KH2):
```excel
=SUM(KH4:KH9649)
```

**正規化公式**:
```
=SUM(KH_ROW:KH_ROW)
```

**出現位置**:
- FMEDA!KH2

---

### AGGREGATE-243

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KI2):
```excel
=SUM(KI4:KI9649)
```

**正規化公式**:
```
=SUM(KI_ROW:KI_ROW)
```

**出現位置**:
- FMEDA!KI2

---

### AGGREGATE-244

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KK2):
```excel
=SUM(KK4:KK9649)
```

**正規化公式**:
```
=SUM(KK_ROW:KK_ROW)
```

**出現位置**:
- FMEDA!KK2

---

### AGGREGATE-245

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KL2):
```excel
=SUM(KL4:KL9589)
```

**正規化公式**:
```
=SUM(KL_ROW:KL_ROW)
```

**出現位置**:
- FMEDA!KL2

---

### AGGREGATE-246

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KM2):
```excel
=SUM(KM4:KM9649)
```

**正規化公式**:
```
=SUM(KM_ROW:KM_ROW)
```

**出現位置**:
- FMEDA!KM2

---

### AGGREGATE-247

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KN2):
```excel
=SUM(KN4:KN9649)
```

**正規化公式**:
```
=SUM(KN_ROW:KN_ROW)
```

**出現位置**:
- FMEDA!KN2

---

### AGGREGATE-248

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!KO2):
```excel
=SUM(KO4:KO9649)
```

**正規化公式**:
```
=SUM(KO_ROW:KO_ROW)
```

**出現位置**:
- FMEDA!KO2

---

### AGGREGATE-249

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MG2):
```excel
=SUM(MG4:MG9589)
```

**正規化公式**:
```
=SUM(MG_ROW:MG_ROW)
```

**出現位置**:
- FMEDA!MG2

---

### AGGREGATE-250

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MH2):
```excel
=SUM(MH4:MH9589)
```

**正規化公式**:
```
=SUM(MH_ROW:MH_ROW)
```

**出現位置**:
- FMEDA!MH2

---

### AGGREGATE-251

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MI2):
```excel
=SUM(MI4:MI9649)
```

**正規化公式**:
```
=SUM(MI_ROW:MI_ROW)
```

**出現位置**:
- FMEDA!MI2

---

### AGGREGATE-252

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MJ2):
```excel
=SUM(MJ4:MJ9649)
```

**正規化公式**:
```
=SUM(MJ_ROW:MJ_ROW)
```

**出現位置**:
- FMEDA!MJ2

---

### AGGREGATE-253

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MK2):
```excel
=SUM(MK4:MK9649)
```

**正規化公式**:
```
=SUM(MK_ROW:MK_ROW)
```

**出現位置**:
- FMEDA!MK2

---

### AGGREGATE-254

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MM2):
```excel
=SUM(MM4:MM9589)
```

**正規化公式**:
```
=SUM(MM_ROW:MM_ROW)
```

**出現位置**:
- FMEDA!MM2

---

### AGGREGATE-255

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MN2):
```excel
=SUM(MN4:MN9649)
```

**正規化公式**:
```
=SUM(MN_ROW:MN_ROW)
```

**出現位置**:
- FMEDA!MN2

---

### AGGREGATE-256

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MO2):
```excel
=SUM(MO4:MO9649)
```

**正規化公式**:
```
=SUM(MO_ROW:MO_ROW)
```

**出現位置**:
- FMEDA!MO2

---

### AGGREGATE-257

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MP2):
```excel
=SUM(MP4:MP9649)
```

**正規化公式**:
```
=SUM(MP_ROW:MP_ROW)
```

**出現位置**:
- FMEDA!MP2

---

### AGGREGATE-258

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MQ2):
```excel
=SUM(MQ4:MQ9649)
```

**正規化公式**:
```
=SUM(MQ_ROW:MQ_ROW)
```

**出現位置**:
- FMEDA!MQ2

---

### AGGREGATE-259

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MS2):
```excel
=SUM(MS4:MS9649)
```

**正規化公式**:
```
=SUM(MS_ROW:MS_ROW)
```

**出現位置**:
- FMEDA!MS2

---

### AGGREGATE-260

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MT2):
```excel
=SUM(MT4:MT9589)
```

**正規化公式**:
```
=SUM(MT_ROW:MT_ROW)
```

**出現位置**:
- FMEDA!MT2

---

### AGGREGATE-261

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MU2):
```excel
=SUM(MU4:MU9649)
```

**正規化公式**:
```
=SUM(MU_ROW:MU_ROW)
```

**出現位置**:
- FMEDA!MU2

---

### AGGREGATE-262

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MV2):
```excel
=SUM(MV4:MV9649)
```

**正規化公式**:
```
=SUM(MV_ROW:MV_ROW)
```

**出現位置**:
- FMEDA!MV2

---

### AGGREGATE-263

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MW2):
```excel
=SUM(MW4:MW9649)
```

**正規化公式**:
```
=SUM(MW_ROW:MW_ROW)
```

**出現位置**:
- FMEDA!MW2

---

### AGGREGATE-264

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MY2):
```excel
=SUM(MY4:MY9649)
```

**正規化公式**:
```
=SUM(MY_ROW:MY_ROW)
```

**出現位置**:
- FMEDA!MY2

---

### AGGREGATE-265

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!MZ2):
```excel
=SUM(MZ4:MZ9589)
```

**正規化公式**:
```
=SUM(MZ_ROW:MZ_ROW)
```

**出現位置**:
- FMEDA!MZ2

---

### AGGREGATE-266

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NA2):
```excel
=SUM(NA4:NA9649)
```

**正規化公式**:
```
=SUM(NA_ROW:NA_ROW)
```

**出現位置**:
- FMEDA!NA2

---

### AGGREGATE-267

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NB2):
```excel
=SUM(NB4:NB9649)
```

**正規化公式**:
```
=SUM(NB_ROW:NB_ROW)
```

**出現位置**:
- FMEDA!NB2

---

### AGGREGATE-268

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NC2):
```excel
=SUM(NC4:NC9649)
```

**正規化公式**:
```
=SUM(NC_ROW:NC_ROW)
```

**出現位置**:
- FMEDA!NC2

---

### AGGREGATE-269

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NE2):
```excel
=SUM(NE4:NE9649)
```

**正規化公式**:
```
=SUM(NE_ROW:NE_ROW)
```

**出現位置**:
- FMEDA!NE2

---

### AGGREGATE-270

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NF2):
```excel
=SUM(NF4:NF9589)
```

**正規化公式**:
```
=SUM(NF_ROW:NF_ROW)
```

**出現位置**:
- FMEDA!NF2

---

### AGGREGATE-271

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NG2):
```excel
=SUM(NG4:NG9649)
```

**正規化公式**:
```
=SUM(NG_ROW:NG_ROW)
```

**出現位置**:
- FMEDA!NG2

---

### AGGREGATE-272

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NH2):
```excel
=SUM(NH4:NH9649)
```

**正規化公式**:
```
=SUM(NH_ROW:NH_ROW)
```

**出現位置**:
- FMEDA!NH2

---

### AGGREGATE-273

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NI2):
```excel
=SUM(NI4:NI9649)
```

**正規化公式**:
```
=SUM(NI_ROW:NI_ROW)
```

**出現位置**:
- FMEDA!NI2

---

### AGGREGATE-274

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NK2):
```excel
=SUM(NK4:NK9649)
```

**正規化公式**:
```
=SUM(NK_ROW:NK_ROW)
```

**出現位置**:
- FMEDA!NK2

---

### AGGREGATE-275

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NL2):
```excel
=SUM(NL4:NL9589)
```

**正規化公式**:
```
=SUM(NL_ROW:NL_ROW)
```

**出現位置**:
- FMEDA!NL2

---

### AGGREGATE-276

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NM2):
```excel
=SUM(NM4:NM9649)
```

**正規化公式**:
```
=SUM(NM_ROW:NM_ROW)
```

**出現位置**:
- FMEDA!NM2

---

### AGGREGATE-277

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NN2):
```excel
=SUM(NN4:NN9649)
```

**正規化公式**:
```
=SUM(NN_ROW:NN_ROW)
```

**出現位置**:
- FMEDA!NN2

---

### AGGREGATE-278

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NO2):
```excel
=SUM(NO4:NO9649)
```

**正規化公式**:
```
=SUM(NO_ROW:NO_ROW)
```

**出現位置**:
- FMEDA!NO2

---

### AGGREGATE-279

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NQ2):
```excel
=SUM(NQ4:NQ9649)
```

**正規化公式**:
```
=SUM(NQ_ROW:NQ_ROW)
```

**出現位置**:
- FMEDA!NQ2

---

### AGGREGATE-280

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NR2):
```excel
=SUM(NR4:NR9589)
```

**正規化公式**:
```
=SUM(NR_ROW:NR_ROW)
```

**出現位置**:
- FMEDA!NR2

---

### AGGREGATE-281

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NS2):
```excel
=SUM(NS4:NS9649)
```

**正規化公式**:
```
=SUM(NS_ROW:NS_ROW)
```

**出現位置**:
- FMEDA!NS2

---

### AGGREGATE-282

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NT2):
```excel
=SUM(NT4:NT9649)
```

**正規化公式**:
```
=SUM(NT_ROW:NT_ROW)
```

**出現位置**:
- FMEDA!NT2

---

### AGGREGATE-283

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NU2):
```excel
=SUM(NU4:NU9649)
```

**正規化公式**:
```
=SUM(NU_ROW:NU_ROW)
```

**出現位置**:
- FMEDA!NU2

---

### AGGREGATE-284

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NW2):
```excel
=SUM(NW4:NW9649)
```

**正規化公式**:
```
=SUM(NW_ROW:NW_ROW)
```

**出現位置**:
- FMEDA!NW2

---

### AGGREGATE-285

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NX2):
```excel
=SUM(NX4:NX9589)
```

**正規化公式**:
```
=SUM(NX_ROW:NX_ROW)
```

**出現位置**:
- FMEDA!NX2

---

### AGGREGATE-286

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NY2):
```excel
=SUM(NY4:NY9649)
```

**正規化公式**:
```
=SUM(NY_ROW:NY_ROW)
```

**出現位置**:
- FMEDA!NY2

---

### AGGREGATE-287

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!NZ2):
```excel
=SUM(NZ4:NZ9649)
```

**正規化公式**:
```
=SUM(NZ_ROW:NZ_ROW)
```

**出現位置**:
- FMEDA!NZ2

---

### AGGREGATE-288

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OA2):
```excel
=SUM(OA4:OA9649)
```

**正規化公式**:
```
=SUM(OA_ROW:OA_ROW)
```

**出現位置**:
- FMEDA!OA2

---

### AGGREGATE-289

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OC2):
```excel
=SUM(OC4:OC9649)
```

**正規化公式**:
```
=SUM(OC_ROW:OC_ROW)
```

**出現位置**:
- FMEDA!OC2

---

### AGGREGATE-290

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OD2):
```excel
=SUM(OD4:OD9589)
```

**正規化公式**:
```
=SUM(OD_ROW:OD_ROW)
```

**出現位置**:
- FMEDA!OD2

---

### AGGREGATE-291

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OE2):
```excel
=SUM(OE4:OE9649)
```

**正規化公式**:
```
=SUM(OE_ROW:OE_ROW)
```

**出現位置**:
- FMEDA!OE2

---

### AGGREGATE-292

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OF2):
```excel
=SUM(OF4:OF9649)
```

**正規化公式**:
```
=SUM(OF_ROW:OF_ROW)
```

**出現位置**:
- FMEDA!OF2

---

### AGGREGATE-293

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OG2):
```excel
=SUM(OG4:OG9649)
```

**正規化公式**:
```
=SUM(OG_ROW:OG_ROW)
```

**出現位置**:
- FMEDA!OG2

---

### AGGREGATE-294

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OI2):
```excel
=SUM(OI4:OI9649)
```

**正規化公式**:
```
=SUM(OI_ROW:OI_ROW)
```

**出現位置**:
- FMEDA!OI2

---

### AGGREGATE-295

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OJ2):
```excel
=SUM(OJ4:OJ9589)
```

**正規化公式**:
```
=SUM(OJ_ROW:OJ_ROW)
```

**出現位置**:
- FMEDA!OJ2

---

### AGGREGATE-296

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OK2):
```excel
=SUM(OK4:OK9649)
```

**正規化公式**:
```
=SUM(OK_ROW:OK_ROW)
```

**出現位置**:
- FMEDA!OK2

---

### AGGREGATE-297

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OL2):
```excel
=SUM(OL4:OL9649)
```

**正規化公式**:
```
=SUM(OL_ROW:OL_ROW)
```

**出現位置**:
- FMEDA!OL2

---

### AGGREGATE-298

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OM2):
```excel
=SUM(OM4:OM9649)
```

**正規化公式**:
```
=SUM(OM_ROW:OM_ROW)
```

**出現位置**:
- FMEDA!OM2

---

### AGGREGATE-299

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OO2):
```excel
=SUM(OO4:OO9589)
```

**正規化公式**:
```
=SUM(OO_ROW:OO_ROW)
```

**出現位置**:
- FMEDA!OO2

---

### AGGREGATE-300

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OP2):
```excel
=SUM(OP4:OP9589)
```

**正規化公式**:
```
=SUM(OP_ROW:OP_ROW)
```

**出現位置**:
- FMEDA!OP2

---

### AGGREGATE-301

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OQ2):
```excel
=SUM(OQ4:OQ9649)
```

**正規化公式**:
```
=SUM(OQ_ROW:OQ_ROW)
```

**出現位置**:
- FMEDA!OQ2

---

### AGGREGATE-302

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OR2):
```excel
=SUM(OR4:OR9649)
```

**正規化公式**:
```
=SUM(OR_ROW:OR_ROW)
```

**出現位置**:
- FMEDA!OR2

---

### AGGREGATE-303

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OS2):
```excel
=SUM(OS4:OS9649)
```

**正規化公式**:
```
=SUM(OS_ROW:OS_ROW)
```

**出現位置**:
- FMEDA!OS2

---

### AGGREGATE-304

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OU2):
```excel
=SUM(OU4:OU9589)
```

**正規化公式**:
```
=SUM(OU_ROW:OU_ROW)
```

**出現位置**:
- FMEDA!OU2

---

### AGGREGATE-305

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OV2):
```excel
=SUM(OV4:OV9649)
```

**正規化公式**:
```
=SUM(OV_ROW:OV_ROW)
```

**出現位置**:
- FMEDA!OV2

---

### AGGREGATE-306

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OW2):
```excel
=SUM(OW4:OW9649)
```

**正規化公式**:
```
=SUM(OW_ROW:OW_ROW)
```

**出現位置**:
- FMEDA!OW2

---

### AGGREGATE-307

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OX2):
```excel
=SUM(OX4:OX9649)
```

**正規化公式**:
```
=SUM(OX_ROW:OX_ROW)
```

**出現位置**:
- FMEDA!OX2

---

### AGGREGATE-308

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!OY2):
```excel
=SUM(OY4:OY9649)
```

**正規化公式**:
```
=SUM(OY_ROW:OY_ROW)
```

**出現位置**:
- FMEDA!OY2

---

### AGGREGATE-309

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PA2):
```excel
=SUM(PA4:PA9649)
```

**正規化公式**:
```
=SUM(PA_ROW:PA_ROW)
```

**出現位置**:
- FMEDA!PA2

---

### AGGREGATE-310

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PB2):
```excel
=SUM(PB4:PB9589)
```

**正規化公式**:
```
=SUM(PB_ROW:PB_ROW)
```

**出現位置**:
- FMEDA!PB2

---

### AGGREGATE-311

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PC2):
```excel
=SUM(PC4:PC9649)
```

**正規化公式**:
```
=SUM(PC_ROW:PC_ROW)
```

**出現位置**:
- FMEDA!PC2

---

### AGGREGATE-312

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PD2):
```excel
=SUM(PD4:PD9649)
```

**正規化公式**:
```
=SUM(PD_ROW:PD_ROW)
```

**出現位置**:
- FMEDA!PD2

---

### AGGREGATE-313

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PE2):
```excel
=SUM(PE4:PE9649)
```

**正規化公式**:
```
=SUM(PE_ROW:PE_ROW)
```

**出現位置**:
- FMEDA!PE2

---

### AGGREGATE-314

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PG2):
```excel
=SUM(PG4:PG9649)
```

**正規化公式**:
```
=SUM(PG_ROW:PG_ROW)
```

**出現位置**:
- FMEDA!PG2

---

### AGGREGATE-315

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PH2):
```excel
=SUM(PH4:PH9589)
```

**正規化公式**:
```
=SUM(PH_ROW:PH_ROW)
```

**出現位置**:
- FMEDA!PH2

---

### AGGREGATE-316

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PI2):
```excel
=SUM(PI4:PI9649)
```

**正規化公式**:
```
=SUM(PI_ROW:PI_ROW)
```

**出現位置**:
- FMEDA!PI2

---

### AGGREGATE-317

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PJ2):
```excel
=SUM(PJ4:PJ9649)
```

**正規化公式**:
```
=SUM(PJ_ROW:PJ_ROW)
```

**出現位置**:
- FMEDA!PJ2

---

### AGGREGATE-318

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PK2):
```excel
=SUM(PK4:PK9649)
```

**正規化公式**:
```
=SUM(PK_ROW:PK_ROW)
```

**出現位置**:
- FMEDA!PK2

---

### AGGREGATE-319

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PM2):
```excel
=SUM(PM4:PM9649)
```

**正規化公式**:
```
=SUM(PM_ROW:PM_ROW)
```

**出現位置**:
- FMEDA!PM2

---

### AGGREGATE-320

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PN2):
```excel
=SUM(PN4:PN9589)
```

**正規化公式**:
```
=SUM(PN_ROW:PN_ROW)
```

**出現位置**:
- FMEDA!PN2

---

### AGGREGATE-321

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PO2):
```excel
=SUM(PO4:PO9649)
```

**正規化公式**:
```
=SUM(PO_ROW:PO_ROW)
```

**出現位置**:
- FMEDA!PO2

---

### AGGREGATE-322

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PP2):
```excel
=SUM(PP4:PP9649)
```

**正規化公式**:
```
=SUM(PP_ROW:PP_ROW)
```

**出現位置**:
- FMEDA!PP2

---

### AGGREGATE-323

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PQ2):
```excel
=SUM(PQ4:PQ9649)
```

**正規化公式**:
```
=SUM(PQ_ROW:PQ_ROW)
```

**出現位置**:
- FMEDA!PQ2

---

### AGGREGATE-324

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PS2):
```excel
=SUM(PS4:PS9649)
```

**正規化公式**:
```
=SUM(PS_ROW:PS_ROW)
```

**出現位置**:
- FMEDA!PS2

---

### AGGREGATE-325

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PT2):
```excel
=SUM(PT4:PT9589)
```

**正規化公式**:
```
=SUM(PT_ROW:PT_ROW)
```

**出現位置**:
- FMEDA!PT2

---

### AGGREGATE-326

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PU2):
```excel
=SUM(PU4:PU9649)
```

**正規化公式**:
```
=SUM(PU_ROW:PU_ROW)
```

**出現位置**:
- FMEDA!PU2

---

### AGGREGATE-327

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PV2):
```excel
=SUM(PV4:PV9649)
```

**正規化公式**:
```
=SUM(PV_ROW:PV_ROW)
```

**出現位置**:
- FMEDA!PV2

---

### AGGREGATE-328

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PW2):
```excel
=SUM(PW4:PW9649)
```

**正規化公式**:
```
=SUM(PW_ROW:PW_ROW)
```

**出現位置**:
- FMEDA!PW2

---

### AGGREGATE-329

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PY2):
```excel
=SUM(PY4:PY9649)
```

**正規化公式**:
```
=SUM(PY_ROW:PY_ROW)
```

**出現位置**:
- FMEDA!PY2

---

### AGGREGATE-330

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!PZ2):
```excel
=SUM(PZ4:PZ9589)
```

**正規化公式**:
```
=SUM(PZ_ROW:PZ_ROW)
```

**出現位置**:
- FMEDA!PZ2

---

### AGGREGATE-331

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QA2):
```excel
=SUM(QA4:QA9649)
```

**正規化公式**:
```
=SUM(QA_ROW:QA_ROW)
```

**出現位置**:
- FMEDA!QA2

---

### AGGREGATE-332

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QB2):
```excel
=SUM(QB4:QB9649)
```

**正規化公式**:
```
=SUM(QB_ROW:QB_ROW)
```

**出現位置**:
- FMEDA!QB2

---

### AGGREGATE-333

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QC2):
```excel
=SUM(QC4:QC9649)
```

**正規化公式**:
```
=SUM(QC_ROW:QC_ROW)
```

**出現位置**:
- FMEDA!QC2

---

### AGGREGATE-334

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QE2):
```excel
=SUM(QE4:QE9649)
```

**正規化公式**:
```
=SUM(QE_ROW:QE_ROW)
```

**出現位置**:
- FMEDA!QE2

---

### AGGREGATE-335

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QF2):
```excel
=SUM(QF4:QF9589)
```

**正規化公式**:
```
=SUM(QF_ROW:QF_ROW)
```

**出現位置**:
- FMEDA!QF2

---

### AGGREGATE-336

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QG2):
```excel
=SUM(QG4:QG9649)
```

**正規化公式**:
```
=SUM(QG_ROW:QG_ROW)
```

**出現位置**:
- FMEDA!QG2

---

### AGGREGATE-337

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QH2):
```excel
=SUM(QH4:QH9649)
```

**正規化公式**:
```
=SUM(QH_ROW:QH_ROW)
```

**出現位置**:
- FMEDA!QH2

---

### AGGREGATE-338

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QI2):
```excel
=SUM(QI4:QI9649)
```

**正規化公式**:
```
=SUM(QI_ROW:QI_ROW)
```

**出現位置**:
- FMEDA!QI2

---

### AGGREGATE-339

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QK2):
```excel
=SUM(QK4:QK9649)
```

**正規化公式**:
```
=SUM(QK_ROW:QK_ROW)
```

**出現位置**:
- FMEDA!QK2

---

### AGGREGATE-340

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QL2):
```excel
=SUM(QL4:QL9589)
```

**正規化公式**:
```
=SUM(QL_ROW:QL_ROW)
```

**出現位置**:
- FMEDA!QL2

---

### AGGREGATE-341

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QM2):
```excel
=SUM(QM4:QM9649)
```

**正規化公式**:
```
=SUM(QM_ROW:QM_ROW)
```

**出現位置**:
- FMEDA!QM2

---

### AGGREGATE-342

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QN2):
```excel
=SUM(QN4:QN9649)
```

**正規化公式**:
```
=SUM(QN_ROW:QN_ROW)
```

**出現位置**:
- FMEDA!QN2

---

### AGGREGATE-343

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QO2):
```excel
=SUM(QO4:QO9649)
```

**正規化公式**:
```
=SUM(QO_ROW:QO_ROW)
```

**出現位置**:
- FMEDA!QO2

---

### AGGREGATE-344

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QQ2):
```excel
=SUM(QQ4:QQ9649)
```

**正規化公式**:
```
=SUM(QQ_ROW:QQ_ROW)
```

**出現位置**:
- FMEDA!QQ2

---

### AGGREGATE-345

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QR2):
```excel
=SUM(QR4:QR9589)
```

**正規化公式**:
```
=SUM(QR_ROW:QR_ROW)
```

**出現位置**:
- FMEDA!QR2

---

### AGGREGATE-346

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QS2):
```excel
=SUM(QS4:QS9649)
```

**正規化公式**:
```
=SUM(QS_ROW:QS_ROW)
```

**出現位置**:
- FMEDA!QS2

---

### AGGREGATE-347

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QT2):
```excel
=SUM(QT4:QT9649)
```

**正規化公式**:
```
=SUM(QT_ROW:QT_ROW)
```

**出現位置**:
- FMEDA!QT2

---

### AGGREGATE-348

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!QU2):
```excel
=SUM(QU4:QU9649)
```

**正規化公式**:
```
=SUM(QU_ROW:QU_ROW)
```

**出現位置**:
- FMEDA!QU2

---

### AGGREGATE-349

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BP4):
```excel
=RANK(BO4,$BO$4:$BO$1653,0)
```

**正規化公式**:
```
=RANK(BO_ROW,$BO$ROW:$BO$ROW,0)
```

**出現位置**:
- FMEDA!BP4
- FMEDA!BP5
- FMEDA!BP6
- FMEDA!BP7
- FMEDA!BP8
- FMEDA!BP9
- FMEDA!BP10
- FMEDA!BP11
- FMEDA!BP12
- FMEDA!BP13
- ... 及其他 1640 個

---

### AGGREGATE-350

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BU4):
```excel
=RANK(BT4,$BT$4:$BT$1653,0)
```

**正規化公式**:
```
=RANK(BT_ROW,$BT$ROW:$BT$ROW,0)
```

**出現位置**:
- FMEDA!BU4
- FMEDA!BU5
- FMEDA!BU6
- FMEDA!BU7
- FMEDA!BU8
- FMEDA!BU9
- FMEDA!BU10
- FMEDA!BU11
- FMEDA!BU12
- FMEDA!BU13
- ... 及其他 1640 個

---

### AGGREGATE-351

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BX4):
```excel
=RANK(BW4,$BW$4:$BW$1653,0)
```

**正規化公式**:
```
=RANK(BW_ROW,$BW$ROW:$BW$ROW,0)
```

**出現位置**:
- FMEDA!BX4
- FMEDA!BX5
- FMEDA!BX6
- FMEDA!BX7
- FMEDA!BX8
- FMEDA!BX9
- FMEDA!BX10
- FMEDA!BX11
- FMEDA!BX12
- FMEDA!BX13
- ... 及其他 1640 個

---

### AGGREGATE-352

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CA4):
```excel
=RANK(BZ4,$BZ$4:$BZ$1653,0)
```

**正規化公式**:
```
=RANK(BZ_ROW,$BZ$ROW:$BZ$ROW,0)
```

**出現位置**:
- FMEDA!CA4
- FMEDA!CA5
- FMEDA!CA6
- FMEDA!CA7
- FMEDA!CA8
- FMEDA!CA9
- FMEDA!CA10
- FMEDA!CA11
- FMEDA!CA12
- FMEDA!CA13
- ... 及其他 1640 個

---

### AGGREGATE-353

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CF4):
```excel
=RANK(CE4,$CE$4:$CE$1653,0)
```

**正規化公式**:
```
=RANK(CE_ROW,$CE$ROW:$CE$ROW,0)
```

**出現位置**:
- FMEDA!CF4
- FMEDA!CF5
- FMEDA!CF6
- FMEDA!CF7
- FMEDA!CF8
- FMEDA!CF9
- FMEDA!CF10
- FMEDA!CF11
- FMEDA!CF12
- FMEDA!CF13
- ... 及其他 1640 個

---

### AGGREGATE-354

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CI4):
```excel
=RANK(CH4,$CH$4:$CH$1653,0)
```

**正規化公式**:
```
=RANK(CH_ROW,$CH$ROW:$CH$ROW,0)
```

**出現位置**:
- FMEDA!CI4
- FMEDA!CI5
- FMEDA!CI6
- FMEDA!CI7
- FMEDA!CI8
- FMEDA!CI9
- FMEDA!CI10
- FMEDA!CI11
- FMEDA!CI12
- FMEDA!CI13
- ... 及其他 1640 個

---

## MATH 公式 (78 個)

### MATH-1

**出現次數**: 6

**原始公式** (第一次出現在 BlockList!G2):
```excel
=E2/$T$7
```

**正規化公式**:
```
=E_ROW/$T$ROW
```

**出現位置**:
- BlockList!G2
- BlockList!G3
- BlockList!G4
- BlockList!G5
- BlockList!G6
- BlockList!G7

---

### MATH-2

**出現次數**: 2

**原始公式** (第一次出現在 BlockList!J2):
```excel
='SRAM Tran FIT'!X3
```

**正規化公式**:
```
='SRAM Tran FIT'!X_ROW
```

**出現位置**:
- BlockList!J2
- BlockList!J3

---

### MATH-3

**出現次數**: 1

**原始公式** (第一次出現在 BlockList!P2):
```excel
=D2+M2
```

**正規化公式**:
```
=D_ROW+M_ROW
```

**出現位置**:
- BlockList!P2

---

### MATH-4

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DQ10):
```excel
=AL10
```

**正規化公式**:
```
=AL_ROW
```

**出現位置**:
- BlockList!DQ10
- BlockList!DQ11
- BlockList!DQ12
- BlockList!DQ13
- BlockList!DQ14
- BlockList!DQ15
- BlockList!DQ16
- BlockList!DQ17
- BlockList!DQ18
- BlockList!DQ19
- ... 及其他 190 個

---

### MATH-5

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DR10):
```excel
=AQ10
```

**正規化公式**:
```
=AQ_ROW
```

**出現位置**:
- BlockList!DR10
- BlockList!DR11
- BlockList!DR12
- BlockList!DR13
- BlockList!DR14
- BlockList!DR15
- BlockList!DR16
- BlockList!DR17
- BlockList!DR18
- BlockList!DR19
- ... 及其他 190 個

---

### MATH-6

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DS10):
```excel
=AV10
```

**正規化公式**:
```
=AV_ROW
```

**出現位置**:
- BlockList!DS10
- BlockList!DS11
- BlockList!DS12
- BlockList!DS13
- BlockList!DS14
- BlockList!DS15
- BlockList!DS16
- BlockList!DS17
- BlockList!DS18
- BlockList!DS19
- ... 及其他 190 個

---

### MATH-7

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DT10):
```excel
=BA10
```

**正規化公式**:
```
=BA_ROW
```

**出現位置**:
- BlockList!DT10
- BlockList!DT11
- BlockList!DT12
- BlockList!DT13
- BlockList!DT14
- BlockList!DT15
- BlockList!DT16
- BlockList!DT17
- BlockList!DT18
- BlockList!DT19
- ... 及其他 190 個

---

### MATH-8

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DU10):
```excel
=BF10
```

**正規化公式**:
```
=BF_ROW
```

**出現位置**:
- BlockList!DU10
- BlockList!DU11
- BlockList!DU12
- BlockList!DU13
- BlockList!DU14
- BlockList!DU15
- BlockList!DU16
- BlockList!DU17
- BlockList!DU18
- BlockList!DU19
- ... 及其他 190 個

---

### MATH-9

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DV10):
```excel
=BK10
```

**正規化公式**:
```
=BK_ROW
```

**出現位置**:
- BlockList!DV10
- BlockList!DV11
- BlockList!DV12
- BlockList!DV13
- BlockList!DV14
- BlockList!DV15
- BlockList!DV16
- BlockList!DV17
- BlockList!DV18
- BlockList!DV19
- ... 及其他 190 個

---

### MATH-10

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DW10):
```excel
=BP10
```

**正規化公式**:
```
=BP_ROW
```

**出現位置**:
- BlockList!DW10
- BlockList!DW11
- BlockList!DW12
- BlockList!DW13
- BlockList!DW14
- BlockList!DW15
- BlockList!DW16
- BlockList!DW17
- BlockList!DW18
- BlockList!DW19
- ... 及其他 190 個

---

### MATH-11

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DX10):
```excel
=BU10
```

**正規化公式**:
```
=BU_ROW
```

**出現位置**:
- BlockList!DX10
- BlockList!DX11
- BlockList!DX12
- BlockList!DX13
- BlockList!DX14
- BlockList!DX15
- BlockList!DX16
- BlockList!DX17
- BlockList!DX18
- BlockList!DX19
- ... 及其他 190 個

---

### MATH-12

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DY10):
```excel
=BZ10
```

**正規化公式**:
```
=BZ_ROW
```

**出現位置**:
- BlockList!DY10
- BlockList!DY11
- BlockList!DY12
- BlockList!DY13
- BlockList!DY14
- BlockList!DY15
- BlockList!DY16
- BlockList!DY17
- BlockList!DY18
- BlockList!DY19
- ... 及其他 190 個

---

### MATH-13

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!DZ10):
```excel
=CE10
```

**正規化公式**:
```
=CE_ROW
```

**出現位置**:
- BlockList!DZ10
- BlockList!DZ11
- BlockList!DZ12
- BlockList!DZ13
- BlockList!DZ14
- BlockList!DZ15
- BlockList!DZ16
- BlockList!DZ17
- BlockList!DZ18
- BlockList!DZ19
- ... 及其他 190 個

---

### MATH-14

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!EA10):
```excel
=CJ10
```

**正規化公式**:
```
=CJ_ROW
```

**出現位置**:
- BlockList!EA10
- BlockList!EA11
- BlockList!EA12
- BlockList!EA13
- BlockList!EA14
- BlockList!EA15
- BlockList!EA16
- BlockList!EA17
- BlockList!EA18
- BlockList!EA19
- ... 及其他 190 個

---

### MATH-15

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!EB10):
```excel
=CO10
```

**正規化公式**:
```
=CO_ROW
```

**出現位置**:
- BlockList!EB10
- BlockList!EB11
- BlockList!EB12
- BlockList!EB13
- BlockList!EB14
- BlockList!EB15
- BlockList!EB16
- BlockList!EB17
- BlockList!EB18
- BlockList!EB19
- ... 及其他 190 個

---

### MATH-16

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!EC10):
```excel
=CT10
```

**正規化公式**:
```
=CT_ROW
```

**出現位置**:
- BlockList!EC10
- BlockList!EC11
- BlockList!EC12
- BlockList!EC13
- BlockList!EC14
- BlockList!EC15
- BlockList!EC16
- BlockList!EC17
- BlockList!EC18
- BlockList!EC19
- ... 及其他 190 個

---

### MATH-17

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!ED10):
```excel
=CY10
```

**正規化公式**:
```
=CY_ROW
```

**出現位置**:
- BlockList!ED10
- BlockList!ED11
- BlockList!ED12
- BlockList!ED13
- BlockList!ED14
- BlockList!ED15
- BlockList!ED16
- BlockList!ED17
- BlockList!ED18
- BlockList!ED19
- ... 及其他 190 個

---

### MATH-18

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!EE10):
```excel
=DD10
```

**正規化公式**:
```
=DD_ROW
```

**出現位置**:
- BlockList!EE10
- BlockList!EE11
- BlockList!EE12
- BlockList!EE13
- BlockList!EE14
- BlockList!EE15
- BlockList!EE16
- BlockList!EE17
- BlockList!EE18
- BlockList!EE19
- ... 及其他 190 個

---

### MATH-19

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!EF10):
```excel
=DI10
```

**正規化公式**:
```
=DI_ROW
```

**出現位置**:
- BlockList!EF10
- BlockList!EF11
- BlockList!EF12
- BlockList!EF13
- BlockList!EF14
- BlockList!EF15
- BlockList!EF16
- BlockList!EF17
- BlockList!EF18
- BlockList!EF19
- ... 及其他 190 個

---

### MATH-20

**出現次數**: 200

**原始公式** (第一次出現在 BlockList!EG10):
```excel
=A10
```

**正規化公式**:
```
=A_ROW
```

**出現位置**:
- BlockList!EG10
- BlockList!EG11
- BlockList!EG12
- BlockList!EG13
- BlockList!EG14
- BlockList!EG15
- BlockList!EG16
- BlockList!EG17
- BlockList!EG18
- BlockList!EG19
- ... 及其他 190 個

---

### MATH-21

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ3):
```excel
=(0.021+0.026+0.032)/3
```

**正規化公式**:
```
=(0.021+0.026+0.032)/3
```

**出現位置**:
- FailureRateCalc!AQ3

---

### MATH-22

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AR3):
```excel
=AO3/AO4*AP3/AP4*AR4
```

**正規化公式**:
```
=AO_ROW/AO_ROW*AP_ROW/AP_ROW*AR_ROW
```

**出現位置**:
- FailureRateCalc!AR3

---

### MATH-23

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalc!AQ4):
```excel
=(0.032+0.026+0.027+0.0353+0.0269)/5
```

**正規化公式**:
```
=(0.032+0.026+0.027+0.0353+0.0269)/5
```

**出現位置**:
- FailureRateCalc!AQ4

---

### MATH-24

**出現次數**: 6

**原始公式** (第一次出現在 FailureRateCalc!B21):
```excel
=BlockList!B2
```

**正規化公式**:
```
=BlockList!B_ROW
```

**出現位置**:
- FailureRateCalc!B21
- FailureRateCalc!B25
- FailureRateCalc!B29
- FailureRateCalc!B33
- FailureRateCalc!B37
- FailureRateCalc!B41

---

### MATH-25

**出現次數**: 6

**原始公式** (第一次出現在 FailureRateCalc!M21):
```excel
=BlockList!E2
```

**正規化公式**:
```
=BlockList!E_ROW
```

**出現位置**:
- FailureRateCalc!M21
- FailureRateCalc!M25
- FailureRateCalc!M29
- FailureRateCalc!M33
- FailureRateCalc!M37
- FailureRateCalc!M41

---

### MATH-26

**出現次數**: 6

**原始公式** (第一次出現在 FailureRateCalc!O21):
```excel
=X21-1998
```

**正規化公式**:
```
=X_ROW-1998
```

**出現位置**:
- FailureRateCalc!O21
- FailureRateCalc!O25
- FailureRateCalc!O29
- FailureRateCalc!O33
- FailureRateCalc!O37
- FailureRateCalc!O41

---

### MATH-27

**出現次數**: 6

**原始公式** (第一次出現在 FailureRateCalc!U21):
```excel
=BlockList!I2
```

**正規化公式**:
```
=BlockList!I_ROW
```

**出現位置**:
- FailureRateCalc!U21
- FailureRateCalc!U25
- FailureRateCalc!U29
- FailureRateCalc!U33
- FailureRateCalc!U37
- FailureRateCalc!U41

---

### MATH-28

**出現次數**: 6

**原始公式** (第一次出現在 FailureRateCalc!X21):
```excel
=BlockList!$T$2
```

**正規化公式**:
```
=BlockList!$T$ROW
```

**出現位置**:
- FailureRateCalc!X21
- FailureRateCalc!X25
- FailureRateCalc!X29
- FailureRateCalc!X33
- FailureRateCalc!X37
- FailureRateCalc!X41

---

### MATH-29

**出現次數**: 5

**原始公式** (第一次出現在 FailureRateCalc!R25):
```excel
=R21
```

**正規化公式**:
```
=R_ROW
```

**出現位置**:
- FailureRateCalc!R25
- FailureRateCalc!R29
- FailureRateCalc!R33
- FailureRateCalc!R37
- FailureRateCalc!R41

---

### MATH-30

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!G90):
```excel
=0.23*(10+1520/(D99+3))
```

**正規化公式**:
```
=0.23*(10+1520/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!G90

---

### MATH-31

**出現次數**: 2

**原始公式** (第一次出現在 FailureRateCalcIC!H90):
```excel
=(0.23+0.66*D104)*(10+1520/(D99+3))
```

**正規化公式**:
```
=(0.23+0.66*D_ROW)*(10+1520/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!H90
- FailureRateCalcIC!H91

---

### MATH-32

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!G91):
```excel
=0.33*(10+1520/(D99+3))
```

**正規化公式**:
```
=0.33*(10+1520/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!G91

---

### MATH-33

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!G92):
```excel
=0.28*(15+1600/(D99+3))
```

**正規化公式**:
```
=0.28*(15+1600/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!G92

---

### MATH-34

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!H92):
```excel
=(0.23+0.72*D104)*(10+1600/(D99+3))
```

**正規化公式**:
```
=(0.23+0.72*D_ROW)*(10+1600/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!H92

---

### MATH-35

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!C93):
```excel
=BlockList!T2
```

**正規化公式**:
```
=BlockList!T_ROW
```

**出現位置**:
- FailureRateCalcIC!C93

---

### MATH-36

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D93):
```excel
=C93-1998
```

**正規化公式**:
```
=C_ROW-1998
```

**出現位置**:
- FailureRateCalcIC!D93

---

### MATH-37

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!G93):
```excel
=0.28*(15+1760/(D99+3))
```

**正規化公式**:
```
=0.28*(15+1760/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!G93

---

### MATH-38

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!H93):
```excel
=(0.28+0.72*D104)*(10+1760/(D99+3))
```

**正規化公式**:
```
=(0.28+0.72*D_ROW)*(10+1760/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!H93

---

### MATH-39

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!B94):
```excel
=FailureRateCalc!B21
```

**正規化公式**:
```
=FailureRateCalc!B_ROW
```

**出現位置**:
- FailureRateCalcIC!B94

---

### MATH-40

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D94):
```excel
=FailureRateCalc!I21
```

**正規化公式**:
```
=FailureRateCalc!I_ROW
```

**出現位置**:
- FailureRateCalcIC!D94

---

### MATH-41

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!G94):
```excel
=0.4*(20+2500/(D99+3))
```

**正規化公式**:
```
=0.4*(20+2500/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!G94

---

### MATH-42

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!H94):
```excel
=(0.4+0.6*D104)*(20+2500/(D99+3))
```

**正規化公式**:
```
=(0.4+0.6*D_ROW)*(20+2500/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!H94

---

### MATH-43

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!B95):
```excel
=B94
```

**正規化公式**:
```
=B_ROW
```

**出現位置**:
- FailureRateCalcIC!B95

---

### MATH-44

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D95):
```excel
=FailureRateCalc!K21
```

**正規化公式**:
```
=FailureRateCalc!K_ROW
```

**出現位置**:
- FailureRateCalcIC!D95

---

### MATH-45

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!G95):
```excel
=0.33*(10+1440/(D99+3))
```

**正規化公式**:
```
=0.33*(10+1440/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!G95

---

### MATH-46

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!H95):
```excel
=(0.33+0.66*D104)*(10+1440/(D99+3))
```

**正規化公式**:
```
=(0.33+0.66*D_ROW)*(10+1440/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!H95

---

### MATH-47

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!G96):
```excel
=0.4*(27+2260/(D99+3))
```

**正規化公式**:
```
=0.4*(27+2260/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!G96

---

### MATH-48

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!H96):
```excel
=(0.4+0.6*D104)*(27+2260/(D99+3))
```

**正規化公式**:
```
=(0.4+0.6*D_ROW)*(27+2260/(D_ROW+3))
```

**出現位置**:
- FailureRateCalcIC!H96

---

### MATH-49

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!G97):
```excel
=0.4*(6.6+1100000/(D99*D99))
```

**正規化公式**:
```
=0.4*(6.6+1100000/(D_ROW*D_ROW))
```

**出現位置**:
- FailureRateCalcIC!G97

---

### MATH-50

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!H97):
```excel
=(0.4+0.6*D104)*(6.6+1100000/(D99*D99))
```

**正規化公式**:
```
=(0.4+0.6*D_ROW)*(6.6+1100000/(D_ROW*D_ROW))
```

**出現位置**:
- FailureRateCalcIC!H97

---

### MATH-51

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D101):
```excel
=0.06*POWER(ABS(D100-D98),1.68)
```

**正規化公式**:
```
=0.06*POWER(ABS(D_ROW-D_ROW),1.68)
```

**出現位置**:
- FailureRateCalcIC!D101

---

### MATH-52

**出現次數**: 2

**原始公式** (第一次出現在 FailureRateCalcIC!D106):
```excel
=D105*D107
```

**正規化公式**:
```
=D_ROW*D_ROW
```

**出現位置**:
- FailureRateCalcIC!D106
- FailureRateCalcIC!D130

---

### MATH-53

**出現次數**: 8

**原始公式** (第一次出現在 FailureRateCalcIC!J108):
```excel
=L108
```

**正規化公式**:
```
=L_ROW
```

**出現位置**:
- FailureRateCalcIC!J108
- FailureRateCalcIC!J110
- FailureRateCalcIC!J112
- FailureRateCalcIC!J114
- FailureRateCalcIC!J116
- FailureRateCalcIC!J118
- FailureRateCalcIC!J120
- FailureRateCalcIC!J122

---

### MATH-54

**出現次數**: 8

**原始公式** (第一次出現在 FailureRateCalcIC!J109):
```excel
=$J$124*M108
```

**正規化公式**:
```
=$J$ROW*M_ROW
```

**出現位置**:
- FailureRateCalcIC!J109
- FailureRateCalcIC!J111
- FailureRateCalcIC!J113
- FailureRateCalcIC!J115
- FailureRateCalcIC!J117
- FailureRateCalcIC!J119
- FailureRateCalcIC!J121
- FailureRateCalcIC!J123

---

### MATH-55

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D125):
```excel
=D106/3+D124-5
```

**正規化公式**:
```
=D_ROW/3+D_ROW-5
```

**出現位置**:
- FailureRateCalcIC!D125

---

### MATH-56

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!D126):
```excel
=D106/3+D124-15
```

**正規化公式**:
```
=D_ROW/3+D_ROW-15
```

**出現位置**:
- FailureRateCalcIC!D126

---

### MATH-57

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!H127):
```excel
=D106/3+55
```

**正規化公式**:
```
=D_ROW/3+55
```

**出現位置**:
- FailureRateCalcIC!H127

---

### MATH-58

**出現次數**: 2

**原始公式** (第一次出現在 FailureRateCalcIC!I127):
```excel
=D106/3+30
```

**正規化公式**:
```
=D_ROW/3+30
```

**出現位置**:
- FailureRateCalcIC!I127
- FailureRateCalcIC!J127

---

### MATH-59

**出現次數**: 1

**原始公式** (第一次出現在 FailureRateCalcIC!H129):
```excel
=D106/3+45
```

**正規化公式**:
```
=D_ROW/3+45
```

**出現位置**:
- FailureRateCalcIC!H129

---

### MATH-60

**出現次數**: 2

**原始公式** (第一次出現在 FailureRateCalcIC!I129):
```excel
=D106/3+20
```

**正規化公式**:
```
=D_ROW/3+20
```

**出現位置**:
- FailureRateCalcIC!I129
- FailureRateCalcIC!J129

---

### MATH-61

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HT1):
```excel
=SUMPRODUCT($F4:$F9649,$I4:$I9649)
```

**正規化公式**:
```
=SUMPRODUCT($F_ROW:$F_ROW,$I_ROW:$I_ROW)
```

**出現位置**:
- FMEDA!HT1

---

### MATH-62

**出現次數**: 1

**原始公式** (第一次出現在 FMEDA!HU1):
```excel
=SUMPRODUCT($G4:$G9649,$J4:$J9649)
```

**正規化公式**:
```
=SUMPRODUCT($G_ROW:$G_ROW,$J_ROW:$J_ROW)
```

**出現位置**:
- FMEDA!HU1

---

### MATH-63

**出現次數**: 20

**原始公式** (第一次出現在 FMEDA!L3):
```excel
=SafetyGoalViolations!D3
```

**正規化公式**:
```
=SafetyGoalViolations!D_ROW
```

**出現位置**:
- FMEDA!L3
- FMEDA!M3
- FMEDA!N3
- FMEDA!O3
- FMEDA!P3
- FMEDA!Q3
- FMEDA!R3
- FMEDA!S3
- FMEDA!T3
- FMEDA!U3
- ... 及其他 10 個

---

### MATH-64

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BO4):
```excel
=F4*I4
```

**正規化公式**:
```
=F_ROW*I_ROW
```

**出現位置**:
- FMEDA!BO4
- FMEDA!BO5
- FMEDA!BO6
- FMEDA!BO7
- FMEDA!BO8
- FMEDA!BO9
- FMEDA!BO10
- FMEDA!BO11
- FMEDA!BO12
- FMEDA!BO13
- ... 及其他 1640 個

---

### MATH-65

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BQ4):
```excel
=BO4/BlockList!$D$2
```

**正規化公式**:
```
=BO_ROW/BlockList!$D$ROW
```

**出現位置**:
- FMEDA!BQ4
- FMEDA!BQ5
- FMEDA!BQ6
- FMEDA!BQ7
- FMEDA!BQ8
- FMEDA!BQ9
- FMEDA!BQ10
- FMEDA!BQ11
- FMEDA!BQ12
- FMEDA!BQ13
- ... 及其他 1640 個

---

### MATH-66

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BT4):
```excel
=HC4
```

**正規化公式**:
```
=HC_ROW
```

**出現位置**:
- FMEDA!BT4
- FMEDA!BT5
- FMEDA!BT6
- FMEDA!BT7
- FMEDA!BT8
- FMEDA!BT9
- FMEDA!BT10
- FMEDA!BT11
- FMEDA!BT12
- FMEDA!BT13
- ... 及其他 1640 個

---

### MATH-67

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BW4):
```excel
=HD4
```

**正規化公式**:
```
=HD_ROW
```

**出現位置**:
- FMEDA!BW4
- FMEDA!BW5
- FMEDA!BW6
- FMEDA!BW7
- FMEDA!BW8
- FMEDA!BW9
- FMEDA!BW10
- FMEDA!BW11
- FMEDA!BW12
- FMEDA!BW13
- ... 及其他 1640 個

---

### MATH-68

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!BZ4):
```excel
=G4*J4
```

**正規化公式**:
```
=G_ROW*J_ROW
```

**出現位置**:
- FMEDA!BZ4
- FMEDA!BZ5
- FMEDA!BZ6
- FMEDA!BZ7
- FMEDA!BZ8
- FMEDA!BZ9
- FMEDA!BZ10
- FMEDA!BZ11
- FMEDA!BZ12
- FMEDA!BZ13
- ... 及其他 1640 個

---

### MATH-69

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CB4):
```excel
=BZ4/BlockList!$M$2
```

**正規化公式**:
```
=BZ_ROW/BlockList!$M$ROW
```

**出現位置**:
- FMEDA!CB4
- FMEDA!CB5
- FMEDA!CB6
- FMEDA!CB7
- FMEDA!CB8
- FMEDA!CB9
- FMEDA!CB10
- FMEDA!CB11
- FMEDA!CB12
- FMEDA!CB13
- ... 及其他 1640 個

---

### MATH-70

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CE4):
```excel
=HN4
```

**正規化公式**:
```
=HN_ROW
```

**出現位置**:
- FMEDA!CE4
- FMEDA!CE5
- FMEDA!CE6
- FMEDA!CE7
- FMEDA!CE8
- FMEDA!CE9
- FMEDA!CE10
- FMEDA!CE11
- FMEDA!CE12
- FMEDA!CE13
- ... 及其他 1640 個

---

### MATH-71

**出現次數**: 1650

**原始公式** (第一次出現在 FMEDA!CH4):
```excel
=HO4
```

**正規化公式**:
```
=HO_ROW
```

**出現位置**:
- FMEDA!CH4
- FMEDA!CH5
- FMEDA!CH6
- FMEDA!CH7
- FMEDA!CH8
- FMEDA!CH9
- FMEDA!CH10
- FMEDA!CH11
- FMEDA!CH12
- FMEDA!CH13
- ... 及其他 1640 個

---

### MATH-72

**出現次數**: 1485

**原始公式** (第一次出現在 FMEDA!A5):
```excel
=$A4
```

**正規化公式**:
```
=$A_ROW
```

**出現位置**:
- FMEDA!A5
- FMEDA!A6
- FMEDA!A7
- FMEDA!A8
- FMEDA!A9
- FMEDA!A10
- FMEDA!A11
- FMEDA!A12
- FMEDA!A13
- FMEDA!A15
- ... 及其他 1475 個

---

### MATH-73

**出現次數**: 1485

**原始公式** (第一次出現在 FMEDA!B5):
```excel
=$B4
```

**正規化公式**:
```
=$B_ROW
```

**出現位置**:
- FMEDA!B5
- FMEDA!B6
- FMEDA!B7
- FMEDA!B8
- FMEDA!B9
- FMEDA!B10
- FMEDA!B11
- FMEDA!B12
- FMEDA!B13
- FMEDA!B15
- ... 及其他 1475 個

---

### MATH-74

**出現次數**: 1485

**原始公式** (第一次出現在 FMEDA!C5):
```excel
=$C4
```

**正規化公式**:
```
=$C_ROW
```

**出現位置**:
- FMEDA!C5
- FMEDA!C6
- FMEDA!C7
- FMEDA!C8
- FMEDA!C9
- FMEDA!C10
- FMEDA!C11
- FMEDA!C12
- FMEDA!C13
- FMEDA!C15
- ... 及其他 1475 個

---

### MATH-75

**出現次數**: 1485

**原始公式** (第一次出現在 FMEDA!D5):
```excel
=$D4
```

**正規化公式**:
```
=$D_ROW
```

**出現位置**:
- FMEDA!D5
- FMEDA!D6
- FMEDA!D7
- FMEDA!D8
- FMEDA!D9
- FMEDA!D10
- FMEDA!D11
- FMEDA!D12
- FMEDA!D13
- FMEDA!D15
- ... 及其他 1475 個

---

### MATH-76

**出現次數**: 1485

**原始公式** (第一次出現在 FMEDA!E5):
```excel
=$E4
```

**正規化公式**:
```
=$E_ROW
```

**出現位置**:
- FMEDA!E5
- FMEDA!E6
- FMEDA!E7
- FMEDA!E8
- FMEDA!E9
- FMEDA!E10
- FMEDA!E11
- FMEDA!E12
- FMEDA!E13
- FMEDA!E15
- ... 及其他 1475 個

---

### MATH-77

**出現次數**: 1485

**原始公式** (第一次出現在 FMEDA!F5):
```excel
=$F4
```

**正規化公式**:
```
=$F_ROW
```

**出現位置**:
- FMEDA!F5
- FMEDA!F6
- FMEDA!F7
- FMEDA!F8
- FMEDA!F9
- FMEDA!F10
- FMEDA!F11
- FMEDA!F12
- FMEDA!F13
- FMEDA!F15
- ... 及其他 1475 個

---

### MATH-78

**出現次數**: 1485

**原始公式** (第一次出現在 FMEDA!G5):
```excel
=$G4
```

**正規化公式**:
```
=$G_ROW
```

**出現位置**:
- FMEDA!G5
- FMEDA!G6
- FMEDA!G7
- FMEDA!G8
- FMEDA!G9
- FMEDA!G10
- FMEDA!G11
- FMEDA!G12
- FMEDA!G13
- FMEDA!G15
- ... 及其他 1475 個

---

