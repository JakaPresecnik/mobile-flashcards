import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import styles from './styles'

class AddDeck extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="height"
          enabled={true}
        >
            <Text style={styles.headerText}>What is the title of your new deck?</Text>
            <TextInput style={styles.inputText} placeholder = "Deck Name" ></TextInput>


          <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
            <Text style={styles.btnText}>SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}


export default AddDeck
