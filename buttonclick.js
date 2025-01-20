// Check the local storage when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    lastFedTime = localStorage.getItem("storedLastFed");
    isAm = localStorage.getItem("storedIsAm");

    console.log("Reading local storage as " + isAm);

    if (lastFedTime != null && isAm != null)
    {
        updateText(lastFedTime, isAm);
    }

});

// Add the click event listener to the button
document.getElementById("feed-button").addEventListener('click', onFeedButtonClicked);

// Grab the text element
var lastFedElement = document.getElementById("last-fed");

var lastFedTime;

function updateText(lastFedTimeString, isAm)
{
    lastFedElement.innerText = "🐾 The dogs were last fed at " + lastFedTimeString + " 🐾";

    if (isAm == true)
    {
        lastFedElement.classList.remove("default");
        lastFedElement.classList.remove("night-text");
        lastFedElement.classList.add("morning-text");
    }
    else {
        lastFedElement.classList.remove("default");
        lastFedElement.classList.remove("morning-text");
        lastFedElement.classList.add("night-text");
    }
}

function onFeedButtonClicked() {
    lastFedTime = new Date();
    var dateString = lastFedTime.toLocaleTimeString();
    var isAm = lastFedTime.getHours() < 12;

    localStorage.setItem("storedLastFed", dateString);
    localStorage.setItem("storedIsAm", isAm);
    console.log("Setting local storage to " + isAm);

    updateText(dateString, isAm);
}