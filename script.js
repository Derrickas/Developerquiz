
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('Next-btn')
let questionElement = document.getElementById('questions')
let anwserButtonElement = document.getElementById('anwser-buttons')

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('started')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
startGame()

function setNextQuestion() {
  showQuestion ()
}

function showQuestion() {
  //loop over array of choices and refer to the index of the choices 
  
 questionElement.innerText = questions[0].title 
 console.log(anwserButtonElement.innerText)
 var choices = questions[0].choices

  for (var i = 0; i < choices.length; i++) {
    //document becomes $ 
  // $("<button>").addClass("btn-primary").html(choices[i])
  anwserButtonElement.append(newButton)
 var newButton = document.createElement("button")
 newButton.innerHTML = choices[i]
 newButton.classList.add('btn-primary answer')
 console.log(newButton)
 anwserButtonElement.append(newButton)
 }
};

 document.getElementsByClassName("answer").addEventListener('click', answerValue);

 function answerValue() {
   console.log(newButton.value)
 
   if (answerValue === questions.answer ) {
    alert-success.classList.remove('hide')
   } 

  else {
  alert-danger.classList.remove('hide')
   }
  }

  answerValue()
 
//if (this is the if, which returns true or false ) { do something } // else {do this}
 nextButton.addEventListener('click', setNextQuestion) 
 
function hideButtons() {

alert-success.classList.add('hide')
alert-danger.classList.add('hide')
 };

 hideButtons()

//  Next-btn.addEventListener('click', setNextQuestion)

 //  questions.choices.array.forEach(element => {
//    const button = document.createElement('button')
//    button.innerText = questions.choices
//    button.classList.add('btn')
 
 


  // questionElement.innerText = questions.text
  // questions.answer.array.forEach(element => {
  //   const button = document.createElement('button')
  //   button.innerText = questions.choices
  //   button.classList.add('btn')
  //     if (selectAwnser.correct) {
  //       button.dataset.correct = awnser.correct
  //     }
  //     button.addEventListener('click', selectAwnser)
  //     answerButtonElement.appendChild(button)
    

// function resetState() {
//   next
// }



// function selectAwnser() {

// }




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
    },

  ];
