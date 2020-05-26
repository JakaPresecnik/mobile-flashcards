import { ADD_DECK, ADD_CARD } from '../actions'

export default function reducer (state = {}, action) {
  switch(action.type) {
    case ADD_DECK:
      return {
        ...state,
          [action.key]: {
            key: action.key,
            name: action.deckName,
            collection: [],
          }
      }
    case ADD_CARD:
      return {
        ...state,
          collection: state.collection.concat({
            key,
            question,
            answer,
            answeredCorrectNum: 0,
            answeredIncorrectNum: 0,
          })

      }
  }
}
