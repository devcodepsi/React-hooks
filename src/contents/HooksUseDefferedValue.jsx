import React, { Suspense, useState, useDeferredValue, useEffect, memo } from 'react'
import Title from '../components/Title'

export default function HooksUseDefferedValue({ title }) {

    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);

    return (
        <>
            <Title title={title} />
            <div>
                <input value={query} onChange={(e) => setQuery(e.target.value)} className='border' />
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <SlowList text={deferredQuery} />
            </Suspense>
        </>
    )
}


const SlowList = memo(function SlowList({ text }) {
    let items = [];
    for (let i = 0; i < 50; i++) {
        items.push(<SlowItem key={i} text={text} />);
    }
    return (
        <ul className="h-[300px] overflow-y-auto border mt-3 p-3">
            {items}
        </ul>
    );
});

function SlowItem({ text }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 5) { }

    return (
        <li>
            Text: {text}
        </li>
    )
}
