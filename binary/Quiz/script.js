const quizData = [
    {
        question: "Binary Search works when the array is __________.",
        a: "sequential",
        b: "sorted",
        c: "random",
        d: "any of these",
        correct: "b",
    },
    {
        question: "The maximum comparisons needed in Binary Search on array of size 32 is _______.",
        a: "16",
        b: "8",
        c: "4",
        d: "5",
        correct: "d",
    },
    {
        question: "The first step to perform a binary search for a target value in a sorted array is _____?",
        a: "to identify the first element of the array",
        b: "to identify the highest element of the array",
        c: "to identify the middle element of the array",
        d: "to identify the last element of the array",
        correct: "c",
    },
    {
        question: "Binary Search terminates  _____________.",
        a: "when(starting index < ending index)",
        b: "when(starting index == ending index)",
        c: "when(starting index > ending index)",
        d: "none of these",
        correct: "b",
    },
    {
        question: "Worst Case Time Complexity of Binary Search is _____________.",
        a: "O(log N)",
        b: "O(N)",
        c: "O(1)",
        d: "O(N*2)",
        correct: "a",
    },
    {
        question: "If Middle Element is less than Target value then Binary Search searches Target element in First Half of the Array? True | False.",
        a: "true",
        b: "none",
        c: "none",
        d: "false",
        correct: "a",
    },
    {
        question: "The maximum comparisons needed in Binary Search on array of size 128 is _____________.",
        a: "16",
        b: "12",
        c: "7",
        d: "6",
        correct: "c",
    },
    {
        question: "If Middle Element is greater than Target value then Binary Search searches Target element in Second Half of the Array? True | False.",
        a: "true",
        b: "none",
        c: "none",
        d: "false",
        correct: "d",
    },
    {
        question: "Best Case Time Complexity of Binary Search is _____________.",
        a: "O(log N)",
        b: "O(1)",
        c: "O(N)",
        d: "O(N*2)",
        correct: "b",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})