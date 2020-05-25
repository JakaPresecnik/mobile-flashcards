import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

class AddCard extends Component {
  render() {
    return (
      <View style={[styles.container, {marginTop: 50}]}>
      <TextInput style={styles.inputText} placeholder = "Question" ></TextInput>
      <TextInput style={styles.inputText} placeholder = "Answer" ></TextInput>
      <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1', marginTop: 35}]}>
        <Text style={styles.btnText}>SUBMIT</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export default AddCard
