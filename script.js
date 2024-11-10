const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

// Constants for converting to 25-hour time
const SECOND_LENGTH = 1000 * 0.96; // Each second is 0.96 real-time seconds







function updateClock() {
  const now = new Date();
  const realSeconds = now.getSeconds();
  const realMinutes = now.getMinutes();
  const realHours = now.getHours();

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
  const hourRotation = (fakeHours + fakeMinutes / 60) * (360 / 25) + 180; // Each hour is 14.4 degrees
  const minuteRotation = (fakeMinutes + fakeSeconds / 60) * (360 / 60) + 180; // Each minute is 6 degrees
  const secondRotation = (fakeSeconds / 60) * 360 + 180; // Each second is 6 degrees

  document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`;
  document.querySelector('.minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondRotation}deg)`;

  // Update headline based on whether we're in "Another Hour" or not
  const headlineElement = document.getElementById('headline');
  const body = document.body;

  if (fakeHours === 24) {
    headlineElement.textContent = "Now You're in Another Hour.";
    body.classList.add("dark-mode"); // Apply dark mode

    // Calculate the remaining time in "Another Hour" day
    const remainingFakeSeconds = (25 * 3600) - totalFakeSeconds;
    const remainingMinutes = Math.floor(remainingFakeSeconds / 60);
    const remainingSeconds = Math.floor(remainingFakeSeconds % 60);

    // Display the remaining time
    document.getElementById('remaining-time').textContent = `You have another ${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')} today`;
  } else {
    headlineElement.textContent = `You will be in Another Hour in ${String(23 - fakeHours).padStart(2, '0')} hours ${String(59 - fakeMinutes).padStart(2, '0')} minutes and ${String(59 - fakeSeconds).padStart(2, '0')} seconds.`;
    document.getElementById('remaining-time').textContent = ''; // Clear remaining time when not in Another Hour
    body.classList.remove("dark-mode"); // Remove dark mode
  }
}

// Run update every 0.96 real-time seconds
setInterval(updateClock, SECOND_LENGTH);
updateClock();



headlineElement.textContent = `You will be in Another Hour in ${String(hoursUntilAnotherHour).padStart(2, '0')} hours ${String(minutesUntilAnotherHour).padStart(2, '0')} minutes and ${String(secondsUntilAnotherHour).padStart(2, '0')} seconds in standard 24-hour time.`;
function updateClock() {
  const now = new Date();
  const realSeconds = now.getSeconds();
  const realMinutes = now.getMinutes();
  const realHours = now.getHours();

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

  // Update headline and dark mode based on whether we're in "Another Hour" or not
  const headlineElement = document.getElementById('headline');
  const body = document.body;

  if (fakeHours === 24) {
    headlineElement.textContent = "Now You're in Another Hour.";
    body.classList.add("dark-mode"); // Apply dark mode

    // Calculate and display remaining time in "Another Hour"
    const remainingFakeSeconds = (25 * 3600) - totalFakeSeconds;
    const remainingMinutes = Math.floor(remainingFakeSeconds / 60);
    const remainingSeconds = Math.floor(remainingFakeSeconds % 60);

    document.getElementById('remaining-time').textContent = `You have another ${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')} today`;
  } else {
    // Calculate time remaining to the next "Another Hour" in 24-hour time
    const secondsUntilAnotherHour = (24 * 3600) - totalRealSeconds;
    const hoursUntilAnotherHour = Math.floor(secondsUntilAnotherHour / 3600);
    const minutesUntilAnotherHour = Math.floor((secondsUntilAnotherHour % 3600) / 60);
    const remainingSecondsUntilAnotherHour = secondsUntilAnotherHour % 60;

    headlineElement.textContent = `You will be in Another Hour in ${String(hoursUntilAnotherHour).padStart(2, '0')} hours ${String(minutesUntilAnotherHour).padStart(2, '0')} minutes and ${String(remainingSecondsUntilAnotherHour).padStart(2, '0')} seconds in standard 24-hour time.`;


    // Clear remaining time message and remove dark mode
    document.getElementById('remaining-time').textContent = '';
    body.classList.remove("dark-mode");
  }
}

// Run update every 0.96 real-time seconds
setInterval(updateClock, SECOND_LENGTH);
updateClock();






