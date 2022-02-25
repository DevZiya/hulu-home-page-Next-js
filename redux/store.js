import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import searchReducer from './searchReducer'

export const makeStore = () =>
  configureStore({
    reducer:{
      search:searchReducer,
    }
  });

  export const wrapper = createWrapper(makeStore)