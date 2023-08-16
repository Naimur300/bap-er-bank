document.getElementById('btn-deposit').addEventListener('click' , function(){
    
    const depositField = document.getElementById('deposit-field');
    const newDepositedString = depositField.value 
   

    const initialDeposit =  document.getElementById('deposit');

      const previousTotalDepositString = initialDeposit.innerText
      const previousTotalDeposit = parseFloat(previousTotalDepositString)
      const newDeposited = parseFloat(newDepositedString)
      
      const currentTotalDeposit = previousTotalDeposit + newDeposited

      initialDeposit.innerText = currentTotalDeposit

      depositField.value = ''

      const initialBalanceString = document.getElementById('balance')
      const initialBalanceValue = initialBalanceString.innerText
      const initialBalance = parseFloat(initialBalanceValue)

      const totalBalance = initialBalance + newDeposited

      initialBalanceString.innerText = totalBalance


      


})