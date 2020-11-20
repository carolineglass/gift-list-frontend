import React from 'react'
import { useEffect } from 'react'
import GiftContainer from './components/GiftContainer'
import { connect } from 'react-redux'

const App = ( props ) => {

   useEffect(() => {
    fetch("http://localhost:3000/contestants")
    .then(resp => resp.json())
    .then(contestants => console.log(contestants))
    }, []
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

// mapDispatchToProps is an OBJ that will be merged as props to App
let mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(App);

// because App doesn't need any inf pulled from global state, null is passed in as 
  // mapStateToProps
// mapDispatchToProps will decide what action gets dispatched
