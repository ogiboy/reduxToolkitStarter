import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCar: (state, { payload }) => {
      state.data.push(payload);
    },
    removeCar: (state, { payload }) => {
      state.data = state.data.filter((car) => car.id !== payload.id);
    }
  }
});

export const { addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
