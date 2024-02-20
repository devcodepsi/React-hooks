import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Title from '../components/Title';

const ApisForwardRef = ({title}) => {
    const ref = useRef(null);
    const [height, setHeight] = useState();
    useLayoutEffect(()=>{
        setHeight(ref.current.clientHeight);
    },[ref.current])
    return (
        <>
            <Title title={title} />
            <Block ref={ref} height={height} bg="bg-gray-100" />
            <div className='mt-3'>container height is {height}px</div>
        </>
    );
};

export default ApisForwardRef;

const Block = forwardRef((props, ref) => {
    return (
        <div ref={ref} {...props} className={`border p-8 font-semibold ${props.bg}`}>container {props.height}</div> 
    )
});