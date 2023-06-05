import { lazy, Suspense } from 'react'
import { NavLink, Routes, Route, BrowserRouter as Router } from "react-router-dom"
import './App.scss'
import FontSize from './pages/FontSize/FontSize'

const BoxSizePage = lazy(() => import('./pages/BoxSize/BoxSize'))
const ErrorPage = lazy(() => import('./pages/Error'))

function App() {

  return (
      <Router>
          <header className="bar">
              NovaGrand
          </header>
          <aside className="bar">
              <ul>
                  <li><NavLink to="/">font size</NavLink></li>
                  <li><NavLink to="/boxSize/11111">box size</NavLink></li>
              </ul>
          </aside>
          <main className="view">
              <Suspense fallback={<h2>Loading...</h2>}>
                  <Routes>
                      <Route path="/" element={<FontSize/>}/>
                      <Route path="/boxSize/:num" element={<BoxSizePage/>}/>
                      <Route path="*" element={<ErrorPage/>}/>
                  </Routes>
              </Suspense>
          </main>
      </Router>
  )
}

export default App
