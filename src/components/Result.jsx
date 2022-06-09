import React from 'react'
import Copy from "../Img/Copy.png";

function Result({natijaS, natijaM, natija}) {
    
  return (
    <div className='w-[100%] md:w-[38%] bg-[#fff] border border-[#E5E7EB] rounded-[8px] mb-[20px]'>
        <div className='p-[16px]'>
            <div className='flex mb-[8px] justify-between'>
                <h2 className='text-[#333333] font-[600] text-[20px]'>Result</h2>
                <img className='cursor-pointer' src={Copy} alt="" />
            </div>
            <div className='flex'>
                {
                    natija ? <div>
                    <p className='text-[20px] font-bold text-[#6B7280]' >{natijaS}</p>
                    <span className='bg-[#333] block w-full h-[1px]'></span>
                    <p className='text-[20px] font-bold text-[#6B7280]'>{natijaM}</p>
                </div> : <p className='text-[20px] font-bold text-[#6B7280]'>?</p>
                }

            </div>
        </div>
        <span className='my-[15px] w-[100%] bg-[#6B7280] flex h-[1px]'></span>
        <div className='p-[16px]'>
            <div className='flex justify-between'>
                <h2 className='text-[#333333] font-[600] text-[20px]'>Result in decimals: </h2>
                <img className='cursor-pointer' src={Copy} alt="" />
            </div>
            <div>
                {natija ? <p className='text-[20px] font-bold text-[#6B7280]'>{natijaS/natijaM}</p> : <p className='text-[20px] font-bold text-[#6B7280]'>?</p>}
            </div>
        </div>
    </div>
  )
}

export default Result