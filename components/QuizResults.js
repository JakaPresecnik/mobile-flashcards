import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import styles from './styles'

// installed react-native-progress-circle site: https://www.npmjs.com/package/react-native-progress-circle
class QuizResults extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressCircle
            percent={80}
            radius={100}
            borderWidth={25}
            color='green'
            shadowColor='red'
            bgColor='#f6fffd'
        >
            <Text style={{ fontSize: 35 }}>{'80%'}</Text>
        </ProgressCircle>
        <View style={styles.textBox}>
          <Text style={[styles.regularText, {fontWeight: 'bold', marginBottom: 25}]}>Results:</Text>
          <Text style={[styles.regularText, {color: 'green'}]}>Correct answers: {16}</Text>
          <Text style={[styles.regularText, {color: 'red'}]}>Incorrect answers: {4}</Text>
        </View>
      </View>
    )
  }
}

export default QuizResults
