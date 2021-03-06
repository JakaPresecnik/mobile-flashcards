import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'
import { getData } from './actions'

import Home from './components/Home'
import AddDeck from './components/AddDeck'
import styles from './components/styles'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import Stats from './components/Stats'
import {setLocalNotification} from './util'

const persistConfig = {
  key: '@flashcards:storage',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, middleware)

const Tab = createMaterialTopTabNavigator()

function HomeTabScreen() {
 return (
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
  );
}

const HomeStack = createStackNavigator()

export default class App extends React.Component {

  componentDidMount() {
    AsyncStorage.getItem('@flashcards:storage')
    .then(JSON.parse)
    .then((data) => {
      console.log('Data retrieved!')
      store.dispatch(getData(data))
    })
  }

  render() {
    return (

      <Provider store={store}>

          <View style={{flex: 1}}>

            <NavigationContainer>
              <HomeStack.Navigator screenOptions={{
                  headerStyle: {
                  backgroundColor: '#417070',
                },
                headerTintColor: '#c2f2e1',
              }}>
               <HomeStack.Screen name="Home" component={HomeTabScreen} options={{headerShown: false}}  />
               <HomeStack.Screen name="Deck" component={Deck} options={({ route }) => ({ title: route.params.name })}
    />
               <HomeStack.Screen name="Quiz" component={Quiz} />
               <HomeStack.Screen name="AddCard" component={AddCard} />
               <HomeStack.Screen name="Stats" component={Stats} />
              </HomeStack.Navigator>


            </NavigationContainer>

          </View>

      </Provider>
    )
  }
}
