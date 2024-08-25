let loginWindowEl = document.querySelector(".login");
let usernameEl = document.querySelector(".userName");
let passwordEl = document.querySelector(".password");
let loginBtn = document.querySelector(".loginBtn");

let heartEl = document.querySelector(".heart");
let btn = document.querySelector(".btn");
let miniHearts = document.querySelectorAll(".miniHearts");


// loginBtn.addEventListener("click", () => {
    
// });



let username = "Dyo";
let password = "danicanicolemedina56";


loginBtn.addEventListener("click", () => {
    if(usernameEl.value != "" && passwordEl.value != "") {
        if (username == usernameEl.value && password == passwordEl.value) {
            heartEl.classList.add("heartAni");
            loginWindowEl.remove();
            miniHearts.forEach((hearts) => {
                hearts.classList.add("miniHeartsAni");
                
            });
            
        }
    }
});


