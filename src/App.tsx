import React from 'react'
import AppRouter from './routes'
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
