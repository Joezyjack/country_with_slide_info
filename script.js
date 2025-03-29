let countriesData = [];

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        countriesData = data;
        displayCountries(data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        document.getElementById("countryList").innerHTML = "Failed to load data.";
    });

function displayCountries(data) {
    let countryList = document.getElementById("countryList");
    countryList.innerHTML = ""; // Clear content

    data.forEach((country, index) => {
        setTimeout(() => {
            const countryDiv = document.createElement("div");
            countryDiv.className = "countryDiv";

            let population = country.population ? country.population.toLocaleString() : "N/A";
            let gdp = country.gini ? `$${country.gini[Object.keys(country.gini)[0]]}B` : "N/A";
            let currency = country.currencies ? Object.values(country.currencies)[0].name : "N/A";
            let area = country.area ? country.area.toLocaleString() + ' km²' : "N/A";
            let continent = country.continents ? country.continents[0] : "N/A";
            let militaryRank = Math.floor(Math.random() * 150) + 1; // Mock ranking for simplicity
            let colonialCountry = "Colonial Country: N/A";  // This would need to be sourced from a different API
            let landmark = country.capital ? `Famous: ${country.capital[0]}` : "Landmark: N/A";

            countryDiv.innerHTML = `
<p><strong>${country.name.common}</strong></p>
<div class="flag-container">
    <img class="flag-img" src="${country.flags.svg}" 
         alt="Flag of ${country.name.common}"
         data-flag="${country.flags.svg}"
         data-coat="${country.coatOfArms.svg || country.flags.svg}">
    <div class="flag-tooltip">
        🌍 Continent: ${continent}<br>
        🗺️ Area: ${area}<br>
        🛡️ Military Rank: ${militaryRank}<br>
        🏛️ ${colonialCountry}
    </div>
</div>
<div class="details">
    <p>📊 GDP: ${gdp}</p>
    <p>👥 Population: ${population}</p>
    <p>💰 Currency: ${currency}</p>
    <p>📍 ${landmark}</p>
    <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(country.name.common)}" target="_blank" class="learn-more-btn">Learn More</a>
</div>
`;

            const flagContainer = countryDiv.querySelector(".flag-container");
            const flagTooltip = countryDiv.querySelector(".flag-tooltip");
            const flagImage = countryDiv.querySelector(".flag-img");

            // Show tooltip on hover
            flagContainer.addEventListener("mouseover", function () {
                flagTooltip.style.display = "block";
            });

            flagContainer.addEventListener("mouseout", function () {
                flagTooltip.style.display = "none";
            });

            // Flip flag on click
            flagImage.addEventListener("click", function () {
                flagImage.style.transform = "rotateY(180deg)";
                setTimeout(function () {
                    flagImage.src = flagImage.src === flagImage.dataset.flag
                        ? flagImage.dataset.coat
                        : flagImage.dataset.flag;
                    flagImage.style.transform = "rotateY(0deg)";
                }, 300);
            });

            countryList.appendChild(countryDiv);

            // Staggered fade-in animation
            setTimeout(() => {
                countryDiv.style.opacity = 1;
                countryDiv.style.transform = "translateY(0)";
            }, index * 50);  // Delay for staggered effect
        }, 50);
    });
}

function searchCountry() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();

    const filteredCountries = countriesData.filter(
        country =>
            country.name.common.toLowerCase().includes(searchQuery)
    );

    if (filteredCountries.length > 0) {
        displayCountries(filteredCountries);
    } else {
        document.getElementById("countryList").innerHTML = "No countries found.";
    }
}
