import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function IhcT2E1() {
  
  const [num1, setNum1] = useState(0.0);
  const [num2, setNum2] = useState(0.0);
  const [result, setResult] = useState(0.0);

  const handleNum1 = (num) => {
    const normalizedNumber = parseFloat(num.replace(',', '.'));
    setNum1(normalizedNumber);
  }

  const handleNum2 = (num) => {
    const normalizedNumber = parseFloat(num.replace(',', '.'));
    setNum2(normalizedNumber);
  }

  const handleSum = () => {
    setResult(num1 + num2);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        keyboardType='decimal-pad'
        onChangeText={(text) => handleNum1(text)}
        placeholder='Enter a number'
        style={styles.full}
      />
      <TextInput 
        keyboardType='decimal-pad'
        onChangeText={handleNum2}
        placeholder='Enter a number'
        style={styles.full}
      />
      <Button
        title='SUM'
        onPress={() => handleSum()}
      />
      <Text style={styles.result}>
        Result: {result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  full: {
    width: '100%',
  },
  result: {
    fontSize: 25
  }
});
