function FlashCard({ question, answer, image, color, isFlipped, onFlip }) {
  return (
    <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={onFlip}>
      <div className="card-inner">
        <div
          className="card-face card-front"
          style={color ? { backgroundColor: color } : {}}
        >
          <span className="card-label">Question</span>
          {image && <img src={image} alt="Dragon" className="card-image" />}
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
