import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { api } from '@/services'

if (import.meta.env.VITE_API_URL) api.init(import.meta.env.VITE_API_URL)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
