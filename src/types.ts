interface Checklist {
  [key: string]: boolean | Checklist;
}

interface Character {
  name: string;
  class: Class;
  level: number;
}

enum ChecklistType {
  dailyChecklist = "dailyChecklist",
  weeklyBosses = "weeklyBosses",
  shiftChecklist = "shiftChecklist",
}

interface FullChecklist {
  dailyChecklist: Checklist;
  weeklyBosses: Checklist;
  shiftChecklist: Checklist;
}

enum Class {
  magician = "magician",
  thief = "thief",
  warrior = "warrior",
  bowman = "bowman",
  pirate = "pirate",
}

export type { Checklist, Character, FullChecklist };
export { Class, ChecklistType };
