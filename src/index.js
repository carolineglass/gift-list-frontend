import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'

let giftsInitialState = {
  gifts: [],
  number: 0
}

// The return value of the reducer becomes our global state
// Initial state is the default argument
const giftReducer = (state = giftsInitialState, action) => {
  switch(action.type) {
    case "ADD_ONE":
      return {
        ...state, number: state.number + action.payload
      }
    default: 
      return state
  }
}

let theStoreObject = createStore(giftReducer)
console.log("SET UP", theStoreObject.getState())

// an action is a POJO that describes what needs to be done 
// and info to get it done [payload can be anything you want]

let theActionToAdd1 = {
  type: "ADD_ONE",
  payload: 1
}
//dispatch that action
theStoreObject.dispatch(theActionToAdd1)

console.log("AFTER DISPATCH", theStoreObject.getState())

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
