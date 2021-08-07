const submitButton = document.querySelector("#submit");
const outputTextField = document.querySelector("#output-field");

const API_URL = "https://api.funtranslations.com/translate/minion.json?text=CONTENT";

submitButton.addEventListener("click", () => {
    const givenData = document.querySelector("#input-field").value;
    const finalUrl = encodeURI(API_URL.replace("CONTENT", givenData));
    fetch(finalUrl)
        .then(res => res.json())
        .then(data => outputTextField.innerText = data.contents.translated)
        .catch(e => alert('Error Occured'));
});