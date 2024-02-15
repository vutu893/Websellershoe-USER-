import axios from './customize-axios'

const registerUser = (full_name, email, password) => {
    return axios.post('/api/user/register', {full_name, email, password})
}
const loginUser = (email, password) => {
    return axios.post('/api/user/login', {email, password})
}
export { registerUser, loginUser }