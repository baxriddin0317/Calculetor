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
      <div className="max-w-[800px] h-[100vh] mx-auto px-[36px] py-[40px]">
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
