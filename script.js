const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "HTML", "C++", "Java"],
      answer: "HTML"
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style System", "Computer Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which is not a JavaScript framework?",
      options: ["React", "Angular", "Vue", "Python"],
      answer: "Python"
    },
    {
      question: "Who is the founder of Microsoft?",
      options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
      answer: "Bill Gates"
    },
    {
      question: "Which one is a programming language?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      answer: "JavaScript"
    },
    {
      question: "Which company developed the Android OS?",
      options: ["Apple", "Google", "Microsoft", "Samsung"],
      answer: "Google"
    },
    {
      question: "What is the smallest unit of data in a computer?",
      options: ["Bit", "Byte", "Kilobyte", "Megabyte"],
      answer: "Bit"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is the primary language of the web?",
      options: ["Java", "Python", "JavaScript", "HTML"],
      answer: "HTML"
    }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const questionContainer = document.getElementById('question-container');
  const nextButton = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const scoreElement = document.getElementById('score');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion(question) {
    questionContainer.innerHTML = `
      <h2>${question.question}</h2>
      ${question.options.map((option, index) => `
        <div class="option" onclick="selectOption('${option}')">${option}</div>
      `).join('')}
    `;
  }
  
  function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
    nextButton.classList.remove('hidden');
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
      nextButton.classList.add('hidden');
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = score;
  }
  
  nextButton.addEventListener('click', nextQuestion);
  
  // Start the quiz with the first question
  showQuestion(questions[currentQuestionIndex]);
  nextButton.classList.add('hidden');
  