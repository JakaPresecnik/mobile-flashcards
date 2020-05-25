import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class Deck extends Component {
  render() {
    const { navigation } = this.props

    return(
      <View style={styles.container}>

        <Text style={styles.headerText}>Deck Name</Text>
        <Text style={styles.numCards}>20 cards</Text>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('AddCard')}>ADD CARD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#a5c262'}]}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Quiz')}>START QUIZ</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default Deck
