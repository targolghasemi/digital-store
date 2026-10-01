import api from "./api";

export async function loginWithDummyJson(username, password) {
    const response = await api.post("/auth/login" , {
        username,
        password,
    })

    return response.data
}