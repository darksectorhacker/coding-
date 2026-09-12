function searchUsername() {
    let username = document.getElementById("username").value.trim();
    let result = document.getElementById("result");

    if (username === "") {
        result.innerText = "Please enter a username.";
        return;
    }

    result.innerText = "Search query created for: " + username;
}