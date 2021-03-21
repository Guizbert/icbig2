const cookies = document.querySelector(".cookies");
const croix = document.querySelector(".croix");

croix.addEventListener("click",() => {
    cookies.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed, true");
    
});
setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
      cookieContainer.classList.add("active");
    }
  }, 3000);