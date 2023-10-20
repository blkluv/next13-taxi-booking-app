"use client";
import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext, useEffect, useRef } from 'react'
import { Map, Marker } from 'react-map-gl';
// Styling for the marker
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from './Markers';
import { SourceCoordinatesContext } from '@/Context/SourceCoordinatesContext';
import { DestinationCoordinatesContext } from '@/Context/DestinationCoordinatesContext';

const MapBoxMap = () => {

  // useUser() from Clerk can be used to get the user's profile and display it on the map inside the marker/pointer

  const mapRef = useRef<any>(null);
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { sourceCoordinates, setSourceCoordinates } = useContext<any>(SourceCoordinatesContext);
  const { destinationCoordinates, setDestinationCoordinates } = useContext<any>(DestinationCoordinatesContext);

  //Fly over to the Source or Destination coordinates when they are selected from the address suggestion dropdown
  useEffect(() => {
    if(sourceCoordinates){
      mapRef.current?.flyTo({
        center: [
          sourceCoordinates.lat,
          sourceCoordinates.lng
        ],
        duration: 2500
      });
    }
  },[sourceCoordinates]);

  useEffect(() => {
    if(destinationCoordinates){
      mapRef.current?.flyTo({
        center: [
          destinationCoordinates.lat,
          destinationCoordinates.lng
        ],
        duration: 2500
      });
    }
  },[destinationCoordinates]);

  return (
    <div className="px-5">
      <div className="rounded-lg overflow-hidden">
      <h2 className="text-[20px] font-semibold text-center text-2xl ">Map</h2>
        {userLocation ? <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: userLocation.lng,
            latitude: userLocation.lat,
            zoom: 14
          }}
          style={{width: '100%', height: 800, borderRadius: 10}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Markers />
        </Map>
        : null}
      </div>
    </div>
  )
}

export default MapBoxMap