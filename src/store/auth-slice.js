import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: true },
    reducers: {
        login(state) {
            isLoggedIn = true;
        },
        logout(state) {
            isLoggedIn = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;