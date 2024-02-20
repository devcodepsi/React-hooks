import React, { useState, useTransition } from 'react';
import Title from '../components/Title';

const HooksUseTransition = ({title}) => {
    /** 
     *  isPending 플래그는 대기 중인 transition이 있는지 알려준다.
     *  startTransition 함수는 상태 업데이트(setState)를 transition으로 표시 해주는 함수다.
    */
    const [text, setText] = useState('');
    const [value, setValue] = useState('');
    const [isPending, startTransition] = useTransition();
    const changeText = (e) => {
        startTransition(()=>{
            setText(e.target.value);
            setValue(e.target.value);
        })
    }
    console.log({text, isPending});
    console.log({value});
    return (
        <>
            <Title title={title} />
            <div><input type="text" onChange={changeText} className='border' /></div>
            <div>{isPending ? <p>wait....</p>: value}</div>
        </>
    );
};

export default HooksUseTransition;