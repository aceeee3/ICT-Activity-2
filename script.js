const questions = [
    {
        question: "What does HTML stand for?",
        answers:[
            {text: "Hyperlinks Text Markup Language", correct: false},
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hometool Markup Language", correct: false},
            {text: "Hyperlink texting Message Language", correct: false},
        ]
    },

    {
        question: "Choose the correct HTML element for the largest heading.",
        answers:[
            {text: "head", correct: false},
            {text: "h6", correct: false},
            {text: "h1", correct: true},
            {text: "heading", correct: false},
        ]
    },

    {
        question: "Choose the correct HTML element to emphasize a text.",
        answers:[
            {text: "important", correct: false},
            {text: "i", correct: false},
            {text: "em", correct: true},
            {text: "b", correct: false},
        ]
    },

    {
        question: "What does CSS stand for in context of web development",
        answers:[
            {text: "Central Style Sheet", correct: false},
            {text: "Computer Style Syntax", correct: false},
            {text: "Creative Style Script", correct: false},
            {text: "Cascading Style Sheet", correct: true},
        ]
    },

    {
        question: "What does <a> tag mean?",
        answers:[
            {text: "link", correct: false},
            {text: "a", correct: true},
            {text: "url", correct: false},
            {text: "hyperlink", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-page");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButtonsElement.innerHTML = ""; // Clear previous answer buttons

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButtonsElement.appendChild(button);
        button.addEventListener("click", () => {
            if (answer.correct) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                // tapos ma yay
                // Pwede ka magdisplay ng score rito
            }
        });
    });
}



startQuiz();
