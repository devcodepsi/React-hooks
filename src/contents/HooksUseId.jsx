import React,{useId} from 'react'
import Title from '../components/Title'

export default function HooksUseId({title}) {
  const id = useId();
  const pw = useId();
  return (
    <>
        <Title title={title} />
        <div>
          <div>
            <input type='text' area-describedby={id} className='border' />
            <p id={id}>id is 3~8</p>
          </div>
          <div>
            <input type='password' area-describedby={pw} className='border' />
            <p id={pw}>pw is 3~8</p>
          </div>
        </div>
    </>
  )
}
