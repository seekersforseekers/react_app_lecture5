import React, { useContext } from 'react'
import counterContext from './CounterContext';


const Child = () => {
    let counterValue = useContext(counterContext)
    return (
        <div>
         
            <h1>this value passed by countercontext</h1>
            <p>value is : {counterValue}</p>
<button onClick={()=>{}}>Increament</button>
        </div>
    );
}
export default Child;