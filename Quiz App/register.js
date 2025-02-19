let accounts = {};
// export default accounts;


let firstNamevar=document.getElementById("firstname");
let lastNamevar=document.getElementById("lastname");
let emailInputvar=document.getElementById("email");
let passwordvar=document.getElementById("password");
let submitButtonvar=document.getElementById("regSubmitButton");

submitButtonvar.addEventListener("click", ()=>{
    accounts[emailInputvar.value]={
        "firstName":firstNamevar.value ,
        "lastName":lastNamevar.value ,
        "email":emailInputvar.value ,
        "password":passwordvar.value
    };
    console.log(accounts);
    let accountsLocal = JSON.stringify(accounts);
    localStorage.setItem("accountsLocalKey", accountsLocal);
    window.alert("Account Registered Succcessfully.");
    // let retreivedAccountsString=localStorage.getItem("accountsLocalKey");
    // let retreivedAccountsObject=JSON.parse(retreivedAccountsString);
})

function setBgColor(color) {
    document.body.style.backgroundColor = color;
}