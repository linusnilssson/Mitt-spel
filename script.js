let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const playerForm = document.getElementById("playerForm"); // Textinmatningsfältet för spelarnamnet
  const playerNameInput = document.getElementById("playerName");
  const welcomeMessage = document.getElementById("welcomeMessage"); // Elementet för välkomstmeddelandet
  const startGameButton = document.getElementById("startGameButton"); // Start-knappen

  // Array med frågor och svar
  const questions = [
    {
      question: "Vad är huvudstaden i Sverige?",
      options: [
        { text: "Göteborg", isCorrect: false },
        { text: "Stockholm", isCorrect: true },
        { text: "Malmö", isCorrect: false },
      ],
    },
  ];

  const questions2 = [
    {
      question: "Vad blir den totala summan på en tärning?",
      options: [
        { text: "21", isCorrect: true },
        { text: "22", isCorrect: false },
        { text: "23", isCorrect: false },
      ],
    },
  ];

  const questions3 = [
    {
      question: "Hur mycket väger en liter vatten?",
      options: [
        { text: "10kg", isCorrect: false },
        { text: "1kg", isCorrect: true },
        { text: "2kg", isCorrect: false },
      ],
    },
  ];

  const questions4 = [
    {
      question: "Var byggdes pyramiderna?",
      options: [
        { text: "Kina", isCorrect: false },
        { text: "Ungern", isCorrect: false },
        { text: "Egypten", isCorrect: true },
      ],
    },
  ];

  startGameButton.addEventListener("click", function (event) {
    event.preventDefault();

    const playerName = playerNameInput.value;

    if (playerName.trim() === "") {
      // Spelaren har inte skrivit in sitt namn
      alert("Du måste skriva in ditt namn");
    } else {
      document.body.classList.add("change-background");
      playerForm.style.display = "none";
      nextTask.style.display = "block";
      localStorage.setItem("playerName", playerName);
    }

    if (playerName) {
      welcomeMessage.innerHTML = "Välkommen " + playerName;
    }
  });

  // Kod för fråga 1 här
  const nextTask = document.getElementById("nextTask"); // Element för nästa fråga
  const göteborgButton = document.getElementById("göteborgButton"); // Göteborg-knapp
  const stockholmButton = document.getElementById("stockholmButton"); // Stockholm-knapp
  const malmöButton = document.getElementById("malmöButton"); // Malmö-knapp

  // När användaren klickar på Stockholm-knapp
  stockholmButton.addEventListener("click", function () {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.options[1].isCorrect) {
      // Index 1 motsvarar stockholm i frågans alternativ

      // Här ändras bakgrundsbilden om svaret är korrekt
      document.body.classList.add("changee-background");
      // Gömmer denna fråga
      nextTask.style.display = "none";
      // Meddelande på sidan som säger att det var rätt svar
      welcomeMessage.innerHTML =
        "Rätt! Nu hittade jag ett av mina syskon, fortsätt hjälpa mig:)";
      // visar nästa fråga
      nextTask1.style.display = "block";
    }
  });

  // När användaren klickar på Göteborg-knapp
  göteborgButton.addEventListener("click", function () {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion.options[0].isCorrect) {
      // Index 0 motsvarar göteborg i frågans alternativ

      // Här visas alert-meddelande om svaret är fel
      alert("Fel svar. Försök igen");
      // Meddelande på sidan att det var fel
      welcomeMessage.innerHTML = "Det var tyvärr fel, testa igen :)";
    }
  });

  // När användaren klickar på Malmö-knapp
  malmöButton.addEventListener("click", function () {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion.options[2].isCorrect) {
      // Index 2 motsvarar Malmö i frågans alternativ

      // Här visas alert-meddelande om svaret är fel
      alert("Fel svar. Försök igen");
      // Meddelande på sidan att det var fel
      welcomeMessage.innerHTML = "Det var tyvärr fel, testa igen :)";
    }
  });

  // Kod för fråga 2 här
  const nextTask1 = document.getElementById("nextTask1"); // Element för nästa fråga
  const tjugoettButton = document.getElementById("tjugoettButton"); // 21-knapp
  const tjugotvåButton = document.getElementById("tjugotvåButton"); // 22-knapp
  const tjugotreButton = document.getElementById("tjugotreButton"); // 23-knapp

  // När användaren klickar på 21-knapp
  tjugoettButton.addEventListener("click", function () {
    const currentQuestion = questions2[currentQuestionIndex];
    if (currentQuestion.options[0].isCorrect) {
      // Index 0 motsvarar 21 i frågans alternativ

      // Här ändras bakgrundsbilden om svaret är rätt
      document.body.classList.add("changeee-background");
      // Meddelande på sidan som säger att det var rätt svar
      welcomeMessage.innerHTML =
        "Rätt, nu har vi hittat alla mina syskon. Bara mamma och pappa kvar :)";
      // Gömmer denna fråga
      nextTask.style.display = "none";
      // Visar nästa fråga
      nextTask2.style.display = "block";
    }
  });

  // När användaren klickar på 22-knapp
  tjugotvåButton.addEventListener("click", function () {
    const currentQuestion = questions2[currentQuestionIndex];
    if (!currentQuestion.options[1].isCorrect) {
      // Index 1 motsvarar 22 i frågans alternativ

      // Här visas meddelande om svaret är fel
      alert("Det var tyvärr fel, nu får vi börja om..");
      // Visar den första frågan igen
      nextTask.style.display = "block";
      // Gömmer nuvarande frågan
      nextTask1.style.display = "none";
      // Tar bort nuvarande bakgrundsbilden
      document.body.classList.remove("changee-background");
      // Ändrar bakgrundsbilden till föregående (Fråga 1 Bakgrundsbild)
      document.body.classList.add("change-background");
      // Meddelande på sidan att det var fel
      welcomeMessage.innerHTML = "Det var tyvärr fel, nu får vi börja om..";
    }
  });

  // När användaren klickar på 23-knapp
  tjugotreButton.addEventListener("click", function () {
    const currentQuestion = questions2[currentQuestionIndex];
    if (!currentQuestion.options[2].isCorrect) {
      // Index 2 motsvarar 23 i frågans alternativ

      // Här visas meddelande om svaret är fel
      alert("Det var tyvärr fel, nu får vi börja om..");
      // Visar den första frågan igen
      nextTask.style.display = "block";
      // Gömmer nuvarande frågan
      nextTask1.style.display = "none";
      // Tar bort nuvarande bakgrundsbilden
      document.body.classList.remove("changee-background");
      // Ändrar bakgrundsbilden till föregående (Fråga 1 Bakgrundsbild)
      document.body.classList.add("change-background");
      // Meddelande på sidan att det var fel
      welcomeMessage.innerHTML = "Det var tyvärr fel, nu får vi börja om..";
    }
  });
});
