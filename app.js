const drugs = [
  {
    id: "caffeine",
    name: "咖啡因",
    aliases: "咖啡因枸橼酸盐 · Caffeine citrate",
    category: "呼吸系统",
    status: "已完成示范",
    statusClass: "status-ready",
    mechanism: "主要拮抗腺苷 A1 和 A2A 受体，减弱腺苷介导的中枢神经抑制作用；同时可增强呼吸中枢对二氧化碳变化的反应。",
    effect: [
      "作用环节：拮抗腺苷 A1/A2A 受体 → 生理变化：解除腺苷对呼吸中枢的抑制，增强对二氧化碳升高的通气反应 → 临床表现：自主呼吸驱动增强，通气维持能力改善。",
      "作用环节：减弱腺苷相关的呼吸抑制 → 生理变化：呼吸节律和分钟通气量更加稳定 → 临床表现：中枢性呼吸暂停的发生频率和持续时间减少。",
      "作用环节：作用于膈肌和呼吸肌 → 生理变化：膈肌收缩力及抗疲劳能力增强 → 临床表现：自主呼吸时的呼吸肌负荷耐受性提高。",
      "作用环节：减少呼吸暂停发作及通气中断 → 生理变化：低通气和氧合波动减少 → 临床表现：呼吸暂停相关的间歇性低氧和继发性心动过缓减少。"
    ],
    use: "早产儿呼吸暂停；早产儿拔管后的呼吸支持。",
    adverse: "心动过速、烦躁或震颤、喂养不耐受、呕吐、利尿；高暴露时可出现心律失常或惊厥。",
    source: "示范条目：正式发布前需绑定具体制剂说明书和新生儿专业资料。"
  },
  {
    id: "aminophylline",
    name: "氨茶碱",
    aliases: "Aminophylline · 茶碱乙二胺",
    category: "呼吸系统",
    status: "药理概览",
    statusClass: "status-ready",
    mechanism: "甲基黄嘌呤类药物，主要拮抗腺苷受体，并可抑制磷酸二酯酶、提高细胞内环磷酸腺苷水平。",
    effect: [
      "作用环节：拮抗腺苷受体并增强呼吸中枢兴奋性 → 生理变化：对二氧化碳升高的通气反应增强 → 临床表现：呼吸驱动和呼吸肌活动增加。",
      "作用环节：抑制支气管平滑肌内磷酸二酯酶相关信号 → 生理变化：平滑肌舒张、气道阻力下降 → 临床表现：气流受限和呼吸做功可能减轻。"
    ],
    use: "早产儿呼吸暂停的甲基黄嘌呤类治疗语境；具体制剂、适用人群和当前首选地位需另行核对。",
    adverse: "心动过速、烦躁、震颤、喂养不耐受、呕吐；暴露过高时可出现心律失常或惊厥。",
    source: "通用药理概览；具体制剂说明书、新生儿用法和治疗窗需核对。"
  },
  {
    id: "surfactant",
    name: "肺表面活性物质",
    aliases: "Pulmonary surfactant · 具体产品待补充",
    category: "呼吸系统",
    status: "药理概览",
    statusClass: "status-ready",
    mechanism: "外源性肺表面活性物质在肺泡液气界面铺展，补充或替代内源性表面活性物质。不同来源和产品的成分、浓度及适用范围需分别核对。",
    effect: [
      "作用环节：降低肺泡液气界面表面张力 → 生理变化：呼气末肺泡更易保持开放、肺顺应性提高 → 临床表现：肺泡萎陷倾向减轻，通气需要可能下降。",
      "作用环节：改善肺泡开放和通气分布 → 生理变化：通气/灌注匹配和肺内气体交换改善 → 临床表现：氧合改善、呼吸窘迫表现减轻。"
    ],
    use: "早产儿呼吸窘迫综合征等表面活性物质缺乏相关疾病的治疗语境；具体产品应按说明书区分。",
    adverse: "给药时短暂氧合或心率波动、气道阻塞或反流；不同产品还需关注肺出血等报告。",
    source: "通用药理概览；需绑定具体产品说明书和新生儿指南。"
  },
  {
    id: "dopamine",
    name: "多巴胺",
    aliases: "Dopamine",
    category: "循环系统",
    status: "药理概览",
    statusClass: "status-ready",
    mechanism: "儿茶酚胺类药物，通过不同剂量范围下的多巴胺能、β1 和 α1 肾上腺素能受体作用影响心肌和血管。",
    effect: [
      "作用环节：激活心脏 β1 受体，并在较高暴露下增强 α1 受体介导的血管收缩 → 生理变化：心肌收缩力、心率和血管张力上升 → 临床表现：心排出量和血压可能提高。",
      "作用环节：改善心肌收缩和器官灌注压力 → 生理变化：组织灌注梯度增加 → 临床表现：低血压或低灌注状态的循环支持可能改善。"
    ],
    use: "新生儿低血压、低心排出量或低灌注状态的循环支持语境；受体效应与剂量范围相关。",
    adverse: "心动过速、心律失常、血管收缩和外周缺血；外渗可导致局部组织损伤。",
    source: "通用药理概览；需结合新生儿血流动力学评估、制剂说明书和监护规范。"
  },
  {
    id: "ampicillin",
    name: "氨苄西林",
    aliases: "Ampicillin",
    category: "抗菌药物",
    status: "药理概览",
    statusClass: "status-ready",
    mechanism: "β-内酰胺类抗菌药，通过结合青霉素结合蛋白，抑制肽聚糖交联和细菌细胞壁合成。",
    effect: [
      "作用环节：抑制敏感细菌细胞壁肽聚糖交联 → 生理变化：细胞壁结构强度下降、细菌在生长分裂时发生裂解 → 临床表现：敏感菌负荷下降，感染相关炎症表现可能改善。",
      "作用环节：药物浓度在给药间隔内维持对病原体的抑制作用 → 生理变化：细菌持续繁殖受到抑制 → 临床表现：菌血症、肺部或中枢神经系统感染的感染控制可能改善。"
    ],
    use: "新生儿早发型或晚发型细菌感染经验治疗中常见的 β-内酰胺类药物之一；具体联合方案需按病原体和当地指南确定。",
    adverse: "皮疹、过敏反应、腹泻或肠道菌群改变；少见肝酶异常、血细胞减少或神经系统不良反应。",
    source: "通用药理概览；抗菌谱、剂量和新生儿给药间隔需核对具体制剂及指南。"
  },
  {
    id: "epinephrine", name: "肾上腺素", aliases: "Epinephrine · Adrenaline", category: "循环系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "内源性儿茶酚胺，激活 α1、β1 和 β2 肾上腺素能受体；不同组织和暴露水平下的受体效应共同决定循环反应。",
    effect: ["作用环节：激活 β1 受体并增强 α1 介导的血管收缩 → 生理变化：心肌收缩力和心率上升、血管阻力增加 → 临床表现：严重心动过缓或循环衰竭时心输出和灌注压力可能改善。", "作用环节：激活 α1 受体收缩外周血管 → 生理变化：舒张压和冠脉/脑灌注压力提高 → 临床表现：复苏过程中的有效循环建立可能改善。"],
    use: "新生儿复苏、严重心动过缓或循环衰竭的紧急支持语境。", adverse: "心动过速、心律失常、血压升高、外周缺血和高血糖；外渗可致局部损伤。", source: "通用药理概览；复苏流程、浓度和给药途径需按现行规范核对。"
  },
  {
    id: "norepinephrine", name: "去甲肾上腺素", aliases: "Norepinephrine · Noradrenaline", category: "循环系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "主要激活 α1 受体，并具有一定 β1 受体作用，增强血管平滑肌张力和心肌收缩。",
    effect: ["作用环节：激活血管 α1 受体 → 生理变化：全身血管阻力和静脉回流增加 → 临床表现：血管扩张性低血压时平均动脉压可能上升。", "作用环节：激活心肌 β1 受体并恢复灌注压力 → 生理变化：心肌收缩和冠脉灌注条件改善 → 临床表现：组织灌注和尿量等低灌注表现可能改善。"],
    use: "新生儿低血压、血管张力不足或休克状态的血管活性支持语境。", adverse: "反射性心动过缓或心律失常、外周和脏器缺血、高血压；外渗可致组织坏死。", source: "通用药理概览；新生儿血流动力学目标和监测要求需核对。"
  },
  {
    id: "dobutamine", name: "多巴酚丁胺", aliases: "Dobutamine", category: "循环系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "合成儿茶酚胺，主要激活 β1 受体，并有一定 β2 和 α1 受体效应，整体偏向增强心肌收缩。",
    effect: ["作用环节：激活心肌 β1 受体 → 生理变化：心肌收缩力和每搏量增加 → 临床表现：低心排出量和心肌泵功能不足可能改善。", "作用环节：β2 介导的血管舒张与心排出量增加共同作用 → 生理变化：前向血流增加、后负荷相对减轻 → 临床表现：心功能不全时组织灌注可能改善。"],
    use: "新生儿心肌收缩力不足、低心排出量或心功能不全的循环支持语境。", adverse: "心动过速、心律失常、血压波动和心肌耗氧量增加；低血容量时反应可能受限。", source: "通用药理概览；需结合心脏超声、灌注指标和制剂说明书核对。"
  },
  {
    id: "digoxin", name: "地高辛", aliases: "Digoxin", category: "循环系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "抑制心肌细胞 Na+/K+-ATPase，增加细胞内钙；同时提高迷走神经张力、减慢房室结传导。",
    effect: ["作用环节：抑制 Na+/K+-ATPase 并提高细胞内钙 → 生理变化：心肌收缩力增强、每搏量增加 → 临床表现：部分心力衰竭患儿的前向心排出可能改善。", "作用环节：增强迷走神经作用、减慢房室结传导 → 生理变化：心室率下降、舒张期充盈时间延长 → 临床表现：部分室上性快速心律失常的心室率可能得到控制。"],
    use: "新生儿心功能不全或特定室上性心律失常的治疗语境，需严格结合心电图、电解质和肾功能。", adverse: "心动过缓、房室传导阻滞、各种心律失常、喂养不耐受、呕吐；毒性暴露可出现神经和视觉症状。", source: "通用药理概览；治疗窗窄，具体制剂和血药浓度管理需核对。"
  },
  {
    id: "sildenafil", name: "西地那非", aliases: "Sildenafil", category: "循环系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "选择性抑制肺血管平滑肌中的磷酸二酯酶-5，减少环磷酸鸟苷降解，增强一氧化氮介导的舒张信号。",
    effect: ["作用环节：抑制 PDE5、提高肺血管平滑肌 cGMP → 生理变化：肺血管舒张、肺血管阻力下降 → 临床表现：肺动脉高压相关的右心负荷和氧合障碍可能改善。"],
    use: "新生儿持续性肺动脉高压或慢性肺病相关肺高压的专科治疗语境；具体适应证和证据强度需核对。", adverse: "低血压、潮红、心动过速、胃肠道不适；与其他扩血管药合用时低血压风险增加。", source: "通用药理概览；新生儿使用常涉及专科或超说明书情境，需明确具体依据。"
  },
  {
    id: "furosemide", name: "呋塞米", aliases: "Furosemide · 速尿", category: "循环系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "抑制髓袢升支粗段 Na+-K+-2Cl- 同向转运体，减少钠、氯和水重吸收，并增加钙、镁排泄。",
    effect: ["作用环节：抑制髓袢升支 Na+-K+-2Cl- 转运 → 生理变化：尿钠排泄和尿量增加、循环容量下降 → 临床表现：液体潴留和肺水肿相关体征可能减轻。", "作用环节：降低静脉回流和充盈压力 → 生理变化：心脏前负荷及肺毛细血管静水压下降 → 临床表现：呼吸困难或水肿可能改善。"],
    use: "新生儿液体潴留、充血性心力衰竭或肺水肿的利尿治疗语境。", adverse: "低钠、低钾、低氯和脱水；可有高钙尿、肾功能变化及耳毒性，早产儿需特别关注。", source: "通用药理概览；利尿指征、电解质和肾功能监测需核对。"
  },
  {
    id: "hydrochlorothiazide", name: "氢氯噻嗪", aliases: "Hydrochlorothiazide · 双氢克尿噻", category: "循环系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "抑制远曲小管 Na+-Cl- 同向转运体，增加钠和水排泄，并减少尿钙排泄。",
    effect: ["作用环节：抑制远曲小管 Na+-Cl- 转运 → 生理变化：尿钠、尿量增加，细胞外液容量下降 → 临床表现：轻至中度液体潴留和水肿可能减轻。", "作用环节：降低循环容量并减少远曲小管钙排泄 → 生理变化：充盈压力和尿钙排泄下降 → 临床表现：部分容量负荷或高钙尿相关问题可能改善。"],
    use: "新生儿容量管理或联合利尿的治疗语境；实际使用需结合肾功能和电解质。", adverse: "低钠、低钾、低氯、代谢性碱中毒、脱水和高尿酸；可有高血糖或光敏反应。", source: "通用药理概览；新生儿证据与具体制剂需核对。"
  },
  {
    id: "spironolactone", name: "螺内酯", aliases: "Spironolactone", category: "循环系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "竞争性拮抗肾小管和集合管盐皮质激素受体，减少上皮钠通道表达和钾排泄。",
    effect: ["作用环节：拮抗醛固酮受体 → 生理变化：钠和水重吸收减少、钾排泄受抑 → 临床表现：容量负荷可能减轻，同时低钾风险相对降低。", "作用环节：降低醛固酮介导的容量和纤维化信号 → 生理变化：前负荷和部分心血管重构压力下降 → 临床表现：特定心功能不全或联合利尿治疗中水肿可能改善。"],
    use: "新生儿容量管理或与其他利尿药联合的治疗语境。", adverse: "高钾血症、低钠、脱水和肾功能恶化；长期或高暴露可有内分泌相关不良反应。", source: "通用药理概览；新生儿联合利尿方案和电解质监测需核对。"
  },
  {
    id: "fentanyl", name: "芬太尼", aliases: "Fentanyl", category: "镇静镇痛药物", status: "药理概览", statusClass: "status-ready",
    mechanism: "强效 μ-阿片受体激动剂，抑制疼痛传入和痛觉中枢反应，并可产生镇静和呼吸抑制。",
    effect: ["作用环节：激活中枢和脊髓 μ-阿片受体 → 生理变化：疼痛信号释放和突触传递减少 → 临床表现：疼痛、应激反应和操作相关不适减轻。", "作用环节：抑制脑干呼吸中枢并降低咳嗽反射 → 生理变化：呼吸驱动和气道反应下降 → 临床表现：机械通气时躁动或不同步可能减少，但呼吸抑制风险增加。"],
    use: "新生儿有创操作、机械通气或围操作期镇痛镇静的治疗语境。", adverse: "呼吸抑制、胸壁肌强直、心动过缓、低血压、胃肠蠕动减弱和尿潴留；反复使用可产生耐受和撤药反应。", source: "通用药理概览；给药途径、监护及撤药管理需核对。"
  },
  {
    id: "midazolam", name: "咪达唑仑", aliases: "Midazolam", category: "镇静镇痛药物", status: "药理概览", statusClass: "status-ready",
    mechanism: "苯二氮䓬类药物，与 GABA-A 受体结合并增强 GABA 抑制性神经递质作用，产生镇静、抗焦虑和遗忘。",
    effect: ["作用环节：增强 GABA-A 受体介导的氯离子通道开放效应 → 生理变化：中枢神经元兴奋性下降 → 临床表现：镇静、焦虑和操作相关躁动减轻。", "作用环节：抑制中枢呼吸和血管运动调节 → 生理变化：呼吸驱动和血管张力下降 → 临床表现：可能出现呼吸抑制、低血压，尤其在合并阿片类药物时。"],
    use: "新生儿操作或机械通气相关镇静语境；早产儿和低血压患儿需特别谨慎。", adverse: "呼吸抑制、低血压、嗜睡、喂养困难和反常性兴奋；反复使用可有耐受和撤药反应。", source: "通用药理概览；新生儿适用性、制剂和监护要求需核对。"
  },
  {
    id: "ursodeoxycholic-acid", name: "熊去氧胆酸", aliases: "Ursodeoxycholic acid · UDCA", category: "肝脏系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "亲水性胆汁酸，可增加胆汁酸池中相对无毒胆汁酸比例，并促进胆汁分泌和胆汁淤积物排出。",
    effect: ["作用环节：替代部分疏水性、潜在细胞毒性胆汁酸并改善胆汁转运 → 生理变化：胆汁酸对肝细胞和胆管上皮的损伤减轻、胆汁流动增加 → 临床表现：胆汁淤积相关黄疸和胆汁酸潴留可能改善。", "作用环节：增强胆汁分泌及胆汁排泄 → 生理变化：胆汁淤积程度下降 → 临床表现：胆红素和胆汁淤积指标可能呈改善趋势，需结合实验室结果判断。"],
    use: "新生儿胆汁淤积或肝内胆汁排泄障碍的辅助治疗语境；病因和证据需分别核对。", adverse: "腹泻、腹痛、恶心或呕吐；胆道梗阻等情况下需先明确病因。", source: "通用药理概览；新生儿胆汁淤积的适用条件和证据需核对。"
  },
  {
    id: "glucuronolactone", name: "葡醛内酯", aliases: "Glucuronolactone", category: "肝脏系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "葡萄糖醛酸相关化合物，可作为葡萄糖醛酸代谢途径的底物来源之一；其在新生儿肝病中的具体药理贡献需谨慎解释。",
    effect: ["作用环节：参与葡萄糖醛酸结合代谢 → 生理变化：部分内源性或外源性物质的结合与排泄途径获得底物支持 → 临床表现：不能据此直接推断特定新生儿肝病疗效，需结合病因和实验室结果。"],
    use: "肝功能异常或胆红素代谢相关辅助治疗语境；新生儿具体获益和适用范围资料有限。", adverse: "胃肠道不适、恶心或皮疹等；具体制剂不良反应需按说明书补充。", source: "通用药理概览；新生儿证据和具体制剂资料需核对。"
  },
  {
    id: "ademetionine", name: "丁二磺酸腺苷蛋氨酸", aliases: "Ademetionine · S-腺苷甲硫氨酸", category: "肝脏系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "S-腺苷甲硫氨酸的稳定盐，是甲基转移、转硫和氨基丙基化反应的代谢供体。",
    effect: ["作用环节：提供甲基转移和谷胱甘肽合成相关代谢底物 → 生理变化：肝细胞膜磷脂代谢和抗氧化能力可能改善 → 临床表现：部分胆汁淤积或肝细胞损伤指标可能改善，但不能替代病因治疗。", "作用环节：促进胆汁酸转运相关代谢过程 → 生理变化：胆汁排泄能力可能增强 → 临床表现：胆汁淤积相关实验室异常可能减轻，需结合具体病因判断。"],
    use: "肝内胆汁淤积和肝功能异常的辅助治疗语境；新生儿证据和适用制剂需单独核对。", adverse: "恶心、腹泻、腹痛、皮疹或头痛；对具体新生儿制剂的安全资料需核对。", source: "通用药理概览；新生儿适用性和证据强度需核对。"
  },
  {
    id: "levothyroxine", name: "左甲状腺素钠", aliases: "Levothyroxine sodium · L-T4", category: "内分泌系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "合成甲状腺素 T4，在外周部分转化为 T3；T3 与细胞核甲状腺激素受体结合，调节基因转录。",
    effect: ["作用环节：补充 T4 并经外周转化为 T3 → 生理变化：甲状腺激素受体介导的代谢、心血管和神经发育信号恢复 → 临床表现：甲状腺功能减退相关的嗜睡、喂养困难及生长发育风险可能改善。", "作用环节：恢复新生儿期甲状腺激素供应 → 生理变化：中枢神经系统和骨骼发育获得必要激素支持 → 临床表现：先天性甲状腺功能减退的发育不良风险降低。"],
    use: "先天性甲状腺功能减退及其他甲状腺激素不足状态的替代治疗语境。", adverse: "过量可有心动过速、烦躁、出汗、喂养变化和生长加速；长期需结合甲状腺功能监测调整。", source: "通用药理概览；具体制剂、检测时间和新生儿治疗目标需核对。"
  },
  {
    id: "iron-dextran", name: "右旋糖酐铁", aliases: "Iron dextran", category: "血液系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "铁与右旋糖酐形成的胶体复合物，经网状内皮系统处理后释放铁，供血红蛋白和铁储备合成使用。",
    effect: ["作用环节：补充可利用铁并输送至造血组织 → 生理变化：血红素合成和红细胞生成获得底物 → 临床表现：缺铁相关贫血的血红蛋白和组织供氧能力可能改善。", "作用环节：补充体内铁储备 → 生理变化：铁蛋白等储备指标逐步恢复 → 临床表现：缺铁症状和贫血复发风险可能降低。"],
    use: "缺铁或口服铁不能满足需要时的补铁治疗语境；具体制剂和给药途径需区分。", adverse: "超敏反应、低血压、恶心、注射部位反应和铁过载；严重过敏反应需立即处理。", source: "通用药理概览；新生儿静脉补铁的适用条件和制剂说明书需核对。"
  },
  {
    id: "iron-protein-succinylate", name: "蛋白琥珀酸铁", aliases: "Iron protein succinylate", category: "血液系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "铁与蛋白琥珀酸形成复合物，在消化道内逐步释放可吸收铁，减少游离铁对胃肠道的直接刺激。",
    effect: ["作用环节：肠道释放并吸收铁离子 → 生理变化：骨髓红细胞生成获得铁底物、血红素合成增加 → 临床表现：缺铁性贫血的血红蛋白和乏力等表现可能改善。"],
    use: "缺铁性贫血的口服补铁语境；新生儿实际适用性取决于具体制剂和喂养情况。", adverse: "恶心、腹痛、便秘或腹泻、黑便和过敏反应；误服过量可致铁中毒。", source: "通用药理概览；新生儿口服制剂适用范围和剂量需核对。"
  },
  {
    id: "dipyridamole", name: "双嘧达莫", aliases: "Dipyridamole · 潘生丁", category: "血液系统", status: "药理概览", statusClass: "status-ready",
    mechanism: "抑制腺苷再摄取和磷酸二酯酶，使血小板及血管平滑肌内 cAMP/cGMP 信号增强，产生抗血小板和血管舒张作用。",
    effect: ["作用环节：增强血小板 cAMP/cGMP 抑制信号 → 生理变化：血小板活化和聚集受抑 → 临床表现：血栓形成倾向可能降低，但出血风险增加。", "作用环节：扩张部分血管并改变血小板反应性 → 生理变化：局部血流和血管阻力改变 → 临床表现：特定血管或血栓相关疾病中灌注可能改善。"],
    use: "新生儿血栓或血小板相关疾病的专科治疗语境；具体适应证和联合抗栓方案需核对。", adverse: "出血、低血压、头痛、潮红、心动过速和胃肠道不适。", source: "通用药理概览；新生儿抗栓使用需由专科依据具体病情评估。"
  },
  {
    id: "penicillin", name: "青霉素", aliases: "Penicillin · 青霉素类", category: "抗菌药物", status: "药理概览", statusClass: "status-ready",
    mechanism: "β-内酰胺类抗菌药，结合青霉素结合蛋白并抑制细菌细胞壁肽聚糖交联。",
    effect: ["作用环节：阻断敏感细菌细胞壁合成 → 生理变化：细菌在生长分裂时细胞壁失稳并裂解 → 临床表现：对敏感病原体所致感染的菌负荷和炎症表现可能下降。"],
    use: "新生儿早发型感染或对青霉素敏感病原体感染的治疗语境；药物名称需与具体青霉素制剂区分。", adverse: "皮疹、过敏反应、腹泻、肠道菌群改变；少见血细胞减少、肝酶异常或神经毒性。", source: "通用药理概览；抗菌谱、制剂和新生儿给药间隔需核对。"
  },
  {
    id: "ceftazidime", name: "头孢他啶", aliases: "Ceftazidime", category: "抗菌药物", status: "药理概览", statusClass: "status-ready",
    mechanism: "第三代头孢菌素，结合青霉素结合蛋白并抑制细菌细胞壁合成，对多种革兰阴性杆菌包括铜绿假单胞菌具有活性。",
    effect: ["作用环节：抑制敏感革兰阴性菌细胞壁合成 → 生理变化：细菌结构失稳并发生裂解 → 临床表现：敏感病原体所致败血症、肺部或尿路感染的菌负荷可能下降。", "作用环节：在感染部位达到有效暴露 → 生理变化：细菌复制受到持续抑制 → 临床表现：发热、呼吸窘迫或循环不稳定等感染表现可能改善。"],
    use: "新生儿革兰阴性菌感染或需覆盖铜绿假单胞菌的治疗语境；应依据培养和药敏结果调整。", adverse: "过敏、腹泻、艰难梭菌相关性腹泻、血细胞减少和肝酶异常；肾功能不全时神经毒性风险增加。", source: "通用药理概览；抗菌谱、耐药风险和新生儿用法需核对。"
  },
  {
    id: "cefotaxime", name: "头孢噻肟", aliases: "Cefotaxime", category: "抗菌药物", status: "药理概览", statusClass: "status-ready",
    mechanism: "第三代头孢菌素，结合青霉素结合蛋白并抑制细菌细胞壁合成，可在多种组织分布并进入脑脊液。",
    effect: ["作用环节：抑制敏感细菌细胞壁肽聚糖交联 → 生理变化：细菌细胞壁完整性下降并裂解 → 临床表现：敏感病原体所致败血症、肺炎或脑膜炎的菌负荷可能下降。", "作用环节：感染部位药物暴露维持在有效范围 → 生理变化：细菌繁殖受到持续抑制 → 临床表现：感染相关炎症和器官功能异常可能改善。"],
    use: "新生儿败血症、肺炎或中枢神经系统感染的抗菌治疗语境；需依据病原体和药敏结果。", adverse: "皮疹、过敏、腹泻、肠道菌群改变、血细胞减少或肝酶异常；肾功能异常时需关注神经毒性。", source: "通用药理概览；具体制剂、脑膜炎场景和新生儿给药间隔需核对。"
  },
  {
    id: "meropenem", name: "美罗培南", aliases: "Meropenem", category: "抗菌药物", status: "药理概览", statusClass: "status-ready",
    mechanism: "碳青霉烯类抗菌药，结合多种青霉素结合蛋白并抑制细菌细胞壁合成，对多种革兰阳性、革兰阴性及厌氧菌有活性。",
    effect: ["作用环节：广泛抑制敏感细菌细胞壁合成 → 生理变化：不同病原体的细胞结构失稳并裂解 → 临床表现：重症或多重耐药风险感染的菌负荷和炎症反应可能下降。", "作用环节：在感染部位持续抑制细菌复制 → 生理变化：感染扩散受到控制 → 临床表现：败血症、肺部或中枢神经系统感染的器官功能障碍可能改善。"],
    use: "新生儿重症、复杂或耐药风险细菌感染的保留治疗语境；应避免无指征扩大碳青霉烯使用。", adverse: "皮疹、腹泻、肝酶异常、血细胞减少和注射部位反应；高暴露或中枢神经系统异常时可有惊厥。", source: "通用药理概览；抗菌药物分级管理、药敏和新生儿用法需核对。"
  },
  {
    id: "piperacillin-tazobactam", name: "哌拉西林钠他唑巴坦钠", aliases: "Piperacillin/tazobactam · Pip/Tazo", category: "抗菌药物", status: "药理概览", statusClass: "status-ready",
    mechanism: "哌拉西林结合青霉素结合蛋白并抑制细胞壁合成；他唑巴坦抑制部分 β-内酰胺酶，保护哌拉西林免受水解。",
    effect: ["作用环节：哌拉西林抑制细菌细胞壁合成、他唑巴坦抑制部分 β-内酰胺酶 → 生理变化：细菌复制和细胞壁稳定性同时受到影响 → 临床表现：多种敏感革兰阴性、革兰阳性及厌氧菌感染的菌负荷可能下降。", "作用环节：扩大 β-内酰胺酶抑制后的有效抗菌覆盖 → 生理变化：感染部位细菌生长受抑 → 临床表现：复杂腹腔、肺部、皮肤软组织或败血症相关表现可能改善。"],
    use: "新生儿复杂或混合菌感染的经验治疗语境；需依据病原体、感染部位和当地耐药谱选择。", adverse: "过敏、腹泻、肝酶异常、血小板或白细胞变化；含钠负荷、低钾和肾功能变化需关注。", source: "通用药理概览；新生儿适用性、钠负荷和给药间隔需核对具体制剂。"
  }
];

