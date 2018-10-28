import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com'
})

export default instance
