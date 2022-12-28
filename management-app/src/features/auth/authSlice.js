import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  user: false
}
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
      return state
    }
  }
})

export default authSlice.reducer
export const { login } = authSlice.actions