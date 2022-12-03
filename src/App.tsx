import React from 'react'
import test from './assets/test.jpg'

export default function App() {
  return (
    <main>
      <h1>React App Template</h1>
      <p>A template for building static React apps in Typescript.</p>
      <p>
        I could use <code>create-react-app</code>, but I don't like the bloat...
      </p>
      <p>Includes styled-components.</p>

      <img src={test} alt='test image' />
    </main>
  )
}
