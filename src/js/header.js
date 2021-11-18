import React from 'react'

import routes from './routes'

const Header = (props) => {
  return (
    <header>
      <nav>
        <h1>Julie Adams Reiki</h1>
        {
          routes.map(({ name, path }) => {
            return (
              <button
                key={path} name={path} onClick={props.onClick}
                className={props.currentLocation === path ? 'focus' : ''}
              >
                {name}
              </button>
            )
          })
        }
      </nav>
    </header>
  )
}

export default Header
