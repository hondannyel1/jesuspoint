
import { useState } from 'react';
import jpimage from './assets/jp.jpeg.jpeg';
import './PastorBirthdayApp.css';

function PastorBirthdayApp({ onAdvance }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleEnter = () => {
    if (selectedDate === '2026-08-16') {
      setFeedback('HURRAY!');
      setIsCorrect(true);
      window.setTimeout(() => onAdvance?.(), 1200);
    } else {
      setFeedback('INPUT THE CORRECT CODE');
      setIsCorrect(false);
    }
  };

  return (
    <div className="birthday-page">
      <div className="card">
        <div className={`celebration-badges ${isCorrect ? 'show' : ''}`} aria-hidden="true">
          <span className="balloon balloon-one">🎈</span>
          <span className="balloon balloon-two">🎉</span>
          <span className="balloon balloon-three">🎂</span>
        </div>

        <h1 className="greetings-title">Happy Birthday, Pastor Henfy!</h1>
        <img className="image" src={jpimage} alt="Pastor Henfy" />

        <div className="content">
          <p>Please enter the special code below to unlock the birthday surprise.</p>
          
          <label htmlFor="day">BIRTHDAY CODE</label>
          <input
            type="date"
            id="day"
            name="day"
            value={selectedDate}
            onChange={(event) => {
              setSelectedDate(event.target.value);
              if (feedback) {
                setFeedback('');
              }
            }}
          />

          {feedback && (
            <p className={`feedback-message ${isCorrect ? 'success' : 'error'}`}>{feedback}</p>
          )}
        </div>

        <button className="enter-button" onClick={handleEnter} type="button">
          ENTER
        </button>
      </div>
    </div>
  );
}

export default PastorBirthdayApp;
