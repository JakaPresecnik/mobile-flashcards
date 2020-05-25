import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import AddDeck from './components/AddDeck'
import styles from './components/styles'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <View style={{flex: 1}}>

        <NavigationContainer>
          <Tab.Navigator tabBarOptions={{
            activeTintColor: '#c2f2e1',
            labelStyle: { fontSize: 20 },
            style: {
              backgroundColor: '#417070',
              height: 81,
              paddingTop: 25,
            }
          }}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Add Deck' component={AddDeck} />
          </Tab.Navigator>
        </NavigationContainer>

    </View>
  )
}
