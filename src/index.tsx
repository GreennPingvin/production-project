import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ReactDOM from 'react-dom/client'
import ThemeProvider from './theme/ThemeProvider'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
