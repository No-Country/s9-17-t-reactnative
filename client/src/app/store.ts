import { configureStore } from "@reduxjs/toolkit"
import user from "../features/user/userSlice"
import trip from "../features/trip/tripSlice"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    user,
    trip
  }
})
