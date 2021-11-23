import React, {ChangeEvent, useState} from 'react';
import c from './App.module.css';
import {Button} from './Button';
import {Counter} from './DisplayCounter/Counter';
import {SetCounter} from './DisplayCounter/SetCounter';


export const App = () => {
    const [count, setCount] = useState<number>(0);
    const [max, setMax] = useState<number>(0)
    const [start, setStart] = useState<number>(0)



    const countUp = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    const disabledINC = count === max
    const disabledRESET = count < max


    return (
        <div className={c.appCounter}>
            <SetCounter setCount={setCount} max={max} setMax={setMax} setStart={setStart} start={start}/>
            <Counter count={count} countUp={countUp} resetCount={resetCount} disabledINC={disabledINC}
                     disabledRESET={disabledRESET}/>

        </div>
    );
}


