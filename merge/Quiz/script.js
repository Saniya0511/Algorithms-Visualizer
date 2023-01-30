const quizData = [
    {
        question: "Merge sort uses which of the following technique to implement sorting?",
        a: "backtracking",
        b: "greedy algorithm",
        c: "divide and conquer",
        d: "dynamic programming",
        correct: "c",
    },
    {
        question: "What is the average case time complexity of merge sort?",
        a: "O(n log n)",
        b: "O(n^2)",
        c: "O(n^2 log n)",
        d: "O(n log n^2)",
        correct: "a",
    },
    {
        question: "What is the auxiliary space complexity of merge sort?",
        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)",
        correct: "c",
    },
    {
        question: "What is the worst case time complexity of merge sort?",
        a: "O(n log n)",
        b: "O(n^2)",
        c: "O(n^2 log n)",
        d: "O(n log n^2)",
        correct: "a",
    },
    {
        question: "Which of the following method is used for sorting in merge sort?",
        a: "merging",
        b: "partitioning",
        c: "selection",
        d: "exchanging",
        correct: "a",
    },
    {
        question: "What will be the best case time complexity of merge sort?",
        a: "O(n log n)",
        b: "O(n^2)",
        c: "O(n^2 log n)",
        d: "O(n log n^2)",
        correct: "a",
    },
    {
        question: "Which of the following is not a variant of merge sort?",
        a: "in-place merge sort",
        b: "bottom up merge sort",
        c: "top down merge sort",
        d: "linear merge sort",
        correct: "d",
    },
    {
        question: "Merge sort is preferred for arrays over linked list",
        a: "True",
        b: "False",
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