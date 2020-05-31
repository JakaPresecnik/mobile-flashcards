import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

import { connect } from 'react-redux'

class Deck extends Component {
  render() {
    const { navigation, route, decks } = this.props
    const { id } = route.params

    return(
      <View style={styles.container}>

        <Text style={styles.headerText}>{decks[id].name}</Text>
        <Text style={styles.numCards}>{decks[id].collection.length} card{decks[id].collection.length === 1 ? ('') : ('s')}</Text>
        <View>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
            <Text style={styles.btnText} onPress={() => navigation.navigate('AddCard', {id: decks[id].key})}>ADD CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
            <Text style={styles.btnText} onPress={() => navigation.navigate('Stats', {correct: decks[id].answeredCorrectNum, incorrect: decks[id].answeredIncorrectNum, id: id})} >VIEW STATS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#a5c262'}]}>
            <Text style={styles.btnText} onPress={() => navigation.navigate('Quiz', {collection: decks[id].collection, id: decks[id].key})}>START QUIZ</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (decks) => {
  return {decks,}
}

export default connect(mapStateToProps)(Deck)
