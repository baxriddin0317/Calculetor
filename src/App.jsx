import { useState } from 'react';
import './App.css';
import Calculet from './components/Calculet';
import Result from './components/Result';

function App() {
  const [ natijaS, setNatijaS ] = useState();
  const [ natijaM, setNatijaM ] = useState();
  const [natija, setNatija] = useState(false);
  const [val, setVal ] = useState("+");
  const [surat1, setSurat1] = useState();
  const [surat2, setSurat2] = useState();
  const [maxraj1, setMaxraj1] = useState();
  const [maxraj2, setMaxraj2] = useState();

  return (
    <div className="bg-[#F9FAFB]">
      <div className="max-w-[800px] h-screen mx-auto px-9 py-10">
        <div className='md:flex md:justify-between'>
          <Calculet 
            setNatijaM={setNatijaM} 
            setNatijaS={setNatijaS} 
            setNatija={setNatija}
            setVal = {setVal}
            setSurat1={setSurat1}
            setSurat2={setSurat2}
            setMaxraj1={setMaxraj1}
            setMaxraj2={setMaxraj2}
            natija={natija} 
            natijaM={natijaM} 
            natijaS={natijaS} 
            val={val}
            surat1={surat1}
            surat2={surat2}
            maxraj1={maxraj1}
            maxraj2={maxraj2}
          />
          <Result 
            natijaM={natijaM} 
            natijaS={natijaS}
            natija={natija}  
            val={val}
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
