"use client";

import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapsState({ lat, lng }: { lat: number; lng: number }) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY!}>
      <Map
        className="w-full h-[400px]"
        zoom={5}
        center={{ lat, lng }}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
      >
        <Marker position={{ lat, lng }} />
      </Map>
    </APIProvider>
  );
}
