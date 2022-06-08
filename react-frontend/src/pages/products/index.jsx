import { useEffect, useState } from 'react'
import { Layout } from '../../components/common/Layout'
import { getProducts } from '../../services/product'

export const ListProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts()
      setProducts(result)
    }
    fetchProducts()
  }, [])

  return (
    <Layout>
      <div className='container w-100'>
        <h1 className='mb-3'>Products</h1>
        {products.length === 0 && <p>Loading...</p>}
        {products.length > 0 && (
          <div className='row row-cols-1 row-cols-md-2 g-4'>
            {products.map(({ name, description, price }, index) => (
              <div className='col' key={index}>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title text-uppercase text-dark'>{name}</h5>
                    <p className='card-text mb-1 text-capitalize text-se'>
                      {description}
                    </p>
                    <span className='text-secondary fw-bold'>
                      $ {price}
                    </span>
                    <div className='d-flex gap-2 mt-2'>
                      <button className='btn btn-primary'>EDIT</button>
                      <button className='btn btn-danger'>DELETE</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
