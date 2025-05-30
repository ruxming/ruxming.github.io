# Ruxming 个人作品集网站

这是一个基于 Next.js 构建的个人作品集网站，包含软件作品展示、个人简历、相册和音乐播放器等功能。

## 功能特性

- 🏠 **首页** - 个人介绍和网站导航
- 💻 **作品展示** - 软件项目展示和下载链接
- 📄 **个人简历** - 详细的职业经历和技能展示
- 📸 **相册** - 生活照片展示和分类浏览
- 🎵 **音乐播放器** - 个人音乐作品播放

## 技术栈

- **前端框架**: Next.js 15 (App Router)
- **UI 库**: React 18
- **样式**: CSS Modules
- **部署**: GitHub Pages (静态导出)

## 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 构建和部署

1. 构建静态文件：
```bash
npm run build
```

2. 生成的静态文件将在 `out` 目录中

3. 部署到 GitHub Pages：
   - 将 `out` 目录中的文件推送到 `gh-pages` 分支
   - 或者使用 GitHub Actions 自动部署

## 自定义内容

### 1. 更新个人信息
编辑以下文件来更新您的个人信息：
- `src/app/page.js` - 首页内容
- `src/app/resume/page.js` - 简历信息
- `src/app/projects/page.js` - 项目信息

### 2. 添加图片
将您的照片放入以下目录：
- `public/images/gallery/` - 相册图片
- `public/images/music/` - 音乐封面

### 3. 添加音乐文件
将音频文件（MP3格式）放入：
- `public/music/` - 音频文件

### 4. 更新项目链接
在 `src/app/projects/page.js` 中更新下载链接和 GitHub 链接。

## 项目结构

```
├── src/
│   ├── app/
│   │   ├── gallery/          # 相册页面
│   │   ├── music/            # 音乐页面
│   │   ├── projects/         # 作品展示页面
│   │   ├── resume/           # 简历页面
│   │   ├── layout.js         # 主布局
│   │   ├── page.js           # 首页
│   │   └── globals.css       # 全局样式
│   └── components/
│       └── Navigation.js     # 导航组件
├── public/
│   ├── images/               # 图片资源
│   └── music/                # 音频资源
├── next.config.js            # Next.js 配置
└── package.json              # 项目配置
```

## 部署说明

此项目配置为静态导出，适合部署到 GitHub Pages。确保：

1. `next.config.js` 中的 `output: 'export'` 配置已启用
2. 所有图片使用 `unoptimized: true` 配置
3. 使用相对路径引用资源

## 许可证

MIT License