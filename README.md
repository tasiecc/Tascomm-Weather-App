## Welcome to the Tascomm-Weather-App wiki!
# Tascomm Weather App

## Overview
Tascomm Weather App is a user-friendly web application that provides current weather information based on the user's location. Built using HTML, CSS, JavaScript, and Bootstrap, it offers a seamless and visually appealing way to check the weather conditions.

![Tascomm Weather App](https://github.com/tasiecc/Tascomm-Weather-App/assets/64579151/0734697d-6c37-4ebe-b70e-dcf661f9880d)

The app displays essential weather details, including weather icons, temperature, descriptions (e.g., cloudy, sunny, etc.), and the name of the city. One notable feature is the dynamic background color adaptation, which changes based on the current weather conditions, enhancing the user experience.

## Features
- Real-time weather data display for the user's location, featuring:
  - Weather icons
  - Temperature
  - Weather descriptions
  - City name
- Dynamic background color adaptation to match current weather conditions
- Clean and responsive user interface using Bootstrap
- Compatibility with desktop and mobile browsers for a consistent experience

## Code Structure
The application comprises the following files:

- `index.html`: The primary HTML document that structures the app.
- `style.css`: A CSS stylesheet for custom styling.
- `app.js`: JavaScript code responsible for the weather app's functionality.
- `font/`: A folder containing custom fonts.
- `icons/`: A folder containing weather icon images.

### index.html
This file contains the main HTML markup, including:

- App title, logo, and headings
- Containers to display weather information
- Links to Bootstrap, custom CSS, and fonts
- A container for notification alerts

### style.css
The CSS styles are organized for:

- Typography and color schemes
- Styling app title containers
- Weather icon and temperature styling
- Mobile responsiveness for a seamless experience

### app.js
The JavaScript code includes:

- Integration with weather APIs using the `fetch()` method
- DOM selection and manipulation to update the user interface
- Utilization of the Geolocation API to acquire user coordinates
- Dynamic background color adaptation based on weather conditions
- Error handling to provide a smooth user experience

## Installation
To run the app locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. No web server is required as the APIs run client-side.

## Contributing
We welcome contributions to enhance this weather app. Potential areas for contribution include:

- Adding support for different themes
- Implementing data persistence for user preferences
- Improving accessibility for all users
- Expanding the range of weather data available

Feel free to submit pull requests to help make the app even better!

## License
This project is open source and is available under the MIT License. Your contributions are greatly appreciated.
