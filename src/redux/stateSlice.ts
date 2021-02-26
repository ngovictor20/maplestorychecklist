import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
    name: 'state',
    initialState: {
      checklist: {},
      characters: [],
      characterIndex: 0,
    },
    reducers: {
      updateChecklist: (state, action) => {
        state.checklist = action.payload
      },
      updateCharList: (state, action) => {
        state.characters = action.payload
      },
      setCharIndex: (state, action) => {
        state.characterIndex = action.payload
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { updateChecklist,setCharIndex,updateCharList } = stateSlice.actions
  
  export default stateSlice.reducer

