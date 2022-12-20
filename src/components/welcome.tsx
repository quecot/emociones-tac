import React from 'react';

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>
}

const Welcome: React.FC<Props> = ({ setStatus }) => {
  return (
    <div className='welcome-div'>
      <h1>Bienvenid@</h1>
      <p>El siguiente test te va a servir para descubrir cuál es tu estado emocional presente. A través de una serie de preguntas, podrás evaluar cómo te sientes en este momento y cómo están afectando tus emociones tu día a día. Es importante tener en cuenta que este test es solo una herramienta de autodiagnóstico y no debe tomarse como una evaluación profesional o un sustituto de asesoramiento psicológico. Sin embargo, puede ser una forma útil de identificar patrones o problemas emocionales que puedan requerir más atención y apoyo. Recuerda que es normal tener altibajos emocionales y es importante aprender a manejarlos de manera saludable.</p>
      <button type="button" onClick={() => setStatus('taking-test')}>Empezar</button>
    </div>
  )
}

export default Welcome;
