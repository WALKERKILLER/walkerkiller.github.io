---
title: 海洋科学导论笔记
katex: true
date: 2026-1-16 0:00:00
updated: 2026-1-16 0:00:00
tags:
  - 海洋科学
  - 笔记
categories:
  - 笔记
  - 海洋科学导论
---
# 第一部分：海洋物理 

## 海水性质与物理环境

**1. 盐度 (Salinity)**

![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031243774.png)

- **定义**: 海水中溶解的无机固体物质的总量。通常以千分比（ppt, ‰）表示，全球海洋平均盐度约为 35‰ 。
- **恒比定律确定盐度 (Principle of Constant Proportions)**: 无论海水盐度如何变化，海水中主要溶解离子（如氯离子、钠离子等）之间的比例是恒定的。因此，只需测量一种主要离子（通常是氯离子, Chlorinity）的含量，就可以通过公式推算出总盐度：Salinity(‰)=1.80655×Chlorinity(‰) 。
- **实际观测**: 现代海洋学主要通过测量海水的**电导率 (Conductivity)** 来推算盐度，因为溶解盐类是离子，导电性与离子浓度成正比。仪器通常同时测量温度和压力来校正 。

**2. pH值**

- **影响因素**: 主要受溶解的二氧化碳 (CO2​) 浓度控制。CO2​ 溶于水形成碳酸，释放氢离子，降低pH。光合作用消耗 CO2​ 使pH升高；呼吸作用释放 CO2​ 使pH降低。温度也会影响气体溶解度 。

- **随深度变化**:
  
    - **表层**: pH较高（约8.2），因为浮游植物光合作用消耗了 CO2​。
      
    - **中层**: pH 随深度降低，在“最小含氧层”附近达到最低。这是因为细菌分解下沉的有机物（呼吸作用），消耗氧气并释放大量 CO2​。
      
    - **深层**: pH 略有回升，因为碳酸钙外壳的溶解消耗了氢离子，且深层水体主要来源于极地表层沉降水，CO2​ 含量相对饱和但稳定 。

**3. 密度 (Density)**

- **影响因素**: 温度（反比，最主要因素）、盐度（正比）、压力（正比，影响较小，仅在深海明显）。

- **分层结构**:
  
    - **混合层 (Mixed Layer)**: 表层，受风浪搅拌，温盐性质均匀，密度较低。
      
    - **密度跃层 (Pycnocline)**: 密度随深度急剧增加的区域，通常也是温跃层 (Thermocline) 所在，阻碍上下水体交换。
      
    - **深层水 (Deep Water)**: 密度最大，水体寒冷均一，占据海洋体积的绝大部分 。

**其他问题:**

- **声音传播**: 声音在海洋中的传播受折射影响。在**声发声道 (SOFAR channel)**（通常在温跃层底部，声速最小的深度），声波因折射效应被“限制”在该层内传播，能量损失极小，可传播数千英里 。

- **蓝色海洋**: 水分子对光谱中波长较长的红光、橙光吸收最强，而波长较短的**蓝光**最容易被散射和反射回表面，因此人眼看到的是蓝色 。

- **仪器**:
  
    - **Multibeam Sonar (多波束声纳)**: 用于海底地形测绘，通过发射多个扇形声波束测量水深 。

    - **ADCP (声学多普勒流速剖面仪)**: 利用多普勒效应测量不同深度水流的速度和方向 。
    
- **海冰**: 海冰因水结冰时排出盐分（卤水排出），密度比液态海水小，因此漂浮。它具有高**反照率 (Albedo)**，能反射大量太阳辐射，对调节地球热平衡至关重要。

- **近期变化**: 北极海冰范围显著缩小，夏季无冰区扩大；南极海冰变化较复杂，部分区域崩解加速 。
## 大气与海洋相互作用

**1. 水汽容量与空气密度**

