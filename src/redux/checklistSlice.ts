import { createSlice } from '@reduxjs/toolkit';

export const checklistSlice = createSlice({
    name: 'checklist',
    initialState: {
      checklist: {},
    },
    reducers: {
      updateChecklist: (state, action) => {
        state.checklist = action.payload
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { updateChecklist } = checklistSlice.actions
  
  export default checklistSlice.reducer

