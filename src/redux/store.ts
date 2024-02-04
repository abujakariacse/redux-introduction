import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counterSlice";
import Logger from "./middleware/Logger";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
  //   devTools: false, // we will off the devtools on production
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger), // custom Logger Function
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
