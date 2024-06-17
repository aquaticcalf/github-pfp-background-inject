async function imgurlsend() {
    githubusername = document.getElementById("github-username").value
    imgurl = "https://github.com/"+githubusername+".png"
    queryOptions = { active: true, currentWindow: true }
    tabs = await chrome.tabs.query(queryOptions)

    chrome.tabs.sendMessage(
        tabs[0].id,
        { msg: imgurl},
        function (response) {
            console.log(response)
        }
    )
}

githubusername = document.getElementById("github-username")

githubusername.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        imgurlsend()
    }
})