import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/gallery'>
                        Gallery
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
