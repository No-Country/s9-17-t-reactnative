import { Dispatch, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { EXPO_PUBLIC_URL_BASE } from "@env";
interface User {
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  tripsConfirmed: string[]
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
    dateOfBirth: "",
    tripsConfirmed: []
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.id = action.payload
    },
    addTripsConfirmed: (state, action) => {
      state.user.tripsConfirmed.push(action.payload)
    },
  }
})
export const { login, addTripsConfirmed } = userSlice.actions
export default userSlice.reducer

export const setLogin = (dataLogin: { email: string, password: string }) => async (dispatch: Dispatch) => {
  try {
    console.log(EXPO_PUBLIC_URL_BASE);
    const res = await axios.post(`${EXPO_PUBLIC_URL_BASE}users/login`, {
      email: dataLogin.email,
      password: dataLogin.password
    })
    const data = await res.data
    console.log(data);
  } catch (error) {
    console.log(error);

  }
}
export const setTripsConfirmed = (id: string) => (dispatch: Dispatch) => {
  dispatch(addTripsConfirmed(id))
}