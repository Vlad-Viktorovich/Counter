import React from 'react';

type PropsType = {
    title: string
    callBack: () => void
    disabled: boolean
}

export const Button = (props: PropsType) => {

    const callBackHandler = () => {
        props.callBack()
    }
    return (
        <button
            onClick={callBackHandler}
            disabled={props.disabled}
        >{props.title}</button>

    )
}