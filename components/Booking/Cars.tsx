import CarList from '@/data/CarList';
import Image from 'next/image';
import React, { useState } from 'react'

const Cars = () => {

    function calc(price: number) {
        return Math.round((price + Number.EPSILON) * 100) / 100;
    }

    const [selectedCar, setSelectedCar] = useState<any>();

    return (
        <div className="mt-3">
            <h2 className="font-semibold">Select Car</h2>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                {CarList.map((car, index) => (
                    <div 
                        key={index}
                        className={`m-2 p-2 border-[1px] rounded-md cursor-pointer ${selectedCar?.name === car.name ? 'border-yellow-400 bg-yellow-50' : null}`}
                        onClick={() => setSelectedCar(car)}
                    >
                        <Image 
                            className='w-full'
                            src={car.image}
                            alt={car.name}
                            width={75}
                            height={90}
                        />
                        <div className="flex justify-between">
                            <h2 className="text-gray-400">{car.name}</h2>
                            <span className="text-black font-bold">{calc(car.price*4.6)} $</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cars