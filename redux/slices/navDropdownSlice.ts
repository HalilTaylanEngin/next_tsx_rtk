import { createSlice } from '@reduxjs/toolkit'

export interface NavDropdownState {
  value: String
}

const initialState: NavDropdownState = {
  value: 'hidden'
}

export const navDropdownSlice = createSlice({
  name: 'navDropdown',
  initialState,
  reducers: {
    openDropdown: state => {
      state.value = 'visible'
    },
    closeDropdown: state => {
      state.value = 'hidden'
    }
  }
})

export const { openDropdown, closeDropdown } = navDropdownSlice.actions

export default navDropdownSlice.reducer
