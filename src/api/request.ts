import axios from 'axios'

interface RequestConfig {
  url: string
  method: 'get' | 'post' | 'put' | 'delete'
  data?: any
}

export function request(config: RequestConfig) {
  const instance = axios.create({
    baseURL: 'http://localhost/api',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.request.use(
    (config) => {
      // 在請求發送之前對請求做一些處理，例如添加 token 等
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      // 在接收到回應後對回應做一些處理，例如解析數據等
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return instance(config)
}