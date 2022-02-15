import { Children, useContext } from 'react';
import { createContext } from 'react';
export const BudgetsContexts = createContext();
function helloWorld() {
    return <div>hi!!!!!!!!!!</div>
}
export function useBudgets() {
    return useContext(BudgetsContexts)
}
export function BudgetsProvider({children}) {
    return(
     <BudgetsContexts.Provider value={helloWorld} >
         {children}
     </BudgetsContexts.Provider>
    )
}