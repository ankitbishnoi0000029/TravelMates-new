import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from '../reducers/reducer'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})