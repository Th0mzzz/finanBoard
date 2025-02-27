import { Route, Routes, useLocation } from 'react-router-dom'
import TemplateDashboard from './Templates/templateDashboard'
import TemplateLogin from './Templates/templateLogin'
import Login from './pages/Login'
import Register from './pages/Login/register.jsx'
import Home from './pages/Dashboard/index.jsx'
import ThemeProvider from './contexts/theme.jsx'
import IncomePage from './pages/Dashboard/income.jsx'
import Error404 from './pages/Errors/error404.jsx'

function App() {
  const location = useLocation();
  const userLanguage = navigator.language || navigator.userLanguage;
  return (
    <>
      <ThemeProvider>
        <Routes key={`${location.pathname}-${userLanguage}`} F>
          {/* LOGIN */}
          <Route path='login' element={<TemplateLogin />}>
            <Route index element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          {/* Dashboard */}
          <Route path='/dashboard' element={<TemplateDashboard />}>
            <Route index element={<Home />} />
            <Route path='expenses' element={<Home />} />
            <Route path='incomes' element={<IncomePage />} />
            <Route path='goals' element={<Home />} />
            <Route path='insigths' element={<Home />} />
            <Route path='savings' element={<Home />} />
            <Route path='profile' element={<Home />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </ThemeProvider>

    </>
  )
}

export default App