- **水汽容量**: 暖空气比冷空气能容纳更多的水汽 。
- **密度**: 在相同温度和压力下，**潮湿空气 (humid air) 比干燥空气 (dry air) 密度更小**。因为水分子 (H2​O, 分子量18) 比氮气 (N2​, 28) 和氧气 (O2​, 32) 轻，水汽加入会置换出较重的气体分子 
**2. 降水成因** 

空气上升冷却，水汽过饱和凝结成液态水或冰晶，聚集形成云，最终降落 。

**3. 不均匀受热与科氏力**

- **大气响应**: 太阳辐射赤道强、极地弱，驱动大气由热赤道向冷极地流动（对流）。
  
- **科氏力 (Coriolis Effect)**: 因地球自转而产生的惯性力，使运动物体在北半球向右偏转，南半球向左偏转。它使大气环流不再是简单的南北对流，而是形成东西向的风带 。
    ![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031318929.png)


**4. 环流圈与风带**: 每个半球有 **3个** 环流圈：

- **哈德里环流 (Hadley Cell)** (0°-30°): 对应**信风带 (Trade Winds)**。
  
- **费雷尔环流 (Ferrel Cell)** (30°-60°): 对应**西风带 (Westerlies)**。
  
- **极地环流 (Polar Cell)** (60°-90°): 对应**极地东风带 (Polar Easterlies)** 。

![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031331023.png)

**5. 季风 (Monsoon)** 
随季节改变风向的风系。夏季陆地升温快形成低压，ITCZ（热带辐合带）北移，风从海洋吹向陆地（湿润）；冬季相反 。


**6. 热带气旋 (Tropical Cyclone)**

- **触发**: 温暖的海水（>26°C）、低层大气扰动、较弱的垂直风切变。
  
- **能量来源**: 水汽凝结释放的 **潜热 (Latent Heat)** 是其巨大能量的来源 。
![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031341120.png)

## 海洋环流

**1. 环流系统 (Gyre)**
![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031143348.png)

- **定义**: 这种大型的、近圆形的表层洋流系统。
  
- **五大环流**: 北大西洋环流、南大西洋环流、北太平洋环流、南太平洋环流、印度洋环流。位于副热带高压区 。

**2. ENSO (厄尔尼诺-南方涛动)**

- **定义**: 赤道太平洋海洋-大气系统的周期性波动。
- **发生机制**: 正常年份信风将暖水堆积在西太平洋；El Niño时信风减弱，暖水回流至东太平洋，抑制秘鲁沿岸上升流。
- **气候影响**: 导致全球气候异常，如南美洪水、澳洲干旱 。
3. 垂直运动驱动力: 密度差异（由温度和盐度决定）驱动深层水垂直运动，即**温盐环流 (Thermohaline Circulation)** 。
4. La Niña: 是El Niño的反相，信风异常增强，赤道东太平洋水温异常变冷。通常带来与El Niño相反的气候效应（如澳洲洪涝）。
5. ENSO研究: 主要通过卫星监测（SST）、浮标阵列（如TAO/TRITON）收集数据，使用数值模型预测。机构包括NOAA等 。
6. 温盐环流与输送带: 这是一个全球性的深海环流系统（Great Ocean Conveyor Belt）。北大西洋深层水 (NADW) 下沉，向南流动，在南大洋混合，进入印度洋和太平洋上升，最后通过表层流回北大西洋，完成循环 。

## 潮汐 (Tides)

**1. 基本概念**:
![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031401753.png)


- **Tide**: 月球和太阳引力引起的周期性海面升降。
  
- **High/Low Tide**: 满潮/干潮。
  
- **Tidal Range**: 潮差。
  
- **Spring Tide (大潮)**: 朔望月（新月、满月）时，日地月一线，引力叠加，潮差最大。
  
- **Neap Tide (小潮)**: 上下弦月时，日月垂直，引力抵消，潮差最小 。

**2. 平衡潮理论**:

假设地球被均匀水层覆盖，不考虑陆地和摩擦。结论是地球表面会有两个潮汐隆起（bulges），分别指向月球和背向月球 。

**3. 潮汐类型**:

