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

## GitHub Pages 部署详细步骤

### 问题背景
将 Next.js 静态导出的文件部署到 GitHub Pages 时，遇到了样式和资源文件无法加载的问题。以下是完整的解决过程：

### 步骤 1: 初始构建和复制
```bash
# 构建项目
npm run build
```
**结果**: ✅ 成功生成 out 目录

```bash
# 复制文件到根目录
npm run copy-to-root
```
**结果**: ✅ 成功复制文件到根目录

### 步骤 2: 提交和推送
```bash
# 添加所有文件
git add .
```
**结果**: ✅ 成功添加文件

```bash
# 提交更改
git commit -m "Deploy portfolio website to GitHub Pages"
```
**结果**: ✅ 成功提交

```bash
# 推送到远程仓库
git push origin main
```
**结果**: ✅ 成功推送

### 步骤 3: 发现问题
访问 https://ruxming.github.io 发现：
- ❌ 只显示纯文本，没有样式
- ❌ CSS 和 JavaScript 文件无法加载
- ❌ 图片无法显示

**问题原因**: GitHub Pages 默认使用 Jekyll，会忽略以下划线开头的文件夹（如 `_next`）

### 步骤 4: 尝试的解决方案

#### 4.1 首次尝试 - 修改 assetPrefix
```bash
# 修改 next.config.js 中的 assetPrefix 为相对路径
assetPrefix: './'
```
**结果**: ❌ 仍然无法加载资源文件

#### 4.2 最终解决方案 - 添加 .nojekyll 文件

```bash
# 创建 .nojekyll 文件（告诉 GitHub Pages 不使用 Jekyll）
touch .nojekyll
```
**结果**: ✅ 成功创建空的 .nojekyll 文件

**重要说明**: `.nojekyll` 文件是解决问题的关键！GitHub Pages 默认使用 Jekyll 静态网站生成器，它会忽略以下划线开头的文件夹。Next.js 生成的 `_next` 文件夹包含所有的 CSS 和 JavaScript 资源，因此必须禁用 Jekyll 处理。

### 步骤 5: 优化 Next.js 配置

**修改 `next.config.js`**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '',
  assetPrefix: '',  // 移除 asset prefix，使用默认路径
  distDir: 'out',  // Output to 'out' directory for static export
}

