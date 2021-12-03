import React, {ChangeEvent, useState} from 'react';
import c from '../App.module.css';
import {Button} from '../Components/Button';

type SetCounterPropsType = {
    max: number
    start: number
    setMax: (value: number) => void
    setStart: (value: number) => void
    setCount: (value: number | string) => void
    setError:(error:boolean)=>void
}

export const SetCounter = (props: SetCounterPropsType) => {
    const {setMax, max, setStart, start, setCount} = props

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }

    const onChangeHandlerStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
    }

    const setCountHandler = () => {
        setCount(start)
        localStorage.setItem('start', JSON.stringify(props.start))
        localStorage.setItem('max', JSON.stringify(props.max))
    }

    const fokusHandler = () => {
    setCount('enter values and press "set"')
    }

    return (
        <div className={c.container}>
            <div className={c.screen}>
                <input value={start} onChange={onChangeHandlerStart} type={'number'} onFocus={fokusHandler}/>
                <input value={max} onChange={onChangeHandlerMax} type={'number'} onFocus={fokusHandler}/>
            </div>

            <div className={c.blockButton}>

                <Button
                    title={'SET'}
                    callBack={setCountHandler}
                    disabled={false}/>
            </div>
        </div>
    )
}
