import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HeroUIProvider} from "@heroui/react";
import { ProfileProvider } from './Context/ProfileContext.jsx';


createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <ProfileProvider>
    <App />
    </ProfileProvider>
  </HeroUIProvider>

)
