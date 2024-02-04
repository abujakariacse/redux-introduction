import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
