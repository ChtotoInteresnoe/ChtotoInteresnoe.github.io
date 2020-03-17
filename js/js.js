
          // arrow



$('.fixedHeadWrap   .main__info-nav').find('a').on('click', function () {
  this.classList.add("acitve");
  burgerClick()
    var $el = $(this);
    id = $el.attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top - 57
  }, 500);
  return false;
});
$('#main   .main__info-nav').find('a').on('click', function () {
  this.classList.add("acitve");
  burgerClick()
    var $el = $(this);
    id = $el.attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top - 57
  }, 500);
  return false;
});
$('#mobileNav   .main__info-nav').find('a').on('click', function () {
  burgerClick()
    var $el = $(this);
    id = $el.attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
  return false;
});


// for(let arrow of arrows) {
//     arrow.addEventListener("click",(e) => {
//         e.preventDefault();
//         burgerClick();
//         const blockID = arrow.getAttribute('href').substr(1);
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//
//     })
//
// }





////////////



  let usdBtn = document.querySelector(".USD");
  usdBtn.addEventListener("click" , (e) => {
    e.preventDefault();
  })


var rate = 0;

function toUsd() {
    let requestUrl = "https://www.floatrates.com/daily/usd.json";
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET", requestUrl);
    xhr.onload = () => {
        rate = xhr.response.kzt.rate;
        let usdBtn = document.querySelector(".USD");
        usdBtn.addEventListener("click" , (e) => {
            e.preventDefault();

            let zav = document.querySelectorAll(".price-table-item-zav");
            zav.forEach((item, i) => {
              item.style.display = "flex"
            });

            let rusDigit = document.querySelectorAll(".price-table-item-rus");
            rusDigit.forEach((item, i) => {
              item.style.display = "none"
            });


            let kazDigit = document.querySelectorAll(".price-table-item-kaz");
            kazDigit.forEach((item, i) => {
              item.style.display = "flex";
            });


            for (let i = 0; i < arrDate.length; i++) {
                writeDigit(calc(arrDate[i],"USD"), i);
            }
            priceBtn.href = "img/price-kaz.jpg"

            rubBtn.classList.remove("active");
            kztBtn.classList.remove("active");
            usdBtn.classList.add("active");

            let table = document.querySelector(".price-table-two");
            table.style.gridTemplateColumns = '1.5fr 1fr';
        });
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

let priceRuData = [250,300,200,250,300,350,500,600,350,400,450,500,450,500,400,500,400,500,300,350,300,350,500,550,500,550,450,500,500,600];
console.log(priceRuData)
localStorage.setItem('KZT', priceData);

let date = localStorage.getItem('KZT');
let arrDate = date.split(",");
let calc = (item, current) => {
    if(current === "USD"){
        let res = item / rate;
        let newRes = String(res).split(".");
        let lastArr = newRes[1];
        newRes[1] = lastArr.slice(0,2);
        return (newRes.join("."));
    } else {
        return item;
    }
};

let priceBtn = document.querySelectorAll(".price-download");

let priceBtns = document.querySelectorAll(".tables ul a");

let rubBtn = document.querySelector(".RUB");
let kztBtn = document.querySelector(".KZT");




rubBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    let zav = document.querySelectorAll(".price-table-item-zav");
    zav.forEach((item, i) => {
      item.style.display = "none"
    });

    let rusDigit = document.querySelectorAll(".price-table-item-rus");
    rusDigit.forEach((item, i) => {
      item.style.display = "flex"
    });

    let kazDigit = document.querySelectorAll(".price-table-item-kaz");
    kazDigit.forEach((item, i) => {
      item.style.display = "none";
    });

    let kazDigitName = document.querySelectorAll(".price-table-item-kaz-name");
    kazDigitName.forEach((item, i) => {
      item.style.display = "none";
    });



    for (let i = 0; i < priceRuData.length; i++) {
        writeDigit(calc(priceRuData[i],"RUB"), i);
    }
    priceBtn.forEach((item, i) => {
      item.href = "rus.pdf"
    });


    rubBtn.classList.add("active");
    kztBtn.classList.remove("active");
    usdBtn.classList.remove("active");
});

