function burgerClick(){
    burgerHide.classList.forEach(item => {
        if(item === "active"){
            burgerHide.classList.remove("active");
        } else  {
            burgerHide.classList.add("active");
        }
    })
    headerNav.classList.forEach(item => {
        if(item === "active"){
            headerNav.classList.remove("active");
        } else  {
            headerNav.classList.add("active");
        }
    })
}
let burgerHide = document.querySelector(".burger");
let burgerShow = document.querySelector(".burgerShow");
let burgerBtn = document.querySelector(".burger-bg");
let headerNav = document.querySelector(".header__nav")
burgerBtn.addEventListener("click",burgerClick);
burgerShow.addEventListener("click",burgerClick);