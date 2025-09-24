import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Modules from "./pages/Modules"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modules" element={<Modules />} />
    </Routes>
  )
}

export default App
