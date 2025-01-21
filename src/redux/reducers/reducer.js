import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ReduxSlice = createSlice({
  name: 'Auth',
  initialState : {
    usertoken : false,
  } ,
  reducers: {
    userLogin: (state) => {
      state.usertoken = true
    },
    logout : (state) =>{
      state.usertoken = false;
    }

  },
})

export const { userLogin,logout } = ReduxSlice.actions

export default ReduxSlice.reducer