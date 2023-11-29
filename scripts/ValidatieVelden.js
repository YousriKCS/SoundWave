document.getElementById("voornaam").addEventListener("change", validateVoornaam);
document.getElementById("achternaam").addEventListener("change", validatieAchternaam)
document.getElementById("email").addEventListener("input", validateMail);
document.getElementById("telefoonnummer").addEventListener("change", validateTelefoonNummer);



document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let form = document.getElementById("bestellingklant");
    let buttonSpan = document.getElementById("orderbutton");
    if (form.checkValidity()) {
        buttonSpan.innerText = "";
        form.submit();
    } else {
        buttonSpan.innerText = "Please fill in the required fields correctly!";
        buttonSpan.style.color = "red";
    }
});
function validateVoornaam() {
    let naam = this.value;
    let naamSpan = document.getElementById("firstnamespan");
    if (naam.trim() !== naam) {
        naamSpan.innerText = "Erase extra spaces.";
        naamSpan.style.color = "red";
        this.classList.remove("validInput");
        this.classList.add("nonValidInput");
    } else {
        naamSpan.innerText = "";
        this.classList.remove("nonValidInput");
        this.classList.add("validInput");
    }
}
function validatieAchternaam() {
    let naam = this.value;
    let naamSpan = document.getElementById("lastnamespan");
    if (naam.trim() !== naam) {
        naamSpan.innerText = "Erase extra spaces.";
        naamSpan.style.color = "red";
        this.classList.remove("validInput");
        this.classList.add("nonValidInput");
    } else {
        naamSpan.innerText = "";
        this.classList.remove("nonValidInput");
        this.classList.add("validInput");
    }
}

function validateMail() {
    let mailadres = this.value;
    let mailSpan = document.getElementById("mailspan");
    let emailPattern = /^(?!.*\.\.)[a-zA-Z]+\.[a-zA-Z]+@(?:student\.)?kdg\.be$/;
    if (!emailPattern.test(mailadres)) {
        mailSpan.innerText = "Enter a valid KdG email address.";
        mailSpan.style.color = "red";
        this.classList.remove("validInput");
        this.classList.add("nonValidInput");
    } else {
        mailSpan.innerText = "";
        this.classList.remove("nonValidInput");
        this.classList.add("validInput");
    }
}

function validateTelefoonNummer() {
    let nummer = this.value;
    let telefoonSpan = document.getElementById("phonenumberspan");
    let nummerPattern = /^0?[1-9][0-9]{7,8}$/;
    if (!nummerPattern.test(nummer)) {
        telefoonSpan.innerText = "Enter a valid Phonenumber.";
        telefoonSpan.style.color = "red";
        this.classList.remove("validInput");
        this.classList.add("nonValidInput");
    } else {
        telefoonSpan.innerText = "";
        this.classList.remove("nonValidInput");
        this.classList.add("validInput");
    }
}