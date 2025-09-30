import './App.css'
import { LoginCard } from './components/login-card'
import { ModeToggle } from './components/mode-toggle'
import { MyDropdownMenu } from './components/my-dropdown-menu'
import { Button } from './components/ui/button'

function App() {

  return (
    <div className='flex p-3 gap-3'>
      <Button>Knapp!</Button>
      <MyDropdownMenu />
      <LoginCard />
      <ModeToggle />
    </div>
  )
}

export default App
