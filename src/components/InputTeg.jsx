import React, { useEffect, useRef, useState } from 'react'

function InputTeg({setValue, clear, setClear, m}) {
    const [war, setWar] = useState(false);
    const refInput = useRef();

    const handleChange = (e) => {
        if(!isNaN(e.target.value) || e.target.value === "-") {
            setWar(false);
            setValue(e.target.value);
        }else{
            refInput.current.value ="";
            setWar(true);
        }
        
        if(m){
            if(e.target.value === '0'){
                setWar(true);
            }
        }

        setClear(false);
    }

    useEffect(() => {
        const cleaFun = () => {
            if(!clear){
                refInput.current.value = "";
            }  
        }
    return cleaFun;
    }, [clear])

  return (
    <input  
        ref={refInput}
        className={war ? 'outline-none border mb-4 border-red-600 bg-white rounded-md p-2' : 'outline-none border mb-4 border-[#E5E7EB] bg-white rounded-md p-2'} 
        type="text"
        onChange={handleChange}
    />
  )
}

export default InputTeg