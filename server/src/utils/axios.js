import md5 from 'md5'
import axios from 'axios'

axios.defaults.baseURL = 'http://gateway.marvel.com/v1/public/'

/**
 * Add auth params to request
 *
 * @param {Record<string, unknown>} params
 * @returns {{ [key: string]: unknown, apikey: string, ts: number, hash: string }}
 */
function addAuthParams (params) {
  const ts = Date.now()
  return {
    ...params,
    apikey: process.env.PUBLIC_KEY,
    ts,
    hash: md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
  }
}
axios.interceptors.request.use((config) => ({
  ...config,
  params: addAuthParams(config.params)
}))

export default axios
