import { Dispatch, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const tripSlice = createSlice({
  name: "trip",
  initialState: {
    trips: [],
    tripsFiltered: [],
    createTrip: {},
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
        item.location.city.toLowerCase().toLowerCase().includes(payload.toLowerCase()) ||
        item.location.state.toLowerCase().includes(payload.toLowerCase()) ||
        item.name.first.toLowerCase().includes(payload.toLowerCase()) ||
        item.name.last.toLowerCase().includes(payload.toLowerCase())
      )
      state.tripsFiltered = tripsFiltered
    },
    setNewTrip: (state, action) => {
      state.createTrip = action.payload
    }
  }
})

export const { setTrips, setTripsFiltered, setNewTrip } = tripSlice.actions
export default tripSlice.reducer

export const getTrips = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=30");
    const data = await response.data
    dispatch(setTrips(data.results))
  } catch (error) {
    console.log(error);
  }
}
export const getTripsFiltered = (input) => (dispatch: Dispatch) => {
  dispatch(setTripsFiltered(input))
}
export const createNewTrip = (newTripData) => async (dispatch: Dispatch) => {
  try {
    console.log(newTripData);
    const res = await axios.post(`${process.env.EXPO_PUBLIC_URL_BASE}travel/create`, {
      // hour: newTripData.hour,
      origin: newTripData.origin,
      destination: newTripData.destination,
      day_of_travel: newTripData.date,
      places: Number(newTripData.places),
      description: newTripData.description,
      price: Number(newTripData.price),
      car_id: "c328d7f3-e175-4836-8caa-f63c6dca5a20",
      creator_id: "8d0c85a8-b5ba-4318-a8b8-e13e8d23ebb7"
    })
    const data = await res.data
    dispatch(setNewTrip({ ...data, hour: newTripData.hour }))
    console.log(data);
  } catch (error) {
    console.log(error);

  }
  // dispatch(createNewTrip(newTripData))
}