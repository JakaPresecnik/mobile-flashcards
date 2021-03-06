import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import generateID from '../util.js'

import { connect } from 'react-redux'
import { addDeck } from '../actions'

class AddDeck extends Component {
  state = {
    inputText: '',
  }

  onSubmit(inputText) {
    const { navigation, dispatch } = this.props
    const id = generateID()

    dispatch(addDeck(inputText, id))
    this.setState({inputText: ''})
    navigation.navigate('Deck', {key: this.props.route.key, id: id})

  }

  render() {
    const { inputText } = this.state

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="height"
          enabled={true}
        >
            <Text style={styles.headerText}>What is the title of your new deck?</Text>
            <TextInput onChangeText={inputText => {this.setState({inputText})}} style={styles.inputText} placeholder = "Deck Name" value={inputText} ></TextInput>


          <TouchableOpacity
            disabled={inputText === ''}
            style={[styles.btn, {backgroundColor: '#c2f2e1'}]}
            onPress={e => { this.onSubmit(inputText) } }>
            <Text style={styles.btnText}>SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}


export default connect()(AddDeck)
