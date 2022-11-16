//Async function voor part 2
import axios from "axios";

const countryListPrt2 = document.getElementById("country-ListPrt2");
async function fetchSpecificCountryInfo() {
    try {
        // console.log(inputFieldValue);
        let inputFieldValue = "netherlands";
        const response = await axios.get("https://restcountries.com/v2/name/" + inputFieldValue);
        //sorteren van de array op populatie
        // response. data.sort((a, b) => a.population - b.population)
        console.log(response);

        response.data.map((country) => {
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
            itemInfo.textContent = `${country.name} is situated in ${country.subregion}. It has a population of
            ${country.population} people`;
            countryListPrt2.appendChild(itemInfo);

            //      const itemCapitalCurrency = document.createElement("p");
            //     itemCapitalCurrency.setAttribute("class", "countryPrt2Capital");
            //     itemCapitalCurrency.textContent = `The capital is ${country.capital} and you can pay with ${country.currency}`;
            //     countryListPrt2.appendChild(itemCapitalCurrency);
            //
            //     const itemLanguage = document.createElement("p");
            //     itemLanguage.setAttribute("class", "countryPrt2Currency");
            //     itemLanguage.textContent = `They speak ${country.languages[0]}`;
            //     countryListPrt2.appendChild(itemLanguage);
            //
            //     // response.data.find("Netherlands")

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

fetchSpecificCountryInfo()

// // sla de referentie naar het button-element op
// const buttonElement = document.getElementById('names-button');
// const usernameInput = document.getElementById('input-CountryName');
// // plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
// usernameInput.addEventListener('click', getNames);
// function getNames(e) {
//     let inputFieldValue = e.target.name;
//     console.log(inputFieldValue);
//     return fetchSpecificCountryInfo(e)
// }

function languagesCountry() {
    itemLanguage.textContent += `They speak ${country.languages[0].name}`;
    if (lengthLanguageArray >= 1) {
        for (let i = 1) {
            itemLanguage.textContent += ` and ${country.languages[i].name}`;
        }
        for ((let i > 1; i < lengthLanguageArray; i++) )

    }

    function currenciesCountry() {
        itemCurrency.textContent += `and you can pay with ${country.currencies[0].name}'s`
        for (let i = 1; i < lengthCurrenciesArray; i++) {

            itemCurrency.textContent += ` and with ${country.currencies[i].name}'s`;
        }
        return itemCurrency.textContent
    }


    function currenciesCountry() {
        itemCurrency.textContent += `and you can pay with ${country.currencies[0].name}'s`
        for (let i = 1; i < lengthCurrenciesArray; i++) {
            itemCurrency.textContent += ` and with ${country.currencies[i].name}'s`;
        }
        return itemCurrency.textContent
    }
    function languagesCountry() {
        itemLanguage.textContent += `They speak ${country.languages[0].name}`
        for (let i = 1; i < lengthLanguageArray; i++) {
            if (i === lengthCurrenciesArray) {

                itemLanguage.textContent += ` and ${country.languages[i].name}`;
            }
            else {
                itemLanguage.textContent += `, ${country.languages[i].name}`;
            }

        }
        return itemCurrency.textContent
    }

    function languagesCountry() {
        itemLanguage.textContent += `They speak ${country.languages[0].name}`
        for (let i = 1; i < lengthLanguageArray; i++) {

            itemLanguage.textContent += ` and ${country.languages[i].name}`;
        }
        return itemCurrency.textContent
    }

    function languagesCountry() {
        itemLanguage.textContent += `They speak ${country.languages[0].name}`
        for (let i = 1; i < lengthLanguageArray; i++) {
            if (i < lengthLanguageArray - 1) {
                itemLanguage.textContent += `, ${country.languages[i].name}`;
            } else {
                itemLanguage.textContent += ` and ${country.languages[i].name}`;
            }

        }
    }

    return itemCurrency.textContent
}

function currenciesCountry() {
    itemCurrency.textContent += `and you can pay with ${country.currencies[0].name}'s`
    for (let i = 1; i < lengthCurrenciesArray; i++) {
        itemCurrency.textContent += ` and with ${country.currencies[i].name}'s`;
    }
    return itemCurrency.textContent
}

currenciesCountry(country.currencies);
countryListPrt2.appendChild(itemCurrency);