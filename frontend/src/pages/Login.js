import { useState } from 'react'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(email,password)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ></input>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                ></input>
            <button type='submit'>Log in</button>
        </form>
    )
}

export default Login