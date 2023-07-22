import { createSlice } from "@reduxjs/toolkit";
interface User {
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}
interface InitialState {
  user: User
}
const initialState: InitialState = {
  user: {
    id: null,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: ""
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.id = action.payload
    }
  }
})
export const { login } = userSlice.actions
export default userSlice.reducer