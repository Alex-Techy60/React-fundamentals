import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Friends from './Friends.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

function Temp() {
  return(
    <h1>Keep doing your fun</h1>
  )
}

const username = "Alex McDominey"

const reactObject = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  username
)

createRoot(document.getElementById('root')).render(
    
    <StrictMode>
      <App />
      <Friends />
      <Temp />
    </StrictMode>
)
