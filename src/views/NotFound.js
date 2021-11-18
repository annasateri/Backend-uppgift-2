import React from 'react'
import { useHistory } from 'react-router-dom';

const NotFound = (props) => {

    let history = useHistory()

    setTimeout(() => {
        history.push('/')
    }, 2000)

    return (
        <div>
            404 not found
        </div>
    )
}

export default NotFound
