import React, { useContext} from 'react'
import counterContext from './CounterContext';


const Child = () => {
    let counterValue = useContext(counterContext)
    return (
        <div>
         
            <h1>this value passed by countercontext</h1>
            <p>value is : {counterValue[0]}</p>
<button onClick={()=>{counterValue[1](counterValue[0]+1)}}>Increament</button>
        </div>
    );
}
export default Child;