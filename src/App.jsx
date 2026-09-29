import { useState } from "react";
import "./App.css";
import FlashCard from "./FlashCard";

const dragons = [
  {
    id: 1,
    question:
      "Which dragon was known as 'the Black Dread' and was the largest of all the Targaryen dragons?",
    answer:
      "Balerion, who was ridden by Aegon the Conqueror during Aegon's Conquest. It was said his shadow could swallow entire towns.",
    color: "#1e1b4b",
  },
  {
    id: 2,
    question:
      "Which dragon was killed at Hellholt in Dorne when an iron scorpion bolt struck it through the eye?",
    answer:
      "Meraxes, the mount of Queen Rhaenys Targaryen. It happened in 10 AC during the First Dornish War.",
    color: "#1e40af",
  },
  {
    id: 3,
    question:
      "Which was the largest living dragon during the Dance of the Dragons, and who rode her?",
    answer:
      "Vhagar, ridden by Prince Aemond Targaryen. She had once been the mount of Queen Visenya Targaryen.",
    color: "#3f3f0e",
  },
  {
    id: 4,
    question:
      "How did the Battle Above the Gods Eye end for Daemon Targaryen, Aemond Targaryen, and their dragons?",
    answer:
      "All four perished. Daemon leapt from Caraxes onto Vhagar and struck Aemond down; both dragons crashed into the Gods Eye and died.",
    color: "#7f1d1d",
  },
  {
    id: 5,
    question:
      "Which young dragon was killed along with his rider, Prince Lucerys Velaryon, over Shipbreaker Bay?",
    answer:
      "Arrax, slain by Prince Aemond Targaryen on Vhagar. Their deaths were one of the opening acts of the Dance of the Dragons.",
    color: "#115e59",
  },
  {
    id: 6,
    question:
      "Whom is Daenerys Targaryen's largest dragon, Drogon, named after?",
    image:
      "https://static.wikia.nocookie.net/gameofthrones/images/8/8f/DrogonWinterfell8x01.PNG",
    answer:
      "Khal Drogo, her Dothraki husband. Drogon has black scales with red markings.",
    color: "#881337",
  },
  {
    id: 7,
    question:
      "What are the names of Daenerys's other two dragons, and whom do they honor?",
    answer:
      "Rhaegal (for her eldest brother, Prince Rhaegar Targaryen) and Viserion (for her brother Viserys Targaryen). Rhaegal has green and bronze scales; Viserion is cream and gold.",
    color: "#166534",
  },
  {
    id: 8,
    question:
      "Which dragon was ridden by Princess Rhaenyra Targaryen and died during the Storming of the Dragonpit?",
    answer:
      "Syrax, Rhaenyra's yellow dragon, killed by the mob that stormed the Dragonpit in King's Landing.",
    color: "#78350f",
  },
  {
    id: 9,
    question:
      "Which two dragons clashed at the Battle at Rook's Rest alongside Vhagar?",
    answer:
      "Meleys, 'the Red Queen,' ridden by Princess Rhaenys Targaryen, and Sunfyre, 'the Golden,' ridden by King Aegon II. Meleys was killed and Sunfyre badly injured.",
    color: "#9a3412",
  },
  {
    id: 10,
    question: "When did the last Targaryen dragon die?",
    answer:
      "In 153 AC, during the reign of King Aegon III Targaryen, called 'the Dragonbane.' The last dragon died young, and the knowledge to hatch new ones was lost.",
    color: "#581c87",
  },
];

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [cardNumber, setCardNumber] = useState(0);
  const [isFlip, setIsFlip] = useState(false);

  const handleStart = () => {
    const randomCard = Math.floor(Math.random() * dragons.length);
    setCardNumber(randomCard);
    setIsFlip(false);
    setHasStarted(true);
  };

  const handleFlip = () => {
    setIsFlip(!isFlip);
  };

  const handleClick = () => {
    const randomCard = Math.floor(Math.random() * dragons.length);
    setCardNumber(randomCard);
    setIsFlip(false);
  };

  return (
    <main className="app">
      <header className="header">
        <h1 className="title">Dragons of Westeros</h1>
        <p className="description">
          A flashcard deck for the fire-breathing legends of the Game of Thrones
          world. Click a card to reveal the answer.
        </p>
        <p className="card-count">Number of cards: {dragons.length}</p>
      </header>

      <section className="card-area">
        {!hasStarted ? (
          <FlashCard
            question="Click to start"
            answer="Click to start"
            isFlipped={false}
            onFlip={handleStart}
          />
        ) : (
          <FlashCard
            question={dragons[cardNumber].question}
            answer={dragons[cardNumber].answer}
            image={dragons[cardNumber].image}
            color={dragons[cardNumber].color}
            isFlipped={isFlip}
            onFlip={handleFlip}
          />
        )}

        {hasStarted && (
          <div className="card-nav">
            <button type="button" className="nav-btn" onClick={handleClick}>
              →
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
