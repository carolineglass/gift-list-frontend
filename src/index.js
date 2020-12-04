import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let giftsInitialState = {
  gifts: []
}

// The return value of the reducer becomes our global state
// Initial state is the default argument

const giftsReducer = (state = giftsInitialState, action) => {
  switch(action.type) {
    case "SET_ALL_GIFTS": 
      return {
        ...state, 
        gifts: action.payload
      }
      // let copyOfGifts = [...state.gifts, action.payload]
      // return {
      //   ...state, gifts: copyOfGifts
      // }
    default: 
      return state
  }
}

let theStoreObject = createStore(
  giftsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

//  the second argument with window will set up REDUX DEVTOOLS
//  the devtools tell you whats available in your global state

//    an action is a POJO that describes what needs to be done 
//    and info to get it done [payload can be anything you want]

// let theActionToAdd1 = {
//   type: "ADD_NUMBER",
//   payload: 1
// }

//    dispatch that action

// theStoreObject.dispatch(theActionToAdd1)
// theStoreObject.dispatch({
//   type: "ADD_GIFT",
//   payload: "Candle"
// })

ReactDOM.render(
  <Provider store={theStoreObject}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);
