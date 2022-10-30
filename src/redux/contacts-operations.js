import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "contacts-api";

const isDublicate = (data, contacts) => {
    const normalizedName = data.name.toLowerCase();

    const result = contacts.find(({ name, phone }) => {
        return (normalizedName === name.toLowerCase() && data.phone === phone)
    })
    return Boolean(result);
}


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await api.getContacts();
            return contacts
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',

    async (data, { rejectWithValue }) => {
        try {
            const result = await api.addContact(data);
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    },

    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            if (isDublicate(data, contacts.items)) {
                alert(`${data.name}: ${data.phone} is already exist`);
                return false
            }
        }
    }
)

export const removeContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            await api.removeContact(id);
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

   