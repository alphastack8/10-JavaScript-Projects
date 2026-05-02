// Set your target date here
const targetDate = new Date("Dec 31, 2026 23:59:59").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Time calculations
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    // Update UI
    document.getElementById("days").innerText = String(d).padStart(2, '0');
    document.getElementById("hours").innerText = String(h).padStart(2, '0');
    document.getElementById("minutes").innerText = String(m).padStart(2, '0');
    document.getElementById("seconds").innerText = String(s).padStart(2, '0');

    // If countdown is finished
    if (difference < 0) {
        clearInterval(timer);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").innerText = "THE EVENT HAS STARTED! 🎉";
    }
}, 1000);