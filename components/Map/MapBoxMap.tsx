"use client";
import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext } from 'react'
import { Map, Marker } from 'react-map-gl';
// Styling for the marker
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBoxMap = () => {

  // useUser() from Clerk can be used to get the user's profile and display it on the map inside the marker/pointer

  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  return (
    <div className="px-5">
      <div className="rounded-lg overflow-hidden">
      <h2 className="text-[20px] font-semibold text-center text-2xl ">Map</h2>
        {userLocation ? <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: userLocation.lng,
            latitude: userLocation.lat,
            zoom: 14
          }}
          style={{width: '100%', height: 800, borderRadius: 10}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker longitude={userLocation.lng} latitude={userLocation.lat} anchor="bottom" >
            <img 
              src="./pin.png" 
              className='w-10 h-10'
            />
          </Marker>
        </Map>
        : null}
      </div>
    </div>
  )
}

export default MapBoxMap