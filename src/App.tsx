// Thanks2: https://www.w3schools.com/react/react_router.asp
// src/App.tsx
import './App.css'

import {AudioContext, useAudioPlayer } from './hooks'
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Canciones, Oraciones, Lecturas } from './routes'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";


export default function App() {
  const player = useAudioPlayer()

  return (<AudioContext.Provider value={{player}}>
    <BrowserRouter>
      <nav>
        <NavLink to="/">Canciones</NavLink>
        <NavLink to="/oraciones">Oraciones</NavLink>
        <NavLink to="/lecturas">Lecturas</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Canciones />} />
        <Route path="/oraciones" element={<Oraciones />} />
        <Route path="/lecturas" element={<Lecturas />} />
      </Routes>
    </BrowserRouter>
  </AudioContext.Provider>
  );
}



        //<Route path="/lecturas" element={<Lecturas />} />


        //<Route path="/products" element={<Products />}>
        //  <Route path="car" element={<CarProducts />} />
        //  <Route path="bike" element={<BikeProducts />} />
        //</Route>
        //<Route path="/contact" element={<Contact />} />






      //<nav className="toc" aria-label="Índice de canciones">
      //  <h2 className="toc__title">Índice</h2>
      //  <ol className="toc__list">
      //    {items.map(({ nombre }) => (
      //      <li key={nombre}>
      //        <a href={`#${slugify(nombre)}`}>{nombre}</a>
      //      </li>
      //    ))}
      //  </ol>
      //</nav>
