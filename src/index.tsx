import './scss/index.scss'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'

const container = document.createElement('div')
container.classList.add('app')

document.body.appendChild(container)

const root = createRoot(container!)

root.render(<App />)
