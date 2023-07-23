import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const { login, error , isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email,password)
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
            <button disabled={isLoading} type='submit'>Log in</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login