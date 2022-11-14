import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import RootLayout from './pages/RootLayout'
import Body from './pages/Body'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/APropos'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Root() {
  const [navLink, updateNavLink] = useState('Home')

  return (
    <RootLayout>
      <Header navLink={navLink} />
      <Body>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home updateNavLink={updateNavLink} />}
          />
          <Route
            path="/fiche-logement"
            element={<FicheLogement updateNavLink={updateNavLink} />}
          />
          <Route
            path="/a-propos"
            element={<APropos updateNavLink={updateNavLink} />}
          />
          <Route
            path="*"
            element={<Error404 updateNavLink={updateNavLink} />}
          />
        </Routes>
      </Body>
      <Footer />
    </RootLayout>
  )
}

root.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>
)
