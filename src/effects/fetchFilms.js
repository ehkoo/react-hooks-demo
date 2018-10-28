import axios from 'axios'

export default function() {
  return axios.get('https://ghibliapi.herokuapp.com/films')
}
