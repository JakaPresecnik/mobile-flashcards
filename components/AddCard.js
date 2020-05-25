import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native'
import styles from './styles'

class AddCard extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView style={[styles.container]}>
          <TextInput style={styles.inputText} placeholder = "Question" ></TextInput>
          <TextInput style={styles.inputText} placeholder = "Answer" ></TextInput>
            <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1', marginTop: 35}]}>
              <Text style={styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}

export default AddCard
