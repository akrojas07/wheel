// input form logic
import React, {useEffect} from 'react';
import InputFormView from './inputFormView';
import { IGlobalInputState, useGlobalInputState } from '../../utils/globalStateProvider';

export default function InputFormContainer(){
    const {inputState, setInputState} = useGlobalInputState();
      // starter trips
    const trips: Partial<IGlobalInputState> = {
        inputs: ['Big Sur', 'Camp Pendleton', 'Catalina', 'Palm Springs', 'San Francisco']
    }
    
    useEffect(() =>{
        setInputState((prev) =>({...prev, ...trips}));
    }, []);

    let inputValues = inputState.inputs? inputState.inputs! : trips.inputs;
    
    return (
        <InputFormView inputs={inputValues!}/>
    )
}
