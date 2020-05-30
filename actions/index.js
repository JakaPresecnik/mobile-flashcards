import generateID from '../util.js'

export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const SAVE_STATS = 'SAVE_STATS'

export const addDeck = (deckName,id) => {
  return {
    type: ADD_DECK,
    key: id,
    deckName,
  }
}

export const addCard = (question, answer, id) => {
  return {
    type: ADD_CARD,
    key: generateID(),
    question,
    answer,
    id,
  }
}

export const saveStats = (correct, incorrect, id) => {
  return {
    type: SAVE_STATS,
    correct,
    incorrect,
    id,
  }
}
