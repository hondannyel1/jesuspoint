import { useState } from 'react';
import Index from './Index.jsx';
import Footer from './Footer.jsx';
import Greetings from './Greetings.jsx';
import Videos from './videos.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'greetings':
        return (
          <Greetings
            onOpenSurprise={() => setCurrentPage('videos')}
            onGoHome={() => setCurrentPage('home')}
          />
        );
      case 'videos':
        return (
          <Videos
            onGoHome={() => setCurrentPage('home')}
            onGoToGreetings={() => setCurrentPage('greetings')}
          />
        );
      default:
        return <Index onAdvance={() => setCurrentPage('greetings')} />;
    }
  };

  return (
    <div className="app-shell">
      {currentPage !== 'home' && (
        <nav className="top-nav">
          <button type="button" className={currentPage === 'home' ? 'nav-button active' : 'nav-button'} onClick={() => setCurrentPage('home')}>
            Home
          </button>
          <button type="button" className={currentPage === 'greetings' ? 'nav-button active' : 'nav-button'} onClick={() => setCurrentPage('greetings')}>
            Greetings
          </button>
          <button type="button" className={currentPage === 'videos' ? 'nav-button active' : 'nav-button'} onClick={() => setCurrentPage('videos')}>
            Surprise
          </button>
        </nav>
      )}

      <main className="app-main">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
