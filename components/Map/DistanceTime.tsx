import React, { useContext } from 'react'
import { DirectionDataContext } from '@/Context/DirectionDataContext';

const DistanceTime = () => {
    // DirectionData has all the values like coordinates, distance, duration, etc.
    const { directionData, setDirectionData } = useContext<any>(DirectionDataContext);

    return directionData?.routes && (
        <div className="bg-yellow-500 p-3">
            <h2 className="text-yellow-100">
                Distance: <span className="font-bold mr-3 text-black">
                    {(directionData?.routes[0]?.distance*0.000621371192).toFixed(2)} Miles
                </span>
                Duration: <span className="font-bold text-black">
                    {/* duration is divided by 60, as it is in seconds */}
                    {(directionData?.routes[0]?.duration/60).toFixed(2)} Mins
                </span>
            </h2>
        </div>
    );
}

export default DistanceTime