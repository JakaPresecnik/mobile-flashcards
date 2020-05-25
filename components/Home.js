import React, { Component } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import Deck from './Deck'
import styles from './styles'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.deckName}>Deck Name</Text>
          <Text style={styles.numCards}>20 cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.deckName}>Deck Name</Text>
          <Text style={styles.numCards}>20 cards</Text>
        </TouchableOpacity>

      </View>

    )
  }
}

export default Home
