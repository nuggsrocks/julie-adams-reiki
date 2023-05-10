import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../public/index.scss'
import App from './App'

const root = createRoot(document.querySelector('#root'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
