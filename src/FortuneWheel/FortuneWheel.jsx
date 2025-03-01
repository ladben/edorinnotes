import './FortuneWheel.css';

import Arrow from './assets/Arrow.svg?react';
import BorderLights from './assets/Border_lights.svg?react';
import SegmentsBackground from './assets/Segments_background.svg?react';
import Wheel from './assets/Wheel.svg?react';
import Segment from './Segment/Segment';
import { useEffect, useRef } from 'react';
import useFortuneWheelLightAnimation from '../customHooks/useFortuneWheelLightAnimation';

const FortuneWheel = ({people, lightsAnimation}) => {
    
    const lightsRef = useRef(null);
    const animations = useFortuneWheelLightAnimation();

    useEffect(() => {
        console.log('lightsRef.current: ', lightsRef.current);
        console.log('lightsAnimation: ', lightsAnimation);
        console.log('animations: ', animations);

        if (!lightsAnimation || !animations[lightsAnimation] || !lightsRef.current) {
            return;
        }

        const lights = Array.from(lightsRef.current.querySelectorAll('.light-on'));
        animations.clearAnimation(lights);
        animations[lightsAnimation](lights);
    }, [lightsAnimation, animations]);

    return (
        <div className='fortune-wheel-container position-relative'>
            <div
                className='position-absolute'
                style={{
                    width: '546px',
                    height: '546px',
                    zIndex: '-1',
                    top: '-25px',
                }}
            >
                <SegmentsBackground className='position-absolute abs-center' />
                {people.map((person, index) => {
                    return (
                        <Segment
                            key={`segment-key-${index}`}
                            className="position-absolute abs-center"
                            url={`url(#segment-image-pattern-${index})`}
                            index={index}
                            name={person.name}
                            color={person.color}
                            style={{transform: `translate(-50%, -50%) rotate(${index * (180 / people.length)}deg)`}}
                        />
                    );
                })}
                {people.map((person, index) => {
                    return (
                        <Segment
                            key={`segment-key-${index + people.length}`}
                            className="position-absolute abs-center"
                            url={`url(#segment-image-pattern-${index + people.length})`}
                            index={index + people.length}
                            name={person.name}
                            color={person.color}
                            style={{transform: `translate(-50%, -50%) rotate(${180 + (index * (180 / people.length))}deg)`}}
                        />
                    );
                })}
            </div>
            <Wheel style={{marginTop: '-25px'}} />
            <div
                className='position-absolute'
                style={{
                    width: '546px',
                    height: '546px',
                    top: '-25px',
                }}
            >
                <BorderLights className='position-absolute abs-center border-lights' ref={lightsRef}/>
                <div style={{width: '60px', height: '60px'}} className='position-absolute abs-center flex'>
                    <Arrow className='position-absolute bottom-min-4 left-min-4' />
                </div>
            </div>
        </div>
    );
}
 
export default FortuneWheel;