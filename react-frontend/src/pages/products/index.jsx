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
        <div className='table-responsive w-100'>
          {products.length === 0 && <p>Loading...</p>}
          {products.length > 0 && (
            <table className='table caption-top'>
              <caption>List of Products</caption>
              <thead className='table-dark'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Description</th>
                  <th scope='col' />
                </tr>
              </thead>
              <tbody>
                {products.map(({ name, description, price }, index) => (
                  <tr key={index}>
                    <td scope='row' />
                    <td>{name}</td>
                    <td>${price}</td>
                    <td>{description}</td>
                    <td className='d-flex gap-2'>
                      <button className='btn btn-primary'>EDIT</button>
                      <button className='btn btn-danger'>DELETE</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  )
}
