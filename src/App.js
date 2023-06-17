import AboutCard from './component/AboutCard';
import Navbar from './component/Navbar';
import { useState } from 'react';
import Textboxheader from './component/Textboxheader';

import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const togglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      <Navbar name='hello' mode={mode} togglemode={togglemode} />
      <div className='container' me-3='true'>
        {/* <AboutCard /> */}
        <Textboxheader label1="example" mode={mode}/>
      </div>
    </>
  );
}

export default App;
