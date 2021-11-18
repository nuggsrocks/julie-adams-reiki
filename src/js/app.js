import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import routes from './routes'

export class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>

        <main className='flexbox'>
          <Routes>
            {
              routes.map(({ path, Component }) => {
                return <Route key={path} exact path={path} element={<Component/>}/>
              })
            }
          </Routes>
        </main>

        <Footer/>
      </div>
    )
  }
}
