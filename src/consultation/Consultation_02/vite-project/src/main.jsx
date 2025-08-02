
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CityPage from './componets/CityPage/CityPage.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <CityPage />
  <App />
  <App />
  </>
)
