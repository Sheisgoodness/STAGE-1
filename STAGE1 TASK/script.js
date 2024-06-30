// JavaScript for current UTC time and day
document.addEventListener('DOMContentLoaded', function() {
    // Display current UTC time and day
    displayCurrentTimeUTC();
    displayCurrentDay();
});

function displayCurrentTimeUTC() {
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    const options = { timeZone: 'UTC', hour: 'numeric', minute: 'numeric', second: 'numeric' };

    // Format the time string with seconds included
    const timeString = now.toLocaleTimeString('en-US', options);
    currentTimeUTCElement.textContent = `Current Time UTC: ${timeString}`;
}

function displayCurrentDay() {
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
}

// Update time every second
setInterval(displayCurrentTimeUTC, 1000);
