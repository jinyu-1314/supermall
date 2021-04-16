import axios from 'axios'
const http = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5',
  timeout: 5000
})
http.interceptors.request.use(config => {
  return config
}, err => {
  return err
})
http.interceptors.response.use(res => {
  return res.data
}, err => {
  return err
})

export default http
