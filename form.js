let signUpBtn = document.getElementById('signup')
let logInBtn = document.getElementById('login')
let mainDiv = document.getElementById('main')

signUpBtn.addEventListener('click',() =>{
    mainDiv.classList.add("right-panel-active");
})

logInBtn.addEventListener('click',() =>{
    mainDiv.classList.remove("right-panel-active");
})