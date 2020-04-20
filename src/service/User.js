import Api from './api';

const baseURL = 'users/'

const UserService = {
    findByCpf: (cpf) => Api.get(`${baseURL}${cpf}`),
    newUser: (userInput) => Api.post(baseURL, JSON.stringify(userInput))
}

export default UserService