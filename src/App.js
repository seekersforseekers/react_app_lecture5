import React from 'react';
import Child from './Child';
import Parent from './Parent';

import CounterContext from './CounterContext'

function App() {
  return (
  //now we import context Api here and use as wrapper to all html tags
    <CounterContext.Provider value={10}> 
    <div>
        {/*
    ya ham n yhan s pros byja h parent ko 
    <div className="App">
      <Parent Name="Fakhra"/> {/*pass rops to parent 
    </div> */}
    
    <Parent/>
    </div>
    </CounterContext.Provider>
    
  );
  
}

export default App;
