import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import RootLayout from './pages/root-layout'
import Main from './pages/main'
import Home from './pages/home'
import FicheLogement from './pages/fiche-logement'
import APropos from './pages/a-propos'
import Error404 from './pages/error404'
import Header from './components/header'
import Footer from './components/footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Root() {
  const [navLink, updateNavLink] = useState('Home')

  return (
    <RootLayout>
      <Header navLink={navLink} />
      <Main>
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
      </Main>
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
