import React from 'react'
import List from './components/list'

const App = ( props ) => {
  console.log("props", props)
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
