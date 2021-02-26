import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
      characters: [],
      characterIndex: 0,
    },
    reducers: {
      updateCharList: (state, action) => {
        state.characters = action.payload
      },
      setCharIndex: (state, action) => {
        state.characterIndex = action.payload
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setCharIndex, updateCharList} = characterSlice.actions
  
  export default characterSlice.reducer

