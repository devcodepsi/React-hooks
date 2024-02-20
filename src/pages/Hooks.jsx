import React, { useState } from 'react'
import Layout from "../components/Layout";
import HooksUseContext from '../contents/HooksUseContext';
import HooksUseDebugValue from '../contents/HooksUseDebugValue';
import HooksUseDefferedValue from '../contents/HooksUseDefferedValue';
import HooksUseId from '../contents/HooksUseId';
import HooksUseLayoutEffect from '../contents/HooksUseLayoutEffect';
import HooksUseReducer from '../contents/HooksUseReducer';
import HooksUseTransition from '../contents/HooksUseTransition';

export default function Hooks() {
    const [contents, setContents] = useState('useContext');
    const displayContents = () => {
        switch (contents) {
            case 'useContext': return <HooksUseContext title={contents} />
            case 'useDebugValue': return <HooksUseDebugValue title={contents} />
            case 'useDefferedValue': return <HooksUseDefferedValue title={contents} />
            case 'useId': return <HooksUseId title={contents} />
            case 'useLayoutEffect': return <HooksUseLayoutEffect title={contents} />
            case 'useReducer': return <HooksUseReducer title={contents} />
            case 'useTransition': return <HooksUseTransition title={contents} />
        }
    }
    return (
        <Layout>
            <HooksMenu setContents={setContents} contents={contents} />
            {displayContents()}
        </Layout>
    )
}

export function HooksMenu({ setContents, contents }) {
    const buttonLinks = [
        { id: 2, title: 'useContext' },
        { id: 3, title: 'useDebugValue' },
        { id: 4, title: 'useDefferedValue' },
        { id: 5, title: 'useId' },
        { id: 6, title: 'useLayoutEffect' },
        { id: 7, title: 'useReducer' },
        { id: 8, title: 'useTransition' },
    ]

    return (
        <menu className='flex gap-3 mb-5'>
            {buttonLinks.map(buttonLink => (
                <button key={buttonLink.id} onClick={() => setContents(buttonLink.title)} className={`border px-2 ${buttonLink.title === contents ? 'bg-slate-200' : ''}`}>{buttonLink.title}</button>
            ))}
        </menu>
    )
}
