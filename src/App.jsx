import { useState } from 'react';
import './App.css';
import Calculet from './components/Calculet';
import Result from './components/Result';

function App() {
  const [ natijaS, setNatijaS ] = useState();
  const [ natijaM, setNatijaM ] = useState();
  const [natija, setNatija] = useState(false);

  return (
    <div className="bg-[#F9FAFB]">
      <div className="max-w-[800px] h-screen mx-auto px-9 py-10">
        <div className='md:flex md:justify-between'>
          <Calculet 
            setNatijaM={setNatijaM} 
            setNatijaS={setNatijaS} 
            setNatija={setNatija}
            natija={natija} 
            natijaM={natijaM} 
            natijaS={natijaS} 
          />
          <Result 
            natijaM={natijaM} 
            natijaS={natijaS}
            natija={natija}  
          />
        </div>
      </div>
    </div>
  );
}

export default App;
