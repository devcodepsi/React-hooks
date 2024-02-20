import React, { useState } from 'react'
import Title from '../components/Title'

import { useContext, createContext } from 'react'
const ThemeContext = createContext(null);

export default function HooksUseContext({ title }) {
    const [theme, setTheme] = useState('light');
    return (
        <>
            <Title title={title} />
            <ThemeContext.Provider value={theme}>
                <FormOverlay />
                <div className='flex gap-3 mt-3'>
                    <button onClick={() => setTheme('light')} className='p-3 border'>light mode</button>
                    <button onClick={() => setTheme('dark')} className='p-3 border'>dark mode</button>
                </div>
            </ThemeContext.Provider>
        </>
    )
}

function FormOverlay() {
    return (
        <Form />
    )
}

function Form() {
    const theme = useContext(ThemeContext);
    return (
        <form className={`${theme === 'light' ? 'bg-gray-200' : 'bg-gray-900'} p-3 flex gap-3`}>
            <input type="text" className='border' />
            <input type="text" className='border' />
            <input type="submit" className='border bg-slate-300 px-3' />
        </form>
    )
}