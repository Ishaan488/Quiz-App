let qData = [
    {
        "QuestionNumber": 1,
        "question": "What is the capital of Australia?",
        "optionA": "Sydney",
        "optionB": "Canberra",
        "optionC": "Melbourne",
        "optionD": "Perth",
        "answer": "Canberra",
        "lockedAnswer": ""
    },
    {
        "QuestionNumber": 2,
        "question": "Who is known as the 'Father of Computers'?",
        "optionA": "Alan Turing",
        "optionB": "Charles Babbage",
        "optionC": "Thomas Edison",
        "optionD": "John von Neumann",
        "answer": "Charles Babbage",
        "lockedAnswer": ""
    },
    {
        "QuestionNumber": 3,
        "question": "Which planet is known as the 'Red Planet'?",
        "optionA": "Venus",
        "optionB": "Jupiter",
        "optionC": "Mars",
        "optionD": "Saturn",
        "answer": "Mars",
        "lockedAnswer": ""
    },
    {
        "QuestionNumber": 4,
        "question": "What is the chemical symbol for water?",
        "optionA": "O₂",
        "optionB": "H₂O",
        "optionC": "CO₂",
        "optionD": "NaCl",
        "answer": "H₂O",
        "lockedAnswer": ""
    },
    {
        "QuestionNumber": 5,
        "question": "Which Indian festival is known as the 'Festival of Lights'?",
        "optionA": "Holi",
        "optionB": "Diwali",
        "optionC": "Eid",
        "optionD": "Pongal",
        "answer": "Diwali",
        "lockedAnswer": ""
    }
];

// export default qData;
// console.log(qDatajson[0].optionA);

let i = -1;
function navigateQuestion() {
    quizBox.innerHTML = `<div class="questionBox">Q${qData[i].QuestionNumber}.${qData[i].question}</div>
        <div class="optionsBox">
            <button type="button" id="optionA" class="options">${qData[i].optionA}</button>
            <button type="button" id="optionB" class="options">${qData[i].optionB}</button>
            <button type="button" id="optionC" class="options">${qData[i].optionC}</button>
            <button type="button" id="optionD" class="options">${qData[i].optionD}</button>
        </div>`;
    console.log(i);//shows current question
    let options = document.getElementsByClassName("options");
    while (qData[i].lockedAnswer != undefined) {//this retains the previous selections
        for (let b = 0; b < options.length; b++) {
            if (options[b].innerHTML == qData[i].lockedAnswer) {
                options[b].style.backgroundColor = "lightblue";
                console.log("selection retained");
                break;
            }
        }
        break;
    }
    checkAnswer();
    console.log(qData[i]);

    if (i == qData.length - 1) {
        document.getElementById("nextButton").innerHTML = 'FINISH QUIZ';
        document.getElementById("nextButton").addEventListener("click", () => {
            let qDataLocal = JSON.stringify(qData);
            localStorage.setItem("qDataLocalKey", qDataLocal);
            window.location.href = './result.html'
        });
    }
    else {
        document.getElementById("nextButton").innerHTML = 'NEXT ->';
    }
}

function checkAnswer() {
    let options = document.getElementsByClassName("options");
    for (let a = 0; a < options.length; a++) {
        options[a].addEventListener("click", () => {
            // Lock the answer
            qData[i].lockedAnswer = options[a].innerHTML;



            console.log("Selected Answer:", qData[i].lockedAnswer);

            // Reset styles for all options before marking
            for (let b = 0; b < options.length; b++) {
                options[b].style.backgroundColor = ""; // Clear previous styles
            }
            options[a].style.backgroundColor = "lightblue"; // Highlight correct answer
            // Check if the selected answer is correct
            // if (qData[i].lockedAnswer === qData[i].answer) {
            //     console.log("CORRECT ANSWER");
            // } else {
            //     options[a].style.backgroundColor = "red"; // Highlight incorrect answer
            //     console.log("WRONG ANSWER");
            // }
        });
    }
}

let quizBox = document.getElementById("quizBox");
document.getElementById("startButton").addEventListener("click", () => {
    i++;
    navigateQuestion();
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (i < ((qData.length) - 1)) {
        i++;
        navigateQuestion();
    }
    else {
        navigateQuestion();
    }
});
document.getElementById("prevButton").addEventListener("click", () => {
    if (i > 0) {
        i--;
        navigateQuestion();
    }
    else {
        navigateQuestion();
    }
});