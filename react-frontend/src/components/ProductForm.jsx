import { useState } from 'react'
import { createProduct, updateProduct } from '../services/product'
import { useNavigate } from 'react-router-dom'

export const ProductForm = ({ product: productToEdit }) => {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: productToEdit ? productToEdit.name : '',
    description: productToEdit ? productToEdit.description : '',
    price: productToEdit ? productToEdit.price : ''
  })
  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (productToEdit) {
      await updateProduct(product, productToEdit.id)
    } else {
      await createProduct(product)
    }

    navigate('/products')
  }

  return (
    <form className='row g-3 needs-validation' noValidate onSubmit={async (e) => { await handleSubmit(e) }}>
      <div className='col-12'>
        <h1>{`${productToEdit ? 'Edit' : 'Create'} Product`}</h1>
      </div>
      <div className='col-md-6'>
        <label htmlFor='name' className='form-label'>Product Name</label>
        <input onChange={handleChange} type='text' className='form-control' value={product.name} id='name' name='name' required placeholder='Laptop Gaming' />
      </div>
      <div className='col-md-6'>
        <label htmlFor='price' className='form-label'>Price</label>
        <input onChange={handleChange} type='number' className='form-control' value={product.price} id='price' name='price' required placeholder='500' />
      </div>
      <div className='col-md-12'>
        <label htmlFor='description' className='form-label'>Description</label>
        <textarea onChange={handleChange} className='form-control' value={product.description} id='description' name='description' required placeholder='This laptop has been imported from china' />
      </div>
      <div className='col-12'>
        <button className='btn btn-primary' type='submit'>Submit form</button>
      </div>
    </form>

  )
}
