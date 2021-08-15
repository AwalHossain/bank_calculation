const depositInput = document.getElementById('depositInput');
const withdrawInput = document.getElementById('withdrawInput');
const deposit = document.getElementById('deposit');
const witdraw = document.getElementById('withdraw')
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
let totalBalance = document.getElementById('totalBalance')


// Bank JS 

depositBtn.addEventListener('click', ()=>{
 
    if(typeof  (parseInt(depositInput.value)) === 'number' &&  (parseInt(depositInput.value))> 0 ){
   
        deposit.innerText = parseInt( deposit.innerText )+ parseInt(depositInput.value);
        let total = parseInt( totalBalance.innerText )+ parseInt(depositInput.value) ;
       
           totalBalance.innerText = total;
    }
    else{
        
        alert("invalid value")
    }



})

// Withdraw 


withdrawBtn.addEventListener('click', ()=>{
 
    if(typeof  (parseInt(withdrawInput.value)) === 'number' &&  (parseInt(withdrawInput.value))> 0 ){
   
        withdraw.innerText = parseInt( withdraw.innerText ) + parseInt(withdrawInput.value);
        let total = parseInt( totalBalance.innerText ) - parseInt(withdrawInput.value) ;
       
           totalBalance.innerText = total;
    }
    else{
        
        alert("invalid value")
    }



})