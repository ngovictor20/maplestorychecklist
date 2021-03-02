import checklist from 'config/checklists';
import { isEmpty } from 'lodash';

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


export { getChecklistByCharacterName }