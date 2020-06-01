import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import { connect } from 'react-redux'

import styles from './styles'

class Home extends Component {
  render() {
    const { navigation, decks, deckIds } = this.props

    if (decks === null || Object.entries(decks).length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.headerText}>You have no decks in your collection.</Text>
        </View>
      )
    }
    return (
      <ScrollView >

        {deckIds.map((id) => (
          <TouchableOpacity style={styles.box} key={id} onPress={ () => navigation.navigate('Deck', {id: id, name: decks[id].name}) }>
            <Text style={styles.deckName}>{decks[id].name}</Text>
            <Text style={styles.numCards}>{decks[id].collection.length} card{decks[id].collection.length === 1 ? ('') : ('s')}</Text>
          </TouchableOpacity>
        ))}

      </ScrollView>

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
