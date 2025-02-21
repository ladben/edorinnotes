import { useState } from 'react';
import './App.css'
import FortuneWheel from './FortuneWheel';
import Test from './Test';
import ProbabilityChart from './ProbabilityChart/ProbabilityChart';
import DisplayAndControls from './DisplayAndControls/DisplayAndControls';

function App() {

  const [selectedPlayer, setSelectedPlayer] = useState('');

  const resp = [
    {
      name: "Petra",
      notesWritten: 1,
      startColor: "#E0218A",
      endColor: "#861352"
    },
    {
      name: "Roli",
      notesWritten: 1,
      startColor: "#00FFFF",
      endColor: "#009999"
    },
    {
      name: "Alex",
      notesWritten: 1,
      startColor: "#44BB11",
      endColor: "#246309"
    },
    {
      name: "Misi",
      notesWritten: 0,
      startColor: "#F22727",
      endColor: "#C50C0C"
    },
    {
      name: "Javi",
      notesWritten: 0,
      startColor: "#F2CC0D",
      endColor: "#A98F09"
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

  let backgroundExpArr = [];
  let currChance = 0;
  probabilities.forEach((probability, index) => {
    if (index !== 0) {
      backgroundExpArr.push(`var(--color-${probability.name.toLowerCase()}) ${currChance}deg`);
    }

    if (index !== probabilities.length - 1) {
      backgroundExpArr.push(`var(--color-${probability.name.toLowerCase()}) ${currChance + (360 * probability.probability)}deg`);
    }

    currChance += 360 * probability.probability;
  });

  const selectNextNoteTaker = () => {
    const random = Math.random();
    let cumulativeProbability = 0;

    for (let player of probabilities) {
      cumulativeProbability += player.probability;
      if (random < cumulativeProbability) {
        return player.name;
      }
    }
  }
  
  return (
    // <div className='asd' style={{background: `conic-gradient(${backgroundExpArr})`}}>
    //   <div className='stats'>{resp.map((person, i) => (
    //     <div key={i}>{person.name} ennyiszer írt: {person.notesWritten}</div>
    //   ) )}</div>

    //   <div className='randomize' onClick={() => {setSelectedPlayer(selectNextNoteTaker())}}>SORSOLJ!</div>
    //   <div className='next-note-taker'>Következő jegyzetelő: {selectedPlayer}</div>
    // </div>
    // <div>
    //   {/* <FortuneWheel /> */}
    //   <Test></Test>
    // </div>
    <div className='container flex justify-center align-center w-100 h-100v'>
      <div className='grid column-2 row-2 gap-100'>
        <div className='probability-chart-wrapper'>
          <ProbabilityChart probabilities={probabilities} />
        </div>
        <div className='fortune-wheel-wrapper span-row-2'>3</div>
        <div className='display-and-controls-wrapper'>
          <DisplayAndControls />
        </div>
      </div>
    </div>
  )
}

export default App
