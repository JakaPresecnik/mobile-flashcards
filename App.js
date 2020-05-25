import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import AddDeck from './components/AddDeck'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6fffd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
