"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'

import { UserLocationContext } from '@/context/UserLocationContext'
import { Booking, MapBoxMap } from '@/components'

export default function Home() {


  const [ userLocation, setUserLocation ] = useState<any>();
  useEffect(() => {
    getUserLocation();
  },[]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Coordinates: ", position.coords);
      
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }


  return (
    <div className="bg-gray-200">
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="">
            <Booking />
          </div>
          <div className="col-span-2">
            <MapBoxMap />
          </div>
        </div>
      </UserLocationContext.Provider>
    </div>
  )
}
