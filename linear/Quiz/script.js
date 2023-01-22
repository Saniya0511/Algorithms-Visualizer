const quizData = [
    {
        question: "How many comparisons are done in Linear Search for N elements (in worst case)?",
        a: "2 * N + 1",
        b: "N",
        c: "2 * N",
        d: "N + 1",
        correct: "a",
    },
    {
        question: "What is the time complexity of Linear Search for string data?",
        a: "O(N log N)",
        b: "O(N^2)",
        c: "O(log N)",
        d: "O(N)",
        correct: "b",
    },
    {
        question: "What is the time complexity of Linear Search for Integer data?",
        a: "O(N log N)",
        b: "O(N^2)",
        c: "O(log N)",
        d: "O(N)",
        correct: "d",
    },
    {
        question: "When is Linear Search preferred over Binary Search?",
        a: "Sorted dataset",
        b: "Large dataset",
        c: "Unsorted dataset",
        d: "Small dataset",
        correct: "c",
    },
    {
        question: "What is the best case time complexity for Linear Search?",
        a: "O(log N)",
        b: "O(N)",
        c: "O(1)",
        d: "O(N*2)",
        correct: "c",
    },
    {
        question: "Can linear search be done on Linked Lists?",
        a: "No",
        b: "Depends on language",
        c: "Depends on data",
        d: "Yes",
        correct: "d",
    },
    {
        question: "Which search algorithm is best if data keeps changing frequently?",
        a: "Interpolation Search",
        b: "Hash Map",
        c: "Binary Search",
        d: "Linear Search",
        correct: "d",
    },
    {
        question: "Why is the worst case time complexity same as average case for Linear Search?",
        a: "worst case has more weightage",
        b: "Frequency of data",
        c: "Occurrence of prime numbers",
        d: "small cases are function of N",
        correct: "d",
    },
    {
        question: "When is Linear Search preferred over Hash Map?",
        a: "Small dataset",
        b: "Large dataset",
        c: "Unsorted dataset",
        d: "Sorted dataset",
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