import React from 'react'
import { useEffect } from 'react'
import GiftContainer from './components/GiftContainer'
import { connect } from 'react-redux'

const App = ( props ) => {

  console.log(props, "APP")
  
  let setAllGifts = props.setAllGifts

   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then((users) => {
      setAllGifts(users)})
    }
   )

  let styles = {
    background: "url(https://static.vecteezy.com/system/resources/previews/000/524/227/non_2x/christmas-winter-holiday-background-blur-light-snow-greeting-design-vector.jpg)",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  return (
    <div style={styles}>
      <GiftContainer />
    </div>
  );
}

// ActionCreator - the RETURN value of an action creator is an action creator is an action
// Action = obj that contains the key of type & payload
let setAllGifts = (giftsArr) => {
  return {
    type: "SET_ALL_GIFTS",
    payload: giftsArr
  }
}

// mapDispatchToProps is an OBJ that will be merged as props to App
let mapDispatchToProps = {
  setAllGifts: setAllGifts
}

//the value of setAllGifts is the function definition 

export default connect(null, mapDispatchToProps)(App);

// because App doesn't need any info pulled from global state, null is passed in as 
  // mapStateToProps
// mapDispatchToProps will decide what action gets dispatched
