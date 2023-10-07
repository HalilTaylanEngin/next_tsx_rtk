
import { configureStore } from '@reduxjs/toolkit'
import navDropdownReducer from './slices/navDropdownSlice'

export const store = configureStore({
  reducer: {
    navDropdown: navDropdownReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
 