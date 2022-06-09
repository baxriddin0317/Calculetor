import React, { useState } from 'react'
import InputTeg from './InputTeg'

function Calculet({setNatijaM, setNatijaS, natijaM, natijaS, natija, setNatija, setEkub}) {
    const [val, setVal ] = useState("+");
    const [surat1, setSurat1] = useState();
    const [surat2, setSurat2] = useState();
    const [maxraj1, setMaxraj1] = useState();
    const [maxraj2, setMaxraj2] = useState();
    const [clear, setClear] = useState(false);

    const handleSelect = (e) => {
        setVal(e.target.value);
    }

    const funClear = () => {
        setNatija(false);
        setClear(true);
    }
    
    const funCalculat = () => {  
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

    const funAdd = () => {
        setNatijaS(surat1*maxraj2 + surat2*maxraj1);
        setNatijaM(maxraj1*maxraj2);
    }

    const funSplit = () => {
        setNatijaS(surat1*maxraj2 - surat2*maxraj1);
        setNatijaM(maxraj1*maxraj2);
    }

    const funMultiply = () => {
        setNatijaS(surat1*surat2);
        setNatijaM(maxraj1*maxraj2);
    }

    const funDivision = () => {
        setNatijaS(surat1*maxraj2);
        setNatijaM(maxraj1*surat2);
    }

  return (
    <div className='w-[100%] md:w-[60%] bg-[#fff] border border-[#E5E7EB] rounded-[8px] px-[15px] py-[18px] mb-[20px] '>
        <div className='flex items-center justify-between'>
            <div className='w-[25%] md:w-[87px] flex flex-col'>
                <InputTeg setValue={setSurat1} clear={clear} setClear={setClear} />
                <span className='mb-[16px] w-[100%] md:w-[87px] bg-[#6B7280] flex h-[1px]'></span>
                <InputTeg setValue={setMaxraj1} clear={clear} setClear={setClear} />
            </div>
            <div className='mb-[16px]'>
                <select onChange={handleSelect} className='border border-[#E5E7EB] bg-[#fff] rounded-[6px] p-[9px]'>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="of">of</option>
                </select>
            </div>
            <div className='w-[25%] md:w-[87px] flex flex-col'>
                <InputTeg setValue={setSurat2} clear={clear}  setClear={setClear} />
                <span className='mb-[16px] w-[100%] md:w-[87px] bg-[#6B7280] flex h-[1px]'></span>
                <InputTeg setValue={setMaxraj2} clear={clear}  setClear={setClear} />    
            </div>
            <div className='mb-[16px]'>
                =
            </div>
            {natija ? <div className='max-w-[25%] md:w-[87px] flex flex-col'>
                <p className="border mb-[16px] border-[#E5E7EB] bg-[#fff] rounded-[6px] p-[9px]">{natijaS}</p>
                <span className='mb-[16px] w-[100%] md:w-[87px] bg-[#6B7280] flex h-[1px]'></span>
                <p className="border mb-[16px] border-[#E5E7EB] bg-[#fff] rounded-[6px] p-[9px]">{natijaM}</p>
            </div> : <div className='max-w-[25%] md:w-[87px] flex flex-col'>
                    <p className='mb-[16px] text-[20px] font-bold text-[#6B7280]'>?</p>
                </div> }
        </div>
        <div className='flex w-[100%] justify-between items-center'>
            <button className='rounded-[6px] bg-[#EEF2FF] w-[45%] text-[#4F46E5] p-[9px]' onClick={funClear} >Clear</button>
            <button className='rounded-[6px] bg-[#4F46E5] w-[45%] text-[#fff] p-[9px]' onClick={funCalculat}>Calculate</button>
        </div>
    </div>
  )
}

export default Calculet