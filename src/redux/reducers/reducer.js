import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ReduxSlice = createSlice({
  name: 'Auth',
  initialState : {
    usertoken : false,
    userJwtToken: "",
    userId : "",
  } ,
  reducers: {
    userLogin: (state) => {
      state.usertoken = true
    },
    logout : (state) =>{
      state.usertoken = false;
    },
    loginUserToken : (state,action) =>{
      state.userJwtToken = action.payload;
    },
    userId : (state,action) =>{
      state.userId = action.payload;
    }

  },
})

export const {loginUserToken, userLogin,logout ,userId } = ReduxSlice.actions

export default ReduxSlice.reducer