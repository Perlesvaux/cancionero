// Thanks2: https://www.w3schools.com/react/react_router.asp
// src/App.tsx
import './App.css'

//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Canciones, Oraciones, Lecturas } from './routes'


//export default function App() {
//  return (
//    <BrowserRouter>
//      {/* Navigation */}
//      <nav>
//        <Link to="/">Canciones</Link>
//        <Link to="/oraciones">Oraciones</Link> 
//        <Link to="/lecturas">Lecturas</Link>
//      </nav>
//
//      {/* Routes */}
//      <Routes>
//        <Route path="/" element={<Canciones />} />
//        <Route path="/oraciones" element={<Oraciones />} />
//      </Routes>
//    </BrowserRouter>
//  );
//}




import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

export default function App() {
  return (
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
