import { View, Text } from "react-native";
import React from "react";
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      className="w-full h-full rounded-2xl ring-1 ring-red-500"
      tintColor="black"
    >
      <Text>Map</Text>
    </MapView>
  );
};
export default Map;
