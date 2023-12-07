init();


function init(){
    document.getElementById("voornaam").addEventListener("blur",validatieVoornaam);
    document.getElementById("achternaam").addEventListener("blur",validatieAchternaam);
    document.getElementById("email").addEventListener("blur",validateMail);
    document.getElementById("bestellingklant").addEventListener("submit",validatieFormulier);
    document.getElementById("telefoonnummer").addEventListener("blur",validatieTelefoonnummer);
    document.getElementById("postcode").addEventListener("blur",validateZipcode);

}
function toonFoutBoodschap(boodschap, errorElement) {
    errorElement.innerHTML = boodschap;
}

function isValidated(element,isvalid=true) {
    if (isvalid){
        element.classList.add("isValid")
        element.classList.remove("isInvalid")
    } else{
        element.classList.remove("isValid")
        element.classList.add("isInvalid")
    }
}

function validatieVoornaam() {
    let voornaamElement = document.getElementById("voornaam");

    let voornaamError = voornaamElement.parentElement.querySelector(".error");

    let voornaamValue = voornaamElement.value;

    if (voornaamValue.split(" ").length > 1){
        toonFoutBoodschap("Your firstname cannot contain spaces",voornaamError);
        isValidated(voornaamElement,false);
        return false;
    }
    else{
        toonFoutBoodschap("", voornaamError);
        isValidated(voornaamElement);
        return true;
    }
}

function validatieAchternaam(){
    let achternaamElement = document.getElementById("achternaam");

    let achternaamError = achternaamElement.parentElement.querySelector(".error");

    let achternaamValue = achternaamElement.value;

    if (achternaamValue.split(" ").length > 1){
        toonFoutBoodschap("Your lastname cannot contain spaces",achternaamError);
        isValidated(achternaamElement,false);
        return false;
    }
    else{
        toonFoutBoodschap("", achternaamError);
        isValidated(achternaamElement);
        return true;
    }
}
function validateMail(){
    let mailElement = document.getElementById("email");

    let mailError = mailElement.parentElement.querySelector(".error");

    let mailValue = mailElement.value;

    let mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|be)$/;


    if (!mailRegex.test(mailValue)){
        toonFoutBoodschap("You must enter a valid E-mail", mailError);
        isValidated(mailElement,false);
        return false;
    } else {
        toonFoutBoodschap("", mailError);
        isValidated(mailElement)
        return true;
    }
}
function validatieTelefoonnummer() {
    let nummerRegex =  /^0?[1-9][0-9]{7,8}$/;

    let nummerElement = document.getElementById("telefoonnummer");

    let nummerError = nummerElement.parentElement.querySelector(".error");

    let nummerValue = nummerElement.value;

    if (!nummerRegex.test(nummerValue)){
        toonFoutBoodschap("You must enter a valid phone number", nummerError);
        isValidated(nummerElement,false);
        return false;
    } else {
        toonFoutBoodschap("", nummerError);
        isValidated(nummerElement);
        return true;
    }
}
function validateZipcode() {

    let zipcodeElement = document.getElementById("postcode");

    let zipcodeError = zipcodeElement.parentElement.querySelector(".error");

    let zipcodeValue = zipcodeElement.value;

    if (zipcodeValue.length > 4 || zipcodeValue.length < 4){
        toonFoutBoodschap("You must enter a valid Zipcode",zipcodeError);
        isValidated(zipcodeElement,false);
        return false;

    } else if (!(zipcodeValue < 9999 && zipcodeValue > 1000)) {
        toonFoutBoodschap("Zipcode must be between 9999 and 1000",zipcodeError);
        isValidated(zipcodeElement,false);
        return false;

    }
    else{
        toonFoutBoodschap("",zipcodeError);
        isValidated(zipcodeElement);
        return true;
    }

}

function validatieFormulier(event) {
    event.preventDefault();

    let formulierError = document.getElementById("formulierError");

    if (!validatieVoornaam()){
        toonFoutBoodschap("There is something wrong with your firstname",formulierError);
        return;
    }
    if (!validatieAchternaam()){
        toonFoutBoodschap("There is something wrong with your lastname",formulierError);
        return;
    }

    if (!validateMail()){
        toonFoutBoodschap("There is something wrong with your E-mail",formulierError);
        return
    }
    if (!validatieTelefoonnummer()){
        toonFoutBoodschap("There is something wrong with your phone-number",formulierError);
        return
    }
    if (!validateZipcode()){
        toonFoutBoodschap("There is something wrong with your Zipcode",formulierError);
        return
    }

    event.currentTarget.submit();
}