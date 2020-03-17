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

function convert() {
    let selectValue = document.getElementById("priceSelect").value;
    if(selectValue === "KZT") readData("KZT");
    else if (selectValue === "KZT") readData("KZT");
    else if (selectValue === "USD") readData("USD");
    else if (selectValue === "RUB") readData("RUB");
}

btnEng.addEventListener("click", convert);

