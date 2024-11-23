document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showPopup();
});

function showPopup() {
    document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("successPopup").style.display = "none";
}

// State and City Handling
const countryStateCityData = {
    India: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Delhi: ["New Delhi", "Dwarka", "Karol Bagh"]
    },
    USA: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        Texas: ["Austin", "Houston", "Dallas"]
    },
    // Add more countries, states, and cities here...
};

document.getElementById("country").addEventListener("change", function() {
    const country = this.value;
    const stateDropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");
    stateDropdown.innerHTML = '<option value="" disabled selected>Select a State</option>';
    cityDropdown.innerHTML = '<option value="" disabled selected>Select a City</option>';
    if (countryStateCityData[country]) {
        for (const state in countryStateCityData[country]) {
            stateDropdown.innerHTML += `<option value="${state}">${state}</option>`;
        }
    }
});

document.getElementById("state").addEventListener("change", function() {
    const state = this.value;
    const country = document.getElementById("country").value;
    const cityDropdown = document.getElementById("city");
    cityDropdown.innerHTML = '<option value="" disabled selected>Select a City</option>';
    if (countryStateCityData[country] && countryStateCityData[country][state]) {
        for (const city of countryStateCityData[country][state]) {
            cityDropdown.innerHTML += `<option value="${city}">${city}</option>`;
        }
    }
});
