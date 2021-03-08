import checklist from 'config/checklists';
import { isEmpty } from 'lodash';
import { Checklist } from 'types';

const getChecklistByCharacterName = (charName: string) => {
    const storage = JSON.parse(
        //@ts-ignore
        localStorage.getItem(charName)
      );
    if (!isEmpty(storage)) {
        return storage;
      } else {
        localStorage.setItem(charName, JSON.stringify(checklist));
        return checklist;
      }
}

const resetChecklist = (obj: Checklist) =>
{
  const returnObject:Checklist = {};
  Object.entries(obj).forEach(([field,value])=>{
    if(typeof value !== 'boolean'){
      returnObject[field] = resetChecklist(value);
    }else{
      returnObject[field] = false;
    }
  })
  return returnObject;
}

export { getChecklistByCharacterName, resetChecklist}