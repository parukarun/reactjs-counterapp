import React from 'react'
import { useState } from 'react';

function Counterfun() {
    //state - counter - to hold value
  const [counter,setCounter] = useState(0)

  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
    if (counter!==0)
    setCounter(counter-1)
  }
  function reset(){
    setCounter(0)
  }

  return (
    <div
    className='div1 '
    style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:'2px solid grey',
        margin:'0 4em',
        padding:'10.5em' 
        
      }}
      > <h3 className='hi'>Your Turn.....! </h3>
    <h1
      className='text-center text-danger mt-3 mb-3'
    >{counter}</h1>
      
    <div style={{
        display:'flex',
        flexDirection:'row'
    }}>
      <button className='b1'
      style={{
        padding:'.5em 1.4em',
        textAlign:'center',
        margin:'.5em',
        borderRadius:'1em'
      }}
      onClick={increment}>Add</button>
      <button className='b2'
      style={{
        
        padding:'.5em .8em',
        textAlign:'center',
        margin:'.5em',
        borderRadius:'1em'
      }}
      onClick={decrement}>Reduce</button>
      <button className='b3'
      style={{
        
        padding:'.5em 1.4em',
        textAlign:'center',
        margin:'.5em',
        borderRadius:'1em'
      }}
      onClick={reset}>Reset</button></div>
    </div>
      
  )
}

export default Counterfun