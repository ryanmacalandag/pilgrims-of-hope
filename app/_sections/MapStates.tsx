"use client";

import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export type MarkerDetailsType = {
  position: google.maps.LatLngLiteral;
};

export type MapDetailsType = {
  center: google.maps.LatLngLiteral;
  zoom: number;
  markers: MarkerDetailsType[];
};

export default function MapsState({ center, zoom, markers }: MapDetailsType) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY!}>
      <Map
        className="w-full h-[200px] md:h-[280px]"
        zoom={zoom}
        center={center}
        disableDefaultUI={false}
      >
        {markers.map((marker, key) => {
          return <Marker position={marker.position} key={key} />;
        })}
      </Map>
    </APIProvider>
  );
}
