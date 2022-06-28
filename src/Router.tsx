import {Routes, Route} from 'react-router-dom'
import { ContactMePage } from './pages/ContactMePage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'

export function Router() {
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactMePage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
    </Routes>
  )
}