function updateTime() {
    const now = new Date();

    document.getElementById("time").textContent =
        "Local Time: " + now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

updateTime();
setInterval(updateTime, 1000);