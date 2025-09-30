import { Route, Routes } from 'react-router'
import './App.css'
import Homepage from './pages/homepage'
import FormPage from './pages/formPage'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl w-full px-4 py-6">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path='/*' element={<Homepage />} />
        </Routes>
      </main>

    </>

  )
}

export default App
