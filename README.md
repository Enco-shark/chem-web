# 化学实验室 (Chemical Laboratory)

一个优雅的交互式化学学习应用，支持反应分析、化合物信息查询、有机化学探索和3D分子可视化。构建精美、严谨的化学学习工作站。

![版本](https://img.shields.io/badge/version-1.0.0-blue)
![许可证](https://img.shields.io/badge/license-MIT-green)

## 产品愿景

打造一个精美的化学工作站，像高端 Apple 系统应用一样的科学教育体验。结合：

- 化学反应分析
- 化合物分析
- 有机化学探索
- 3D分子可视化
- 中英文双语学习
- 平静、流畅、高品质的交互体验

## 功能介绍

### 🧪 化学反应分析
- 探索和分析化学反应（如 `HCl + NaOH`、`CH4 + O2` 等）
- 查看配平方程式、反应类型和原理
- 了解反应条件、催化剂、可逆状态
- 查看离子方程式和产物信息
- 支持 20+ 预定义反应
- 正确使用化学符号（↑气体、↓沉淀、△加热、⇌可逆）

### 🔬 化合物分析
- 输入化学式获取详细信息（如 `H2SO4`、`NaOH`、`KMnO4` 等）
- 查看中英文名称、分类、分子质量
- 了解酸碱特性、状态、溶解度、颜色、极性、键型
- 支持 20+ 预定义化合物
- 集成 PubChem 和 Wikidata API 作为备用数据源
- 显示数据来源标签，确保信息可信度

### 🧬 有机化学
- 探索常见有机化合物家族（烷烃、烯烃、炔烃、醇、醛、酮、酯、羧酸、芳香族、胺等）
- 了解官能团、键结构、单/双/三键、芳香环信息
- 查看属性和常见反应
- 支持 17+ 有机化合物

### 🎨 3D分子查看器
- 使用 Three.js r128 进行交互式3D可视化
- 球棍模型渲染，元素颜色编码
- 可选轨道线框可视化
- 拖拽旋转、缩放、自动旋转切换
- 悬停高亮、原子标签提示
- 支持 14+ 分子结构
- 响应式画布，透明背景

### 🌐 双语支持（中文/英文）
- 完整的中英文语言支持
- 动态语言切换
- 所有界面文本、占位符、提示信息双语同步
- 化学数据双字段存储（nameEN/nameCN、principle/principleCN 等）

### 🎯 现代UI设计
- Apple 风格的液态玻璃设计（Liquid Glass）
- 浅色/深色主题支持
- 流畅的动画和过渡效果
- 响应式设计，支持移动和桌面
- 动画标签切换、页面过渡、悬停状态
- 实时解析反馈、动画建议下拉
- 加载骨架屏、Toast 通知
- 卡片倾斜效果

### 📱 响应式设计
- 在桌面和移动设备上完美工作
- 触摸支持
- 768px 和 480px 断点优化

## 化学引擎架构

采用多层级策略，不仅限于硬编码示例：

1. **已知数据库记录** - [reactions.js](file:///d:/data/Desktop/Lab/reactions.js)、[compounds.js](file:///d:/data/Desktop/Lab/compounds.js)、[organic.js](file:///d:/data/Desktop/Lab/organic.js)、[molecules.js](file:///d:/data/Desktop/Lab/molecules.js)
2. **化学式解析** - [chem-parser.js](file:///d:/data/Desktop/Lab/chem-parser.js)（支持 44 种元素，摩尔质量计算，化合物类型推断）
3. **规则推理** - [chem-inference.js](file:///d:/data/Desktop/Lab/chem-inference.js)（方程式配平、反应类型分类、6 条反应预测规则）
4. **多源备用** - [chem-fallback.js](file:///d:/data/Desktop/Lab/chem-fallback.js)（本地 DB → 解析器 → 推理 → PubChem API → Wikidata SPARQL）
5. **明确的未知/低置信状态** - 当引擎无法确定时清晰标注

## 快速开始

### 安装

这是一个纯静态 Web 应用，无需构建系统、框架或包管理器！

1. **克隆或下载** 仓库
2. **用现代浏览器** 打开 [index.html](file:///d:/data/Desktop/Lab/index.html)
3. **开始探索**！

或者，您可以使用简单的 HTTP 服务器：

```bash
# 如果安装了 Python
python -m http.server 8080

# 或者用 Node.js (http-server)
npx http-server -p 8080
```

然后在浏览器中打开 `http://localhost:8080`。

## 项目结构

```
化学实验室/
├── index.html                     # 主 HTML 入口
├── style.css                      # 样式表（CSS 变量、主题、动画）
├── app.js                         # 主应用逻辑（i18n、主题、导航、搜索、DOM）
├── reactions.js                   # 反应数据库（20+ 反应）
├── compounds.js                   # 化合物数据库（20+ 化合物）
├── organic.js                     # 有机化学数据库（17 化合物）
├── molecules.js                   # 3D 分子模块（14 结构，Three.js 实现）
├── chem-parser.js                 # 化学式解析器
├── chem-inference.js              # 化学推理引擎
├── chem-fallback.js               # 多源备用数据系统
├── chem-compounds-expanded.js     # 扩展化合物数据库
├── chem-compounds-mega.js         # 大型化合物数据集
├── chem-massive-compounds.js      # 海量化合物数据
├── chem-reactions-expanded.js     # 扩展反应数据库
├── chem-database-generator.js     # 数据库生成工具
├── chem-reaction-generator.js     # 反应生成工具
├── chem-molecules-mega.js         # 大型分子数据集系列
├── chem-molecules-mega-2.js
├── chem-molecules-mega-3.js
├── chem-molecules-mega-4.js
├── generate-compounds.js          # 化合物生成脚本
├── IMPROVEMENT-PROMPTS.md         # 改进建议
├── CLAUDE.md                      # 项目说明文档
└── README.md                      # 本文档
```

## 使用说明

### 反应分析
1. 进入"化学反应"标签页
2. 输入化学反应（如 "HCl + NaOH"）
3. 或点击快速示例芯片
4. 点击"分析"查看详细信息

### 化合物分析
1. 进入"化合物分析"标签页
2. 输入化学式（如 "H2SO4"）
3. 或点击快速示例
4. 如数据库中有，查看 3D 结构

### 有机化学
1. 进入"有机化学"标签页
2. 输入有机化合物分子式（如 "CH4"）
3. 探索官能团和属性

### 3D 分子查看器
1. 进入"3D 分子"标签页
2. 选择或输入分子
3. 拖拽旋转，滚轮缩放
4. 切换自动旋转和轨道可视化

### 控制功能
- 🌍 **语言切换**：在中英文之间切换
- 🌗 **主题切换**：在浅色/深色模式间切换
- 🔍 **搜索**：搜索化合物、反应和分子

## 技术栈

- **HTML5**：现代语义化标记
- **CSS3**：自定义属性（CSS 变量）、动画、响应式布局
- **原生 JavaScript**：ES6+ 模块、IIFE 模式，无框架依赖
- **Three.js r128**：通过 CDN 引入，用于 3D 分子可视化
- **OrbitControls**：Three.js 示例，来自 CDN
- **PubChem API**：化合物数据备用源
- **Wikidata SPARQL**：附加化学数据源
- **无构建工具、无打包器、无转译器**：纯静态文件服务

## 浏览器支持

- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)

## 验证检查

在修改后，请验证：

- 应用无控制台错误加载
- 标签页导航正常
- 浅色/深色主题切换正确
- 中英文切换正常
- 移动布局无重叠（768px 和 480px 断点）
- 3D 画布可见且可交互
- 化学式/反应输入仍产生有用结果
- 搜索建议出现且工作正常
- Toast 通知显示正确

## 贡献

欢迎贡献！您可以：

- 添加新的化合物和反应到数据库
- 改进 UI/UX 设计
- 修复错误或添加新功能
- 添加更多化学数据源
- 扩展 3D 分子结构库

请遵循现有代码风格：
- 使用 IIFE 模式封装引擎模块
- 保留双语支持（EN/CN 双字段）
- 使用 CSS 变量实现主题感知样式
- 验证更改后再提交

## 许可证

MIT 许可证 - 欢迎用于学习和开发！

## 作者

化学实验室 Web 应用

## 致谢

- 受 Apple 设计语言启发
- 化学数据来自多种教育资源
- Three.js 社区
- PubChem 和 Wikidata 提供开放化学数据
