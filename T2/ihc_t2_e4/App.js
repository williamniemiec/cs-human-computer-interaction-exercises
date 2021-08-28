import React, { useState, useEffect  } from 'react';
import { View, Text, NativeModules, DeviceEventEmitter } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const mSensorManager = NativeModules.SensorManager;

export default function HomeScreen() {

  const [lighting, setLighting] = useState(0.0);
  const [coords, setCoords] = useState({});
  const [gyroscopeX, setGyroscopeX] = useState(0.0);
  const [gyroscopeY, setGyroscopeY] = useState(0.0);
  const [gyroscopeZ, setGyroscopeZ] = useState(0.0);

  const locationFinder = async () => {
    Geolocation.getCurrentPosition((info) => {
      setCoords({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude
      });
    });
  }

  useEffect(() => {
    locationFinder();
  }, []);

  
  DeviceEventEmitter.addListener('Gyroscope', function (data) {
    setGyroscopeX(data.x);
    setGyroscopeY(data.y);
    setGyroscopeZ(data.z);
  });
  mSensorManager.startGyroscope(100);

  mSensorManager.startLightSensor(100);
  DeviceEventEmitter.addListener('LightSensor', function (data) {
    setLighting(data.light);
  });
  
  return (
    <View style={{margin: 30}}>
      <Text>Latitude: {coords.latitude}; Longitude: {coords.longitude}</Text>
      <Text>Lighting: {lighting}</Text>
      <Text>Gyroscope:</Text>
      <Text>
        X: {gyroscopeX}
      </Text>
      <Text>
        Y: {gyroscopeY}
      </Text>
      <Text>
        Z: {gyroscopeZ}
      </Text>
    </View>
  );
}
