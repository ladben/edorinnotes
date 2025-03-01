import { useRef, useState } from 'react';
import Display from './Display/Display';
import './DisplayAndControls.css';

import MetalFrame from './assets/Metal_frame.svg?react';
import RerollBack from './assets/Reroll_back.svg?react';
import RerollFront from './assets/Reroll_front.svg?react';
import RerollFrontPressed from './assets/Reroll_front_pressed.svg?react';
import SaveBack from './assets/Save_back.svg?react';
import SaveFront from './assets/Save_front.svg?react';
import SaveFrontPressed from './assets/Save_front_pressed.svg?react';

const DisplayAndControls = ({setLightsAnimation}) => {
    const [isRotated, setIsRotated] = useState(true);

    const rerollBtnRef = useRef(null);
    const saveBtnRef = useRef(null);

    const onRotate = () => setIsRotated((rotated) => !rotated);
    const onMouseDown = (button) => {
        if (button === "reroll") {
            rerollBtnRef.current?.querySelector('.front')?.classList.add('d-none');
            rerollBtnRef.current?.querySelector('.front.pressed')?.classList.remove('d-none');
        }
        if (button === "save") {
            saveBtnRef.current?.querySelector('.front')?.classList.add('d-none');
            saveBtnRef.current?.querySelector('.front.pressed')?.classList.remove('d-none');
        }
    };
    const onMouseUp = (button) => {
        if (button === "reroll") {
            rerollBtnRef.current?.querySelector('.front')?.classList.remove('d-none');
            rerollBtnRef.current?.querySelector('.front.pressed')?.classList.add('d-none');
        }
        if (button === "save") {
            saveBtnRef.current?.querySelector('.front')?.classList.remove('d-none');
            saveBtnRef.current?.querySelector('.front.pressed')?.classList.add('d-none');
        }
    };

    return (
        <div className='position-relative'>
            <div className='display-and-controls-panel flex column'>
                <div className='display-wrapper cursor-pointer' onClick={() => {
                    onRotate();
                    setLightsAnimation((prevState) => {
                        if (prevState === 'allAround') {
                            return 'none';
                        }
                        if (prevState === 'none') {
                            return 'allAround'
                        }
                    });
                }}>
                    <div className='display w-100 h-100 position-relative'>
                        <Display text="sorsolj!" />
                    </div>
                </div>
                <div className='controls-wrapper flex justify-center gap-40'>
                    <div
                        className={`btn-wrapper reroll-wrapper cursor-pointer ${isRotated ? 'rotated' : ''}`}
                        onMouseDown={() => onMouseDown("reroll")}
                        onMouseUp={() => onMouseUp("reroll")}
                        ref={rerollBtnRef}
                    >
                        <RerollBack className='back position-absolute'/>
                        <RerollFront className='front position-absolute' />
                        <RerollFrontPressed className='front pressed position-absolute d-none' />
                    </div>
                    <div
                        className={`btn-wrapper save-wrapper cursor-pointer ${isRotated ? 'rotated' : ''}`}
                        onMouseDown={() => onMouseDown("save")}
                        onMouseUp={() => onMouseUp("save")}
                        ref={saveBtnRef}
                    >
                        <SaveBack className='back position-absolute'/>
                        <SaveFront className='front position-absolute' />
                        <SaveFrontPressed className='front pressed position-absolute d-none' />
                    </div>
                </div>
            </div>
            <MetalFrame className="position-absolute top-0 left-0 noclick" />
        </div>
    );
}
 
export default DisplayAndControls;