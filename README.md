Another Hour Clock
==================

Another Hour is a unique clock application that operates on a 25-hour day instead of the standard 24-hour system. This application provides users with an alternative perception of time, creating an "Another Hour" by running each second at 96% of the regular length. The interface displays both the standard 24-hour time and the 25-hour time, helping users explore a new way to experience time.

1. **Features**
   - **Dual Time Display**: Shows the current time in both 24-hour and 25-hour formats.
   - **Analog Clock**: A 25-hour analog clock face labeled from 1 to 24, with an "A" at the top to indicate the extra hour.
   - **Digital Time Indicators**: Displays both 24-hour and 25-hour digital times below the analog clock.
   - **Dynamic Updates**: The app automatically updates the time every 0.96 seconds to simulate a 25-hour day.
   - **Dark Mode**: A dark mode activates during the "Another Hour" for a unique visual effect.

2. **Files in This Repository**
   - **index.html**: Contains the HTML structure for the Another Hour clock.
   - **style.css**: Includes all styling for the clock's layout, appearance, and dark mode.
   - **script.js**: Handles the logic to calculate 25-hour time and updates the analog and digital clocks in real-time.

3. **How It Works**
   - The script in `script.js` calculates time based on a modified second length (0.96 seconds instead of the usual 1 second). It adjusts the rotations of the clock hands and updates both the 24-hour and 25-hour digital displays to provide accurate times.

      - **Calculating 25-Hour Time**: The current 24-hour time is converted to a 25-hour equivalent by adjusting the second length.
      - **Clock Hands Movement**: The clock hands rotate based on this new time, completing 25 hours within a traditional 24-hour period.
      - **Dark Mode Activation**: When the time enters the "Another Hour," the background changes, signaling users that they are in this unique time segment.

4. **Getting Started**
   - To run the clock locally:
      1. Clone this repository.
      2. Open `index.html` in your preferred browser.
      3. You should see the clock interface displaying both 24-hour and 25-hour times, updating in real time.

5. **Future Improvements**
   - Potential future additions could include:
      - Customizable time ratios for experimenting with other alternative day lengths.
      - Expanded styling options for greater visual variety.
      - Mobile support for a responsive, optimized experience.

