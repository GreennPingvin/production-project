import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'

console.log(__dirname)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
