import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { MainLayouts } from '../layouts/MainLayouts'
// Home se exporta por defecto en Home.tsx, por eso se importa sin llaves.
import Home from '../pages/Home'
import { Trabajos } from '../pages/Trabajos'
import { Contacto } from '../pages/Contacto'
import Servicios from './../pages/servicios/Servicios'


        // Archivo de rutas // 

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Layout compartido: cabecera, contenido principal y pie */}
                <Route element = {<MainLayouts />}>
                    {/* Rutas principales del portfolio */}
                    <Route path='/' element={<Home />} />
                    <Route path='/trabajos' element={<Trabajos />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/servicios' element={<Servicios />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}