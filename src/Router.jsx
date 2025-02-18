import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TemplateDashboard from './Templates/templateDashboard'
import TemplateLogin from './Templates/templateLogin'
import Login from './pages/Login'
import Register from './pages/Login/register.jsx'
import Home from './pages/Dashboard/index.jsx'
import ThemeProvider from './contexts/theme.jsx'

function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* LOGIN */}
            <Route path='login' element={<TemplateLogin />}>
              <Route index element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
            {/* Dashboard */}
            <Route path='/dashboard' element={<TemplateDashboard />}>
              <Route index element={<Home />} />
              <Route path='expenses' element={<Home />} />
              <Route path='incomes' element={<Home />} />
              <Route path='goals' element={<Home />} />
              <Route path='insigths' element={<Home />} />
              <Route path='savings' element={<Home />} />
              <Route path='profile' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </>
  )
}

export default App
