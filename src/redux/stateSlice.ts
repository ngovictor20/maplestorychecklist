import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import checklist from "config/checklists";
import { isEmpty } from "lodash";
import { Character, FullChecklist } from "types";

interface IState{
  characters: Array<Character>;
  characterIndex: number;
  checklist: FullChecklist;
}

const initialState : IState = {
  checklist: {
    dailyChecklist: {},
    shiftChecklist: {},
    weeklyBosses: {},
  },
  characters: [],
  characterIndex: 0,
}

export const stateSlice = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    updateChecklist: (state, action:  PayloadAction<FullChecklist>) => {
      state.checklist = action.payload;
    },
    updateCharList: (state, action: PayloadAction<Array<Character>>) => {
      state.characters = action.payload;
    },
    addChar:(state, action: PayloadAction<Character>)=>{
      state.characters.push(action.payload);
    },
    setCharIndex: (state, action) => {
      const storage = JSON.parse(
      //@ts-ignore
        localStorage.getItem(state.characters[state.characterIndex])
      );
      if (isEmpty(storage)) {
        state.checklist = storage;
      } else {
        state.checklist = checklist;
      }
      state.characterIndex = action.payload;
    },
  },
});

export const {
  updateChecklist,
  setCharIndex,
  updateCharList,
  addChar
} = stateSlice.actions;

export default stateSlice.reducer;
