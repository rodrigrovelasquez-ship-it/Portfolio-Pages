import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { MainLayouts } from '../layouts/MainLayouts'
import { Home } from '../pages/Home'
import { Trabajos } from '../pages/Trabajos'
import { Contacto } from '../pages/Contacto'


        // Archivo de rutas // 

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<MainLayouts />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/trabajos' element={<Trabajos />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}