import { useState, useEffect } from "react"
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import TelaInicial from './pages/TelaInicial'
import Header from './components/Header'
import Footer from './components/Footer'
import SelecionarPagina from './components/SelecionarPagina'

function App() {

  return (
    <div>
      <SelecionarPagina />

      <Footer />
    </div>

  );
}

export default App;



