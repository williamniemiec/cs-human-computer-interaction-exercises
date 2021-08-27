import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { accelerometer } from "react-native-sensors";
import { setUpdateIntervalForType, SensorTypes } from "react-native-sensors";

export default function HomeScreen() {

  const [accelerometerX, setAccelerometerX] = useState(0.0);
  const [accelerometerY, setAccelerometerY] = useState(0.0);
  const [accelerometerZ, setAccelerometerZ] = useState(0.0);
  const navigation = useNavigation();

  const hasBigChange = (x, y, z) => {
    return  Math.abs(x - accelerometerX) > 1.5 
            || Math.abs(y - accelerometerY) > 1.5 
            || Math.abs(z - accelerometerZ) > 1.5;
  }

  const hasAccelerometerInitialized = () => {
    return  accelerometerX != 0.0
            && accelerometerY != 0.0
            && accelerometerZ != 0.0;
  }

  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);
  }, []);

  accelerometer.subscribe(({ x, y, z, timestamp }) => {
    const bigChange = hasAccelerometerInitialized() && hasBigChange(x, y, z);

    setAccelerometerX(x);
    setAccelerometerY(y);
    setAccelerometerZ(z);

    if (bigChange)
        navigation.navigate('ResultScreen', {message: "Big change!"});
  });

  return (
    <View style={{margin: 30}}>
      <Text>
        X: {accelerometerX}
      </Text>
      <Text>
        Y: {accelerometerY}
      </Text>
      <Text>
        Z: {accelerometerZ}
      </Text>
    </View>
  );
}



