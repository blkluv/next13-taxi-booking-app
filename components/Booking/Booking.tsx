'use client';
;import { useContext, useState } from 'react';
import AutoComplete from './AutoCompleteAddress'
import Cards from './Cards';
import Cars from './Cars';
import { useRouter } from 'next/navigation';
import { SelectedCarAmountContext } from '@/Context/SelectedCarAmountContext';

const Booking = () => {
  const screenHeight = window.innerHeight*0.72;
  const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);
  const router:any = useRouter();
  return (
    <div className='p-5 mb-4 bg-stone-300'>
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md mt-4" style={{ height: screenHeight }}>
        <AutoComplete />
        <Cars />
        <Cards />
        <button 
          className={`w-full bg-yellow-400 p-1 rounded-md mt-4 ${!carAmount ? 'bg-gary-200' : null}`}
          disabled={!carAmount}
          onClick={() => router.push('/payment')}
        >Book</button>
      </div>
    </div>
  )
}

export default Booking