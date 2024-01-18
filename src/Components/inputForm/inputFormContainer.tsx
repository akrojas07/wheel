// input form logic
import React, {useEffect, useState} from 'react';
import InputFormView from './inputFormView';
import { IGlobalInputState, useGlobalInputState } from '../../utils/globalStateProvider';
import { ContentEditableEvent } from 'react-contenteditable';

export default function InputFormContainer(){
    const {setInputState} = useGlobalInputState();
    const trips: Partial<IGlobalInputState> = {
        inputs: ['Big Sur', 'Camp Pendleton', 'Catalina', 'Palm Springs', 'San Francisco']
    }
    
    const [additionalInput, setAdditionalInput] = useState(trips.inputs!.toString().replaceAll(',', '<br>'));

    function onInputChange(event: ContentEditableEvent){
        setAdditionalInput(event.target.value);
        trips.inputs!.push(additionalInput);
        setInputState(trips);
    }
    
    useEffect(() =>{
        setInputState((prev) =>({...prev, ...trips}));
    },[]);

    return (
        <InputFormView input={additionalInput} onChange={onInputChange}/>
    )
}
