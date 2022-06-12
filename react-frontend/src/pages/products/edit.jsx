import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../components/common/Layout'
import { ProductForm } from '../../components/ProductForm'
import { getProduct } from '../../services/product'

export const EditProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  useEffect(() => {
    const fetchProduct = async () => {
      const result = await getProduct(id)
      console.log('hello')
      setProduct(result)
    }
    fetchProduct()
  }, [])
  return (
    <Layout>
      {product &&
        <ProductForm product={product} />}
    </Layout>
  )
}
