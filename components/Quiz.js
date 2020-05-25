import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FlipCard from 'react-native-flip-card'
import styles from './styles'
import QuizResults from './QuizResults'

// FlipCard added instructions: https://openbase.io/js/react-native-flip-card

class Quiz extends Component {

  render() {
    return(
      <View style={[styles.container, {marginTop: 50}]}>

      <QuizResults />

        {/*<FlipCard flipHorizontal={true} flipVertical={false}>
          <View style={styles.face}>
            <Text style={styles.headerText}>Does React Native work with Android?</Text>
            <Text style={styles.cardText}>Show answer</Text>
          </View>
          <View style={styles.back}>
            <Text style={styles.headerText}>Yes</Text>
            <Text style={styles.cardText}>Show question</Text>
          </View>
        </FlipCard>

        <TouchableOpacity style={[styles.btn, {backgroundColor: 'green'}]}>
          <Text style={[styles.btnText, {color: '#003f00'}]}>CORRECT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: 'red'}]}>
          <Text style={[styles.btnText, {color: '#3f0000'}]}>INCORRECT</Text>
        </TouchableOpacity>*/}

      </View>
    )
  }
}
export default Quiz
