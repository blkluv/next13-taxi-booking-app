import { DirectionDataContext } from '@/Context/DirectionDataContext';
import { SelectedCarAmountContext } from '@/Context/SelectedCarAmountContext';
import CarList from '@/data/CarList';
import Image from 'next/image';
import React, { useContext, useState } from 'react'

const Cars = () => {

    const { directionData, setDirectionData } = useContext<any>(DirectionDataContext);

    const [selectedCar, setSelectedCar] = useState<any>();
    const { carAmount, setCarAmount } = useContext(SelectedCarAmountContext);

    const getCost = (charges: any) => {
        return(
            charges*directionData.routes[0].distance*0.000621371192 // convert meters to miles
        ).toFixed(2); // roundup the distance value to 2 decimal places
    };

    return (
        <div className="mt-3">
            <h2 className="font-semibold">Select Car</h2>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                {CarList.map((car, index) => (
                    <div 
                        key={index}
                        className={`m-2 p-2 border-[1px] rounded-md cursor-pointer hover:border-white hover:bg-white ease ${selectedCar?.name === car.name ? 'border-yellow-400 bg-yellow-50' : null}`}
                        onClick={() => {
                            setSelectedCar(car)
                            setCarAmount(car.price)
                        }}
                    >
                        <Image 
                            className='w-full'
                            src={car.image}
                            alt={car.name}
                            width={75}
                            height={90}
                        />
                        <div className="flex justify-between">
                            <h2 className="text-gray-800">{car.name}</h2>
                            {directionData?.routes ? 
                                <span className="text-black font-bold">
                                    {getCost(car.price)}$
                                </span>
                                : null
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cars