- **半日潮 (Semidiurnal)**: 每日两高两低，潮高近似。
  
- **全日潮 (Diurnal)**: 每日一高一低。
  
- **混合潮 (Mixed)**: 每日两高两低，但潮高差异显著 。

- **开阔大洋**: 存在旋转潮波系统，绕着无潮点 (Amphidromic point) 旋转 。


## 波浪 (Waves)
![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031412985.png)

1. 结构
波峰 (Crest)、波谷 (Trough)、波高 (Height)、波长 (Wavelength)、周期 (Period)。水质点做圆形轨道运动，深度增加运动减弱 。

2. 分类
按成因分（风浪、涌浪、地震海啸、潮波）；按复原力分（毛细波-表面张力；重力波-重力）。

**3. 深水与浅水波**:
- **Deep-water**: 水深 > 1/2 波长。相速度 $C = L/T \approx 1.56 T$。
- **Shallow-water**: 水深 < 1/20 波长。相速度 $C = \sqrt{gd}$（仅受水深控制）

4. 过渡: 从深海进入浅海，波浪触底摩擦，波速减慢，波长变短，波高增加，最终破碎 。

5. 海啸 (Tsunami): 由海底地震或滑坡引起。在开阔大洋波速极快（喷气机速度），波高低；进入浅海港湾（confining bay）时速度减慢但波高急剧堆积 。
![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031427969.png)

## 🟢 Physical Oceanography: English Terminology & Explanation

|English Term|Chinese|Explanation|
|---|---|---|
|**Salinity**|盐度|The total amount of dissolved inorganic solids in water, usually expressed in ppt (‰).|
|**Principle of Constant Proportions**|恒比定律|The ratio of major ions in seawater remains constant regardless of total salinity.|
|**Thermocline**|温跃层|A layer of water where temperature changes rapidly with depth.|
|**Pycnocline**|密度跃层|A layer of water where density changes rapidly with depth, acting as a barrier to mixing.|
|**Coriolis Effect**|科氏效应|The apparent deflection of moving objects (like air/water) due to Earth's rotation (Right in N. Hemisphere).|
|**Gyre**|环流|A large-scale system of rotating ocean currents, driven by global wind patterns.|
|**Thermohaline Circulation**|温盐环流|Deep-ocean circulation driven by differences in water density (temperature & salinity).|
|**ENSO (El Niño-Southern Oscillation)**|厄尔尼诺-南方涛动|A periodic fluctuation in sea surface temperature and air pressure across the equatorial Pacific.|
|**Latent Heat**|潜热|The heat energy absorbed or released during a phase change (e.g., water vapor condensing to rain fuels hurricanes).|
|**Amphidromic Point**|无潮点|A point of zero amplitude in an ocean basin around which a tidal wave rotates.|
|**Spring Tide**|大潮|Tides with the largest tidal range, occurring at new and full moons (Sun-Moon-Earth alignment).|
|**Neap Tide**|小潮|Tides with the smallest tidal range, occurring at quarter moons (Sun-Moon at 90° angle).|
|**Deep-water Wave**|深水波|A wave moving through water deeper than half its wavelength; speed depends on wavelength.|
|**Shallow-water Wave**|浅水波|A wave moving through water shallower than 1/20th its wavelength; speed depends on depth.|

---

# 第二部分：海洋化学
## 河口-海洋界面

**1. 界面过程**:

- **化学过程**: 絮凝作用（河水胶体遇盐水沉淀）、吸附与解吸（悬浮颗粒物表面离子交换）、氧化还原反应（沉积物缺氧环境）。
  
- **影响因素**: 盐度梯度、pH变化、溶解氧含量、海底地下水排泄 (SGD, Submarine Groundwater Discharge) 。SGD是连接陆地和海洋的重要通道，输送大量营养盐和碳到近海 。

## 海洋演化与氧气

