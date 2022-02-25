import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: ""
  },
  reducers: {
    addSearchValue:(state,action)=>{
        state.value=action.payload
    }
  }
})

export const { addSearchValue } = searchSlice.actions

export default searchSlice.reducer