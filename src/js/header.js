import React from 'react'
import { Link } from 'react-router-dom'
import routes from './routes'

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Julie Adams Reiki</h1>
        {
          routes.map(({ name, path }) => {
            return (
              <Link key={path} to={path}>
                {name}
              </Link>
            )
          })
        }
      </nav>
    </header>
  )
}

export default Header
