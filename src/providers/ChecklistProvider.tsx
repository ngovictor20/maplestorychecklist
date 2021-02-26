import React, {useContext, createContext} from 'react';
const ChecklistContext = createContext(undefined);


export const ChecklistProvider = ChecklistContext.Provider;
export default ChecklistContext;