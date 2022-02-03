import axios from "./axios";

export const getToken = async (googleIdToken) => {
    return (await axios.post("/api/user", googleIdToken))?.headers?.authorization
}

export const getUser = async (token) => {
    return await axios.get("/api/user/profile", {
        headers: {
            Authorization: token
        }
    })
}