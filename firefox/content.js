const body = document.body

browser.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    body.style.background = `url(${request.msg})`
    sendResponse({ msg: "img set" })
    console.log(request.msg)
  }
)
