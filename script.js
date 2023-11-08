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
});
