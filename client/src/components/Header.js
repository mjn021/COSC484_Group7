import {Link } from 'react-router-dom'
function Header() {
    const headerStyles = {
        backgroundColor: 'gold',
        color:'black'}
        
    return (
        <header style = {headerStyles}>
            <div className = "container">
                <Link to= '/'>
                    <h2>Tu Tunes</h2>
                </Link>
            </div>
        </header>
    )
}

export default Header