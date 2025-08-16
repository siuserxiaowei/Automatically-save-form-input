// 后台脚本 - 处理插件的全局逻辑
const chrome = window.chrome // Declare the chrome variable
chrome.runtime.onInstalled.addListener(() => {
  console.log("数据救命神器已安装")
})

// 监听标签页更新事件
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    // 页面加载完成后的处理逻辑
    console.log("页面加载完成:", tab.url)
  }
})

// 处理来自content script的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "saveData") {
    // 可以在这里添加额外的数据处理逻辑
    console.log("保存数据:", request.data)
  }
})
