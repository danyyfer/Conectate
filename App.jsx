import React, { useState } from 'react'
import './style.css'

export default function App() {
  const [alias, setAlias] = useState('')
  const [emotion, setEmotion] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="container">
      <h1>ConectaEmo</h1>
      <p>Un lugar donde tu emoción tiene un espacio seguro.</p>

      {!submitted ? (
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
          <button onClick={() => setSubmitted(true)}>Compartir</button>
        </>
      ) : (
        <div className="card">
          <h2>Gracias, {alias} 💜</h2>
          <p>"{emotion}"</p>
          <p>Tu emoción fue enviada a la red.</p>
        </div>
      )}
    </div>
  )
}