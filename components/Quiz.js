import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FlipCard from 'react-native-flip-card'
import ProgressCircle from 'react-native-progress-circle'
import styles from './styles'
import { connect } from 'react-redux'
import { saveStats } from '../actions'
import { clearLocalNotification, setLocalNotification } from '../util'

// FlipCard added instructions: https://openbase.io/js/react-native-flip-card
// installed react-native-progress-circle site: https://www.npmjs.com/package/react-native-progress-circle

class Quiz extends Component {
  state = {
    card: 0,
    correct: 0,
    incorrect: 0,
  }

  answerCorr () {
    this.setState((prevState) => ({
      card: prevState.card + 1,
      correct: prevState.correct + 1
    }))
  }

  answerIncorr () {
    this.setState((prevState) => ({
      card: prevState.card + 1,
      incorrect: prevState.incorrect + 1
    }))
  }

  restart (correct, incorrect, id) {
    const { dispatch } = this.props
    dispatch(saveStats(correct, incorrect, id))

    clearLocalNotification()
    .then(setLocalNotification)

    this.setState({
      card: 0,
      correct: 0,
      incorrect: 0,
    })
  }

  goBack (correct, incorrect, id) {
    const { navigation, dispatch } = this.props
    dispatch(saveStats(correct, incorrect, id))

    clearLocalNotification()
    .then(setLocalNotification)

    navigation.navigate('Deck')
  }

  render() {
    const { collection, id } = this.props.route.params
    const { card, correct, incorrect } = this.state
    const totalAnswers = correct + incorrect
    const percentage = correct / totalAnswers * 100

    if (collection.length === 0) {
      return (
        <View style={[styles.container, {marginTop: 50}]}>
          <Text style={styles.headerText}>You have no cards.</Text>
        </View>
      )
    }else if (collection.length === card) {
      return (
        <View style={[styles.container, {marginTop: 50}]}>
          <View style={styles.container}>
            <ProgressCircle
                percent={percentage}
                radius={70}
                borderWidth={25}
                color='green'
                shadowColor='red'
                bgColor='#f6fffd'
            >
                <Text style={{ fontSize: 30 }}>{Math.round(percentage)}%</Text>
            </ProgressCircle>
            <View style={styles.textBox}>
              <Text style={[styles.regularText, {fontWeight: 'bold', marginBottom: 10}]}>Results:</Text>
              <Text style={[styles.regularText, {color: 'green'}]}>Correct answers: {correct}</Text>
              <Text style={[styles.regularText, {color: 'red'}]}>Incorrect answers: {incorrect}</Text>
            </View>
            <TouchableOpacity onPress={e => this.restart(correct, incorrect, id)} style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
              <Text style={styles.btnText}>RESTART</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={e => this.goBack(correct, incorrect, id)} style={[styles.btn, {backgroundColor: '#c2f2e1'}]}>
              <Text style={styles.btnText}>BACK</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      return (
        <View style={[styles.container, {marginTop: 10}]}>
          <Text style={[styles.cardText, styles.cardCount]}>{card + 1}/{collection.length}</Text>
          <View>

            <FlipCard flipHorizontal={true} flipVertical={false}>
              <View style={styles.face}>
                <Text style={styles.headerText}>{collection[card].question}</Text>
                <Text style={styles.cardText}>Show answer</Text>
              </View>
              <View style={styles.back}>
                <Text style={styles.headerText}>{collection[card].answer}</Text>
                <Text style={styles.cardText}>Show question</Text>
              </View>
            </FlipCard>

            <View style={{alignSelf: 'center'}}>

              <TouchableOpacity onPress={e => this.answerCorr()} style={[styles.btn, {backgroundColor: 'green'}]}>
                <Text style={[styles.btnText, {color: '#003f00'}]}>CORRECT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={e => this.answerIncorr()} style={[styles.btn, {backgroundColor: 'red'}]}>
                <Text style={[styles.btnText, {color: '#3f0000'}]}>INCORRECT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
  }
}
export default connect()(Quiz)
