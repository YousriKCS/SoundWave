const radiobuttons = document.querySelectorAll('input[name="typeheadphone"]')

for (let radiobutton of radiobuttons){
    radiobutton.addEventListener("change", handlerHeadphoneFilter);
}

function handlerHeadphoneFilter(event) {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.checked);

    toonProductenMetFilter(event.currentTarget.value);
}

function toonProductenMetFilter(typeheadphone) {
    let producten = document.querySelectorAll(".ProductenGalerij section")
    for (let product of producten){
        console.log(product.dataset.headphonetype)
        console.log(typeheadphone)
        if (product.dataset.headphonetype === typeheadphone) {
            product.classList.remove("hidden");
        }  else{
            product.classList.add("hidden");
        }
    }
}
