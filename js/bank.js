const inputMail = document.getElementById('mail');
const inputPassword = document.getElementById('password')
const submitBtn = document.getElementById('submit-btn');

console.log(inputMail);

submitBtn.addEventListener('click', ()=>{
    if(inputMail.value === "abc@gmail.com" && inputPassword.value === "12345"){
        alert("success")
        window.location.href="../banking.html"
    }
    else{
        alert("mail or password is incorect")
    }
})

