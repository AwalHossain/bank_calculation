const depositInput = document.getElementById('depositInput');
const withdrawInput = document.getElementById('withdrawInput');
const deposit = document.getElementById('deposit');
const witdraw = document.getElementById('withdraw')
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
let totalBalance = document.getElementById('totalBalance')


// Bank JS 
// Function 
function calculation(number, numberInput, isAdd){
    if(typeof  (parseInt(numberInput.value)) === 'number' &&  (parseInt(numberInput.value))> 0 ){
   
        number.innerText = parseInt( number.innerText ) + parseInt(numberInput.value);
        if(isAdd == true){
            let total =parseInt(totalBalance.innerText) +
            parseInt( numberInput.value) ;
            totalBalance.innerText = total;
        }
        else{
            let total =parseInt(totalBalance.innerText) -
            parseInt( numberInput.value) ;
            totalBalance.innerText = total;
        }

       
 
           numberInput.value = ' ';
    }
    else{
        
        alert("invalid value")
    }
}

// let sign = parseInt( "+");
// let add = `parseInt(2) ${sign} parseInt(3)`;
// console.log(add)

// EventListener 
depositBtn.addEventListener('click', ()=>{

calculation(deposit, depositInput, true)


})

// Withdraw 


withdrawBtn.addEventListener('click', ()=>{
 
calculation(withdraw, withdrawInput, false);



})