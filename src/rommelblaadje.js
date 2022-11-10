const itemName = document.createElement("li");
itemName.setAttribute("class", colorName(country.region));
itemName.textContent = country.name;
countryList.appendChild(itemName);