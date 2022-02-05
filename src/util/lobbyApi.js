import axios from "axios";

export const connectToLobby = async (brokerId, username) => {
    const response = await axios.post("http://localhost:4000/connect",{
        brokerId,
        username
    });
    return response.data.username
    // const response2 = await axios.get(`http://localhost:4000/getuser/?username=${response.data.username}`);
}
