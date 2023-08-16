document.getElementById('btn-withdraw').addEventListener('click' , function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value
    const newWithdraw = parseFloat(newWithdrawString)

    const WithdrawAmount = document.getElementById('withdraw');
    const previousWithdrawAmountString = WithdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    WithdrawAmount.innerText = previousWithdrawAmount + newWithdraw;

    withdrawField.value = ''

    const balance = document.getElementById('balance') ;
    const balanceString  = balance.innerText
    const previousBalance = parseFloat(balanceString) ;

    const totalBalance = previousBalance  - newWithdraw ;

    balance.innerText = totalBalance;







    console.log(newWithdraw);

})