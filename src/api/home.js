// import Vue from 'vue'
// export const getHomeMUltidata = () => {
//   return Vue.$http.get('/home/multidata')
// }
import http from '@/utils/request'
export const getHomeMUltidata = () => {
  return http.get('/home/multidata')
}
export const getHomeGoods = (type, page) => {
  return http.get('/home/data', { params: { type, page } })
}
