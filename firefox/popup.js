async function imgurlsend() {
    githubusername = document.getElementById("github-username").value
    imgurl = "https://github.com/" + githubusername + ".png"
  
    tabs = await browser.tabs.query({ active: true, currentWindow: true })
  
    browser.tabs.sendMessage(
      tabs[0].id,
      { msg: imgurl },
      (response) => {
        console.log(response)
      }
    )
  }
  
  githubusername = document.getElementById("github-username")
  
  githubusername.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      imgurlsend()
    }
  })
  