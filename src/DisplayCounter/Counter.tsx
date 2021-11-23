import React from 'react';
import c from '../App.module.css';
import {Button} from '../Button';

type CounterPropsType = {
    count: number
    countUp: () => void
    resetCount: () => void
    disabledINC: boolean
    disabledRESET: boolean

}

export const Counter = (props:CounterPropsType) => {
    const{count,resetCount,disabledRESET,disabledINC,countUp}=props
    return (

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
    )
}