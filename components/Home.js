import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import styles from './styles'

class Home extends Component {
  render() {
    const { navigation, decks, deckIds } = this.props

    if (decks === null) {
      return (
        <View style={styles.container}>
          <Text style={styles.headerText}>You have no decks in your collection.</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>

      {deckIds.map((id) => (
        <TouchableOpacity style={styles.box} key={id} onPress={ () => navigation.navigate('Deck', {deck: decks[id]}) }>
          <Text style={styles.deckName}>{decks[id].name}</Text>
          <Text style={styles.numCards}>{decks[id].collection.length} card{decks[id].collection.length === 1 ? ('') : ('s')}</Text>
        </TouchableOpacity>
      ))}


      </View>

    )
  }
}

const mapStateToProps = (state) => {
  if (state === undefined) {
    return {
      decks: null,
      deckIds: null,
    }
  }else {
    return {
      deckIds: Object.keys(state),
      decks: state,
    }
  }
}

export default connect(mapStateToProps)(Home)
