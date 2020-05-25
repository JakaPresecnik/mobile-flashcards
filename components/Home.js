import React, { Component } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

import styles from './styles'

class Home extends Component {
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Deck')}>
          <Text style={styles.deckName}>Deck Name</Text>
          <Text style={styles.numCards}>20 cards</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

export default Home
