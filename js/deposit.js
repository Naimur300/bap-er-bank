document.getElementById('btn-deposit').addEventListener('click' , function(){
    
    const depositField = document.getElementById('deposit-field');
    const newDepositedString = depositField.value 
    const newDeposited = parseFloat(newDepositedString)
    if(isNaN(newDeposited) ){
        alert("Please enter numbers")
        depositField.value = ''
    }

    

    else{
        const initialDeposit =  document.getElementById('deposit');

        const previousTotalDepositString = initialDeposit.innerText
        const previousTotalDeposit = parseFloat(previousTotalDepositString)
        
        
        const currentTotalDeposit = previousTotalDeposit + newDeposited
  
        initialDeposit.innerText = currentTotalDeposit
  
        depositField.value = ''
  
        const initialBalanceString = document.getElementById('balance')
        const initialBalanceValue = initialBalanceString.innerText
        const initialBalance = parseFloat(initialBalanceValue)
  
        const totalBalance = initialBalance + newDeposited
  
        initialBalanceString.innerText = totalBalance
    }

  


      


})