1. 海水来源: 地球除气作用（火山喷发水汽）和外太空来源（彗星/陨石撞击）。
2. 存留比与逗留时间: 元素在海水中总量与其输入/输出速率之比。常量元素逗留时间长（保守元素），微量元素短 。
3. **来源与去向**: 
   * **来源**: 河流输入、大气沉降、海底热液、火山活动。
   * **去向**: 沉积物埋藏、海喷（飞沫）、热液循环移除 。
4. 氧气的意义: 原始海洋无氧。光合生物（蓝细菌）出现释放 O2​，首先氧化海洋中的还原性物质（如二价铁，形成条带状铁建造），待氧化耗尽后，O2​ 逸出至大气，形成臭氧层，改变了海洋的氧化还原状态，使得现代海洋以氧化环境为主，深刻影响了元素的循环形态 。
## 常量元素

- **定义**: 浓度 > 1 mg/kg，占盐分99.9%。
- **性质**: 主要是保守性（Conservative），其浓度比值基本恒定，主要受物理过程（混合、蒸发）控制。主要包括 Cl−,Na+,SO42−​,Mg2+,Ca2+,K+ 。

## 微量元素

- **定义**: 浓度 < 1 mg/kg。
  
- **性质**: 属于非保守性或营养盐型分布。受生物吸收、颗粒吸附（清除作用 Scavenging）控制。
  
- **分布**: 许多微量金属（如Fe, Zn）在表层被浮游植物耗尽，深层再生，呈现类似营养盐的垂直分布 。
## 营养盐

- **定义**: 海洋生物生长必需的元素（主要是N, P, Si）。
  
- **来源**: 陆源径流、大气沉降、深层水上涌。
  
- **分布**: 表层低（被消耗），深层高（再生）。
  
- **赤潮**: 富营养化导致藻类爆发性增殖，消耗氧气，产生毒素 。

## 碳酸盐体系

- **平衡**: CO2​+H2​O↔H2​CO3​↔H++HCO3−​↔2H++CO32−​。
- **作用**: 调节海水pH（缓冲作用），控制碳酸钙（CaCO3​）的沉淀与溶解 。

## 地质-化学-生态关系

- **冷泉与水合物**: 海底冷泉（Cold Seeps）流体富含甲烷，支持了化能合成生态系统（如菌席、蛤类），是独特的深海碳循环和生物多样性热点 。


# 第三部分：海洋生物 

## 生命基础与适应性

1. 4大基础有机质 (Organic Building Blocks):

- **Carbohydrates (碳水化合物)**: 能量储存（如淀粉），结构支撑（如几丁质、纤维素）。
  
- **Lipids (脂类)**: 能量储存，防水，浮力调节，细胞膜成分。
  
- **Proteins (蛋白质)**: 酶（催化代谢）、肌肉、激素、运输。
  
- **Nucleic Acids (核酸)**: 遗传信息存储与传递 (DNA, RNA)。

2. 渗透压调节 (Osmoregulation):

- **Osmoregulators (调渗者)**: 维持体内盐度恒定，与环境不同。如硬骨鱼，在海水中会失水，需不断吞海水分泌盐分。

2. 粘度适应 (Viscosity):

- **浮游生物**: 需要增加阻力防止下沉。适应：体积小（表面积体积比大）、长出刺/突起、产生油滴增加浮力。
  
- **游泳生物 (Nekton)**: 需要减少阻力以快速游动。适应：流线型身体。

4. 鲸鱼深潜适应:

- **氧气储存**: 血液量大，红细胞多；肌肉中含有大量**肌红蛋白 (Myoglobin)** 储存氧气（比肺部存氧更重要）。
  
- **生理调节**: 潜水时心率减慢 (Bradycardia)，血液优先供应脑和心脏；肺部可塌陷以避免氮气溶解（减压病）。

## 生态系统与交互

1. 物种相互作用:

- **Competition (竞争)**: 争夺资源（光、食、地）。
  
- **Predation (捕食)**: 吃与被吃。
  
- **Symbiosis (共生)**:
  
    - Mutualism (互利共生): 如小丑鱼与海葵。
      
    - Commensalism (偏利共生): 一方获利一方无害。
      
    - Parasitism (寄生): 一方获利一方受害。
      
