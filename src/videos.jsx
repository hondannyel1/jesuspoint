
import './Videos.css';
import myvideos from './assets/daniel.mp4';
import neye from './assets/neye.mp4';
import precious from './assets/precious.mp4';
import chuka from './assets/chuka.mp4';
import mmesoma from './assets/mmesoma.mp4';
import victoria from './assets/vickky.mp4';
import emmanuel from  './assets/Emmanuel.mp4';
import kelvin from './assets/kelvin.mp4';





function Videos({ onGoHome, onGoToGreetings }) {
  const videoList = [
     { title: 'Bro.Danny EL', src: myvideos },
     { title: 'Sis.Nenye', src: neye },
     { title: 'Sis.Precious', src: precious },
     { title: 'Bro.Chuka', src: chuka },
     { title: 'Sis.mmesoma', src: mmesoma },
     { title: 'Sis.victoria', src: victoria },
    {title: 'Bro.Emmanuel', src: emmanuel}, 
    {title: 'Bro.Kelvin', src: kelvin}, 

  ];

  return (
    <section className="videos-page">
      <div className="videos-card">
        <h1>🎧 Birthday Surprise Videos</h1>
        <p>Play each video below and enjoy the sweet birthday love.</p>

        <div className="video-grid">
          {videoList.map((video) => (
            <div key={video.title} className="video-card">
              <h3>{video.title}</h3>
              <video
                className="video-player"
                controls
                playsInline
                preload="auto"
                muted={false}
                onLoadedData={(event) => {
                  event.currentTarget.volume = 1;
                 
                }}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        <div className="button-row">
          <button className="surprise-button" onClick={onGoToGreetings} type="button">
            Back to greetings
          </button>
          <button className="secondary-button" onClick={onGoHome} type="button">
            Return home
          </button>
        </div>
      </div>
    </section>
  );
}

export default Videos;
