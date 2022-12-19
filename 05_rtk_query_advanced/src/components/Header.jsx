import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <h3><Link to="/">Redux Blog</Link></h3>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Add-Post</Link></li>
                    <li><Link to="user">Users</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header