import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-community/async-storage';

export default function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const NOTIFICATION_KEY = 'Flashcards:notifications'
const STORAGE_KEY = 'STORAGE_KEY'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function createNotification () {
  return {
    title: "Time to learn!",
    body: "It is time to learn with flashcards!",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(18)
              tomorrow.setMinutes(0)
              Notifications.scheduleLocalNotificationAsync(createNotification(), {
                time: tomorrow,
                repeat: 'day',
              })
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
