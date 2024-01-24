import { configureStore } from '@reduxjs/toolkit'
import addTextBlockSlice from './CreateTectBlock'

export const store = configureStore({
    reducer: {
        TextBlock:addTextBlockSlice,
     
    },
  })