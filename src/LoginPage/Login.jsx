import React, { useRef, useState, useContext } from 'react'
import { FormContainer } from './styles'
import { withRouter } from 'react-router-dom'
import Context from '../Context'

const Login = (props) => {
    const nameRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(false)
    const context = useContext(Context)

    const sendForm = (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const pass = passwordRef.current.value
        if (name === "react" && pass === "f") {
            setError(false)
            context.username = name
            context.password = pass
            props.history.push('/posts')
        }
        else {
            setError(true)
        }
    }

    return (
        <FormContainer onSubmit={sendForm}>
            <input type="text" ref={nameRef} />
            <input type="password" ref={passwordRef} />
            <input type="submit" value="Login" />
            {error &&
                <div>
                    Usuario no valido
                </div>
            }
        </FormContainer>
    )
}

export default withRouter(Login)