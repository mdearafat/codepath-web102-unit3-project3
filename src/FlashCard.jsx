function FlashCard({ question, answer, isFlipped, onFlip }) {
  return (
    <div
      className={`card ${isFlipped ? "is-flipped" : ""}`}
      onClick={onFlip}
      role="button"
      tabIndex={0}
    >
      <div className="card-inner">
        <div className="card-face card-front">
          <span className="card-label">Question</span>
          <p className="card-text">{question}</p>
          <span className="card-hint">Click to flip</span>
        </div>
        <div className="card-face card-back">
          <span className="card-label">Answer</span>
          <p className="card-text">{answer}</p>
          <span className="card-hint">Click to flip back</span>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
