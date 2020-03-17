let form = document.querySelector(".main__info-form");
let formName = document.querySelector(".main__info-form label input[name='name']")
let formEmail = document.querySelector(".main__info-form label input[name='email']")
let formTel = document.querySelector(".main__info-form label input[name='tel']")

form.addEventListener("submit" , (e) => {
  e.preventDefault();
  let ajaxData = {
    name : formName.value,
    email : formEmail.value,
    tel : formTel.value
  }
  console.log(ajaxData)
  // window.location.href = "thanks.html";
} )
// Отправка данных на сервер
$('#form').trigger('reset');
$(function() {
'use strict';
$('.main__info-form').on('submit', function(e) {
e.preventDefault();
$.ajax({
url: 'mail/send.php',
type: 'POST',
contentType: false,
processData: false,
data: new FormData(this),
success: function(msg) {
  console.log(msg)
if (msg == 'ok') {
$('#form').trigger('reset'); // очистка формы
 window.location.href = "thanks.html"
} else {
alert("Что-то пошло не так")
}
}
});
});
});

$(function() {
'use strict';
$('.resumeForm').on('submit', function(e) {
e.preventDefault();
$.ajax({
url: 'mail/send.php',
type: 'POST',
contentType: false,
processData: false,
data: new FormData(this),
success: function(msg) {
  console.log(msg)
if (msg == 'ok') {
$('#form').trigger('reset'); // очистка формы
 window.location.href = "thanks.html"
} else {
alert("Что-то пошло не так")
}
}
});
});
});
