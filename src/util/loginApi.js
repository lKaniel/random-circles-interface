import axios from "./axios";

export const getToken = async (googleIdToken) => {
    const response = await axios.post("/api/user", googleIdToken);
    return `Bearer ${response?.data}`
}

export const getUser = async (token) => {
    return await axios.get("/api/user/profile", {
        headers: {
            "Authorization": token
        }
    })
}
