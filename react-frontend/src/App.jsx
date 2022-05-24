import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ListProducts } from './pages/products'
import { EditProduct } from './pages/products/edit'
import { ShowProduct } from './pages/products/show'
import { CreateProduct } from './pages/products/create'
export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products'>
        <Route path='' element={<ListProducts />} />
        <Route path=':id' element={<ShowProduct />} />
        <Route path='create' element={<CreateProduct />} />
        <Route path='edit/:id' element={<EditProduct />} />
      </Route>
    </Routes>
  )
}
