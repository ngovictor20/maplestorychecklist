import {createContext} from 'react';
const CharacterContext = createContext({});

export const CharacterProvider = CharacterContext.Provider;
export default CharacterContext;