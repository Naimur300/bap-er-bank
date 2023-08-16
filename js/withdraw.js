document.getElementById('btn-withdraw').addEventListener('click' , function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value
    const newWithdraw = parseFloat(newWithdrawString)
    
    if(isNaN(newWithdraw)){
        alert("Please enter numbers")
    }
    else{
        const WithdrawAmount = document.getElementById('withdraw');
        const previousWithdrawAmountString = WithdrawAmount.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    
       
    
        withdrawField.value = ''
    
        const balance = document.getElementById('balance') ;
        const balanceString  = balance.innerText
        const previousBalance = parseFloat(balanceString) ;
    
        if(previousBalance < newWithdraw){
            alert("You do not have sufficient balance you have " + " " +previousBalance + " Taka")
        }
    
        else{
            const totalBalance = previousBalance  - newWithdraw ;
    
            balance.innerText = totalBalance;
            WithdrawAmount.innerText = previousWithdrawAmount + newWithdraw;
        }
    }

    
       


   
    
  
   







    console.log(newWithdraw);

})