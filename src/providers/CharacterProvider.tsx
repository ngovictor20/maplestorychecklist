import React, {useContext, createContext} from 'react';
const CharacterContext = createContext(undefined);

export const CharacterProvider = CharacterContext.Provider;
export default CharacterContext;