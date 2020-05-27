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

import { connect } from 'react-redux'
import { addCard } from '../actions'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  onSubmit(question, answer, id) {
    const { navigation, dispatch } = this.props

    dispatch(addCard(question, answer, id))
    this.setState({
      question: '',
      answer: ''
    })
     navigation.navigate('Deck')
  }

  render() {
    const { question, answer } = this.state
    const { id } = this.props.route.params

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView style={[styles.container]}>
          <TextInput onChangeText={text => this.setState({question: text})} value={question} style={styles.inputText} placeholder = "Question" ></TextInput>
          <TextInput onChangeText={text => this.setState({answer: text})} value={answer} style={styles.inputText} placeholder = "Answer" ></TextInput>
            <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1', marginTop: 35}]}>
              <Text onPress={e => { this.onSubmit(question, answer, id) }} style={styles.btnText}>SUBMIT</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect()(AddCard)
