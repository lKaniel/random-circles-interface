import axios from "./axios";

export const connectToLobby = async (brokerId, token) => {
    const response = await axios.get(`/api/lobby/?peerId=${brokerId}`,{
        headers: {
            "Authorization": token
        }
    });
    return response.data
    // const response2 = await axios.get(`http://localhost:4000/getuser/?username=${response.data.username}`);
}

export const leaveLobby = async (token) => {
    const response = await axios.post(`/api/lobby/cancel`,{},{
        headers: {
            "Authorization": token
        }
    });
    console.log(response)

}