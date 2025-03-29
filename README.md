# 🌎 Global Explorer: Flags & Facts

Global Explorer is an interactive web application that displays flags of countries along with important information such as population, GDP, currency, area, continent, and military ranking. Users can search for countries, hover over flags for more details, and click to flip between the national flag and the coat of arms. A "Learn More" button is provided to redirect users to the corresponding Wikipedia page for each country.

## Features

- **Country Flags**: View flags of countries from around the world.
- **Country Information**: See details like GDP, population, currency, area in square kilometers, continent, and military ranking.
- **Flip Effect**: Click the flag to toggle between the flag and the country's coat of arms.
- **Search Functionality**: Search for countries by name.
- **Learn More**: A "Learn More" button redirects you to Wikipedia for detailed information about each country.

## Technologies Used

- **HTML**: For the structure of the webpage.
- **CSS**: For styling the layout, buttons, and animation effects.
- **JavaScript**: For dynamic content loading, flag flipping, and search functionality.
- **REST API**: The country data is fetched from the [REST Countries API](https://restcountries.com/v3.1/all).

## Project Structure

```bash
project/
│
├── index.html        # Main HTML file that loads the web app
├── styles.css        # CSS file for styling the app
└── scripts.js        # JavaScript file for functionality
