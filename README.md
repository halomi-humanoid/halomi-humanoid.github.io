# Academic Project Page Template

这是一个可直接部署到 GitHub Pages 的学术项目网页模板，适合放：

- 论文主页
- Demo 视频
- 代码 / 数据集 / Slides 链接
- 后续 follow-up work
- 团队宣传与合作入口

参考方向是典型的学术 `project page` 结构：顶部核心信息、资源入口、方法简介、Demo 展示、论文列表、BibTeX 与联系信息。

## 文件结构

- `index.html`: 页面结构
- `styles.css`: 页面样式
- `script.js`: 所有可编辑内容都集中在这里
- `.nojekyll`: 让 GitHub Pages 按纯静态站点发布

## 你需要改哪里

优先修改 `script.js` 里的 `siteData`：

- `hero.title`: 论文标题
- `hero.subtitle`: 一句话摘要
- `hero.authors`: 作者列表
- `hero.actions`: Paper / arXiv / Code / Dataset 链接
- `featured`: 首页主展示视频或主结果
- `abstract`: 网站版摘要
- `demos`: 每个 demo 卡片
- `publications`: 相关论文
- `resources`: 资源链接
- `bibtex`: 引用信息
- `contact`: 联系方式

## Demo 视频怎么放

`script.js` 中每个 demo 支持三种方式：

1. `embedUrl`
   适合 YouTube / Bilibili 的嵌入链接，点击后会弹窗播放。
2. `videoUrl`
   适合你自己仓库里的 mp4，例如 `./assets/demo-01.mp4`。
3. `linkUrl`
   适合跳转到外部页面或独立视频地址。

示例：

```js
{
  id: "demo-01",
  index: "Demo 01",
  title: "Main Demo",
  description: "Your description",
  tags: ["Main Result", "Real Robot"],
  accent: "linear-gradient(140deg, rgba(15, 118, 110, 0.95), rgba(31, 36, 48, 0.9))",
  videoUrl: "./assets/demo-01.mp4"
}
```

## GitHub Pages 部署方式

### 方式一：个人主页仓库

如果仓库名是 `你的用户名.github.io`，推送后启用 Pages，网站地址通常就是：

`https://你的用户名.github.io/`

### 方式二：项目主页仓库

如果仓库名是普通项目名，比如 `my-project-page`，推送后启用 Pages，网站地址通常就是：

`https://你的用户名.github.io/my-project-page/`

这套模板使用的是相对路径，所以两种方式都能直接用。

## 如何部署

### GitHub Pages

1. 把这些文件推到仓库根目录。
2. GitHub 仓库进入 `Settings -> Pages`。
3. `Build and deployment` 里选择 `Deploy from a branch`。
4. Branch 选择你的主分支，目录选择 `/ (root)`。
5. 保存后等待发布。

### Vercel / Netlify

这是纯静态站点，直接导入仓库即可，不需要额外构建命令。

## 建议你下一步怎么填内容

推荐按下面顺序替换，效率最高：

1. 先把 Hero 区域换成你的论文标题、作者、按钮链接。
2. 再把 `featured` 改成最强 demo。
3. 补 3 到 6 个 demo 卡片。
4. 最后再补 publications、BibTeX 和联系信息。

## 如果你想继续扩展

后面可以继续加：

- 多论文切换页
- News / Updates 区块
- 团队成员区
- Benchmark 表格
- 下载统计 / 点击统计
- 中英文切换
