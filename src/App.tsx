import React, {useState} from 'react';
import c from './App.module.css';
import {Button} from './Button';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const countUp = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    const disabledINC = count === 5
    const disabledRESET = count < 5

    return (
        <div className={c.appCounter}>
            <div className={c.container}>
                <div className={c.screen}>
                    <h1 className={count === 5 ? c.red : ''}>{count}</h1>
                </div>
                <div className={c.blockButton}>
                <Button
                    title={'INC'}
                    callBack={countUp}
                    disabled={disabledINC}/>
                <Button
                    title={'RESET'}
                    callBack={resetCount}
                    disabled={disabledRESET}/>
                </div>
            </div>
        </div>
    );
}


