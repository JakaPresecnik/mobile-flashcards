import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

import { connect } from 'react-redux'

class Deck extends Component {
  render() {
    const { navigation, route } = this.props
    const { deck } = route.params
    
    return(
      <View style={styles.container}>

        <Text style={styles.headerText}>{deck.name}</Text>
        <Text style={styles.numCards}>{deck.collection.length} card{deck.collection.length === 1 ? ('') : ('s')}</Text>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('AddCard', {id: deck.key})}>ADD CARD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#a5c262'}]}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Quiz', {collection: deck.collection})}>START QUIZ</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default connect()(Deck)
