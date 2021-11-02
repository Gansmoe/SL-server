const addCountry = async () => {
    const input = document.getElementById("countryInput");
    const response1 = await fetch('https://hello-heroku-gansmoe.herokuapp.com/country');
    const data1 = await response1.json();
    const nextId = data1.length + 1;
    const country = { id: nextId, countryname: input.value }

    const response = await fetch('https://hello-heroku-gansmoe.herokuapp.com/country', {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(country),
    })
    const data = await response.json();
    console.log(data);
    if (data.success) {
        console.log("Country added!");
        input.value = "Country added!";
    }
};

const addCity = async () => {
    const city = document.getElementById("city");
    const cityPopulation = document.getElementById("population");
    const countryName = document.getElementById("countryName");

    const responseCity = await fetch('https://hello-heroku-gansmoe.herokuapp.com/city');
    const dataCity = await responseCity.json();
    const responseCountry = await fetch('https://hello-heroku-gansmoe.herokuapp.com/country');
    const dataCountry = await responseCountry.json();
    const nextId = dataCity.lenght + 1;
    let countryId = 0;

    console.log(dataCity);
    console.log(dataCountry);

    for (let i = 0; i<dataCountry.length; i++) {
        if (countryName.value === dataCountry[i].countryname){
            countryId = dataCountry[i].id;
        }
    }
    console.log(countryId);

    const newCity = {id: nextId, stadname: city.value, countryid: countryId, population: cityPopulation.value}


    const response = await fetch('https://hello-heroku-gansmoe.herokuapp.com/city', {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCity),
    })
    const data = await response.json();
    console.log(data);
    if (data.success) {
        console.log("City added!");
        countryName.value = "City added!";

    }
}

const addCountryBtn = document.getElementById('addCountryBtn');
addCountryBtn.addEventListener('click', addCountry);

const addCityBtn = document.getElementById('addCityBtn');
addCityBtn.addEventListener('click', addCity);