import './Greetings.css';
import pastor1 from './assets/pastor1.jpeg';
import pastor2 from './assets/pastor2.jpeg';
import pastor3 from './assets/pastor3.jpeg';

function Greetings({ onOpenSurprise, onGoHome }) {
  return (
    <div className="greetings-page">
      <div className="greetings-card">
        <h1>🎉 Happy Birthday, Pastor Henfy! 🎉</h1>

        <p>
          Today we celebrate an amazing pastor and a wonderful person. May God continue to bless you,
          strengthen you, and guide you in everything you do.
        </p>

        <p>
          May this new year of your life be filled with joy, grace, favour, and beautiful testimonies.
        </p>

        <div className="gallery-grid">
          <img className="image1" src={pastor1} alt="Pastor Henfy smiling" />
          <img className="image1" src={pastor2} alt="Pastor Henfy in a joyful moment" />
          <img className="image1" src={pastor3} alt="Pastor Henfy with a warm smile" />
        </div>

        <div className="button-row">
          <button className="surprise-button" onClick={onOpenSurprise} type="button">
            Open surprise
          </button>
          <button className="secondary-button" onClick={onGoHome} type="button">
            Return home
          </button>
        </div>

        <h2>Happy Birthday! 🎂🎉</h2>
      </div>
    </div>
  );
}

export default Greetings;
