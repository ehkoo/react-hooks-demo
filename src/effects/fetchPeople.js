import axios from 'axios'

export default function(urls) {
  console.log(urls)
  return Promise.all(urls.map(axios.get))
}
