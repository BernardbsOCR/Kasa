import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import RootLayout from '../../pages/RootLayout'
import Body from '../../pages/Body'
import Home from '../../pages/Home'
import FicheLogement from '../../pages/FicheLogement'
import APropos from '../../pages/APropos'
import Error404 from '../../pages/Error404'
import Header from '../Header'
import Footer from '../Footer'

function KazaRouter() {
  const [navLink, updateNavLink] = useState('Home')

  return (
    <Router>
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
    </Router>
  )
}

export default KazaRouter
