import { useState,useEffect } from 'react';
import {
  APIProvider, 
  Map,
  Marker,
  useMarkerRef,
} from '@vis.gl/react-google-maps';
import { truckSVG,pushCartSVG } from '../../../utils/mapIcons';

export default function MapFood({placesToShow,ClickedPosition,handlerClicked,selectMarket}) {
  const apiUrl = import.meta.env.VITE_API_GOOGLE_MAPS;
  const [markerRef, marker] = useMarkerRef();

  return (
    <APIProvider apiKey={apiUrl}>
      <Map
        style={{width: '100%', height: '100%'}}
        defaultCenter={{lat: 37.757128, lng: -122.442068}}
        defaultZoom={10}
        minZoom={5}
        maxZoom={18}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        onClick={handlerClicked}
        restriction={{
          latLngBounds: {
            north: 37.88,   // antes era 37.84
            south: 37.67,   // antes era 37.70
            east: -122.32,  // antes era -122.35
            west: -122.55   // antes era -122.52
          },
          strictBounds: true, // Impide moverse fuera del área
        }}
      >

        <Marker ref={markerRef} position={ClickedPosition} /> 
        
        {
          placesToShow.length && placesToShow.map((place,index)=>{
            // lat,lng,facilitytype
            return <Marker 
                key={index}  
                position={{lat: place.lat, lng: place.lng }}
                onClick={()=>selectMarket(place)}
                icon={{
                  url: place.facilitytype === 'Truck' ? truckSVG : pushCartSVG,
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
              />
      
          })
        }
      </Map>
  </APIProvider>
  )
}
