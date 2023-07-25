import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <Link to="/" className='top-header'>
                <img className="logo" src="/logo.png" alt="logo" />
                <h1>FitCo</h1>
            </Link>
        </div>
    )
}

export default Logo