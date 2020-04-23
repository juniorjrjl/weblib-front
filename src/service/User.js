import Api from './api';

const baseURL = 'users/'

const UserService = {
    findByCpf: (cpf) => Api.get(`${baseURL}${cpf}`),
    newUser: (userInput) => {
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return Api.post(baseURL, JSON.stringify(userInput), header)
    }
}

export default UserService