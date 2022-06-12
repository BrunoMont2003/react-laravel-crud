import axios from 'axios'
const endpoint = `${import.meta.env.VITE_API_URL}/products`
export const getProducts = async () => {
  try {
    const { data, status } = await axios.get(endpoint)
    if (status === 200) {
      return data
    }
  } catch (error) {
    console.log(error.message)
    return null
  }
}
export const createProduct = async (product) => {
  try {
    const { data } = await axios.post(endpoint, product)
    return data
  } catch (error) {
    console.log(error.message)
  }
}
export const updateProduct = async (product, id) => {
  try {
    const { data } = await axios.put(`${endpoint}/${id}`, product)
    return data
  } catch (error) {
    console.log(error.message)
  }
}
export const getProduct = async (id) => {
  try {
    const { data } = await axios.get(`${endpoint}/${id}`)
    return data
  } catch (error) {
    console.log(error.message)
  }
}
