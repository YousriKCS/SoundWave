init();
function init(){
    document.getElementById("voornaam").addEventListener("blur",validatieVoornaam);
    document.getElementById("achternaam").addEventListener("blur",validatieAchternaam);

}
function toonFoutBoodschap(boodschap, errorElement) {
    errorElement.innerHTML = boodschap;
}

function isValidated(element,isvalid=true) {
    if (isvalid){
        element.classList.add("isvalid")
        element.classList.remove("isinvalid")
    } else{
        element.classList.remove("isvalid")
        element.classList.add("isinvalid")
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

