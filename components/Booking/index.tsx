'use client';
;import AutoComplete from './AutoCompleteAddress'
import Cars from './Cars';

const Booking = () => {
  const screenHeight = window.innerHeight*0.72;
  return (
    <div className='p-5'>
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md" style={{ height: screenHeight }}>
        <AutoComplete />
        <Cars />
      </div>
    </div>
  )
}

export default Booking