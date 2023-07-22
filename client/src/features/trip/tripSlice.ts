import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const tripSlice = createSlice({
  name: "trip",
  initialState: {
    trips: [],
    tripsFiltered: []
  },
  reducers: {
    setTrips: (state, action) => {
      state.trips = action.payload.map((trip, index) => {
        return {
          ...trip,
          day: index % 2 == 0 && "Lunes" || index % 3 == 0 && "Martes" || index % 5 == 0 && "Miercoles",
        }
      })
    },
    setTripsFiltered: (state, { payload }) => {
      const tripsFiltered = state.trips.filter(item =>
        item.location.city.includes(payload) ||
        item.location.state.includes(payload) ||
        item.name.first.includes(payload) ||
        item.name.last.includes(payload)
      )
      state.tripsFiltered = tripsFiltered
    }
  }
})

export const { setTrips, setTripsFiltered } = tripSlice.actions
export default tripSlice.reducer

export const getTrips = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    const data = await response.data
    dispatch(setTrips(data.results))
  } catch (error) {
    console.log(error);
  }
}
export const getTripsFiltered = (input) => (dispatch: Dispatch) => {
  dispatch(setTripsFiltered(input))
}