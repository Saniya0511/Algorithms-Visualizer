const quizData = [
    {
        question: "Which of the following sorting algorithms is the fastest?",
        a: "Merge sort",
        b: "Quick sort",
        c: "Insertion sort",
        d: "Shell sort",
        correct: "b",
    },
    {
        question: "What is the worst case time complexity of quick sort?",
        a: "O(n log n)",
        b: "O(n^2)",
        c: "O(log n)",
        d: "O(n log n^2)",
        correct: "b",
    },
    {
        question: "Quick sort follows Divide-and-Conquer strategy.",
        a: "True",
        b: "False",
        correct: "a",
    },
    {
        question: "Which of the following methods is the most effective for picking the pivot element?",
        a: "first element",
        b: "last element",
        c: "median-of-three partitioning",
        d: "random element",
        correct: "c",
    },
    {
        question: " What is the average case complexity of quick sort?",
        a: "O(N log N)",
        b: "O(N)",
        c: "O(1)",
        d: "O(N*2)",
        correct: "a",
    },
    {
        question: "Which of the following sorting algorithms is used along with quick sort to sort the sub arrays?",
        a: "Merge sort",
        b: "Shell sort",
        c: "Insertion sort",
        d: "Bubble sort",
        correct: "c",
    },
    {
        question: "Quick sort uses join operation rather than merge operation.",
        a: "True",
        b: "False",
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