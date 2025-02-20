import PersonSegment from './PersonSegment/PersonSegment';
import './ProbabilityChart.css';

import MetalFrame from './assets/Metal_frame.svg?react';

const ProbabilityChart = () => {
    const people = [
        {
            name: "Petra",
            probability: 0.1,
            startColor: "#E0218A",
            endColor: "#861352"
          },
          {
            name: "Roli",
            probability: 0.1,
            startColor: "#00FFFF",
            endColor: "#009999"
          },
          {
            name: "Alex",
            probability: 0.1,
            startColor: "#44BB11",
            endColor: "#246309"
          },
          {
            name: "Misi",
            probability: 0.35,
            startColor: "#F22727",
            endColor: "#C50C0C"
          },
          {
            name: "Javi",
            probability: 0.35,
            startColor: "#F2CC0D",
            endColor: "#A98F09"
          }
    ];
    return (
        <div className='position-relative'>
            <div className='people flex gap-10'>
                {people.map((person, index) => (
                    <PersonSegment key={`person-index-${index}`} person={person}/>
                ))}
            </div>
            <MetalFrame className="position-absolute top-0 left-0" />
        </div>
    );
}
 
export default ProbabilityChart;