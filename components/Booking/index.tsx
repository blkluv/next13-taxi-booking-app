'use client';
;import AutoComplete from './AutoCompleteAddress'
import Cards from './Cards';
import Cars from './Cars';

const Booking = () => {
  const screenHeight = window.innerHeight*0.72;
  return (
    <div className='p-5 mb-4'>
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md mt-4" style={{ height: screenHeight }}>
        <AutoComplete />
        <Cars />
        <Cards />
        <button 
          className="w-full bg-yellow-400 p-1 rounded-md mt-4"
          onClick={() => alert('Booked')}
        >Book</button>
      </div>
    </div>
  )
}

export default Booking