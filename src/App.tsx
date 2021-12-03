import React, {useState} from 'react';
import c from './App.module.css';
import {Counter} from './DisplayCounter/Counter';
import {SetCounter} from './DisplayCounter/SetCounter';


export const App = () => {
    const [count, setCount] = useState<number | string>(Number(localStorage.getItem('start')) || 'enter values and press "set"')
    const [max, setMax] = useState(Number(localStorage.getItem('max')))
    const [start, setStart] = useState(Number(localStorage.getItem('start')))
    const [error, setError] = useState(false)

    const countUp = () => {
        if (typeof count === 'number') {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(start)
    }

    const disabledINC = count === max
    const disabledRESET = count < max


    return (
        <div className={c.appCounter}>
            <SetCounter setError={setError} setCount={setCount} max={max} setMax={setMax} setStart={setStart} start={start}/>
            <Counter count={count} countUp={countUp} resetCount={resetCount} disabledINC={disabledINC}
                     disabledRESET={disabledRESET} setError={setError} error={error}/>

        </div>
    );
}


