import React, { useState } from 'react';
import Header from './components/header';
import Display from './components/Display';
import KeyBoard from './components/keyBoard';

function App() {
  const [value,setValue] = useState<number>(0);

  function handleClickInDisplayKeyboard(buttonSelected: string) {
    if(Number(buttonSelected)){
      setValue(Number( value.toString() + buttonSelected))
    }
  }

  
  return (
    <div id="default-calculator">
       <Header/>
        <main className="content">
          <Display value={value}/>
           <div className="content-2">
                <div className="left-side">
                        <div className="history">
                            <h2>Histórico</h2>
                        </div>
                        <div className="memory-display">
                            <h2>Memória</h2>
                        </div>
                </div>
                <div className="right-side">
                    <div className="memory">
                            <span>M</span>
                            <span>MS</span>
                            <span>M-</span>
                            
                            <span>M+</span>
                            <span>MR</span>
                            <span>MC</span>
                    </div>
                   <KeyBoard onClick={handleClickInDisplayKeyboard}/>
                    </div>
                </div>
         </main>       
    </div>
  );
}

export default App;
