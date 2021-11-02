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

const addCountryBtn = document.getElementById('addCountryBtn');
addCountryBtn.addEventListener('click', addCountry);