import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  g1: {
    graph: [
      {
        label: "Series 1",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    title: 'Line',
    type: 'line',
  },
  g2: {
    graph: [
      {
        label: "Series 1",
        data: [[0, 1], [1, 2]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1]]
      }
    ],
    title: 'bar',
    type: 'bar',
  },
  g3: {
    graph: [
      {
        label: "Series 1",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    title: 'area',
    type: 'area',
  }
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  SAVE_DATA: 'SAVE_DATA',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DATA:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          title: action.payload.data.title,
          graph: action.payload.data.graph,
          type: action.payload.data.type
        }
      }
    default: return state
  }
}

// ACTIONS
export const saveData = (data) => {
  return {type: actionTypes.SAVE_DATA, payload: data}
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
