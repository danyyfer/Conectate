
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    height: '100vh', flexDirection: 'column', fontFamily: 'Arial'
  }}>
    <h1>Bienvenido a ConectaEmo</h1>
    <p>Conecta con personas que sienten como tú. Comparte, apoya, siente.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
