import { GoogleMapsEmbed } from "@next/third-parties/google";
import React from "react";

export default function SitesMap() {
  return (
    <div>
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_DEV_GOOGLE_MAPS_API_KEY!}
        height={320}
        width="100%"
        mode="place"
        zoom="5"
        q="Alice+Springs+Australia"
      />
    </div>
  );
}
