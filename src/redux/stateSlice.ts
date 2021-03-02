import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import checklist from "config/checklists";
import { isEmpty } from "lodash";
import { Character, Checklist, ChecklistType, FullChecklist } from "types";
import { RootState } from "./store";

interface IState {
  characters: Array<Character>;
  characterIndex: number;
  checklist: FullChecklist;
  checklistType: ChecklistType;
}

interface checklistUpdateData {
  field: string;
}

interface subchecklistData{
  field: string;
  data: Checklist;
}

const initialState: IState = {
  checklist: {
    dailyChecklist: {},
    shiftChecklist: {},
    weeklyBosses: {},
  },
  characters: [],
  characterIndex: 0,
  checklistType: ChecklistType.dailyChecklist,
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
      state.checklist[state.checklistType][action.payload.field] = !state.checklist[state.checklistType][action.payload.field];
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
        localStorage.setItem(state.characters[action.payload].name, JSON.stringify(checklist));
        state.checklist = checklist;
      }
      state.characterIndex = action.payload;
    },
    resetDailyChecklists: (state) => {
      state.characters.forEach((character) => {
        const dailyList = checklist.dailyChecklist;
        localStorage.setItem(character.name, JSON.stringify({ ...checklist, dailyChecklist: dailyList }))
      })
    },
    resetWeeklyChecklists: (state) => {
      state.characters.forEach((character) => {
        const weeklyList = checklist.weeklyBosses;
        const dailyList = checklist.dailyChecklist;
        localStorage.setItem(character.name, JSON.stringify({ ...checklist, weeklyBosses: weeklyList, dailyChecklist: dailyList }))
      })
    },
    setChecklistType: (state, action: PayloadAction<ChecklistType>) => {
      state.checklistType = action.payload;
    },
    deleteCharacter: (state, action: PayloadAction<number>) => {
      const character = state.characters[action.payload];
      localStorage.removeItem(character.name);
      state.characters.splice(action.payload, 1);
      localStorage.setItem('characters', JSON.stringify(current(state).characters));
    },
    updateSubChecklist: (state, action: PayloadAction<subchecklistData>)=>{
      console.log("update checklist sub");
      console.log(action.payload.data, action.payload.field)
      state.checklist[state.checklistType][action.payload.field] = action.payload.data;
      localStorage.setItem(state.characters[state.characterIndex].name,JSON.stringify(current(state).checklist));
    }
  },
});

export const {
  updateChecklist,
  setCharIndex,
  updateCharList,
  addChar,
  updateChecklistItem,
  resetDailyChecklists,
  resetWeeklyChecklists,
  setChecklistType,
  deleteCharacter,
  updateSubChecklist
} = stateSlice.actions;

export const selectChecklist = (state: RootState) => state.checklist;
export const selectCharacters = (state: RootState) => state.characters;
export const selectCharacterIndex = (state: RootState) => state.characterIndex;

export default stateSlice.reducer;
