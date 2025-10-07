import { Route, Routes } from 'react-router'
import './App.css'
import Homepage from './pages/homepage'
import FormPage from './pages/formPage'
import PaginationPage from './pages/pagination-page'
import { Navbar } from './components/navbar'
import LocalStoragePage from './pages/local-storage-page'

function App() {

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl w-full px-4 py-6">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path='/localstorage' element={<LocalStoragePage />} />
          <Route path='/*' element={<Homepage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
