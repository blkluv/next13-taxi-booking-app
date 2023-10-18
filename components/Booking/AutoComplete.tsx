import React from 'react'

const AutoComplete = () => {
    return (
        <div className="mt-5">
            <div className="">
                <label htmlFor="" className="text-gray-400">From:</label>
                <input 
                    type="text" 
                    className=' bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-600' 
                    name="" 
                    id="" 
                />
            </div>
            <div className="mt-3">
                <label htmlFor="" className="text-gray-400">To:</label>
                <input 
                    type="text" 
                    className=' bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-600' 
                    name="" 
                    id="" 
                />
            </div>
        </div>
    )
}

export default AutoComplete