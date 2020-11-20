import React from 'react'

const Gift = ({ person, gift }) => {
    return (
        <div>
            <p>Name: {person}</p>
            <p>Gift: {gift}</p>
        </div>
    )
}

export default Gift;