module.exports = nextConfig
```

### 步骤 6: 重新构建和部署

```bash
# 重新构建项目
npm run build
```
**结果**: ✅ 成功构建，生成新的静态文件

```bash
# 添加所有更改
git add .
```
**结果**: ✅ 成功添加文件

```bash
# 提交修复
git commit -m "Fix GitHub Pages deployment - add .nojekyll and update Next.js config"
```
**结果**: ✅ 成功提交

```bash
# 推送更改
git push origin main
```
**结果**: ✅ 成功推送

### 步骤 7: 验证部署

#### 7.1 检查 GitHub Pages 构建状态
```bash
# 使用 GitHub API 检查构建状态
curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/ruxming/ruxming.github.io/pages/builds
```
**结果**: ✅ 显示构建状态为 "built"

#### 7.2 验证网站可访问性
```bash
# 检查网站状态 (PowerShell)
Invoke-WebRequest -Uri "https://ruxming.github.io" -Method Head
```
**结果**: ✅ 返回 200 状态码

```bash
# 尝试使用 curl (失败示例)
curl -I https://ruxming.github.io
```
**结果**: ❌ PowerShell 中 curl 是 Invoke-WebRequest 的别名，需要使用完整命令

#### 7.3 验证资源文件
```bash
# 检查 CSS 文件
Invoke-WebRequest -Uri "https://ruxming.github.io/_next/static/css/ada1ddbb4602da40.css" -Method Head
```
**结果**: ✅ CSS 文件可以正常访问

```bash
# 检查 JavaScript 文件
Invoke-WebRequest -Uri "https://ruxming.github.io/_next/static/chunks/webpack-bfbb8206a6525d09.js" -Method Head
```
**结果**: ✅ JavaScript 文件可以正常访问

#### 7.4 验证 .nojekyll 文件
```bash
# 检查 .nojekyll 文件是否存在
dir | findstr nojekyll
```
**结果**: ✅ 显示文件存在：`-a----         5/30/2025   9:08 PM              1 .nojekyll`

```bash
# 错误的检查方式 (失败示例)
ls -la | findstr nojekyll
```
**结果**: ❌ PowerShell 中 ls 不支持 -la 参数

### 关键解决要点

1. **`.nojekyll` 文件**:
   - 必须放在根目录
   - 告诉 GitHub Pages 不要使用 Jekyll 处理
   - 允许访问以下划线开头的文件夹

2. **Next.js 配置优化**:
   - `output: 'export'` - 启用静态导出
   - `images: { unoptimized: true }` - 禁用图片优化
   - `assetPrefix: ''` - 使用默认资源路径

3. **文件结构**:
   ```
   根目录/
   ├── .nojekyll          # 关键文件！
   ├── _next/             # Next.js 资源文件夹
   ├── index.html         # 主页
   ├── projects/          # 项目页面
   ├── resume/            # 简历页面
   ├── gallery/           # 相册页面
   └── music/             # 音乐页面
   ```

### 常见问题排查

**问题**: 网站只显示文本，没有样式
**解决**: 确保 `.nojekyll` 文件存在于根目录

**问题**: 404 错误
**解决**: 检查 GitHub Pages 设置，确保从 main 分支部署

**问题**: 图片无法显示
**解决**: 确保图片路径正确，使用相对路径

### 故障排除命令集合

#### 检查本地构建
```bash
# 检查 out 目录是否生成
ls out/
```
**用途**: 确认静态文件是否正确生成

```bash
# 检查生成的 HTML 文件内容
cat out/index.html | head -20
```
**用途**: 查看 HTML 文件中的资源路径是否正确

#### 检查 Git 状态
```bash
# 查看当前分支和状态
git status
```
**用途**: 确认所有文件都已添加到 Git

```bash
# 查看最近的提交
git log --oneline -5
```
**用途**: 确认提交历史

#### 检查远程仓库
```bash
# 查看远程仓库配置
git remote -v
```
**用途**: 确认推送到正确的仓库

```bash
# 检查远程分支
git branch -r
```
**用途**: 查看远程分支状态

### 自动化部署脚本

#### 基础部署脚本
```bash
# 一键部署命令
npm run build && git add . && git commit -m "Update website" && git push origin main
```

#### 带检查的部署脚本
```bash
# 完整的部署流程
echo "开始构建..." && npm run build && echo "构建完成" &&
echo "添加文件..." && git add . &&
echo "提交更改..." && git commit -m "Deploy: $(date)" &&
echo "推送到远程..." && git push origin main &&
echo "部署完成！"
```

#### PowerShell 部署脚本
```powershell
# 创建 deploy.ps1 文件
Write-Host "开始部署流程..." -ForegroundColor Green
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "构建成功" -ForegroundColor Green
    git add .
    git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git push origin main
    Write-Host "部署完成！" -ForegroundColor Green
} else {
    Write-Host "构建失败！" -ForegroundColor Red
}
```

**注意**: 每次修改代码后，都需要重新运行构建和部署流程。

## 学习要点总结

### 🎯 关键技术概念

1. **静态网站生成 (SSG)**
   - Next.js 的 `output: 'export'` 配置
   - 生成纯静态 HTML/CSS/JS 文件
   - 适合 GitHub Pages 等静态托管服务

2. **GitHub Pages 工作原理**
   - 默认使用 Jekyll 处理文件
   - 忽略以下划线开头的文件夹
   - `.nojekyll` 文件可以禁用 Jekyll

3. **资源路径处理**
   - 绝对路径 vs 相对路径
   - `assetPrefix` 配置的作用
   - 静态资源的正确引用方式

### 🔧 实用命令速查

```bash
# 🟢 构建项目
npm run build

# 🟢 复制文件到根目录
npm run copy-to-root

# 🟢 Git 操作三连
git add . && git commit -m "message" && git push origin main

# 🟢 检查网站状态
Invoke-WebRequest -Uri "https://ruxming.github.io" -Method Head

# 🟢 检查文件是否存在
dir | findstr filename

# 🟢 查看 Git 状态
git status

# 🟢 查看构建输出
ls out/
```

### ❌ 常见错误和解决方案

| 错误现象 | 可能原因 | 解决方案 |
|---------|---------|---------|
| 网站只显示文本，无样式 | 缺少 `.nojekyll` 文件 | 在根目录创建空的 `.nojekyll` 文件 |
| 404 错误 | GitHub Pages 设置错误 | 检查仓库设置，确保从 main 分支部署 |
| 图片无法显示 | 图片路径错误 | 使用相对路径，检查 `public/` 目录结构 |
| CSS/JS 无法加载 | Jekyll 忽略 `_next` 文件夹 | 添加 `.nojekyll` 文件 |
| 构建失败 | 依赖问题或配置错误 | 检查 `package.json` 和 `next.config.js` |

### 📚 扩展学习资源

- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Jekyll 和 .nojekyll 说明](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/)

### 🚀 下一步改进建议

1. **自动化部署**: 设置 GitHub Actions 实现自动部署
2. **性能优化**: 添加图片压缩和代码分割
3. **SEO 优化**: 添加 meta 标签和 sitemap
4. **监控**: 添加 Google Analytics 或其他分析工具

## 许可证

MIT License