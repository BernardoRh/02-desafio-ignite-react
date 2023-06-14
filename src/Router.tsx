import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Cart } from './Pages/Cart'
import { Delivery } from './Pages/Delivery'

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Delivery" element={<Delivery />} />
            </Route>
        </Routes>
    )
}