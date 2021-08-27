import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleSend = () => {
    navigation.navigate('ResultScreen', {message});
  }

  return (
    <View style={{flexDirection: 'row', margin: 30}}>
      <TextInput 
        placeholder='Message'
        onChangeText={(text) => setMessage(text)}
        style={{width: 300, borderWidth: 1}}
      />
      <Button
        title='SEND'
        onPress={() => handleSend()}
      />
    </View>
  );
}
