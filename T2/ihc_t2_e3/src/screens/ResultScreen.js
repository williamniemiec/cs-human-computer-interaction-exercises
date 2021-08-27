import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ResultScreen() {

  const route = useRoute();
  const message = route.params?.message;

  return (
    <View style={{margin: 20}}>
      <Text>
        {message}
      </Text>
    </View>
  );
}
