let outDiv = document.getElementById("output");
let passowrdInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("sumbitButton");

const correctPassword = "1234";
outputDiv.innerHTML += "<h2>Using a password prompt</h2>";

submitButton.addEventListener("click", () =>{
    let password;
    let attempt = 0;

    do{
        password = passwordInput.value;

        if(password === correctPassword){
            outputDiv.innerHTML += "Access granted!<br>";
            passwordInput.disabled = true;
            submitButton.disabled = true;
            break;
        }else{
            
        }
    }
});
