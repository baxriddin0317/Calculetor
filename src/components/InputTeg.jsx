import React, { useEffect, useRef, useState } from 'react'

function InputTeg({setValue, clear, setClear}) {
    const [war, setWar] = useState(false);
    const refInput = useRef();

    const handleChange = (e) => {
        if(!isNaN(e.target.value)) {
            setWar(false);
            setValue(e.target.value);
        }else{
            refInput.current.value ="";
            setWar(true);
        }
        setClear(false);
    }

    useEffect(() => {
        return () => {
            if(!clear){
                refInput.current.value = "";
            }  
        };
    }, [clear])

  return (
    <input  
        ref={refInput}
        className={war ? 'outline-none border mb-[16px] border-red-600 bg-[#fff] rounded-[6px] p-[9px]' : 'outline-none border mb-[16px] border-[#E5E7EB] bg-[#fff] rounded-[6px] p-[9px]'} 
        type="text"
        onChange={handleChange}
    />
  )
}

export default InputTeg