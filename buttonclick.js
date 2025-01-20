// Add the click event listener to the button
document.getElementById("feed-button").addEventListener('click', onFeedButtonClicked);

var lastFedElement = document.getElementById("last-fed");

function onFeedButtonClicked() {
    var d = new Date();
    var dateString = d.toLocaleTimeString();
    lastFedElement.innerText = "🐾 The dogs were last fed at " + dateString + " 🐾";
    
    if (d.getHours() < 12)
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