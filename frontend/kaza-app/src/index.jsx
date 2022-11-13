import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Main from './pages/main'
import Home from './pages/home'
import FicheLogement from './pages/fiche-logement'
import APropos from './pages/a-propos'
import Error404 from './pages/error404'
import Header from './components/header'
import Footer from './components/footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Main>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fiche-logement" element={<FicheLogement />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </Main>
    </Router>
  </React.StrictMode>
)
