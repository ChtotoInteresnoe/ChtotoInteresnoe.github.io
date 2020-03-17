function showPopup(e) {
        e.preventDefault();
        popUp.style.display = "block";
        select.style.display = "block";
}

function hidePopup() {
        select.style.display = "none";
        popUp.style.display = "none"
}
let select = document.querySelector("#priceSelect");
let popUp = document.querySelector(".service-popup");
let popUpBtn = document.querySelector(".popup");
let pricePopUpBtn = document.querySelector(".mobilePopup")
pricePopUpBtn.addEventListener("click", showPopup)
popUpBtn.addEventListener("click", showPopup);
popUp.addEventListener("click",hidePopup);


