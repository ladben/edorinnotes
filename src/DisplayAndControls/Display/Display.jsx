import { useEffect, useRef } from 'react';
import Character from '../Character/Character';
import './Display.css';

const Display = ({text}) => {

    const textRef = useRef(null);
    const maxWidth = 524;

    useEffect(() => {
        if (textRef.current) {
            const {width} = textRef.current.getBoundingClientRect();
            const remaining = maxWidth - width;
            const remainingRowNum = remaining / 8;
            const leftRowNum = Math.floor(remainingRowNum / 2);
            const leftOffset = leftRowNum * 8;
            textRef.current.style.left = `${leftOffset}px`;
        }
        console.log(textRef.current.getBoundingClientRect());
    }, [text]);

    const TextDisplay = ({text}) => {
        const textArr = text.toUpperCase().split('');
        return (
            <>
                {textArr.map((character, index) => (
                    <Character param={character} key={`character-index-${index}`}/>
                ))}
            </>
        );
    }

    return (
        <div className='flex flex-row gap-12 p-8 w-max-content position-absolute' ref={textRef}>
            <TextDisplay text={text} />
        </div>
    );
}
 
export default Display;