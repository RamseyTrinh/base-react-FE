import axios from 'axios'

const http = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_APP_ROOT_API,
  transformRequest: [
    function (data, headers) {
      return JSON.stringify(data)
    },
  ],
  headers: {
    'Content-Type': 'application/json',
  },
})
console.log('aaaa',import.meta.env.VITE_APP_ROOT_API)

http.interceptors.response.use(null, (error) => {
  if ([401, 403].includes(error.response?.status)) {
    // Thực hiện hành động logout hoặc xử lý khác nếu cần
    // console.log('Unauthorized or Forbidden');
  }
  return Promise.reject(error)
})

export default http
