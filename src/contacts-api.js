import axios from "axios";

axios.defaults.baseURL = "https://635d053ecb6cf98e56aaf5bd.mockapi.io";

export async function getContacts() {
    const { data } = await axios.get("/contacts");
    return data
}

export const addContact = async(data) => {
    const {data: result} = await axios.post("/contacts", data);
    return result;
}

export const removeContact = async(id) => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}