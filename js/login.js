document.getElementById('btn-submit').addEventListener('click' , function(){
    console.log("submit button clicked");
    const emailInput = document.getElementById('user-email')
    const email = emailInput.value
    const passwordInput = document.getElementById('user-password')
    const password = passwordInput.value
    
    if(email === 'naimurayman3@gmail.com' && password === 'Ayman505180'){
        window.location.href = 'bank.html'
    }
    else{
        alert("Invalid User...Give valid email or password")
        emailInput.value= '';
        passwordInput.value = '';
        console.log("invalid user");
    }
})

