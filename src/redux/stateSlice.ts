import { createSlice } from '@reduxjs/toolkit';
import checklist from 'config/checklists';
import _ from 'lodash';

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
        //@ts-ignore
        const storage = JSON.parse(localStorage.getItem(state.characters[state.characterIndex]));
        if(_.isEmpty(storage)){
          state.checklist = storage;
        }else{
          state.checklist = checklist;
        }
        state.characterIndex = action.payload
      },
    }
  })
  
  export const { updateChecklist,setCharIndex,updateCharList } = stateSlice.actions
  
  export default stateSlice.reducer

