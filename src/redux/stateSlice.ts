import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import checklistBase from "config/checklists";
import { Character, Checklist, ChecklistType, FullChecklist } from "types";
import { getChecklistByCharacterName, clearChecklist } from "redux/helpers";
import { RootState } from "./store";
import { AddChecklistData, ChecklistUpdateData, State, SubChecklistData } from "./types";
import deepFreeze from 'deep-freeze';
import { isEmpty, omit } from 'lodash';
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
    dailyResetChecklists: (state) => {
      current(state).characters.forEach((character) => {
        const currentChecklist = localStorage.getItem(character.name);
        if (currentChecklist) {
          const checklist = JSON.parse(currentChecklist.toString());
          const { weeklyBosses } = checklist;
          const clearedChecklist = clearChecklist(checklist);
          localStorage.setItem(character.name, JSON.stringify({ ...clearedChecklist, weeklyBosses }))
        } else {
          localStorage.setItem(character.name, JSON.stringify({ ...checklistBase }))
        }
      })
    },
    weeklyResetChecklists: (state) => {
      current(state).characters.forEach((character) => {
        const currentChecklist = localStorage.getItem(character.name);
        if (currentChecklist) {
          const checklist = JSON.parse(currentChecklist.toString());
          const clearedChecklist = clearChecklist(checklist);
          localStorage.setItem(character.name, JSON.stringify({ ...clearedChecklist}))
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
    addChecklistItem: (state, action: PayloadAction<string>) => {
      const { checklistType, checklist } = current(state);
      if (!(action.payload in checklist[checklistType])) {
        state.checklist[checklistType][action.payload] = false;
        localStorage.setItem(state.characters[state.characterIndex].name, JSON.stringify(current(state).checklist));
      }
    },
    deleteChecklistItem: (state, action: PayloadAction<AddChecklistData>) => {
      const { checklistType, checklist } = current(state);
      if(action.payload.heading){
        deepFreeze(checklist[checklistType][action.payload.heading]);
        // @ts-ignore
        state.checklist[checklistType][action.payload.heading] = omit(checklist[checklistType][action.payload.heading], [action.payload.field]);
      }else{
        deepFreeze(checklist[checklistType]);
        state.checklist[checklistType] = omit(checklist[checklistType], [action.payload.field]);
      }
      localStorage.setItem(state.characters[state.characterIndex].name, JSON.stringify(current(state).checklist));
    },
    addSubChecklist:(state, action: PayloadAction<AddChecklistData>) =>{

    },
    addSubChecklistItem:(state, action: PayloadAction<AddChecklistData>) =>{

    },
    clearExistingChecklist: (state) => {
      const { checklistType, checklist } = current(state);
      state.checklist[checklistType] = clearChecklist(checklist[checklistType]);
      localStorage.setItem(state.characters[state.characterIndex].name, JSON.stringify(current(state).checklist));
    },
    clearCharacterChecklist: (state) => {
      const { checklist } = current(state);
      const clearedChecklist = clearChecklist(checklist);
      //@ts-ignore
      state.checklist = { ...clearedChecklist };
      localStorage.setItem(state.characters[state.characterIndex].name, JSON.stringify(current(state).checklist));
    },
  },
});

export const {
  updateChecklist,
  setCharIndex,
  updateCharList,
  addChar,
  updateChecklistItem,
  dailyResetChecklists,
  weeklyResetChecklists,
  resetChecklists,
  clearExistingChecklist,
  clearCharacterChecklist,
  setChecklistType,
  deleteCharacter,
  updateSubChecklist,
  addChecklistItem,
  deleteChecklistItem,
} = stateSlice.actions;

export const selectChecklist = (state: RootState) => state.checklist;
export const selectChecklistType = (state: RootState) => state.checklistType;
export const selectCharacters = (state: RootState) => state.characters;
export const selectCharacterIndex = (state: RootState) => state.characterIndex;

export default stateSlice.reducer;
