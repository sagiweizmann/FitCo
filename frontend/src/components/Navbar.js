import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    const { logout } = useLogout()

    const handleLogout = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Tracker</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick = { handleLogout }>Log Out</button>
                    </div>
                    <div>
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </nav>  
            </div>
        </header>
    )
}

export default Navbar