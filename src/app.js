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

            const itemPopulation = document.createElement("p");
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

//Async function voor part 2
const countryListPrt2 = document.getElementById("country-ListPrt2");

async function fetchSpecificCountryInfo(inputFieldValue) {
    console.log("de countryname wordt verzonden");
    try {
        // console.log(inputFieldValue);
        const response = await axios.get("https://restcountries.com/v2/name/" + inputFieldValue);
        console.log(response);

        let country = response.data[0];

        const itemFlagPrt2 = document.createElement("img");
        itemFlagPrt2.setAttribute("class", "flagPrt2");
        itemFlagPrt2.setAttribute("src", country.flag);
        countryListPrt2.appendChild(itemFlagPrt2);

        const itemNamePrt2 = document.createElement("li");
        itemNamePrt2.setAttribute("class", "namePrt2");
        itemNamePrt2.textContent = country.name;
        countryListPrt2.appendChild(itemNamePrt2);

        const itemInfo = document.createElement("p");
        itemInfo.setAttribute("class", "countryPrt2Info");
        itemInfo.textContent = `${country.name} is situated in ${country.subregion}. It has a population of ${country.population} people`;
        countryListPrt2.appendChild(itemInfo);

        const itemCapital = document.createElement("div");
        itemCapital.setAttribute("class", "countryPrt2Details");
        itemCapital.textContent = `The capital is ${country.capital}`;
        countryListPrt2.appendChild(itemCapital);

        const itemCurrency = document.createElement("div");
        itemCurrency.setAttribute("class", "countryPrt2Details");

        let lengthCurrenciesArray = country.currencies.length;
        console.log(lengthCurrenciesArray);

        function currenciesCountry() {
            itemCurrency.textContent += ` and you can pay with ${country.currencies[0].name}'s`
            for (let i = 1; i < lengthCurrenciesArray; i++) {
                itemCurrency.textContent += ` and with ${country.currencies[i].name}'s`;
            }
            return itemCurrency.textContent
        }

        currenciesCountry(country.currencies);
        countryListPrt2.appendChild(itemCurrency);

        const itemLanguage = document.createElement("div");
        itemLanguage.setAttribute("class", "countryPrt2details");

        let lengthLanguageArray = country.languages.length;
        console.log(lengthLanguageArray);

        function languagesCountry() {
            itemLanguage.textContent += `They speak ${country.languages[0].name}`
            for (let i = 1; i < lengthLanguageArray; i++) {

                itemLanguage.textContent += ` and ${country.languages[i].name}`;
            }
            return itemCurrency.textContent
        }

        languagesCountry(country.languages);
        countryListPrt2.appendChild(itemLanguage);


    } catch (err) {
        console.error(err);
        const errorMessage = document.getElementById("error-Message");
        //check welke error message van toepassing is
        if (err.response.status === 404) {
            errorMessage.textContent = "NAAM LAND IS NIET JUIST INGEVOERD OF BESTAAT NIET";
        }
        //check welke error message van toepassing is
        if (err.response.status === 500) {
            errorMessage.textContent = "Internal server status | 404";
        }
    }
    countryNameInputField.value="";

}

// fetchSpecificCountryInfo()


// // sla de referentie naar het button-element op

const countryNameInputField = document.getElementById('countryname-field');


// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
countryNameInputField.addEventListener('submit', handleSubmit);


function handleSubmit(e) {
    e.preventDefault();
    fetchSpecificCountryInfo(countryNameInputField.value);
}

//sla de referentie naar het button-element middels form op
const searchCountryForm = document.getElementById("search-country-form");

// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
// searchCountryForm.addEventListener("submit", fetchSpecificCountryInfo);
// searchCountryForm.addEventListener("submit", () => {
//     fetchSpecificCountryInfo(countryName);
// });
searchCountryForm.addEventListener("submit", handleSubmit);
