import axios from "./axios";

export const getToken = async (googleIdToken) => {
    const response = await axios.post("/api/v1/users/googleLogin", googleIdToken);
    return `Bearer ${response?.data}`
}

export const getUser = async (token) => {
    return await axios.get("/api/v1/users", {
        headers: {
            "Authorization": token
        }
    })
}
