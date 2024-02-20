import React, { useEffect, useLayoutEffect, useState } from 'react';
import Title from '../components/Title';

const HooksUseLayoutEffect = ({title}) => {
    const [data, setData] = useState(0);

    useEffect(()=>{
        console.log('use Effect');
    })
    useLayoutEffect(()=>{
        console.log('use Layout Effect');
    },[])
    useEffect(()=>{
        console.log(data);
    },[data])
    return (
        <>
            <Title title={title} />
            <div>
                dev mode / console.log :  {data}
            </div>
        </>
    );
};

export default HooksUseLayoutEffect;