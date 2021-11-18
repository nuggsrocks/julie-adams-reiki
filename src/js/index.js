import '../scss/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Footer from './footer'
import routes from './routes'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentLocation: '/',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.setState({
      currentLocation: event.target.name,
    })
  }

  render () {
    return (
      <div>
        <Header
          onClick={this.handleClick}
          currentLocation={this.state.currentLocation}
        />

        <main className='flexbox'>
          {
            routes.map(({ path, Component }) => {
              return this.state.currentLocation === path &&
                <Component key={path}/>
            })
          }
        </main>

        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('div#root'))
