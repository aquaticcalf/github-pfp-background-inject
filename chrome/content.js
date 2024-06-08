const body = document.getElementsByTagName('body')[0]

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        body.style.background = `url(${request.msg})`
        sendResponse({ msg : "img set" })
        console.log(request.msg)
    }
)
  