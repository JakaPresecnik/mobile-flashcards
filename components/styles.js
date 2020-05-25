'use strict';

import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    padding: 20,
    marginTop: 50,
    alignSelf: 'stretch',
    backgroundColor: '#d6eae6',
  },
  deckName: {
    textAlign: 'center',
    fontSize: 35,
  },
  numCards: {
    textAlign: 'center',
    fontSize: 25,
    color: '#417070',
    marginBottom: 100,
  },
  headerText: {
    marginTop: 50,
    marginBottom: 25,
    padding: 5,
    fontSize: 35,
    textAlign: 'center',
  },
  inputText: {
    fontSize: 25,
    marginTop: 25,
    width: 250,
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#c2f2e1',
  },
  btn: {
    marginBottom: 25,
    padding: 10,
    width: 170,
    borderRadius: 3,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#417070',
    fontWeight: 'bold',
  },
  cardText: {
    marginTop: 25,
    marginBottom: 25,
    fontSize: 25,
    textAlign:'center',
    color: '#a5c262',
    fontWeight: 'bold',
  },
  regularText: {
    padding: 5,
    fontSize: 25,
    textAlign: 'center',
  },
  textBox: {
    marginTop: 35,
  }
})
