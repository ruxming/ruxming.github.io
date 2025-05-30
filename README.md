# Ruxming 个人作品集网站

这是一个基于 Next.js 构建的个人作品集网站，包含软件作品展示、个人简历、相册和音乐播放器等功能。

## 🎯 项目特点

- ✅ **GitHub Pages 优化结构**：静态文件在根目录，构建文件在 `_Build/` 目录
- ✅ **完整的开发环境**：支持 `npm run dev` 和 `npm run build`
- ✅ **自动部署**：GitHub Actions 自动构建和部署
- ✅ **响应式设计**：支持移动端和桌面端

## 🚀 快速开始

### 开发模式
```bash
npm run dev
```
访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
```
构建完成后，静态文件会自动复制到根目录

### 清理构建文件
```bash
npm run clean
```

## 📁 项目结构

```
├── _Build/                   # Node.js 构建文件目录
│   ├── src/
│   │   ├── app/
│   │   │   ├── gallery/      # 相册页面
│   │   │   ├── music/        # 音乐页面
│   │   │   ├── projects/     # 作品展示页面
│   │   │   ├── resume/       # 简历页面
│   │   │   ├── layout.js     # 主布局
│   │   │   ├── page.js       # 首页
│   │   │   └── globals.css   # 全局样式
│   │   └── components/
│   │       └── Navigation.js # 导航组件
│   ├── public/               # 静态资源
│   ├── next.config.js        # Next.js 配置
│   ├── package.json          # 构建依赖
│   └── copy-to-root.ps1      # 文件复制脚本
├── index.html                # 生成的首页 (GitHub Pages 入口)
├── _next/                    # Next.js 静态资源
├── gallery/                  # 相册页面静态文件
├── music/                    # 音乐页面静态文件
├── projects/                 # 作品页面静态文件
├── resume/                   # 简历页面静态文件
└── package.json              # 根目录脚本配置
```

## 🛠️ 技术栈

- **前端框架**: Next.js 15 (App Router)
- **UI 库**: React 18
- **样式**: CSS Modules
- **部署**: GitHub Pages (静态导出)

## 📝 自定义内容

### 1. 更新个人信息
编辑以下文件来更新您的个人信息：
- `_Build/src/app/page.js` - 首页内容
- `_Build/src/app/resume/page.js` - 简历信息
- `_Build/src/app/projects/page.js` - 项目信息

### 2. 添加图片
将您的照片放入以下目录：
- `_Build/public/images/gallery/` - 相册图片
- `_Build/public/images/music/` - 音乐封面

### 3. 添加音乐文件
将音频文件（MP3格式）放入：
- `_Build/public/music/` - 音频文件

### 4. 更新项目链接
在 `_Build/src/app/projects/page.js` 中更新下载链接和 GitHub 链接。

## 🚀 部署说明

### GitHub Pages 自动部署
1. 推送代码到 main 分支
2. GitHub Actions 会自动构建和部署
3. 网站将在 `https://ruxming.github.io` 上线

### 手动部署
1. 运行 `npm run build`
2. 将根目录的静态文件推送到 GitHub

## 📋 功能特性

- 🏠 **首页** - 个人介绍和网站导航
- 💻 **作品展示** - 软件项目展示和下载链接
- 📄 **个人简历** - 详细的职业经历和技能展示
- 📸 **相册** - 生活照片展示和分类浏览
- 🎵 **音乐播放器** - 个人音乐作品播放

## 📄 许可证

MIT License
