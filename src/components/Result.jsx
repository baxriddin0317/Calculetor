import React from 'react'
import Copy from "../Img/Copy.png";

function Result({natijaS, natijaM, natija, val, surat1, surat2, maxraj1, maxraj2}) {
    
  return (
    <div className='w-full md:w-[38%] bg-white border border-[#E5E7EB] rounded-lg mb-5'>
        <div className='p-4'>
            <div className='flex mb-2 justify-between'>
                <h2 className='text-[#333333] font-semibold text-xl'>Result</h2>
                <img className='cursor-pointer' src={Copy} alt="" />
            </div>
            <div className='flex items-center'>
                {
                    natija ? <div className='flex items-center'>
                        
                        <div className='flex items-center flex-col'>
                            <p className='text-xl font-bold text-[#6B7280]' >{surat1}</p>
                            <span className='bg-[#333] block w-full h-px'></span>
                            <p className='text-xl font-bold text-[#6B7280]'>{maxraj1}</p>                
                        </div>
                        <div className='mb-1 mx-2'>
                            {val}
                        </div>
                        <div className='flex items-center flex-col'>
                            <p className='text-xl font-bold text-[#6B7280]' >{surat2}</p>
                            <span className='bg-[#333] block w-full h-px'></span>
                            <p className='text-xl font-bold text-[#6B7280]'>{maxraj2}</p>                
                        </div>
                        <div className='mb-1 mx-2'>
                            =
                        </div>

                        <div className='flex items-center'>
                            {(Math.abs(natijaS/natijaM) >= 1 || natijaS/natijaM === 0)   && <p className='text-xl font-bold text-[#6B7280]' >{natijaS/natijaM < 0 ? -Math.floor(Math.abs(natijaS/natijaM)) : Math.floor(Math.abs(natijaS/natijaM)) }</p>}
                            {natijaS%natijaM !== 0 ?  <div>
                            <p className='text-xl font-bold text-[#6B7280]' >{Math.abs(natijaS%natijaM)}</p>
                            <span className='bg-[#333] block w-full h-px'></span>
                            <p className='text-xl font-bold text-[#6B7280]'>{natijaM}</p>
                        </div> : null}
                    </div>
                    </div> : <p className='text-xl font-bold text-[#6B7280]'>?</p>
                }
            </div>
        </div>
        <span className='my-4 w-full bg-[#6B7280] flex h-px'></span>
        <div className='p-4'>
            <div className='flex justify-between'>
                <h2 className='text-[#333333] font-semibold text-xl'>Result in decimals: </h2>
                <img className='cursor-pointer' src={Copy} alt="" />
            </div>
            <div>
                {natija ? <p className='text-xl font-bold text-[#6B7280]'>{natijaS/natijaM}</p> : <p className='text-xl font-bold text-[#6B7280]'>?</p>}
            </div>
        </div>
    </div>
  )
}

export default Result

