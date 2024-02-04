import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCounter = {
  count: number;
};
const initialState: TCounter = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByFive: (state, action: PayloadAction<{ value: number }>) => {
      state.count = state.count + action.payload.value;
    },
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, incrementByFive } = counterSlice.actions;

export default counterSlice.reducer;
