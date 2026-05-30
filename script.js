function updateTime() {
    const now = new Date();

    document.getElementById("time").textContent =
        "Local Time: " + now.toLocaleTimeString();
}

updateTime(); // run immediately
setInterval(updateTime, 1000);