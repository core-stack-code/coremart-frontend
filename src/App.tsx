import React from 'react'
import AppRouter from './router'
import AppProvider from './provider'
import './app.css'

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
