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
        [action.id]: {
          ...state[action.id],
            collection: state[action.id].collection.concat({
              question: action.question,
              answer: action.answer,
              key: action.key,
              answeredCorrectNum: 0,
              answeredIncorrectNum: 0,
            })
        },
      }
  }
}
