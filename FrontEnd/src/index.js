
// Importing React and Reat-Dom libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importing the main application components
import App from './App'

// Importing Globalcontext for state management
import { GlobalProvider } from './context/globalContext'

// Importing the Globalstyles for consistent theming
import { GlobalStyle } from './styles/GlobalStyle'

// Creating the root element to render  React app
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
)

