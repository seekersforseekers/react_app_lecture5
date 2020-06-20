import React, { useState } from 'react';
import Child from './Child';

import Parent from './Parent';

import CounterContext from './CounterContext'

function App() {
 let countState=useState(25)
 // let[countvalue,setcount]=useState(0);
  return (
  //now we import context Api here and use as wrapper to all html tags
    <CounterContext.Provider value={countState}> 
    <div>
      
    <Parent/>
    </div>
    </CounterContext.Provider>
    
  );
  
}

export default App;
