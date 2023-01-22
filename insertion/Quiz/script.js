const quizData = [
    {
        question: "What are the correct intermediate steps of the following data set when it is being sorted with the Insertion sort? 15,20,10,18",
        a: "15,20,10,18 -- 10,15,20,18 -- 10,15,18,20 -- 10,15,18,20",
        b: "15,18,10,20 -- 10,18,15,20 -- 10,15,18,20 -- 10,15,18,20",
        c: "15,10,20,18 -- 15,10,18,20 -- 10,15,18,20",
        d: "10, 20,15,18 -- 10,15,20,18 -- 10,15,18,20",
        correct: "a",
    },
    {
        question: "Which of the following options contain the correct feature of an insertion sort algorithm?",
        a: "Anti-stable",
        b: "None of the above",
        c: "Dependable",
        d: "Stable, adaptive",
        correct: "d",
    },
    {
        question: "Which of these is not a stable sorting algorithm in its typical implementation?",
        a: "Merge sort",
        b: "Quick sort",
        c: "Insertion sort",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "If all the elements in an input array is equal for example {1,1,1,1,1,1}, What would be the running time of the Insertion Algorithm?",
        a: "O(log N)",
        b: "O(N)",
        c: "O(1)",
        d: "O(N*2)",
        correct: "b",
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
        question: "What operation does the Insertion Sort use to move numbers from the unsorted section to the sorted section of the list? ",
        a: "Finding the minimum value",
        b: "Finding out an pivot value",
        c: "Swapping",
        d: "None of the above",
        correct: "c",
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