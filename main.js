let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".cookie-btn.cancel")
let acceptCookieBtn = document.querySelector(".cookie-btn.accept")


cancelCookieBtn.addEventListener("click", function (){
   cookieModal.classList.remove("active")
})
acceptCookieBtn.addEventListener("click", function (){
   cookieModal.classList.remove("active")
   localStorage.setItem("CookieAccepted", "Yes")
})

setTimeout(function (){
   let CookieAccepted = localStorage.getItem("CookieAccepted")
   if (CookieAccepted != "Yes"){
       cookieModal.classList.add("active")
   }
}, 2000)




















