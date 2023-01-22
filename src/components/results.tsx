import React from 'react';
import { v4 as uuid } from 'uuid';
// @ts-ignore
import RadarGraph from './radar_graph';

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>
  results: any
}

const Results: React.FC<Props> = ({ setStatus, results }) => {
  const getResults = (results: any) => {
    const groupedResults: any = {};
    results.forEach((r: any) => {
      const name: string = r.name.substring(0, r.name.length - 1);
      if (Object.keys(groupedResults).includes(name)) {
        groupedResults[name].value = (parseInt(groupedResults[name].value) + parseInt(r.value)).toString();
      } else {
        groupedResults[name] = { name: name, value: r.value};
      }
    })

    const elements = Object.keys(groupedResults).map((emotion: any) =>
        <div key={uuid()}>
          <p>{`${groupedResults[emotion].name} - ${groupedResults[emotion].value}`}</p>
        </div>
      )
    return groupedResults; 
  };

  const groupedResults = getResults(results);

  return (
    <div className='results-div'>
      <h1>Resultados</h1>
      <p>A continuación se muestran los resultados:</p>
      <RadarGraph className="radar-graph" results={groupedResults} />
      <button id="reset-button" type="button" onClick={() => setStatus('start')}>Volver a empezar</button>
    </div>
  )
}

export default Results;
