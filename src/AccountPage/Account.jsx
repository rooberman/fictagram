import React, { useContext } from 'react'
import Context from '../Context'

export default function Account() {
    const context = useContext(Context)

    return (
        <div>
            <div>{context.username}</div>
            <div>{context.password}</div>
        </div>
    )
}
