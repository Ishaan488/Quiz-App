let retreivedAccountsString = localStorage.getItem("accountsLocalKey");
const retreivedAccountsObject = JSON.parse(retreivedAccountsString);
// console.log(retreivedAccountsObject["arjun@gmail.com"]);
let emailInputvar = document.getElementById("email");
let passwordvar = document.getElementById("password");
let loginButton=document.getElementById("loginButton");

loginButton.addEventListener("click", ()=>{
    if(emailInputvar.value==""){
        window.alert("Enter an email!");
    }
    else if(retreivedAccountsObject[emailInputvar.value]!=undefined){
        if(passwordvar.value==retreivedAccountsObject[emailInputvar.value].password){
            window.alert("Login Successful");
            window.location.href='./quiz.html';
        }
        else{
            window.alert("WRONG PASSWORD! Try Again...");
        }
    }
    else{
        window.alert("Email not registered");
    }
})

function setBgColor(color) {
    document.body.style.backgroundColor = color;
}