2. 海洋碳汇: 海洋通过**生物泵 (Biological Pump)**（浮游植物固碳下沉）和**溶解度泵**（冷水溶解 CO2​ 下沉）吸收大量大气 CO2​，缓解全球变暖 。

3. 生态概念:

- **Ecological Niche (生态位)**: 物种在环境中的角色和资源利用。Fundamental (基础): 理论最大范围；Realized (实际): 受竞争限制后的实际范围。
  
- **Population**: 同种个体的集合。
  
- **Community**: 不同种群的集合。

## 初级生产力 (Primary Productivity)

1. 影响因素: 光照 (Light) 和 营养盐 (Nutrients) 。

- **极地**: 光照限制（冬季无光），夏季爆发。
  
- **热带**: 营养盐限制（层化严重，阻挡深层营养盐上涌），生产力常年低。
  
- **温带**: 季节性显著（春季藻华）。

2. 沿岸高产原因: 陆源营养输入；潮汐混合和风引起的沿岸上升流打破温跃层，带来深层营养盐 。

3. HNLC (高营养盐低叶绿素海区): 南大洋和赤道太平洋，虽有N/P，但缺乏微量元素**铁 (Iron)**，限制了浮游植物生长 。

**4. NPP vs New Production**:

- **Net Primary Production (NPP)**: 总光合作用减去呼吸消耗。
- **New Production (新生产力)**: 基于外界输入（如上升流、固氮）的营养盐支持的生产力，而非再生营养盐 。

## 潮间带 (Intertidal Zone)

1. 岩石基质适应 (Rocky Shore Adaptations):
- **干燥 (Desiccation)**: 关闭壳体（藤壶、贻贝）、躲在岩缝、分泌粘液、聚集生活。
- **波浪冲击 (Wave Shock)**: 强力附着器（足丝、吸盘）、加厚壳体、低矮外形、柔韧性（海藻）。
- **温度/盐度变化**: 广温/广盐性生理耐受。
![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031447911.png)

## 红树林 (Mangroves)

1. 适应性:

- **盐分**: 根部过滤盐分（Salt exclusion）、叶片分泌盐分（Salt excretion）。
- **缺氧土壤**: 拥有露出水面的呼吸根 (Pneumatophores) 或支柱根 (Prop roots) 获取氧气。
- **繁殖**: 胎生苗 (Vivipary)，种子在树上发芽后落下，快速扎根。
![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20260116031457232.png)

## 🟢 Marine Biology: English Terminology & Explanation

|English Term|Chinese|Explanation|
|---|---|---|
|**Osmoregulator**|调渗生物|An organism that actively controls its internal salt concentration independent of the environment (e.g., bony fish).|
|**Viscosity**|粘度|The "thickness" of a fluid. Small plankton rely on it to float; nekton adapt with streamlined shapes to reduce drag.|
|**Primary Productivity**|初级生产力|The rate at which photosynthetic organisms (producers) synthesize organic matter from inorganic compounds.|
|**HNLC (High Nutrient, Low Chlorophyll)**|高营养低叶绿素|Ocean regions where major nutrients (N, P) are abundant, but phytoplankton growth is limited by trace metals like Iron.|
|**Biological Pump**|生物泵|The process by which carbon is fixed by surface biology and transported to the deep ocean/sediment.|
|**Ecological Niche**|生态位|The role and position a species has in its environment; how it meets its needs for food and shelter, how it survives, and how it reproduces.|
|**Symbiosis**|共生|A close and long-term biological interaction between two different biological organisms (e.g., Mutualism, Parasitism).|
|**Intertidal Zone**|潮间带|The area that is above water at low tide and under water at high tide.|
|**Desiccation**|干燥/失水|The state of extreme dryness; a major stressor for intertidal organisms during low tide.|
|**Pneumatophores**|呼吸根|Specialized roots in mangroves that grow upward out of the mud to obtain oxygen for the root system.|