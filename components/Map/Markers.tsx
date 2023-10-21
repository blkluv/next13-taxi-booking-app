import { DestinationCoordinatesContext } from '@/Context/DestinationCoordinatesContext';
import { SourceCoordinatesContext } from '@/Context/SourceCoordinatesContext';
import { UserLocationContext } from '@/Context/UserLocationContext';
import React, { useContext } from 'react'
import { Map, Marker } from 'react-map-gl'

const Markers = () => {

    const { userLocation, setUserLocation } = useContext(UserLocationContext);
    const { sourceCoordinates, setSourceCoordinates } = useContext<any>(SourceCoordinatesContext);
    const { destinationCoordinates, setDestinationCoordinates } = useContext<any>(DestinationCoordinatesContext);

    return (    
        <div className="">
            {/* User Marker */}
            <Marker 
                longitude={userLocation.lng} 
                latitude={userLocation.lat} 
                anchor="bottom" 
            >
                <img 
                    src="./pin.png" 
                    className='w-10 h-10'
                />
            </Marker>

            {/* Source Marker */}
            { sourceCoordinates.length ?<Marker 
                longitude={sourceCoordinates.lng} 
                latitude={sourceCoordinates.lat} 
                anchor="bottom" 
            >
                <img 
                    src="./pin.png" 
                    className='w-10 h-10'
                />
            </Marker>
            :
            null}

            {/* Destination Marker */}
            { destinationCoordinates.length ?<Marker 
                longitude={destinationCoordinates.lng} 
                latitude={destinationCoordinates.lat} 
                anchor="bottom" 
            >
                <img 
                    src="./pin.png" 
                    className='w-10 h-10'
                />
            </Marker>
        :
        null}
        </div>
    )
}

export default Markers