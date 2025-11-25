 const questions = [
            {
                q: "What does CSS stand for?",
                options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"],
                answer: 0
            },
            {
                q: "Which tag is used for creating a hyperlink?",
                options: ["<link>", "<a>", "<href>"],
                answer: 1
            },
            {
                q: "JavaScript is a programming language.",
                options: ["True", "False"],
                answer: 0
            },
            {
                q: "Which symbol is used for comments in JavaScript?",
                options: ["//", "<!--", "#"],
                answer: 0
            },
            {
                q: "HTML is used for?",
                options: ["Styling web pages", "Creating web page structure", "Database management"],
                answer: 1
            }
        ];

        let currentIndex = 0;
        let score = 0;

        const welcomeScreen = document.getElementById("welcomeScreen");
        const quizScreen = document.getElementById("quizScreen");
        const resultScreen = document.getElementById("resultScreen");
        const questionNumber = document.getElementById("questionNumber");
        const questionText = document.getElementById("questionText");
        const optionsContainer = document.getElementById("optionsContainer");
        const nextBtn = document.getElementById("nextBtn");
        const finalScore = document.getElementById("finalScore");
        const finalMessage = document.getElementById("finalMessage");

        function startQuiz() {
            welcomeScreen.classList.add("hidden");
            quizScreen.classList.remove("hidden");
            currentIndex = 0;
            score = 0;
            loadQuestion();
        }

        function loadQuestion() {
            nextBtn.classList.add("hidden");
            questionNumber.innerText = `Question ${currentIndex + 1} of ${questions.length}`;
            questionText.innerText = questions[currentIndex].q;
            optionsContainer.innerHTML = "";

            questions[currentIndex].options.forEach((opt, idx) => {
                let btn = document.createElement("button");
                btn.innerText = opt;
                btn.classList.add("optionBtn");
                btn.onclick = () => checkAnswer(idx, btn);
                optionsContainer.appendChild(btn);
            });
        }

        function checkAnswer(selected, btnElement) {
            const correctAnswer = questions[currentIndex].answer;
            const allButtons = document.querySelectorAll(".optionBtn");

            if (selected === correctAnswer) {
                btnElement.classList.add("correct");
                score++;
            } else {
                btnElement.classList.add("wrong");
                allButtons[correctAnswer].classList.add("correct");
            }

            allButtons.forEach(btn => btn.disabled = true);
            nextBtn.classList.remove("hidden");
        }

        function nextQuestion() {
            currentIndex++;

            if (currentIndex < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            quizScreen.classList.add("hidden");
            resultScreen.classList.remove("hidden");
            finalScore.innerText = `${score} / ${questions.length}`;

            if (score >= 4) {
                finalMessage.innerText = "Excellent Work!";
                finalMessage.className = "score-excellent";
            } else if (score === 3) {
                finalMessage.innerText = "Good Effort!";
                finalMessage.className = "score-good";
            } else {
                finalMessage.innerText = "Keep Practicing!";
                finalMessage.className = "score-tryagain";
            }
        }

        function restartQuiz() {
            resultScreen.classList.add("hidden");
            welcomeScreen.classList.remove("hidden");
            currentIndex = 0;
            score = 0;
        }