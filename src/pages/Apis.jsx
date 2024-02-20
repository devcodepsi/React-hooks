import React, {useState} from 'react'
import Layout from "../components/Layout";
import ApisForwardRef from '../contents/ApisForwardRef';

export default function Apis() {
    const [contents, setContents] = useState('forwardRef');
    const displayContents = () => {
        switch(contents) {
            case 'forwardRef':  return <ApisForwardRef title={contents} />
        }
    }
    return(
        <Layout>
            <HooksMenu setContents={setContents} contents={contents} />
            {displayContents()}
        </Layout>
    )
}

export function HooksMenu({setContents, contents}) {
    const buttonLinks = [
        {id: 1, title: 'forwardRef'},
    ]

  return (
    <>
    <menu className='flex gap-3 mb-5'>
        {buttonLinks.map(buttonLink => (
            <button key={buttonLink.id} onClick={()=>setContents(buttonLink.title)} className={`border px-2 ${buttonLink.title === contents ? 'bg-slate-200' : ''}`}>{buttonLink.title}</button>
        ))}
    </menu>
    </>
  )
}
