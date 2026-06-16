# Assets

这个目录专门放网页素材。

## 目录约定

- `assets/videos/`: demo 视频、项目总览视频、补充视频
- `assets/images/`: 首页封面图、作者头像、缩略图
- `assets/figures/`: 方法图、系统图、论文插图、benchmark 图

## 推荐命名

- `videos/demo-01.mp4`
- `videos/teaser.mp4`
- `images/cover.jpg`
- `images/demo-01-poster.jpg`
- `figures/pipeline.png`
- `figures/overview.jpg`

## 在网页里怎么引用

在 `script.js` 里可以直接写相对路径，例如：

```js
videoUrl: "./assets/videos/demo-01.mp4"
```

或者如果你后面要加图片：

```js
"./assets/images/cover.jpg"
```