kztBtn.addEventListener("click" , (e) => {
    e.preventDefault();



    let zav = document.querySelectorAll(".price-table-item-zav");
    zav.forEach((item, i) => {
      item.style.display = "flex"
    });

    let rusDigit = document.querySelectorAll(".price-table-item-rus");
    rusDigit.forEach((item, i) => {
      item.style.display = "none"
    });


    let kazDigit = document.querySelectorAll(".price-table-item-kaz");
    kazDigit.forEach((item, i) => {
      item.style.display = "flex";
    });

    let kazDigitName = document.querySelectorAll(".price-table-item-kaz-name");
    kazDigitName.forEach((item, i) => {
      item.style.display = "flex";
    });


    for (let i = 0; i < arrDate.length; i++) {
        writeDigit(calc(arrDate[i],"KZT"), i);
    }
    priceBtn.forEach((item, i) => {
      item.href = "rus.pdf"
    });

    rubBtn.classList.remove("active");
    kztBtn.classList.add("active");
    usdBtn.classList.remove("active");
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

function writeDigit(item, digitIndex) {
    priceDigit[digitIndex].innerHTML = item;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////BURGER/////


function burgerClick(){
   let bg = document.querySelector(".bg-nav");
   let line = document.querySelectorAll(".main__info-nav ul a");

line.forEach((item, i) => {
  if(item.classList[0] === "active"){
       item.classList.remove("active");
  }
});

   bg.classList.forEach(item => {
       if(item === "active"){
            bg.classList.remove("active");
       } else  {
           bg.classList.add("active");
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
        mobileNav.classList.remove("active");
        burgerHide.classList.remove("active");
    });
}

let burgerHide = document.querySelector(".burger");
let burgerShow = document.querySelector(".burger-wrap");
let mobileNav = document.querySelector(".main__info-nav-left");
let mobileNavA = document.querySelectorAll("#mobileNav a");
let bg = document.querySelector(".bg-nav");

bg.addEventListener("click",burgerClick);

burgerShow.addEventListener("click",burgerClick);








////////////////////////////////////////////////////Слайдер/////////////////




///////////////////popup////////////////////////////



// let sliderImgs = document.querySelectorAll(".carts-letters img");
// let popupSlider = document.querySelector("#popup")
// let popUpwrap = document.querySelector(".popUp-slide-wrap")
// let slideLeft = document.querySelector(".slider-left");
// let slideRight = document.querySelector(".slider-right");
//
//
// sliderImgs.forEach((item, i) => {
//   item.addEventListener("click" , () => {
//     itemCopy = item.cloneNode();
//         showImg(itemCopy);
//     })
//   });
//
//
// slideLeft.addEventListener("click" , () => {
//      showImg()
// })
//
//
// slideRight.addEventListener("click" , () => {
//      showImg()
// })
//
//
// function showImg(el){
//
//
//      popUpwrap.append(el);
//
//
//
//
//   let sliderPopUpBg = document.querySelector(".popupSliderBg");
//
// let popUpwrapImg = document.querySelectorAll(".popUp-slide-wrap img");
//
//   let timesClicked = 0;
//
//    sliderPopUpBg,addEventListener("click" , () => {
//
//             if(timesClicked++ > 0){
//
//                popupSlider.classList.remove("active");
//                popupSlider.style.display = "none";
//             timesClicked = 0;
//
//             popUpwrapImg.forEach((item, i) => {
//
//               item.remove();
//
//             });
//
//             } else {
//
//
//
//             }
//
//
//
//   })
//
//
//
// };


















///////////////////////slick////////////////////////////

// $('.popUp-slide-wrap').slick({
//  slidesToShow: 1,
//  slidesToScroll: 1,
//  arrows: false,
//  fade: true,
//  asNavFor: '.carts-letters'
// });


$('.carts-letters').slick({
  slidesToShow: 3,
  infinite: true,
 centerMode: true,
 prevArrow:".left",
   nextArrow:".right",
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});



$('.carts-letters-letter').slick({
  slidesToShow: 3,
  infinite: true,
 centerMode: true,
 dots: false,
 prevArrow:".leftTwo",
   nextArrow:".rightTwo",
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});



let cartsNav = document.querySelectorAll("#carts .main__info-nav li");
let cartsNavA = document.querySelectorAll("#carts .main__info-nav a");
let carts = document.querySelectorAll(".carts-letters-wrap");

for(let i = 0; i < cartsNav.length; i++){


    cartsNav[i].addEventListener("click" , (e) => {

        e.preventDefault();
        showCart(i);

        for(let k = 0; k < cartsNav[i].offsetParent.children.length; k++) {
            cartsNav[i].offsetParent.children[k].classList.remove("active");
        }
        cartsNav[i].offsetParent.children[i].classList.add("active");

    })

};
function showCart(index) {

    for(let cart of carts){
        cart.classList.add("active");
        let slide = document.querySelector(".slick-track");
            cart.style.height = `${  slide.clientHeight + 0}px`

    }


    carts[index].style.height = "0px"
    carts[index].classList.remove("active");

    for(let i of cartsNavA){
        i.classList.remove("active")
    }
    cartsNavA[index].classList.add("active");


}

let letters = document.querySelectorAll(".carts-letter");
let slidePopup = document.querySelector("#popup");
let slideWrap = document.querySelector(".popUp-slide-wrap");
let popupSliderBg = document.querySelector(".popupSliderBg");

popupSliderBg.addEventListener("click" , () => {
        slidePopup.style.display = "none";
        slideWrap.children[0].remove();
})

letters.forEach((item, i) => {
  item.addEventListener("click" , () => {
      slidePopup.style.display = " block";
      let itemSrc = item.cloneNode();
        let itemCopy = document.querySelector("img")
      itemCopy.src = itemSrc.src;
      itemCopy.classList.add("slideKolya");
            itemCopy.classList.remove("imgMob");
      slideWrap.append(itemCopy);
  })
});

setTimeout(() => {
  cartsNav[0].click()
}, 1000)



// var topMenu = $(".main__info-nav");
// var topMenuHeight = topMenu.outerHeight() + 60;
// var menuItems = topMenu.find("a");
// var scrollItems = menuItems.map(function(){
//   var item = $($(this).attr("href"));
//   if (item.length) { return item; }
// });
//
//
// $(window).scroll(function(){
//     var fromTop = $(this).scrollTop()+topMenuHeight;
//     var cur = scrollItems.map(function(){
//         if ($(this).offset().top < fromTop)
//         return this;
//     });
//     cur = cur[cur.length-1];
//     var id = cur && cur.length ? cur[0].id : "";
//     console.log(id);
//     menuItems
//         .removeClass("menu-fixed-a-active")
//         .filter("[href='#"+id+"']").addClass("menu-fixed-a-active");
// })


// let serviceId = document.querySelector("#tables");
// console.log(serviceId);
// console.log(serviceId.scrollTop);




let navheaderItems = document.querySelectorAll("#fixedHead .main__info-nav a");
navheaderItems.forEach((item, i) => {
  item.addEventListener("click"  , () => {
    navheaderItems.forEach((item, i) => {
        item.classList.remove("active")
    });

      item.classList.add("active")
  })
});



let links = document.querySelectorAll(".link");

if(window.innerWidth > 720) {
  links.forEach((item, i) => {
    item.setAttribute("target", "_blank");
  });
} else {
  links.forEach((item, i) => {
    item.removeAttribute("target", "_blank");
  });
}
console.log(window.innerWidth);