const categories = ["全部药物", ...new Set(drugs.map((drug) => drug.category))];
let activeCategory = "全部药物";
let query = "";
let selectedId = null;

const grid = document.querySelector("#drugGrid");
const nav = document.querySelector("#categoryNav");
const input = document.querySelector("#searchInput");
const clearButton = document.querySelector("#clearSearch");
const count = document.querySelector("#resultCount");
const totalCount = document.querySelector("#totalCount");
const sectionTitle = document.querySelector("#sectionTitle");
const emptyState = document.querySelector("#emptyState");
const detailPanel = document.querySelector("#detailPanel");

totalCount.textContent = drugs.length;

function normalize(value) {
  return value.toLowerCase().replace(/[\s··-]/g, "");
}

function filteredDrugs() {
  const normalizedQuery = normalize(query);
  return drugs.filter((drug) => {
    const categoryMatches = activeCategory === "全部药物" || drug.category === activeCategory;
    const searchText = normalize([drug.name, drug.aliases, drug.category].join(" "));
    return categoryMatches && (!normalizedQuery || searchText.includes(normalizedQuery));
  });
}

function renderCategories() {
  nav.innerHTML = categories.map((category) => {
    const categoryCount = category === "全部药物" ? drugs.length : drugs.filter((drug) => drug.category === category).length;
    return `<button class="category-button ${category === activeCategory ? "active" : ""}" data-category="${category}" type="button"><span>${category}</span><span>${categoryCount}</span></button>`;
  }).join("");
  nav.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      render();
    });
  });
}

