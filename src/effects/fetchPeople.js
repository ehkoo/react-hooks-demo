import axios from 'axios'

export default function(urls) {
  return Promise.all(urls.map(axios.get))
}
