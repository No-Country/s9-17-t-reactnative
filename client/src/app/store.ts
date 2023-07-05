import { configureStore } from "@reduxjs/toolkit"
import user from "../features/user/userSlice"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    user
  }
})
