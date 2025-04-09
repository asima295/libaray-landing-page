document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("loginMessage");

    if (username === "admin" && password === "admin123") {
        loginMessage.textContent = "Login successful! Redirecting...";
        loginMessage.style.color = "green";
        setTimeout(() => window.location.href = "admin.html", 2000);
    } else {
        loginMessage.textContent = "Invalid username or password!";
        loginMessage.style.color = "red";
    }
});

function playVideo() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    }
}
