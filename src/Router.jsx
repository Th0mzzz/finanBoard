import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TemplateDashboard from './Templates/templateDashboard'
import Home from './pages/Home'
import TemplateLogin from './Templates/templateLogin'
import Login from './pages/Login'
import Register from './pages/Login/register.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* LOGIN */}
          <Route path='login' element={<TemplateLogin/>}>
            <Route index element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          {/* Dashboard */}
          <Route path='dashboard' element={<TemplateDashboard />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
