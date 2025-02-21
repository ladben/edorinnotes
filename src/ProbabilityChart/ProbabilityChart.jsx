import PersonSegment from './PersonSegment/PersonSegment';
import './ProbabilityChart.css';

import MetalFrame from './assets/Metal_frame.svg?react';

const ProbabilityChart = ({probabilities}) => {
    return (
        <div className='position-relative'>
            <div className='people flex gap-10'>
                {probabilities.map((person, index) => (
                    <PersonSegment key={`person-index-${index}`} person={person}/>
                ))}
            </div>
            <MetalFrame className="position-absolute top-0 left-0" />
        </div>
    );
}
 
export default ProbabilityChart;