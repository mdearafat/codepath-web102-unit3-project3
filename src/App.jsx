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
  },
  {
    id: 2,
    question:
      "Which dragon was killed at Hellholt in Dorne when an iron scorpion bolt struck it through the eye?",
    answer:
      "Meraxes, the mount of Queen Rhaenys Targaryen. It happened in 10 AC during the First Dornish War.",
  },
  {
    id: 3,
    question:
      "Which was the largest living dragon during the Dance of the Dragons, and who rode her?",
    answer:
      "Vhagar, ridden by Prince Aemond Targaryen. She had once been the mount of Queen Visenya Targaryen.",
  },
  {
    id: 4,
    question:
      "How did the Battle Above the Gods Eye end for Daemon Targaryen, Aemond Targaryen, and their dragons?",
    answer:
      "All four perished. Daemon leapt from Caraxes onto Vhagar and struck Aemond down; both dragons crashed into the Gods Eye and died.",
  },
  {
    id: 5,
    question:
      "Which young dragon was killed along with his rider, Prince Lucerys Velaryon, over Shipbreaker Bay?",
    answer:
      "Arrax, slain by Prince Aemond Targaryen on Vhagar. Their deaths were one of the opening acts of the Dance of the Dragons.",
  },
  {
    id: 6,
    question:
      "Whom is Daenerys Targaryen's largest dragon, Drogon, named after?",
    answer:
      "Khal Drogo, her Dothraki husband. Drogon has black scales with red markings.",
  },
  {
    id: 7,
    question:
      "What are the names of Daenerys's other two dragons, and whom do they honor?",
    answer:
      "Rhaegal (for her eldest brother, Prince Rhaegar Targaryen) and Viserion (for her brother Viserys Targaryen). Rhaegal has green and bronze scales; Viserion is cream and gold.",
  },
  {
    id: 8,
    question:
      "Which dragon was ridden by Princess Rhaenyra Targaryen and died during the Storming of the Dragonpit?",
    answer:
      "Syrax, Rhaenyra's yellow dragon, killed by the mob that stormed the Dragonpit in King's Landing.",
  },
  {
    id: 9,
    question:
      "Which two dragons clashed at the Battle at Rook's Rest alongside Vhagar?",
    answer:
      "Meleys, 'the Red Queen,' ridden by Princess Rhaenys Targaryen, and Sunfyre, 'the Golden,' ridden by King Aegon II. Meleys was killed and Sunfyre badly injured.",
  },
  {
    id: 10,
    question: "When did the last Targaryen dragon die?",
    answer:
      "In 153 AC, during the reign of King Aegon III Targaryen, called 'the Dragonbane.' The last dragon died young, and the knowledge to hatch new ones was lost.",
  },
];

function App() {
  const [cardNumber, setCardNumber] = useState(0);
  const [isFlip, setIsFlip] = useState(false);

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
      </header>

      <section className="card-area">
        <FlashCard
          question={dragons[cardNumber].question}
          answer={dragons[cardNumber].answer}
          isFlipped={isFlip}
          onFlip={handleFlip}
        />

        <div className="card-nav">
          <button type="button" className="nav-btn" onClick={handleClick}>
            →
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
