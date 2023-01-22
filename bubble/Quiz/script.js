const quizData = [
    {
        question: "The given array is arr = {1, 2, 4, 3}. Bubble sort is used to sort the array elements. How many iterations will be done to sort the array?",
        a: "4",
        b: "2",
        c: "1",
        d: "0",
        correct: "a",
    },
    {
        question: "In a bubble sort structure, there is/are?",
        a: "A single for loop",
        b: "Three for loops, all separate",
        c: "A while loop",
        d: "Two for loops, one nested in the other",
        correct: "d",
    },
    {
        question: "What is the maximum number of comparisons if there are 5 elements in array x?",
        a: "5",
        b: "2",
        c: "10",
        d: "25",
        correct: "c",
    },
    {
        question: "What is the max number of comparisons that can take place when a bubble sort is implemented? Assume there are n elements in the array?",
        a: "(1/2)(n-1)",
        b: "(1/2)n(n-1)",
        c: "(1/4)n(n-1)",
        d: "none of these",
        correct: "b",
    },
    {
        question: " What is the worst case complexity of bubble sort?",
        a: "O(log N)",
        b: "O(N)",
        c: "O(1)",
        d: "O(N*2)",
        correct: "d",
    },
    {
        question: "When using Bubble sort, what number of swappings are required to sort the numbers 8,22,7,931,5,13 in ascending order?",
        a: "5",
        b: "2",
        c: "10",
        d: "25",
        correct: "c",
    },
    {
        question: "What are the correct intermediate steps of the following data set when it is being sorted with the bubble sort? 15,20,10,18",
        a: "15,10,20,18 -- 15,10,18,20 -- 10,15,18,20",
        b: "10, 20,15,18 -- 10,15,20,18 -- 10,15,18,20",
        c: "15,20,10,18 -- 15,10,20,18 -- 10,15,20,18 -- 10,15,18,20",
        d: "15,20,10,18 -- 15,10,20,18 -- 10,15,20,18 -- 10,15,18,20",
        correct: "a",
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