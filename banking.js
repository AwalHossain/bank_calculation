const depositInput = document.getElementById('depositInput');
const withdrawInput = document.getElementById('withdrawInput');
const deposit = document.getElementById('deposit');
const witdraw = document.getElementById('withdraw')
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
let Balance = document.getElementById('totalBalance')
let totalBalance = parseInt(Balance.innerText);


// Bank JS 
// Function 
function calculation(number, numberInput, isAdd){
    if(typeof  (parseInt(numberInput.value)) === 'number' &&  (parseInt(numberInput.value))> 0 ){
   
        let total;
        if(isAdd == true){
           
            number.innerText = parseInt( number.innerText ) + parseInt(numberInput.value);
       total = parseInt(Balance.innerText) +
            parseInt( numberInput.value) ;
            Balance.innerText = total;
            
        }
        else{
      
            console.log(Balance.innerText);
            if( Balance.innerText < parseInt(numberInput.value) ){
                alert("sorry, you cannot withdrawn money that you don't have")
            }
            else{
                number.innerText = parseInt( number.innerText ) + parseInt(numberInput.value);
                total = parseInt(Balance.innerText) -
                         parseInt( numberInput.value) ;
                         Balance.innerText = total;
                         // if( )
                         console.log(total);
            }

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