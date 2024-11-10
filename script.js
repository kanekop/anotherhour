const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const timezoneSelect = document.getElementById('timezone');

// Constants for converting to 25-hour time
const SECOND_LENGTH = 1000 * 0.96; // Each second is 0.96 real-time seconds

timezoneSelect.addEventListener('change', updateClock);

function updateClock() {
  const selectedZone = timezoneSelect.value;
  let now;

  // Get the current time based on the selected time zone
  if (selectedZone === 'Local') {
    now = moment(); // Use local time
  } else {
    now = moment.tz(selectedZone); // Use selected time zone
  }

  const realSeconds = now.seconds();
  const realMinutes = now.minutes();
  const realHours = now.hours();

  // Calculate the total real seconds that have passed today in local time
  const totalRealSeconds = realHours * 3600 + realMinutes * 60 + realSeconds;
  const totalFakeSeconds = totalRealSeconds * (25 / 24); // Convert to 25-hour day

  // Calculate 24-hour and 25-hour times
  const fakeHours = Math.floor(totalFakeSeconds / 3600) % 25;
  const fakeMinutes = Math.floor((totalFakeSeconds % 3600) / 60);
  const fakeSeconds = Math.floor(totalFakeSeconds % 60);

  const display24 = `${String(realHours).padStart(2, '0')}:${String(realMinutes).padStart(2, '0')}:${String(realSeconds).padStart(2, '0')}`;
  const display25 = `${String(fakeHours).padStart(2, '0')}:${String(fakeMinutes).padStart(2, '0')}:${String(fakeSeconds).padStart(2, '0')}`;

  // Update the digital time displays
  document.getElementById('time-display-24').textContent = `24-Hour Time: ${display24}`;
  document.getElementById('time-display-25').textContent = `Another Hour Time: ${display25}`;

  // Update clock hands
  const hourRotation = (fakeHours + fakeMinutes / 60) * (360 / 25) + 180;
  const minuteRotation = (fakeMinutes + fakeSeconds / 60) * (360 / 60) + 180;
  const secondRotation = (fakeSeconds / 60) * 360 + 180;

  document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`;
  document.querySelector('.minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondRotation}deg)`;

  // Update headline based on whether we're in "Another Hour" or not
  const headlineElement = document.getElementById('headline');
  const body = document.body;

  if (fakeHours === 24) {
    headlineElement.textContent = "Now You're in Another Hour.";
    body.classList.add("dark-mode");

    // Calculate the remaining time in "Another Hour" day
    const remainingFakeSeconds = (25 * 3600) - totalFakeSeconds;
    const remainingMinutes = Math.floor(remainingFakeSeconds / 60);
    const remainingSeconds = Math.floor(remainingFakeSeconds % 60);

    document.getElementById('remaining-time').textContent = `You have another ${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')} today`;
  } else {
    const secondsUntilAnotherHour = Math.floor((24 * 3600) - totalFakeSeconds); // Use totalFakeSeconds here and ensure it's an integer
    const hoursUntilAnotherHour = Math.floor(secondsUntilAnotherHour / 3600);
    const minutesUntilAnotherHour = Math.floor((secondsUntilAnotherHour % 3600) / 60);
    const remainingSecondsUntilAnotherHour = secondsUntilAnotherHour % 60;

    headlineElement.textContent = `Another Hour begins in ${String(hoursUntilAnotherHour).padStart(2, '0')}:${String(minutesUntilAnotherHour).padStart(2, '0')}:${String(remainingSecondsUntilAnotherHour).padStart(2, '0')}`;
    document.getElementById('remaining-time').textContent = '';
    body.classList.remove("dark-mode");
  }
}

// Run update every 0.96 real-time seconds
setInterval(updateClock, SECOND_LENGTH);
updateClock();
