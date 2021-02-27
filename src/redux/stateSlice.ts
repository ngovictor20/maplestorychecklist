import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import checklist from "config/checklists";
import { isEmpty } from "lodash";
import { Character, FullChecklist } from "types";
import { RootState } from "./store";

interface IState {
  characters: Array<Character>;
  characterIndex: number;
  checklist: FullChecklist;
}

interface checklistUpdateData {
  field: string;
  type: "weeklyBosses" | "dailyChecklist" | "shiftChecklist";
}

const initialState: IState = {
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
    updateChecklist: (state, action: PayloadAction<FullChecklist>) => {
      state.checklist = action.payload;
    },
    updateCharList: (state, action: PayloadAction<Array<Character>>) => {
      state.characters = action.payload;
    },
    addChar: (state, action: PayloadAction<Character>) => {
      state.characters.push(action.payload);
      console.log(current(state).characters);
      localStorage.setItem("characters", JSON.stringify(current(state).characters));
    },
    updateChecklistItem: (state, action: PayloadAction<checklistUpdateData>) => {
      state.checklist[action.payload.type][action.payload.field] = !state.checklist[action.payload.type][action.payload.field];
      localStorage.setItem(state.characters[state.characterIndex].name, JSON.stringify(current(state).checklist));
    },
    setCharIndex: (state, action: PayloadAction<number>) => {
      const storage = JSON.parse(
        //@ts-ignore
        localStorage.getItem(state.characters[action.payload].name)
      );
      if (!isEmpty(storage)) {
        state.checklist = storage;
        console.log(current(state).checklist)
      } else {
        console.log("empty");
        localStorage.setItem(state.characters[action.payload].name, JSON.stringify(checklist));
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
  addChar,
  updateChecklistItem
} = stateSlice.actions;

export const selectChecklist = (state: RootState) => state.checklist;
export const selectCharacters = (state: RootState) => state.characters;
export const selectCharacterIndex = (state: RootState) => state.characterIndex;

export default stateSlice.reducer;
