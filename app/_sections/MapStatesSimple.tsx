"use client";

import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapsState({ lat, lng }: { lat: number; lng: number }) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY!}>
      <Map
        className="w-full h-[200px] md:h-[280px]"
        zoom={5}
        center={{ lat, lng }}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
      >
        <Marker position={{ lat: lat, lng: lng }} />
        <Marker position={{ lat: lat + 2, lng: lng + 2 }} />
      </Map>
    </APIProvider>
  );
}
