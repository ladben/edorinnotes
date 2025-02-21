import './PersonSegment.css';
import ProbabilityPieChart from './ProbabilityPieChart/ProbabilityPieChart';

const PersonSegment = ({person}) => {

    const {name, probability} = person;

    return (
        <div className='flex column gap-5 bg-neutral'>
            <img src={`./assets/profiles/${name}_square.webp`} alt="player image" width="100" />
            <div className='chart'>
                <ProbabilityPieChart
                    data={
                        [
                            {name: person.name, value: person.probability, startColor: person.startColor, endColor: person.endColor},
                            {name: "empty", value: 1 - person.probability}
                        ]
                    }
                />
            </div>
            <div className='percentage-number position-absolute flex justify-center align-center'>
                <p>{Math.round(probability * 100)}%</p>
            </div>
        </div>
    );
}
 
export default PersonSegment;