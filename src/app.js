console.log('Hallo daar!');
import axios from 'axios';

const countryList = document.getElementById("country-List");
const URI = "https://restcountries.com/v2/";
const ENDPOINT = "all";

async function fetchCountryInfo() {
    try {
        const response = await axios.get(URI + ENDPOINT);
        //sorteren van de array op populatie
        response.data.sort((a, b) => a.population - b.population)
        console.log(response.data);
        //laat de naam van 1 land zien,  bijv van tweede land uit de array
        // const itemName = document.createElement("li");
        // const itemPopulation = document.createElement("article");
        // const itemFlag = document.createElement("img");
        // itemName.textContent = response.data[1].name;
        // itemPopulation.textContent = `has a population of ${response.data[1].population} people`;
        // itemFlag.textContent = response.data[1].flags;
        // item.textContent = response.data[1].population;
        response.data.map((country) => {
            const itemFlag = document.createElement("img");
            itemFlag.setAttribute("class", "flag");
            itemFlag.setAttribute("src", country.flag);
            countryList.appendChild(itemFlag);

            const itemName = document.createElement("li");

            function colorName() {
                if (country.region === "Oceania") {
                    return itemName.setAttribute("id", "oceania");
                }
                if (country.region === "Africa") {
                    return itemName.setAttribute("id", "africa");
                }
                if (country.region === "Europe") {
                    return itemName.setAttribute("id", "europe");
                }
                if (country.region === "Americas") {
                    return itemName.setAttribute("id", "americas");
                }
                if (country.region === "Asia") {
                    return itemName.setAttribute("id", "asia");
                }
            }
            colorName(country.region);

            itemName.setAttribute("class", "name");
            itemName.textContent = country.name;
            countryList.appendChild(itemName);

            const itemPopulation = document.createElement("li");
            itemPopulation.setAttribute("class", "population");
            itemPopulation.textContent = `Has a population of ${country.population} people.`;
            countryList.appendChild(itemPopulation);

        });
    } catch (err) {
        console.error(err);
        const errorMessage = document.getElementById("error-Message");
        //check welke error message van toepassing is
        if (err.response.status === 404) {
            errorMessage.textContent = "page not found | 404";
        }
        //check welke error message van toepassing is
        if (err.response.status === 500) {
            errorMessage.textContent = "Internal server status | 404";
        }
    }
}

fetchCountryInfo();
