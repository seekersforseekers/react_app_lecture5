import React, { useContext } from 'react'
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext)
    return (
        <div>
            {/* {/* props erase kr dia h commented code ka part h wo b in child parameter
             yhan ham n parent s any waly props ko receive kia h 
            <h2>1st child</h2>
    <h3>this is {props.Name}</h3>*/}
            <h1>this value passed by countercontext</h1>
            <p>value is : {counterValue}</p>

        </div>
    );
}
export default Child;