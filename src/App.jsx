import { useState } from "react";
import "./App.css";
import FlashCard from "./FlashCard";

const dragons = [
  {
    id: 1,
    question: "Which dragon was known as 'the Black Dread'?",
    answer: "Balerion",
    color: "#1e1b4b",
  },
  {
    id: 2,
    question: "Which dragon was killed at Hellholt in Dorne?",
    answer: "Meraxes",
    color: "#1e40af",
  },
  {
    id: 3,
    question: "Which was the largest dragon during the Dance of the Dragons?",
    answer: "Vhagar",
    color: "#3f3f0e",
  },
  {
    id: 4,
    question:
      "Which young dragon died with Prince Lucerys over Shipbreaker Bay?",
    answer: "Arrax",
    color: "#115e59",
  },
  {
    id: 5,
    question: "Daenerys's largest dragon Drogon is named after whom?",
    answer: "Khal Drogo",
    image:
      "https://static.wikia.nocookie.net/gameofthrones/images/8/8f/DrogonWinterfell8x01.PNG",
    color: "#881337",
  },
  {
    id: 6,
    question: "Name one of Daenerys's other two dragons.",
    answer: "Rhaegal",
    color: "#166534",
  },
  {
    id: 7,
    question: "Which dragon was ridden by Princess Rhaenyra Targaryen?",
    answer: "Syrax",
    color: "#78350f",
  },
  {
    id: 8,
    question: "Which dragon was called 'the Red Queen'?",
    answer: "Meleys",
    color: "#9a3412",
  },
  {
    id: 9,
    question: "Which dragon was called 'the Golden'?",
    answer: "Sunfyre",
    color: "#9a3412",
  },
  {
    id: 10,
    question: "During whose reign did the last Targaryen dragon die?",
    answer: "Aegon III",
    color: "#581c87",
  },
];

function App() {
  const [cards, setCards] = useState(dragons);
  const [cardNumber, setCardNumber] = useState(0);
  const [isFlip, setIsFlip] = useState(false);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  function resetCard() {
    setIsFlip(false);
    setGuess("");
    setResult("");
  }

  function handleFlip() {
    setIsFlip(!isFlip);
  }

  function handleGuess() {
    const userAnswer = guess.toLowerCase().trim();
    const realAnswer = cards[cardNumber].answer.toLowerCase().trim();
    if (userAnswer === realAnswer) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  }

  function handleNext() {
    if (cardNumber < cards.length - 1) {
      setCardNumber(cardNumber + 1);
      resetCard();
    }
  }

  function handleBack() {
    if (cardNumber > 0) {
      setCardNumber(cardNumber - 1);
      resetCard();
    }
  }

  function handleShuffle() {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCardNumber(0);
    resetCard();
  }

  return (
    <main className="app">
      <header className="header">
        <h1 className="title">Dragons of Westeros</h1>
        <p className="description">
          Guess the dragon name, then click the card to see the answer.
        </p>
        <p className="card-count">
          Card {cardNumber + 1} of {cards.length}
        </p>
      </header>

      <section className="card-area">
        <FlashCard
          question={cards[cardNumber].question}
          answer={cards[cardNumber].answer}
          image={cards[cardNumber].image}
          color={cards[cardNumber].color}
          isFlipped={isFlip}
          onFlip={handleFlip}
        />

        <div className="guess-area">
          <label htmlFor="guess">Guess the answer here:</label>
          <input
            id="guess"
            type="text"
            placeholder="Type your guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className={result}
          />
          <button className="submit-btn" onClick={handleGuess}>
            Submit Guess
          </button>
        </div>

        {result === "correct" && <p className="feedback correct">Correct!</p>}
        {result === "wrong" && (
          <p className="feedback wrong">Wrong, try again!</p>
        )}

        <div className="card-nav">
          <button
            className="nav-btn"
            onClick={handleBack}
            disabled={cardNumber === 0}
          >
            ←
          </button>
          <button
            className="nav-btn"
            onClick={handleNext}
            disabled={cardNumber === cards.length - 1}
          >
            →
          </button>
          <button className="nav-btn" onClick={handleShuffle}>
            Shuffle Cards
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
