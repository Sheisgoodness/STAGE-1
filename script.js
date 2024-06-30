document.addEventListener('DOMContentLoaded', function() {
    displayCurrentTimeUTC();
    displayCurrentDay();
});

function displayCurrentTimeUTC() {
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    const options = { timeZone: 'UTC', hour: 'numeric', minute: 'numeric', second: 'numeric' };

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

setInterval(displayCurrentTimeUTC, 1000);
