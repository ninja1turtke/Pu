import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>dsdfsdghgfdhgfhhgkkghkhsdf!</Text>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  