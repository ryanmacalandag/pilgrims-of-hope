"use client";

import React from "react";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

export type MapDetailsType = {
  center?: google.maps.LatLngLiteral;
  zoom?: number | 5;
  markers?: google.maps.LatLngLiteral[];
};

export default function StatesHeaderMap({
  center,
  zoom,
  markers,
}: MapDetailsType) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY!}>
      <Map
        className="w-full h-[200px] md:h-[280px]"
        defaultZoom={zoom}
        minZoom={4}
        maxZoom={12}
        defaultCenter={center}
        disableDefaultUI={false}
        gestureHandling={"cooperative"}
        reuseMaps={true}
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_ID}
      >
        {markers &&
          markers.map((marker, key) => {
            return (
              <AdvancedMarker position={marker} key={key}>
                <Pin
                  background={"#0f9d58"}
                  borderColor={"#006425"}
                  glyphColor={"#60d98f"}
                />
              </AdvancedMarker>
            );
          })}
      </Map>
    </APIProvider>
  );
}
