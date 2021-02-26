import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import checklist from "config/checklists";
import { isEmpty } from "lodash";
import { Character, FullChecklist } from "types";
import { RootState } from "./store";

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
      if (!isEmpty(storage)) {
        state.checklist = storage;
        console.log(state.checklist);
      } else {
        console.log("Hello");
        state.checklist = checklist;
        console.log(current(state).checklist);
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

export const selectChecklist = (state: RootState) => state.checklist;
export const selectCharacters = (state: RootState) => state.characters;
export const selectCharacterIndex = (state: RootState) => state.characterIndex;

export default stateSlice.reducer;
