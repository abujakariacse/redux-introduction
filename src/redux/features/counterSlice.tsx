import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  couneter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});
