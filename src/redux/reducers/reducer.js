import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState : {
    usertoken : false
  } ,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    userLogin: (state,action) => {
      state.usertoken = action.payload
      console.log(state.value);
      
    }
  },
})

export const { userLogin } = counterSlice.actions

export default counterSlice.reducer