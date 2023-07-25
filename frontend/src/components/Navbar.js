import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from "../hooks/useAuthContext"
import Logo from './Logo'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleLogout = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Logo/>
                <nav>
                    {user && (
                    <div>
                        <span>{user.email}</span>
                        <button onClick = { handleLogout }>Log Out</button>
                    </div>
                    )}
                    {!user && (
                    <div>
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                    )}
                </nav>  
            </div>
        </header>
    )
}

export default Navbar