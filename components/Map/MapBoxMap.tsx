"use client";
import React from 'react'
import { Map } from 'react-map-gl';

const MapBoxMap = () => {

  return (
    <div className="px-5">
      <div className="rounded-lg overflow-hidden">
      <h2 className="text-[20px] font-semibold text-center text-2xl ">Map</h2>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          style={{width: '100%', height: 800, borderRadius: 10}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </div>
  )
}

export default MapBoxMap