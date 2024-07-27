import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const react_elemet = React.createElement(
  'a' , 
  {
    href : 'https://google.com',
    target : '_blank',
  },
  'Visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
