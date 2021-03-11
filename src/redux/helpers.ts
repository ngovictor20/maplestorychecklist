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

//recursive function that sets everything to false in the checklist.
const clearChecklist = (obj: Checklist) =>
{
  const returnObject:Checklist = {};
  Object.entries(obj).forEach(([field,value])=>{
    if(typeof value !== 'boolean'){
      returnObject[field] = clearChecklist(value);
    }else{
      returnObject[field] = false;
    }
  })
  return returnObject;
}

export { getChecklistByCharacterName, clearChecklist}