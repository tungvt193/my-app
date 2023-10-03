import axios from "./axios"

const fetchAllUsers = (page) => {
  return axios.get(`/users?page=${page}`)
}

const createUser = (data) => {
  return axios.post('/users', data)
}

export { fetchAllUsers, createUser }