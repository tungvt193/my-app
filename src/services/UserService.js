import axios from "./axios"

const fetchAllUsers = (page) => {
  return axios.get(`/users?page=${page}`)
}

export { fetchAllUsers }