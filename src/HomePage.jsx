import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

const symbols = [ 
  { id: 1, text: 'The', image: 'The.jpg' },
  { id: 2, text: 'Swim', image: 'Swim.png' },
  { id: 3, text: 'Drink', image: 'drink.png' },
  { id: 4, text: 'Eat', image: 'eat.jpg' },
  {id: 5, text: 'Hamburger', image: 'Hamburger.png' },
  { id: 5, text: 'Yes', video: 'yes.mp4' },
  { id: 6, text: 'No', video: 'no.mp4' },
  { id: 7, text: 'More', video: 'more.mp4' },
  { id: 8, text: 'Pee', image: 'peePecs.png' },
  { id: 9, text: 'Help', video: 'help.mp4' },
  { id: 10, text: 'Cookie', image: 'cookie.jpg' },
  { id: 11, text: 'Give', image: 'give.jpg' },
  { id: 12, text: 'Are', image: 'are.jpg' },
];

function HomePage() {
  const [sentence, setSentence] = useState([]);

  const handleSymbolClick = (symbol) => {
    if (symbol.text === 'Gullah Dialect') return; 
    setSentence((prev) => [...prev, symbol.text]);
    const utterance = new SpeechSynthesisUtterance(symbol.text);
    speechSynthesis.speak(utterance);
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(sentence.join(' '));
    speechSynthesis.speak(utterance);
  };

  const handleClear = () => {
    setSentence([]);
  };

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h1 className="text-center mb-4">AAC Homepage</h1>

        <div className="row g-3">
          {symbols.map((symbol) => (
            <div className="col-6 col-md-3" key={symbol.id}>
              <div className="card text-center h-100 shadow-sm" style={{ cursor: 'pointer' }}>
                {symbol.text === 'Gullah Dialect' ? (
                  <Link to="/gullah">
                    <img src={symbol.image} alt={symbol.text} className="card-img-top" />
                  </Link>
                ) : (
                  <div onClick={() => handleSymbolClick(symbol)}>
                    {symbol.image && (
                      <img src={symbol.image} alt={symbol.text} className="card-img-top" />
                    )}
                    {symbol.video && (
                      <video src={symbol.video} className="card-img-top" controls />
                    )}
                  </div>
                )}
                <div className="card-body">
                  <p className="card-text fw-bold">{symbol.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h5>Sentence:</h5>
          <div className="p-3 border bg-light rounded">{sentence.join(' ')}</div>

          <div className="mt-3 d-flex gap-3">
            <button className="btn btn-primary" onClick={handleSpeak}>Speak</button>
            <button className="btn btn-outline-danger" onClick={handleClear}>Clear</button>
            <button className="btn btn-secondary" onClick={() => setSentence([])}>
              <img src="settings.jpg" alt="Settings" style={{ width: '24px', marginRight: '8px' }} />
              Settings
            </button>
          </div>
        </div>
        <footer className="watermark">
          © {new Date().getFullYear()} Lauren A. Jackson M.S. CCC-SLP
        </footer>
      </div>
    </>
  );
}

export default HomePage;
