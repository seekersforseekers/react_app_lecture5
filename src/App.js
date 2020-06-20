import React, { useState, useContext } from 'react';
import Child from './Child';
import Parent from './Parent';

import CounterContext from './CounterContext'

function App() {
  let countvalue=useContext(countvalue)
 // let[countvalue,setcount]=useState(0);
  return (
  //now we import context Api here and use as wrapper to all html tags
    <CounterContext.Provider value={countvalue}> 
    <div>
      
    <Parent/>
    </div>
    </CounterContext.Provider>
    
  );
  
}

export default App;
