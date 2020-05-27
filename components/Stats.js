import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import ProgressCircle from 'react-native-progress-circle'

import { connect } from 'react-redux'

class Stats extends Component {
  render() {
    const { correct, incorrect } = this.props.route.params
    const percentage = correct === 0 ? 0 : (correct / (correct + incorrect) * 100)

    return (
      <View style={[styles.container, {marginTop: 50}]}>
        <View style={styles.container}>
          <ProgressCircle
              percent={percentage}
              radius={100}
              borderWidth={35}
              color='green'
              shadowColor='red'
              bgColor='#f6fffd'
          >
              <Text style={{ fontSize: 40 }}>{Math.round(percentage)}%</Text>
          </ProgressCircle>
          <View style={styles.textBox}>
            <Text style={[styles.regularText, {color: 'green'}]}>Correct answers: {correct}</Text>
            <Text style={[styles.regularText, {color: 'red'}]}>Incorrect answers: {incorrect}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default connect()(Stats)