import { useState } from 'react';
import './App.css'
import ProbabilityChart from './ProbabilityChart/ProbabilityChart';
import DisplayAndControls from './DisplayAndControls/DisplayAndControls';
import FortuneWheel from './FortuneWheel/FortuneWheel';

function App() {

  const [selectedPlayer, setSelectedPlayer] = useState({});
  const [lightsAnimation, setLightsAnimation] = useState('none');

  const resp = [
    {
      id: 0,
      name: "Petra",
      notesWritten: 1,
      startColor: "#E0218A",
      endColor: "#861352",
      color: "#E0218A"
    },
    {
      id: 1,
      name: "Roli",
      notesWritten: 1,
      startColor: "#00FFFF",
      endColor: "#009999",
      color: "#00FFFF"
    },
    {
      id: 2,
      name: "Alex",
      notesWritten: 1,
      startColor: "#44BB11",
      endColor: "#246309",
      color: "#246309"
    },
    {
      id: 3,
      name: "Misi",
      notesWritten: 0,
      startColor: "#F22727",
      endColor: "#C50C0C",
      color: "#C50C0C"
    },
    {
      id: 4,
      name: "Javi",
      notesWritten: 0,
      startColor: "#F2CC0D",
      endColor: "#A98F09",
      color: "#F2CC0D"
    }
  ];

  const weights = resp.map(person => {
    return {
      ...person,
      weight: 1 / (person.notesWritten + 1)
    }
  });
  const weightSum = weights.map(weight => weight.weight).reduce((acc, curr) => acc + curr);
  const probabilities = weights.map(weight => {
    return {
      ...weight,
      probability: weight.weight / weightSum
    }
  })

  const selectNextNoteTaker = () => {
    const random = Math.random();
    let cumulativeProbability = 0;

    for (let player of probabilities) {
      cumulativeProbability += player.probability;
      if (random < cumulativeProbability) {
        setSelectedPlayer(player);
        return;
      }
    }
  }
  
  return (
    <div className='container flex justify-center align-center w-100 h-100v'>
      <div className='grid column-2 row-2 gap-50'>
        <div className='probability-chart-wrapper mt-auto'>
          <ProbabilityChart probabilities={probabilities} />
        </div>
        <div className='fortune-wheel-wrapper span-row-2 flex justify-center align-center'>
          <FortuneWheel
            people={resp.map(({name, color}) => ({name, color}))}
            lightsAnimation={lightsAnimation}
            selectedPlayer={selectedPlayer}
          />
        </div>
        <div className='display-and-controls-wrapper'>
          <DisplayAndControls
            setLightsAnimation={setLightsAnimation}
            selectedPlayer={selectedPlayer}
            selectNextNoteTaker={selectNextNoteTaker}
          />
        </div>
      </div>
    </div>
  )
}

export default App
