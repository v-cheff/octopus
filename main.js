let iterAsk = 0;
let time = setTimeout(getAsk, 10000)

function getAsk() {
  if(iterAsk == 0) {
    ask()
  }
}

//Questions popup

function closePopup(e) {
  if(e.keyCode === 27 || e.button === 0) {
  quest.style.display = "none"
  entrance.style.display = "none"
  registration.style.display = "none"
  }
}

function ask() {
  quest.style.display = "flex"
  iterAsk++
}



quest_1.addEventListener("click", ask)
quest_2.addEventListener("click", ask)
quest_3.addEventListener("click", ask)
close_quest.addEventListener("click", closePopup)
document.addEventListener("keydown", closePopup)


//LeftNav
function openLeftNav() {
  left_nav.style.right = 0;
  left_nav.style.opacity = 1;
}
function closeLeftNav() {
  burger.style.opacity = 1;
  left_nav.style.right = "-40vw";
}

burger.addEventListener("click", function() {
  openLeftNav()
  burger.style.opacity = 0;
})

close_left.addEventListener("click", function() {
  closeLeftNav()
  left_nav.style.opacity = 0;
})

//Entrance
function openEntr() {
  entrance.style.display = "flex"
  iterAsk++
}
open_entr1.addEventListener("click", () => {
  openEntr();
  closeLeftNav()
})
open_entr2.addEventListener("click", openEntr)
close_entr.addEventListener("click", closePopup)

//Registration
function openReg() {
  registration.style.display = "flex"
  iterAsk++
}

open_reg1.addEventListener("click", () => {
  openReg();
  closeLeftNav()
})
open_reg2.addEventListener("click", openReg)

close_reg.addEventListener("click", closePopup)

//Validation
let regMail = /^[a-z][a-z_\.\-]@[a-z\.]*[a-z]$/i;
let regName = /^[a-zа-я]{2,}$/i;
let regPass = /(?=.*[0-9])(?=.*[A-ZА-Я])(?=.*[a-zа-я]).{6,}/g;
let regAddress = /^[a-z]{1,}\.[a-z]{1,}$/

jQuery(function($){
  $("#phone").mask("+7 999-999-99-99",{placeholder:"_"});
  $("#q_input").mask("+7 999-999-99-99",{placeholder:"_"});
});


let regForm = document.getElementById("reg")
regForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let errors = 0;

  for(i of regForm.querySelectorAll("small")) {
    i.innerText = ""
    i.previousElementSibling.className = ""
  }

  if(!regMail.test(mail.value) || mail.value == "") {
    mail.className = "error"
    mail.nextElementSibling.innerText = "Введите корректный e-mail"
    errors++
  }
  if(!regName.test(user_name.value) || user_name.value == "") {
    user_name.className = "error"
    user_name.nextElementSibling.innerText = "Введите корректное имя"
    errors++
  }
  if(!regAddress.test(address.value) || address.value == "") {
    address.className = "error"
    address.nextElementSibling.innerText = "Адрес сайта должен содержать буквы и одну точку"
    errors++
  }
  if(!regPass.test(pass.value) || pass.value == "") {
    pass.className = "error"
    pass.nextElementSibling.innerText = "Минимальное количество символов - 6 (минимум большая, одна маленькая буквы и одна цифра)"
    errors++
  }
  if(phone.value == "") {
    phone.className = "error"
    phone.nextElementSibling.innerText = "Введите номер телефона"
    errors++
  }
  if(errors == 0) {
    registration.style.display = "none"
  }
})

let toReg = document.getElementById("to_reg")

toReg.addEventListener("click", () => {
  entrance.style.display = "none"
  openReg()
})