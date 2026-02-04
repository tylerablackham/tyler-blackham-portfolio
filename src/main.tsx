import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@picocss/pico/css/pico.min.css'
import {BrowserRouter} from "react-router";

const root = createRoot(document.getElementById('root')!)

root.render(
  <BrowserRouter basename="/tyler-blackham-portfolio">
    <App />
  </BrowserRouter>,
)
