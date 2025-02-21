import './Character.css';

import A from '../assets/letters/A.svg?react';
import B from '../assets/letters/B.svg?react';
import C from '../assets/letters/C.svg?react';
import D from '../assets/letters/D.svg?react';
import E from '../assets/letters/E.svg?react';
import F from '../assets/letters/F.svg?react';
import G from '../assets/letters/G.svg?react';
import H from '../assets/letters/H.svg?react';
import I from '../assets/letters/I.svg?react';
import J from '../assets/letters/J.svg?react';
import K from '../assets/letters/K.svg?react';
import L from '../assets/letters/L.svg?react';
import M from '../assets/letters/M.svg?react';
import N from '../assets/letters/N.svg?react';
import O from '../assets/letters/O.svg?react';
import P from '../assets/letters/P.svg?react';
import Q from '../assets/letters/Q.svg?react';
import R from '../assets/letters/R.svg?react';
import S from '../assets/letters/S.svg?react';
import T from '../assets/letters/T.svg?react';
import U from '../assets/letters/U.svg?react';
import V from '../assets/letters/V.svg?react';
import W from '../assets/letters/W.svg?react';
import X from '../assets/letters/X.svg?react';
import Y from '../assets/letters/Y.svg?react';
import Z from '../assets/letters/Z.svg?react';
import Exclamation from '../assets/symbols/Exclamation.svg?react';

const Character = ({param}) => {
    let Component = null;
    if (param === "A") {
        Component = A;
    }
    if (param === "B") {
        Component = B;
    }
    if (param === "C") {
        Component = C;
    }
    if (param === "D") {
        Component = D;
    }
    if (param === "E") {
        Component = E;
    }
    if (param === "F") {
        Component = F;
    }
    if (param === "G") {
        Component = G;
    }
    if (param === "H") {
        Component = H;
    }
    if (param === "I") {
        Component = I;
    }
    if (param === "J") {
        Component = J;
    }
    if (param === "K") {
        Component = K;
    }
    if (param === "L") {
        Component = L;
    }
    if (param === "M") {
        Component = M;
    }
    if (param === "N") {
        Component = N;
    }
    if (param === "O") {
        Component = O;
    }
    if (param === "P") {
        Component = P;
    }
    if (param === "Q") {
        Component = Q;
    }
    if (param === "R") {
        Component = R;
    }
    if (param === "S") {
        Component = S;
    }
    if (param === "T") {
        Component = T;
    }
    if (param === "U") {
        Component = U;
    }
    if (param === "V") {
        Component = V;
    }
    if (param === "W") {
        Component = W;
    }
    if (param === "X") {
        Component = X;
    }
    if (param === "Y") {
        Component = Y;
    }
    if (param === "Z") {
        Component = Z;
    }
    if (param === "!") {
        Component = Exclamation;
    }

    const {width, height} = Component().props;
    return (
        <div className='position-relative character-wrapper' style={{width: `${width - 24}px`, height: `${height - 24}px`}}>
            <Component className='position-absolute' />
        </div>
    );
}
 
export default Character;