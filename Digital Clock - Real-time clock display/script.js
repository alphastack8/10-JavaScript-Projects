function updateClock() {
    const now = new Date();
    
    // Time Components
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, '0');

    // Display Time
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Display Date (Optional but looks great)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
}

// Start the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);