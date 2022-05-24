import axios from 'axios'
const endpoint = `${import.meta.env.VITE_API_URL}/products`
export const getProducts = async () => {
  try {
    console.log(endpoint)
    const { data, status } = await axios.get(endpoint)
    console.log(data)
    if (status === 200) {
      return data
    }
  } catch (error) {
    console.log(error.message)
    return null
  }
}
