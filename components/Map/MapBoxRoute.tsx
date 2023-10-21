import React from 'react';
import { Layer, Source } from 'react-map-gl';

const MapBoxRoute = (props: any) => {
    return (
        <Source
            type="geojson"
            data={{
                type: 'Feature',
                properties: {}, // You need to include an empty properties object
                geometry: {
                    type: 'LineString',
                    coordinates: props.coordinates,
                },
            }}
        >
            <Layer
                type="line"
                layout={{ 'line-join': 'round', 'line-cap': 'round' }} // Changed 'square' to 'round'
                paint={{ 'line-color': '#0462d4', 'line-width': 4 }}
            />
        </Source>
    );
};

export default MapBoxRoute;
