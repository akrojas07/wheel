import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

export interface IGlobalInputState{
    inputs: string[];
}


const GlobalInputStateContext = createContext({
    inputState: {} as Partial<IGlobalInputState>,
    setInputState: {} as Dispatch<SetStateAction<Partial<IGlobalInputState>>>
});


export const GlobalInputStateProvider = ({
    children,
    value = {} as IGlobalInputState
}: 
{
    children: React.ReactNode; 
    value?: Partial<IGlobalInputState>
}) => {
    const [inputState, setInputState] = useState(value);
    return(
        <GlobalInputStateContext.Provider value={{inputState, setInputState}}>
            {children}
        </GlobalInputStateContext.Provider>
    );
}

export const useGlobalInputState = () => {
    const context = useContext(GlobalInputStateContext);
    if(!context){
        throw new Error('useGlobalInputState must be used within GlobalInputStateContext');
    }
    return context;
}