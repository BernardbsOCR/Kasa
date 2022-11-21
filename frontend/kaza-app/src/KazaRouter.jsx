import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Body from './pages/Body'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/APropos'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

function KazaRouter() {
  const [activeLink, updateActiveLink] = useState('Home')

  return (
    <Router>
      <Header activeLink={activeLink} />
      <Body>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home updateActiveLink={updateActiveLink} />}
          />
          <Route
            path="/fiche-logement/:id"
            element={<FicheLogement updateActiveLink={updateActiveLink} />}
          />
          <Route
            path="/a-propos"
            element={<APropos updateActiveLink={updateActiveLink} />}
          />
          <Route
            path="*"
            element={<Error404 updateActiveLink={updateActiveLink} />}
          />
        </Routes>
      </Body>
      <Footer />
    </Router>
  )
}

export default KazaRouter
