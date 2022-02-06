import axios from "./axios";

export const connectToLobby = async (token) => {
    const response = await axios.get(`/api/lobby/`,{
        headers: {
            "Authorization": token
        }
    });
    return response.data
}

export const leaveLobby = async (token) => {
    const response = await axios.post(`/api/lobby/cancel`,{},{
        headers: {
            "Authorization": token
        }
    });
}