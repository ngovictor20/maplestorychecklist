import { Character, Checklist, ChecklistType, FullChecklist } from "types";

interface State {
    characters: Array<Character>;
    characterIndex: number;
    checklist: FullChecklist;
    checklistType: ChecklistType;
}

interface ChecklistUpdateData {
    field: string;
}

interface SubChecklistData {
    field: string;
    data: Checklist;
}

interface AddChecklistData{
    field: string;
    heading?: string;
  }
export type { State, ChecklistUpdateData, SubChecklistData, AddChecklistData };