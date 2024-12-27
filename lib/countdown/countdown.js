function updateCountdown() {
    const targetDate = new Date("2025-02-08T19:00:00").getTime(); // Set your target date here
    const now = new Date().getTime();

    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById("timer").innerHTML = "¡Es hoy!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize the countdown display immediately
updateCountdown();