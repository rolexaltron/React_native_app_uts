import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput, Button
} from 'react-native';
import React, { useState } from 'react';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Profile from './Profile';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: { name: string };
};

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Home = ({ navigation }: HomeProps) => {
      const [num1, setNum1] = useState('');
      const [num2, setNum2] = useState('');
      const [result, setResult] = useState('');
    
      const calculate = (operator: '+' | '-' | '*' | '/') => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
    
        if (isNaN(a) || isNaN(b)) {
          setResult('Invalid input');
          return;
        }
    
        switch (operator) {
          case '+':
            setResult((a + b).toString());
            break;
          case '-':
            setResult((a - b).toString());
            break;
          case '*':
            setResult((a * b).toString());
            break;
          case '/':
            setResult(b !== 0 ? (a / b).toString() : 'Cannot divide by 0');
            break;
          default:
            setResult('Unknown operation');
        }
      };
  return (
    
   <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="First number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => calculate('+')} />
        <Button title="-" onPress={() => calculate('-')} />
        <Button title="×" onPress={() => calculate('*')} />
        <Button title="÷" onPress={() => calculate('/')} />
      </View>

      <Text style={styles.result}>Result: {result}</Text>
    <Button
      title="profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#rgba(209, 179, 179, 0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  result: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
})



