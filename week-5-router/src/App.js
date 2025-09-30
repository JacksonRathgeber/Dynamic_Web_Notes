import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ButtonPage />} />
      <Route path="/accordion" element={<AccordionPage />} />
      <Route path="/dropdown" element={<DropdownPage />} />
    </Routes>
  )
}

export default App
