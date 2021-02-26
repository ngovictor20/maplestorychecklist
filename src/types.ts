interface Checklist{
    [key: string]: boolean;
}
interface Character{
    name: string;
    class: string;
    level: number;
}

interface FullChecklist{
    dailyChecklist: Checklist;
    weeklyBosses: Checklist;
    shiftChecklist: Checklist;
}

export type {Checklist, Character, FullChecklist };