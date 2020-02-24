let btnInput = document.querySelector(".btnInput");
let popUpBg = document.querySelector("#popUp");
popUpBg.addEventListener("click" , e => {
    e.preventDefault();
    popUpBg.classList.remove("active");
});
btnInput.addEventListener("click",(e) => {
    e.preventDefault();
    popUpBg.classList.add("active");
});

          // arrow


let arrows = document.querySelectorAll(".main__info a");
for(let arrow of arrows) {
    arrow.addEventListener("click",(e) => {
        e.preventDefault();

        const blockID = arrow.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

}





////////////






var rate = 0;

function toUsd() {
    let requestUrl = "http://www.floatrates.com/daily/usd.json";
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET", requestUrl);
    xhr.onload = () => {
        rate = xhr.response.kzt.rate;
    };
    xhr.send();
    return rate;
}
toUsd();

let priceData = [];

let priceDigit = document.querySelectorAll(".price-table-item-digit");
priceDigit.forEach(item => {
    let oldDigit = Number(item.innerHTML);
    priceData.push(oldDigit);
});
let priceRuData = [250,300,250,300,300,350,300,350,450,500,450,500,450,500,350,400,400,500,500,550,450,500,300,350,500,550,400,500,500,600];
localStorage.setItem('KZT', priceData);

let date = localStorage.getItem('KZT');
let arrDate = date.split(",");
let calc = (item, current) => {
    if(current === "USD"){
        let res = item / rate;
        return Math.floor(res);
    } else {
        return item;
    }
};

let priceBtn = document.querySelector(".price-download");

let rubBtn = document.querySelector(".RUB")
rubBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    for (let i = 0; i < priceRuData.length; i++) {
        writeDigit(calc(priceRuData[i],"RUB"), i);
    }
    priceBtn.href = "img/price-rus.jpg"
});
let kztBtn = document.querySelector(".KZT")
kztBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    for (let i = 0; i < arrDate.length; i++) {
        writeDigit(calc(arrDate[i],"KZT"), i);
    }
    priceBtn.href = "img/price-kaz.jpg"
});
let usdBtn = document.querySelector(".USD")
usdBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    for (let i = 0; i < arrDate.length; i++) {
        writeDigit(calc(arrDate[i],"USD"), i);
    }
    priceBtn.href = "img/price-kaz.jpg"
});
function readData(current) {
    if(current === "KZT"){
        for (let i = 0; i < arrDate.length; i++) {
            writeDigit(calc(arrDate[i],current), i);
        }
    } else if(current === "RUB"){
        for (let i = 0; i < priceRuData.length; i++) {
            writeDigit(priceRuData[i], i);
        }
    } else if(current === "USD"){
        for (let i = 0; i < priceRuData.length; i++) {
            writeDigit(calc(arrDate[i],current), i);
        }
    }
}
function readDataFor(){
    for (let i = 0; i < arrDate.length; i++) {
        writeDigit(calc(arrDate[i],current), i);
    }
}

function writeDigit(item, digitIndex) {
    priceDigit[digitIndex].innerHTML = item;
}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let cartsNav = document.querySelectorAll("#carts .main__info-nav li");
let carts = document.querySelectorAll(".carts-letters");

for(let i = 0; i < cartsNav.length; i++){
    (cartsNav[i]).addEventListener("click" , (e) => {
        e.preventDefault();
        showCart(i);
    })
};
function showCart(index) {
    for(let cart of carts){
        cart.style.display = "none"
    }
    carts[index].style.display = "grid";

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////BURGER/////


function burgerClick(){
    burgerHide.classList.forEach(item => {
        if(item === "active"){
            burgerHide.classList.remove("active");
        } else  {
            burgerHide.classList.add("active");
        }
    })
    mobileNav.classList.forEach(item => {
        if(item === "active"){
            mobileNav.classList.remove("active");
        } else  {
            mobileNav.classList.add("active");
        }
    })
}
let mobileNavItems = document.querySelectorAll(".main__info-nav  a");
for(let mobileNavItem of mobileNavItems){
    mobileNavItem.addEventListener("click",() => {
        mobileNav.classList.remove("active")
    });
}

let burgerHide = document.querySelector(".burger");
let burgerShow = document.querySelector(".burger-wrap");
let mobileNav = document.querySelector(".main__info-nav")
burgerShow.addEventListener("click",burgerClick);












