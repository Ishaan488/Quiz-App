const retreived_qDataString = localStorage.getItem("qDataLocalKey");
const retreived_qDataArray = JSON.parse(retreived_qDataString);

console.log(retreived_qDataArray);

let resultBox=document.getElementById("resultBox");
var score=0;
function resultButton(){
    console.log(retreived_qDataArray.length);
    for(let i=0;i<retreived_qDataArray.length;i++){
        if(retreived_qDataArray[i].lockedAnswer==retreived_qDataArray[i].answer){
            score++;
        }
    }
    console.log(score);
    let degree=(score/retreived_qDataArray.length)*360;
    console.log(degree);
    let percentage=(score/retreived_qDataArray.length)*100;
    console.log(percentage);
    document.getElementById("resultBox").innerHTML=`<div style="background: conic-gradient( 
    rgb(170, 255, 58) ${degree}deg,rgb(255, 255, 255) 0deg);
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    width: 30vw;
    height:30vw;
    border-radius: 50%;"id="percentScoreBar" >
        <div id="percentBox"><p id="yourScoreIs">Your Score is</p><p id="percentValue">${percentage}%</p></div>
    </div>`
}
resultButton();
// console.log(document.getElementById("suggestionInput").value);
// document.getElementById("suggestionSubmitButton").addEventListener("click",()=>{
//     let suggestionText=document.getElementById("suggestionInput").value;
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "memoriesia2014@gmail.com",
//         Password: "ford0488",
//         To: 'ishaanbajpai732004@gmail.com',
//         From: "memoriesia2014@gmail.com",
//         Subject: "this is the subject",
//         Body: "hello, javascript sent this email",
//     })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
// })