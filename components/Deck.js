import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import AddCard from './AddCard'
import Quiz from './Quiz'

class Deck extends Component {
  render() {
    return(
      <View style={styles.container}>

        {/*<Text style={styles.headerText}>Deck Name</Text>
        <Text style={styles.numCards}>20 cards</Text>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
          <Text style={styles.btnText}>ADD CARD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#a5c262'}]}>
          <Text style={styles.btnText}>START QUIZ</Text>
        </TouchableOpacity>*/}


        <Quiz />

      </View>
    )
  }
}

export default Deck
