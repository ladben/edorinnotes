import { useState } from 'react';
import './App.css'
import FortuneWheel from './FortuneWheel';

function App() {

  const [selectedPlayer, setSelectedPlayer] = useState('');

  const resp = [
    {
      name: "Petra",
      notesWritten: 1,
      lastWrote: false
    },
    {
      name: "Alex",
      notesWritten: 1,
      lastWrote: true
    },
    {
      name: "Roli",
      notesWritten: 1,
      lastWrote: false
    },
    {
      name: "Misi",
      notesWritten: 0,
      lastWrote: false
    },
    {
      name: "Javi",
      notesWritten: 0,
      lastWrote: false
    }
  ];

  const weights = resp.map(person => {
    return {
      name: person.name,
      weight: 1 / (person.notesWritten + 1)
    }
  });
  const weightSum = weights.map(weight => weight.weight).reduce((acc, curr) => acc + curr);
  const probabilities = weights.map(weight => {
    return {
      name: weight.name,
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
    <FortuneWheel />
  )
}

export default App
