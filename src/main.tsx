import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PropsPage from './pages/PropsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="props" element={<PropsPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter >
)
