import { useState } from 'react';
import './App.css';
import Calculet from './components/Calculet';
import Result from './components/Result';

function App() {
  const [val, setVal ] = useState("+");
  const [ natijaS, setNatijaS ] = useState();
  const [ natijaM, setNatijaM ] = useState();
  const [natija, setNatija] = useState(false);
  const [surat1, setSurat1] = useState();
  const [surat2, setSurat2] = useState();
  const [maxraj1, setMaxraj1] = useState();
  const [maxraj2, setMaxraj2] = useState();

  return (
    <div className="bg-[#F9FAFB]">
      <div className="max-w-[800px] h-screen mx-auto px-9 py-10">
        <div className='md:flex md:justify-between'>
          <Calculet 
            setVal = {setVal}
            setNatija={setNatija}
            setNatijaM={setNatijaM} 
            setNatijaS={setNatijaS} 
            setSurat1={setSurat1}
            setSurat2={setSurat2}
            setMaxraj1={setMaxraj1}
            setMaxraj2={setMaxraj2}
            val={val}
            natija={natija} 
            natijaM={natijaM} 
            natijaS={natijaS} 
          />
          <Result 
            val={val}
            natija={natija}  
            natijaM={natijaM} 
            natijaS={natijaS}
            surat1={surat1}
            surat2={surat2}
            maxraj1={maxraj1}
            maxraj2={maxraj2}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
