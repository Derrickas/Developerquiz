
const startElement = document.getElementById ('Start-btn')
const nextElement = document.getElementById ('Next-btn')
const questionContainer = document.getElementById('question-container')
let questionElement = document.getElementById ('question')
const button = document.getElementsByClassName('btn-primary')
const answerElement = document.getElementById('anwser-buttons')
const questions = [


    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Jquery can be refered to as a?",
      choices: ["library", "lanugauge", "smartphone app", "streaming serivce"],
      answer: "library"
    },
    {
      title: "the best resource for software development is?",
      choices: ["google", "other developers", "practice", "all the above"],
      answer: "all the above"
    },
    {
      title: "A perfect sunday includes...",
      choices: ["sunday service", "football", "chipotle", "all the above"],
      answer: "all the above"
    }
]

startElement.addEventListener('click', startGame)

function startGame() {
    questionContainer.classList.remove('hide')
    startTimer()



}

nextElement.addEventListener('click', nextQuestion)

function nextQuestion() {
    questionElement.innerText = questions[0].title
    console.log(questionElement)
    fillAnwser()


}
function fillAnwser() {
  

    // for (var i = 0; i < choices.length; i++) {
    //     choices.append(button)
    for (var i = 0; i < choices.length; i++) {
      var choices = (questions[i].choices[i])
      //document becomes $ 
    // $("<button>").addClass("btn-primary").html(choices[i])
    answerElement.append(button)
   button.innerHTML = choices[i]
   choices.classList.add('btn-primary')
   
   }

}


function checkAnswer() {

}
function getScore() {

}
function startTimer(){

}
