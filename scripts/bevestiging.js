informatieUitURL();

function informatieUitURL(){
    // search.
    let query = window.location.search;

    // krijgt param
    let searchParams = new URLSearchParams(query);

    // get param
    let paramVoornaam = searchParams.get("voornaam");
    console.log("param " + paramVoornaam);
    let paramAchternaam = searchParams.get("achternaam");
    console.log("param " + paramAchternaam)

    let paramEmail = searchParams.get("email");

    let paramProduct = searchParams.get("product");
    let paramPayment = searchParams.get("payment");
    let paramTelefoonnummer = searchParams.get("telefoonnummer");
    let paramDeliveryAddress = searchParams.get("deliveryaddress");
    let paramPostcode = searchParams.get("postcode");
    let paramDeliveryDate = searchParams.get("datumVoorLevering");
    console.log("param: " + paramDeliveryDate)
    let paramReview = searchParams.get("opmerking");

   let voornaamElement = document.getElementById("voornaamId");
   voornaamElement.innerText = paramVoornaam;
    let achternaamElement = document.getElementById("achternaamId");
    achternaamElement.innerText = paramAchternaam;

    let emailElement = document.getElementById("emailId");
    emailElement.innerText = paramEmail;

    let telefoonnummerElement = document.getElementById("telefoonnummerId");
    telefoonnummerElement.innerText = paramTelefoonnummer;

    let productElement = document.getElementById("productId");
    productElement.innerText = paramProduct;

    let deliveryAddressElement = document.getElementById("deliveryaddressId");
    deliveryAddressElement.innerText = paramDeliveryAddress;

    let postcodeElement = document.getElementById("postcodeId");
    postcodeElement.innerText = paramPostcode;

    let deliveryDateElement = document.getElementById("deliverydateId");
    deliveryDateElement.innerText = paramDeliveryDate;

    let paymentElement = document.getElementById("paymentId");
    paymentElement.innerText = paramPayment;

    let reviewElement = document.getElementById("reviewId");
    reviewElement.innerText = paramReview;





}