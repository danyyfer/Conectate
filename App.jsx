
import React, { useState } from 'react';
import './style.css';

function EmotionForm({ alias, emotion, setAlias, setEmotion, onSubmit }) {
  return (
    <>
      <input
        placeholder="Tu alias emocional"
        value={alias}
        onChange={e => setAlias(e.target.value)}
      />
      <textarea
        placeholder="¿Cómo te sientes hoy?"
        value={emotion}
        onChange={e => setEmotion(e.target.value)}
      />
      <button onClick={onSubmit}>Compartir</button>
    </>
  );
}

function EmotionCard({ alias, emotion }) {
  return (
    <div className="card">
      <h2>Gracias, {alias} 💜</h2>
      <p>"{emotion}"</p>
      <p>Tu emoción fue enviada a la red.</p>
    </div>
  );
}

export default function App() {
  const [alias, setAlias] = useState('');
  const [emotion, setEmotion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!alias.trim() || !emotion.trim()) {
      alert("Por favor completa ambos campos.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>ConectaEmo</h1>
      <p>Un lugar donde tu emoción tiene un espacio seguro.</p>

      {!submitted ? (
        <EmotionForm
          alias={alias}
          emotion={emotion}
          setAlias={setAlias}
          setEmotion={setEmotion}
          onSubmit={handleSubmit}
        />
      ) : (
        <EmotionCard alias={alias} emotion={emotion} />
      )}
    </div>
  );
}
