import './FortuneWheel.css';

import React from "react";
import Arrow from './assets/Arrow.svg?react';
import BorderLights from './assets/Border_lights.svg?react';
import SegmentsBackground from './assets/Segments_background.svg?react';
import Wheel from './assets/Wheel.svg?react';
import Segment from './Segment/Segment';

const FortuneWheel = ({people}) => {
    console.log(people);
    return (
        <div className='fortune-wheel-container position-relative'>
            <SegmentsBackground className='position-absolute abs-center' />
            <Wheel />
            {people.map((person, index) => {
                return (
                    <>
                        <Segment
                            className="position-absolute abs-center"
                            url={`url(#segment-image-pattern-${index})`}
                            color={person.color}
                            style={{
                                transform: `translate(-50%, -50%) rotate(${index * 36}deg)`
                            }}
                        >
                            <defs>
                                <pattern id={`segment-image-pattern-${index}`} patternUnits="userSpaceOnUse" width="392" height="170">
                                    <image href={`./assets/profiles/${person.name}.webp`} x="111" y="0" width="170" height="170" />
                                </pattern>
                            </defs>
                        </Segment>
                        <Segment
                            className="position-absolute abs-center"
                            url={`url(#segment-image-pattern-${index})`}
                            color={person.color}
                            style={{
                                transform: `translate(-50%, -50%) rotate(${180 + index * 36}deg)`
                            }}
                        >
                            <defs>
                                <pattern id={`segment-image-pattern-${index}`} patternUnits="userSpaceOnUse" width="392" height="170">
                                    <image href={`./assets/profiles/${person.name}.webp`} x="111" y="0" width="170" height="170" />
                                </pattern>
                            </defs>
                        </Segment>
                    </>
                );
            })}
            <BorderLights className='position-absolute abs-center border-lights' />
            <div style={{width: '60px', height: '60px'}} className='position-absolute abs-center flex'>
                <Arrow className='position-absolute bottom-min-4 left-min-4' />
            </div>
        </div>
    );
}
 
export default FortuneWheel;