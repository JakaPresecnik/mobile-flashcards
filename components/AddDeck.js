import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>What is the title of your new deck?</Text>
        <TextInput style={styles.inputText} placeholder = "Deck Name" ></TextInput>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
          <Text style={styles.btnText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default AddDeck
