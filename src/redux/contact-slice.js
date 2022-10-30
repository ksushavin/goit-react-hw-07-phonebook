import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./contacts-operations";

export const contactSlice = createSlice({
    name: "contacts",
    initialState: { items: [], isLoading: false, error: null },
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
        },
        [fetchContacts.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, { payload }) => {
            store.loading = true;
            store.error = payload;
        },
        [addContact.pending]: (store) => {
            store.loading = true;
        },
        [addContact.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.items.push(payload)
        },
        [addContact.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
        [removeContact.pending]: (store) => {
            store.loading = true;
        },
        [removeContact.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload)
        },
        [removeContact.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
    }
    
})

