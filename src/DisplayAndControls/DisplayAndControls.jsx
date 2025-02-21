import Display from './Display/Display';
import './DisplayAndControls.css';

import MetalFrame from './assets/Metal_frame.svg?react';
import RerollBack from './assets/Reroll_back.svg?react';
import SaveBack from './assets/Save_back.svg?react';

const DisplayAndControls = () => {
    return (
        <div className='position-relative'>
            <div className='display-and-controls-panel flex column'>
                <div className='display-wrapper'>
                    <div className='display w-100 h-100 position-relative'>
                        <Display text="javi" />
                    </div>
                </div>
                <div className='controls-wrapper flex justify-center gap-40'>
                    <div className='btn-wrapper reroll-wrapper'>
                        <RerollBack />
                    </div>
                    <div className='btn-wrapper save-wrapper'>
                        <SaveBack />
                    </div>
                </div>
            </div>
            <MetalFrame className="position-absolute top-0 left-0" />
        </div>
    );
}
 
export default DisplayAndControls;