// Popup脚本 - 处理弹窗界面逻辑

document.addEventListener("DOMContentLoaded", () => {
  loadCurrentDomain()
  loadDomainsList()

  // 恢复当前页面数据
  document.getElementById("restoreBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0]
      if (!tab || !tab.url || !tab.id || tab.url.startsWith("chrome://") || tab.url.startsWith("chrome-extension://")) {
        showStatus("无法在此页面使用该功能", "error")
        return
      }

      chrome.tabs
        .sendMessage(tab.id, { action: "restoreInputs" })
        .then((response) => {
          if (response && response.success) {
            showStatus(`已恢复 ${response.count} 个输入项的数据!`, "success")
          } else {
            showStatus("未找到可恢复的数据", "error")
          }
        })
        .catch((err) => {
          console.log("消息发送失败：", err)
          showStatus("恢复失败，请刷新页面后重试", "error")
        })
    })
  })

  // 清除当前页面数据
  document.getElementById("clearBtn").addEventListener("click", () => {
    if (confirm("确定要清除当前网站的所有保存数据吗？")) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0]
        if (
          !tab ||
          !tab.url ||
          !tab.id ||
          tab.url.startsWith("chrome://") ||
          tab.url.startsWith("chrome-extension://")
        ) {
          showStatus("无法在此页面使用该功能", "error")
          return
        }

        chrome.tabs
          .sendMessage(tab.id, { action: "clearDomainData" })
          .then((response) => {
            if (response && response.success) {
              showStatus("当前网站数据已清除!", "success")
              loadDomainsList() // 重新加载域名列表
            } else {
              showStatus("清除失败", "error")
            }
          })
          .catch((err) => {
            console.log("消息发送失败：", err)
            showStatus("清除失败，请重试", "error")
          })
      })
    }
  })
})

// 显示当前域名
function loadCurrentDomain() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0]
    if (tab && tab.url) {
      try {
        const url = new URL(tab.url)
        const domain = url.hostname
        document.getElementById("currentDomain").textContent = domain || "未知域名"
      } catch (e) {
        document.getElementById("currentDomain").textContent = "特殊页面"
      }
    } else {
      document.getElementById("currentDomain").textContent = "无法获取"
    }
  })
}

// 加载已保存的域名列表
function loadDomainsList() {
  const container = document.getElementById("domainsContainer")

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0]
    if (!tab || !tab.url || !tab.id || tab.url.startsWith("chrome://") || tab.url.startsWith("chrome-extension://")) {
      container.innerHTML = '<div class="empty-state">无法在此页面获取数据</div>'
      return
    }

    chrome.tabs
      .sendMessage(tab.id, { action: "getDomains" })
      .then((response) => {
        container.innerHTML = ""

        if (response?.domains?.length) {
          response.domains.forEach((domain) => {
            chrome.storage.local.get([domain], (result) => {
              const count = result[domain]?.length || 0
              const domainEl = document.createElement("div")
              domainEl.className = "domain-item"
              domainEl.innerHTML = `
                <span>${domain}</span>
                <span class="domain-count">${count}个输入项</span>
              `
              domainEl.addEventListener("click", () => {
                chrome.tabs.create({ url: `https://${domain}` })
              })
              container.appendChild(domainEl)
            })
          })
        } else {
          container.innerHTML = '<div class="empty-state">暂无保存的网站数据</div>'
        }
      })
      .catch((err) => {
        console.log("获取域名列表失败：", err)
        container.innerHTML = '<div class="empty-state">获取数据失败</div>'
      })
  })
}

// 显示状态消息
function showStatus(message, type = "success") {
  const statusEl = document.getElementById("status")
  statusEl.textContent = message
  statusEl.className = `status ${type} show`

  setTimeout(() => {
    statusEl.classList.remove("show")
  }, 3000)
}

// Declare chrome variable
const chrome = window.chrome