function cardTemplate(drug) {
  return `<button class="drug-card ${drug.id === selectedId ? "selected" : ""}" data-drug="${drug.id}" type="button">
    <div>
      <div class="card-top"><div><h3 class="drug-name">${drug.name}</h3><p class="drug-alias">${drug.aliases}</p></div><span class="category-tag">${drug.category}</span></div>
    </div>
    <div class="status-line"><span class="${drug.statusClass}">${drug.status}</span><span>查看条目 →</span></div>
  </button>`;
}

function detailTemplate(drug) {
  const effects = drug.effect.map((item) => `<li>${item}</li>`).join("");
  return `<div class="detail-header"><div><p class="eyebrow">${drug.category}</p><h3>${drug.name}</h3><p>${drug.aliases}</p></div><span class="detail-status">${drug.status}</span></div>
    <div class="detail-sections">
      <section class="detail-section"><h4>作用机制</h4><p>${drug.mechanism}</p></section>
      <section class="detail-section"><h4>药理作用：作用环节 → 生理变化 → 临床表现</h4><ul>${effects}</ul></section>
      <section class="detail-section"><h4>新生儿常见应用场景</h4><p>${drug.use}</p></section>
      <section class="detail-section"><h4>主要不良反应</h4><p>${drug.adverse}</p></section>
    </div>
    <p class="detail-source">资料状态：${drug.source}</p>`;
}

function render() {
  const results = filteredDrugs();
  count.textContent = results.length;
  sectionTitle.textContent = query ? `搜索结果：${query}` : activeCategory;
  clearButton.hidden = !query;
  emptyState.hidden = results.length !== 0;
  grid.innerHTML = results.map(cardTemplate).join("");
  grid.querySelectorAll(".drug-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.drug;
      const selected = drugs.find((drug) => drug.id === selectedId);
      detailPanel.innerHTML = detailTemplate(selected);
      detailPanel.hidden = false;
      render();
      detailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
  if (selectedId && !results.some((drug) => drug.id === selectedId)) {
    selectedId = null;
    detailPanel.hidden = true;
  }
}

input.addEventListener("input", (event) => {
  query = event.target.value.trim();
  render();
});

clearButton.addEventListener("click", () => {
  input.value = "";
  query = "";
  input.focus();
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== input) {
    event.preventDefault();
    input.focus();
  }
});

renderCategories();
render();
