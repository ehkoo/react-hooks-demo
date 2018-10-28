import req from '../helpers/req'

export default function() {
  return req.get('/films')
}
