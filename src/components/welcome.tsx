import React from 'react';

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>
}

const Welcome: React.FC<Props> = ({ setStatus }) => {
  return (
    <div className='welcome-div'>
      <h1>Bienvenid@</h1>
      <p>El siguiente test te va a servir para descubrir cuál es tu estado emocional presente, para...</p>
      <button type="button" onClick={() => setStatus('taking-test')}>Empezar</button>
    </div>
  )
}

export default Welcome;
