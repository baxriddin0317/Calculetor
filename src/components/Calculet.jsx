import React, { useState } from 'react'
import InputTeg from './InputTeg'

function Calculet({setNatijaM, setNatijaS, natijaM, natijaS, natija, setNatija, setVal, val, setSurat1, setSurat2, setMaxraj1, setMaxraj2}) {
    const [clear, setClear] = useState(false);
    const [ s1, setS1 ] = useState()
    const [ s2, setS2 ] = useState()
    const [ m1, setM1 ] = useState()
    const [ m2, setM2 ] = useState()

    const handleSelect = (e) => {
        setNatija(false);
        setVal(e.target.value);
    }

    const funClear = () => {
        setNatija(false);
        setClear(true);
    }

    const Ekub = (son1, son2) => {
        for(let i=1; i<=Math.abs(son1) && i<=Math.abs(son2); i++){
            if(Math.abs(son1)%i === 0 && Math.abs(son2)%i === 0){
                var g = i;
            }
        }
        return g;
    }

    const funAdd = () => {
        let son1 = s1*m2 + s2*m1;
        let son2 = m2*m1;
        let ekub = Ekub(son1, son2);
        setNatijaS(son1/ekub);
        setNatijaM(son2/ekub);
    }

    const funSplit = () => {
        let son1 = s1*m2 - s2*m1;
        let son2 = m1*m2;
        let ekub = Ekub(son1, son2);
        setNatijaS(son1 === 0 ? son1 : son1/ekub);
        setNatijaM(son1 === 0 ? son2 : son2/ekub);
    }

    const funMultiply = () => {
        let son1 = s1*s2;
        let son2 = m2*m1;
        let ekub = Ekub(son1, son2);
        setNatijaS(son1/ekub);
        setNatijaM(son2/ekub);
    }

    const funDivision = () => {
        let son1 = s1*m2;
        let son2 = m1*s2;
        let ekub = Ekub(son1, son2);
        console.log(ekub);
        setNatijaS(son1/ekub);
        setNatijaM(son2/ekub);
    }

    const funCalculat = () => {  
        setSurat1(s1)
        setSurat2(s2)
        setMaxraj1(m1)
        setMaxraj2(m2)
        if(val === "+"){
            funAdd();
        }else if(val === "-"){
            funSplit();
        }else if(val === "*"){
            funMultiply();
        }else if(val === "/"){
            funDivision();
        }

        setNatija(true);
    }

  return (
    <div className='w-full md:w-3/5 bg-white border border-[#E5E7EB] rounded-lg px-4 py-5 mb-5 '>
        <div className='flex items-center justify-between mb-4'>
            <div className='w-1/4 md:w-[87px] flex flex-col'>
                <InputTeg setValue={setS1} clear={clear} setClear={setClear} m={false} />
                <span className='mb-4 w-full md:w-[87px] bg-[#6B7280] flex h-px'></span>
                <InputTeg setValue={setM1} clear={clear} setClear={setClear} m={true} />
            </div>
            <div className='mb-4'>
                <select onChange={handleSelect} className='border border-[#E5E7EB] bg-[#fff] rounded-md p-2'>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </div>
            <div className='w-1/4 md:w-[87px] flex flex-col'>
                <InputTeg setValue={setS2} clear={clear}  setClear={setClear} m={false} />
                <span className='mb-4 w-full md:w-[87px] bg-[#6B7280] flex h-px'></span>
                <InputTeg setValue={setM2} clear={clear}  setClear={setClear} m={true} />    
            </div>
            <div className='mb-4'>
                =
            </div>
            {
                natija ? <div className='w-1/4 md:w-[87px] flex flex-col'>
                    {natijaM !== 1 ? <div>
                        <p className="border mb-[16px] border-[#E5E7EB] bg-[#fff] rounded-[6px] p-[9px]">{natijaS}</p>
                        <span className='mb-[16px] w-[100%] md:w-[87px] bg-[#6B7280] flex h-[1px]'></span>
                        <p className="border mb-[16px] border-[#E5E7EB] bg-[#fff] rounded-[6px] p-[9px]">{natijaM}</p>
                    </div> 
                    : <div>
                        <p className="border mb-[16px] border-[#E5E7EB] bg-[#fff] rounded-[6px] p-[9px]">{natijaS}</p>
                    </div>}
                </div> : <div className='w-1/4 md:w-[87px] flex flex-col'>
                    <p className='mb-4 text-xl font-bold text-[#6B7280]'>?</p>
                </div> 
            }
        </div>
        <div className='flex w-full justify-between items-center'>
            <button className='rounded-md bg-[#EEF2FF] w-2/5 text-[#4F46E5] p-2' onClick={funClear} >Clear</button>
            <button className='rounded-md bg-[#4F46E5] w-2/5 text-[#fff] p-2' onClick={funCalculat}>Calculate</button>
        </div>
    </div>
  )
}

export default Calculet