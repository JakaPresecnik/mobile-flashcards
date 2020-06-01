import { ADD_DECK, ADD_CARD, SAVE_STATS, DELETE_DECK, GET_DATA } from '../actions'

export default function reducer (state = {}, action) {
  switch(action.type) {
    case ADD_DECK:
      return {
        ...state,
          [action.key]: {
            key: action.key,
            name: action.deckName,
            collection: [],
            answeredCorrectNum: 0,
            answeredIncorrectNum: 0,
          }
      }
    case ADD_CARD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
            collection: state[action.id].collection.concat({
              question: action.question,
              answer: action.answer,
              key: action.key,
            })
        },
      }
    case SAVE_STATS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
            answeredCorrectNum: state[action.id].answeredCorrectNum + action.correct,
            answeredIncorrectNum: state[action.id].answeredIncorrectNum + action.incorrect,
        }
      }
    case DELETE_DECK:
      const { [action.id]:_, ...rest } = state
      return {
        ...rest,
      }

    case GET_DATA:
      return {
        ...state,
        ...action.data,
      }
  }
}
