import generateID from './util.js'

export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function addDeck (deckName) {
  return {
    type: ADD_DECK,
    key: generateID(),
    deckName,
  }
}

const addCard = (question, answer) => {
  return {
    type: ADD_CARD,
    key: generateID(),
    question,
    answer,
  }
}
