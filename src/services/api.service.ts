import * as Vue from 'vue'
import axios from 'axios'
import JwtService from '@/services/jwt.service'

const ApiService = {
  init () {
    console.log('vue', Vue)
    console.log('axios', axios)

    axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    axios.defaults.headers.common['Authorization'] = '';
    axios.defaults.headers.common['Content-Type'] = 'text/plain';
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    return axios;
  },

  setTokenHeader () {
    axios.defaults.headers.common[
      "Authorization"
    ] = `bearer ${JwtService.getToken()}`
  },

  setHeaderLang (lang: string) {
    axios.defaults.headers.common["lang"] = lang
  },

  getAny () {
    axios.get('/get').then((data: any) => {
      console.log('getAny', data)
    })
  },

  get (resource: any) {
    return axios.get(`${resource}`)
  },

  post (resource: any, params: any) {
    return axios.post(`${resource}`, params)
  },

  update (resource: any, slug: any, params: any) {
    return axios.put(`${resource}/${slug}`, params)
  },

  put (resource: any, params: any) {
    return axios.put(`${resource}`, params)
  },

  delete (resource: any) {
    return axios.delete(resource).catch((error: any) => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  }
}

export default ApiService

