import {Routes, Route} from 'react-router-dom'
import { ContactMePage } from './pages/ContactMePage'
import { HomePage } from './pages/HomePage'

export function Router() {
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contactme' element={<ContactMePage/>}/>
    </Routes>
  )
}