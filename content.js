// 内容脚本 - 监听页面输入并保存数据

// 获取元素的XPath
function getXPath(element) {
  if (element.id) return `//*[@id="${element.id}"]`
  if (element === document.body) return "/html/body"

  let ix = 0
  const siblings = element.parentNode.childNodes

  for (let i = 0; i < siblings.length; i++) {
    const sibling = siblings[i]
    if (sibling === element) {
      return `${getXPath(element.parentNode)}/${element.tagName.toLowerCase()}[${ix + 1}]`
    }
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
      ix++
    }
  }
}

// 获取当前页面的域名
function getDomain() {
  return window.location.hostname
}

// 监听所有输入框的变化
document.addEventListener("input", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    const domain = getDomain()
    const inputData = {
      id: e.target.id || null,
      name: e.target.name || null,
      xpath: getXPath(e.target),
      value: e.target.value,
      type: e.target.type,
      timestamp: new Date().getTime(),
    }

    // 按域名保存数据
    window.chrome.storage.local.get([domain], (result) => {
      const domainData = result[domain] || []
      const existingIndex = domainData.findIndex((input) => input.xpath === inputData.xpath)

      if (existingIndex >= 0) {
        domainData[existingIndex] = inputData
      } else {
        domainData.push(inputData)
      }

      window.chrome.storage.local.set({ [domain]: domainData })
    })
  }
})

// 监听来自popup的消息
window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "restoreInputs") {
    const domain = getDomain()
    window.chrome.storage.local.get([domain], (result) => {
      const domainData = result[domain] || []
      let restoredCount = 0

      domainData.forEach((input) => {
        let element
        if (input.id) {
          element = document.getElementById(input.id)
        } else if (input.name) {
          element = document.querySelector(`[name="${input.name}"]`)
        } else {
          element = document.evaluate(
            input.xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null,
          ).singleNodeValue
        }

        if (element) {
          element.value = input.value
          const event = new Event("input", { bubbles: true })
          element.dispatchEvent(event)
          const changeEvent = new Event("change", { bubbles: true })
          element.dispatchEvent(changeEvent)
          restoredCount++
        }
      })

      sendResponse({ success: true, count: restoredCount })
    })
    return true // 保持消息通道开放
  }

  if (request.action === "getDomains") {
    window.chrome.storage.local.get(null, (data) => {
      const domains = Object.keys(data).filter((key) => !["_", "undefined"].includes(key) && Array.isArray(data[key]))
      sendResponse({ domains })
    })
    return true // 保持消息通道开放
  }

  if (request.action === "clearDomainData") {
    const domain = getDomain()
    window.chrome.storage.local.remove([domain], () => {
      sendResponse({ success: true })
    })
    return true
  }
})
