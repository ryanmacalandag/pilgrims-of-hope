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
  console.log("hey");

  return (
    <div className="group relative w-full flex flex-col">
      <div className="w-full h-fit max-h-[800px] group-aria-[checked=true]:max-h-[10px] overflow-hidden transition-max-h duration-500 ease-in-out">
        <APIProvider
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY!}
        >
          <Map
            className="w-full h-[200px] md:h-[280px]"
            zoom={zoom}
            center={center}
            disableDefaultUI={false}
            gestureHandling={"greedy"}
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
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-1/3 translate-y-1/2 bg-gradient-to-t from-transparent via-white to-transparent"></div> */}
    </div>
  );
}
