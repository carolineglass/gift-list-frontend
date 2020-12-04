import React from 'react'

const Gift = ( props ) => {
    const { name } = props.giftObj
    //deconstructing props

    return (
        <div>
            <p>Name: {name} </p>
            <p>Gift: </p>
        </div>
    )
}

export default Gift;