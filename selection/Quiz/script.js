const quizData = [
    {
        question: "In the following scenarios, when will you use selection sort?",
        a: "The input is already sorted",
        b: "A large file has to be sorted",
        c: "Large values need to be sorted with small keys",
        d: "Small values need to be sorted with large keys",
        correct: "c",
    },
    {
        question: "What is the advantage of selection sort over other sorting techniques?",
        a: " It requires no additional storage space",
        b: " It is scalable",
        c: "It works best for inputs which are already sorted",
        d: " It is faster than any other sorting technique",
        correct: "a",
    },
    {
        question: "What is the disadvantage of selection sort?",
        a: "It requires auxiliary memory",
        b: "It is not scalable",
        c: "It can be used for small keys",
        d: "It takes linear time to sort the elements",
        correct: "b",
    },
    {
        question: "The given array is arr = {3,4,5,2,1}. The number of iterations in selection sort are __________",
        a: "4",
        b: "5",
        c: "15",
        d: "25",
        correct: "a",
    },
    {
        question: " What is the worst case complexity of selection sort?",
        a: "O(log N)",
        b: "O(N)",
        c: "O(1)",
        d: "O(N*2)",
        correct: "d",
    },
    {
        question: " What is the average case complexity of selection sort?",
        a: "O(log N)",
        b: "O(N)",
        c: "O(1)",
        d: "O(N*2)",
        correct: "d",
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