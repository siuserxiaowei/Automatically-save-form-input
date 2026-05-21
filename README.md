# 数据救命神器 Chrome 扩展

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
