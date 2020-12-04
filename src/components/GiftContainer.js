import React from 'react'
import { connect } from 'react-redux'
import Gift from './Gift'

const GiftContainer = ( props ) => {
    let arrayOfGifts = props.gifts.map((g) => {
        return <Gift giftObj={g}/>
    })
    
    console.log("PROPS", props)

    return (
        <div style={{padding: "100px"}}>

            <h1>Gift List</h1>
            {arrayOfGifts}

        </div>
    )
}

// the return value of mapStateToProps is an OBJ
    // mapStateToProps is how you read the info from the global state
    // the OBJ will be merged into the components props
    // the first argument of mapStateToProps is the global state
let mapStateToProps = (globalState) => {
    console.log("FROM INSIDE MAPSTATETOPROPS", globalState)
    return {
        gifts: globalState.gifts
    }
}

export default connect(mapStateToProps)(GiftContainer); 

// the second set of () is always the Component