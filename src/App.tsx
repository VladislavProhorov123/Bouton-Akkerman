import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Catalog from './pages/Catalog'
import Bouquet from './pages/Bouquet'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path="/catalog/:id" element={<Bouquet />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}
