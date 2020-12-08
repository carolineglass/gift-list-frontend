import React from 'react'

const Gift = ( props ) => {
    const { name, website } = props.giftObj
    //deconstructing props

    return (
        <div>
            <p>Name: {name} </p>
            <p>Gift: {website} </p>
        </div>
    )
}

export default Gift;