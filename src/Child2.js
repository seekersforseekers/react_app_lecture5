import React,{useReducer} from 'react'
import CounterReducer from './CounterReducer';

export const Child2 = ()=>{
    let[state,dispatch]=useReducer(CounterReducer,1);
    return(
<div>
<h2>This is second child using Counter Reducer</h2>

<h3>Value of reducer state is: {state}</h3>
<button onClick={()=> dispatch('INCREMENT')}> Increase value</button>
</div>
    );

}