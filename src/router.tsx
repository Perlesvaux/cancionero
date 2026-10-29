import { createBrowserRouter, Outlet, ScrollRestoration, NavLink } from 'react-router-dom'
import { AudioContext, useAudioPlayer } from "./hooks"
import { Canciones, Oraciones, Lecturas, OracionesParaEnfermos, Print } from './routes'
import './App.css'

function RootLayout(){
  const player = useAudioPlayer()

  return(
    <AudioContext.Provider value={ {player }}>
    <ScrollRestoration />
    <nav>
        <NavLink to="/" className="nav-icon">♬</NavLink>
        <NavLink to="/oraciones" className="nav-icon">☧</NavLink>
        <NavLink to="/oraciones_para_enfermos" className="nav-icon">⚕</NavLink>
        <NavLink to="/lecturas" className="nav-icon">❦</NavLink>
    </nav>

    <main>

      <Outlet />

    </main>

    </AudioContext.Provider>
  )

}


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element:<Canciones /> },
      { path: "oraciones", element:<Oraciones />},
      { path: "oraciones_para_enfermos", element:<OracionesParaEnfermos />},
      { path: "lecturas", element:<Lecturas />},

      ...(import.meta.env.DEV 
        ? [{ path: "print", element: <Print />}] 
        : []),
    ],
  },

])


