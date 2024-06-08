async function imgurlsend() {
    let githubusername = document.getElementById("github-username").value
    let imgurl = "https://github.com/"+githubusername+".png"
    let queryOptions = { active: true, currentWindow: true }
    let tabs = await chrome.tabs.query(queryOptions)

    chrome.tabs.sendMessage(
        tabs[0].id,
        { msg: imgurl},
        function (response) {
            console.log(response)
        }
    )
}

let githubusername = document.getElementById("github-username")

githubusername.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        imgurlsend()
    }
})