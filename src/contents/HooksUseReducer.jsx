import React from 'react';
import Title from '../components/Title';

const HooksUseReducer = ({title}) => {
    const initalState = { count: 0 };
    const [state, dispatch] = React.useReducer(reducerCount, initalState)
    return (
        <>
            <Title title={title} />
            <div>
                <h1 className='font-bold text-3xl'>{state.count}</h1>
                <div className='flex gap-3 mt-4'>
                    <button onClick={() => dispatch({ type: 'increment', payload: 3 })} className='border px-3'>increment</button>
                    <button onClick={() => dispatch({ type: 'decrement', payload: 2 })} className='border px-3'>decrease</button>
                </div>
            </div> 
        </>
    );
};

export default HooksUseReducer;


function reducerCount(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}