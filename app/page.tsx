"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'

import { UserLocationContext } from '@/Context/UserLocationContext'
import { Booking, MapBoxMap } from '@/components'
import { SourceCoordinatesContext } from '@/Context/SourceCoordinatesContext';
import { DestinationCoordinatesContext } from '@/Context/DestinationCoordinatesContext';
import { DirectionDataContext } from '@/Context/DirectionDataContext';

export default function Home() {


  const [ userLocation, setUserLocation ] = useState<any>();
  const [ sourceCoordinates, setSourceCoordinates ] = useState<any>([]);
  const [ destinationCoordinates, setDestinationCoordinates ] = useState<any>([]);
  const [ directionData, setDirectionData ] = useState<any>([]);

  useEffect(() => {
    getUserLocation();
  },[]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Coordinates: ", position);
      
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }


  return (
    <div className="bg-gray-200">
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SourceCoordinatesContext.Provider value={{ sourceCoordinates, setSourceCoordinates }}>
          <DestinationCoordinatesContext.Provider value={{ destinationCoordinates, setDestinationCoordinates }}>
            <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="">
                  <Booking />
                </div>
                <div className="col-span-2">
                  <MapBoxMap />
                </div>
              </div>
            </DirectionDataContext.Provider>
          </DestinationCoordinatesContext.Provider>
        </SourceCoordinatesContext.Provider>
      </UserLocationContext.Provider>
    </div>
  )
}
