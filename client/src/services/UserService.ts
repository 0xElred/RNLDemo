import AxiosInstance from "./AxiosInstance";

const UserService = {
    loadUsers: async() => {
        try {
            const response = await AxiosInstance.get('/user/loadUsers')
            return response
        } catch (error) {
            throw error
        }
    },
    storeUser: async(data:any) => {
        try {
            const response = AxiosInstance.post('/user/storeUser', data)
            return response
        } catch (error) {
            throw error
        }
    }
}
export default UserService;