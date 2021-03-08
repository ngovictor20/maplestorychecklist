import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import checklistBase from "config/checklists";
import { Character, Checklist, ChecklistType, FullChecklist } from "types";
import { getChecklistByCharacterName, resetChecklist } from "redux/helpers";
import { RootState } from "./store";
import { ChecklistUpdateData, State, SubChecklistData } from "./types";

const initialState: State = {
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
    setChecklistType: (state, action: PayloadAction<ChecklistType>) => {
      state.checklistType = action.payload;
    },
    addChar: (state, action: PayloadAction<Character>) => {
      state.characters.push(action.payload);
      localStorage.setItem("characters", JSON.stringify(current(state).characters));
    },
    updateChecklistItem: (state, action: PayloadAction<ChecklistUpdateData>) => {
      const { field } = action.payload;
      const { checklistType, characters, checklist, characterIndex } = state;
      state.checklist[checklistType][field] = !checklist[checklistType][field];
      localStorage.setItem(characters[characterIndex].name, JSON.stringify(current(state).checklist));
    },
    setCharIndex: (state, action: PayloadAction<number>) => {
      const { name } = state.characters[action.payload]
      state.checklist = getChecklistByCharacterName(name);
      state.characterIndex = action.payload;
    },
    resetDailyChecklists: (state) => {
      current(state).characters.forEach((character) => {
        const currentChecklist = localStorage.getItem(character.name);
        if (currentChecklist) {
          const { weeklyBosses } = JSON.parse(currentChecklist.toString());
          localStorage.setItem(character.name, JSON.stringify({ ...checklistBase, weeklyBosses }))
        } else {
          localStorage.setItem(character.name, JSON.stringify({ ...checklistBase }))
        }
      })
    },
    resetChecklists: (state) => {
      const { characters } = current(state);
      characters.forEach((character) => {
        localStorage.setItem(character.name, JSON.stringify({ ...checklistBase }))
      })
    },
    deleteCharacter: (state, action: PayloadAction<number>) => {
      const { name } = state.characters[action.payload];
      localStorage.removeItem(name);
      state.characters.splice(action.payload, 1);
      localStorage.setItem('characters', JSON.stringify(current(state).characters));
    },
    updateSubChecklist: (state, action: PayloadAction<SubChecklistData>) => {
      state.checklist[state.checklistType][action.payload.field] = action.payload.data;
      localStorage.setItem(state.characters[state.characterIndex].name, JSON.stringify(current(state).checklist));
    },
    addChecklistItem: (state)=>{ //, action: PayloadAction<{field: string}>
      const {checklistType, checklist} = current(state);
      console.log(resetChecklist(checklist[checklistType]));
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
  resetChecklists,
  setChecklistType,
  deleteCharacter,
  updateSubChecklist,
  addChecklistItem,
} = stateSlice.actions;

export const selectChecklist = (state: RootState) => state.checklist;
export const selectChecklistType = (state: RootState) => state.checklistType;
export const selectCharacters = (state: RootState) => state.characters;
export const selectCharacterIndex = (state: RootState) => state.characterIndex;

export default stateSlice.reducer;
