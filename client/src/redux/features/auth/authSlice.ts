import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  user: null | object;
  token: string | null;
}

const initialState: TAuthState = {
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {user, token} = action.payload;
      state.user = user;
      state.token = token;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
})


export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state: { auth: TAuthState }) => state.auth.user;
export const selectToken = (state: { auth: TAuthState }) => state.auth.token;