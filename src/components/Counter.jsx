import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector( (state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='flex gap-10 mt-8 text-3xl bg-gray-400 py-3 px-5 rounded-md text-black'>
        <button onClick={() => dispatch(decreament())} className='border-r pr-5'> - </button>
        <p>{count}</p>
        <button onClick={() => dispatch(increament())} className='border-l pl-5'> + </button>
    </div>
  )
}

export default Counter