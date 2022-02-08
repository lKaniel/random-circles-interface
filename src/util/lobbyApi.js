import axios from "./axios";

export const connectToLobby = async (token) => {
    const response = await axios.get(`/api/v1/lobbies`,{
        headers: {
            "Authorization": token
        }
    });
    return response.data
}

export const leaveLobby = async (token) => {
    const response = await axios.post(`/api/v1/lobbies/cancel`,{},{
        headers: {
            "Authorization": token
        }
    });
}
