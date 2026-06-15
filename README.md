# 数据救命神器 Chrome 扩展

<!-- SIUSER-REPO-GUIDE:START -->
## Repository Guide

### What This Repository Does

自动保存表单输入：用于浏览器表单自动保存和用户体验改进。

English summary: Form input autosave utility for browser form persistence and UX improvement.

### Online Entry Points

- GitHub repository: https://github.com/siuserxiaowei/Automatically-save-form-input
- Live / GitHub Pages: https://v0-chrome-plugin-generation.vercel.app
- Default branch: `main`
- Primary language: `JavaScript`

### How To Read / Learn This Repository

1. 先读本 README，确认项目目标、在线入口和本地运行方式。
2. 打开上方 Live / GitHub Pages 链接，先从最终效果理解项目。
3. 按仓库目录从入口文件、数据文件、脚本和文档依次阅读。
4. 如果要修改内容，先小范围改动，再运行本 README 中的验证命令。

### Clone This Repository

```bash
git clone https://github.com/siuserxiaowei/Automatically-save-form-input.git
cd Automatically-save-form-input
```

### Run Or View Locally

```bash
python3 -m http.server 8000
```

然后打开 `http://127.0.0.1:8000/`。

### Repository Map

| Path | Purpose |
| --- | --- |
| `README.md` | 项目入口说明，先读这里。 |
| `background.js` | 项目文件。 |
| `content.js` | 项目文件。 |
| `icons/` | 项目目录。 |
| `manifest.json` | 项目文件。 |
| `popup/` | 项目目录。 |

### Maintenance Notes

- Keep this README in sync when the project purpose, live link, or run commands change.
- Prefer small, focused commits when changing code, data, or generated pages.
- Run the relevant build or validation command before publishing changes.
- If this is a generated/static archive, update the source data first, then regenerate the public files.

### Privacy And Safety

- Do not commit API keys, tokens, passwords, cookies, private URLs, or internal account data.
- Keep private source material out of public GitHub Pages output unless it has been explicitly cleared for publication.
- When in doubt, run a quick secret scan such as `rg -n "token|secret|password|access_key|authorization"` before pushing.
<!-- SIUSER-REPO-GUIDE:END -->

<!-- SIUSER-SEO-INTRO:START -->

## 项目介绍 / Project Introduction

**中文介绍**：自动保存表单输入项目，解决表单填写丢失问题，适合网页交互、浏览器增强和用户体验优化。

**English**: A project for automatically saving form input to prevent data loss, useful for web interactions, browser enhancements, and UX improvements.

**SEO 关键词 / SEO Keywords**: form autosave, browser extension, UX, web forms, 自动保存表单

<!-- SIUSER-SEO-INTRO:END -->

一个自动保存表单输入内容的 Chrome 浏览器扩展，防止因页面刷新、网络问题或其他意外情况导致的数据丢失。

## 功能特性

- 🔄 **自动保存**: 实时监听并保存所有输入框和文本域的内容
- 📝 **智能恢复**: 一键恢复当前页面的所有输入内容
- 🌐 **按域名分组**: 不同网站的数据分别保存，互不干扰
- 🗑️ **数据管理**: 可以清除指定网站的保存数据
- 📊 **数据统计**: 显示每个网站保存的输入项数量

## 安装方法

1. 下载或克隆此项目到本地
2. 打开 Chrome 浏览器，进入扩展管理页面 (`chrome://extensions/`)
3. 开启"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择项目文件夹
6. 扩展安装完成！

## 使用说明

1. **自动保存**: 安装后扩展会自动监听页面上的输入操作，无需手动操作
2. **恢复数据**: 点击扩展图标，在弹窗中点击"恢复当前页面输入内容"
3. **清除数据**: 在弹窗中点击"清除当前页面数据"可删除当前网站的所有保存数据
4. **查看统计**: 弹窗底部显示所有已保存数据的网站列表

## 技术实现

- **Manifest V3**: 使用最新的 Chrome 扩展 API
- **Content Scripts**: 注入页面监听输入事件
- **Chrome Storage API**: 本地存储用户数据
- **XPath**: 精确定位页面元素

## 隐私说明

- 所有数据仅保存在用户本地浏览器中
- 不会上传任何数据到服务器
- 用户可随时清除保存的数据

## 支持的页面

- 支持所有 HTTP/HTTPS 网页
- 不支持 Chrome 内部页面 (chrome://)
- 不支持其他扩展页面

## 开发者

如需修改或扩展功能，请参考以下文件结构：

- `manifest.json`: 扩展配置文件
- `content.js`: 内容脚本，负责监听和保存数据
- `background.js`: 后台脚本，处理全局逻辑
- `popup/`: 弹窗界面相关文件

<!-- SIUSER-CONTACT:START -->

## 联系我 / Contact

想交流 AI 工具、内容自动化、SEO、私域增长或项目合作，可以扫码加我微信。

For collaboration on AI tools, content automation, SEO, private-domain growth, or product experiments, scan the WeChat QR code below.

<img src="https://raw.githubusercontent.com/siuserxiaowei/siuserxiaowei/main/assets/contact/wechat-qrcode.jpg" width="180" alt="WeChat QR code / 微信二维码" />

**关键词 / Keywords**: form autosave, browser extension, UX, web forms, AI tools, AI automation, GitHub Pages, SEO

<!-- SIUSER-CONTACT:END -->
