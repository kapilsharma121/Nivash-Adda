document.getElementById('signupForm').addEventListener('submit',function(e){
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('repassword').value;

    if(password === confirm_password){
        alert('your info is submited');
    }
    else{
       
        alert("your passward and canfarm password is not same plese check");
        e.preventDefault();
    }
});