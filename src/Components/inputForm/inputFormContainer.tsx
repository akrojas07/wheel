// input form logic
import React, {useEffect, useRef, useState} from 'react';
import InputFormView from './inputFormView';
import { IGlobalInputState, useGlobalInputState } from '../../utils/globalStateProvider';
import { ContentEditableEvent } from 'react-contenteditable';

export default function InputFormContainer(){
    const {inputState, setInputState} = useGlobalInputState();
    const trips: Partial<IGlobalInputState> = {
        inputs: ['Big Sur', 'Camp Pendleton', 'Catalina', 'Palm Springs', 'San Francisco']
    }

    const starterTrips = useRef(trips);

    const [additionalInput, setAdditionalInput] = useState('Big Sur<br> Camp Pendelton');
    
    useEffect(() =>{
        setInputState((prev) =>({...prev, ...trips}));
    }, []);

    let inputValues = inputState.inputs? inputState.inputs! : trips.inputs;

    function onInputChange(event: ContentEditableEvent){
        setAdditionalInput(() => event.target.value);
        trips.inputs!.push(additionalInput);
        setInputState(trips);
    }

    return (
        <InputFormView inputs={trips.inputs!} toRef={starterTrips} input={additionalInput} onChange={onInputChange}/>
    )
}

/*
export default function InputFormContainer(){
    const {inputState, setInputState} = useGlobalInputState();
    const trips: Partial<IGlobalInputState> = {
        inputs: ['Big Sur<br> Camp Pendelton', 'Camp Pendleton', 'Catalina', 'Palm Springs', 'San Francisco']
    }

    const starterTrips = useRef(trips);

    const [additionalInput, setAdditionalInput] = useState('Big Sur<br> Camp Pendelton');
    
    useEffect(() =>{
        setInputState((prev) =>({...prev, ...trips}));
    }, []);

    let inputValues = inputState.inputs? inputState.inputs! : trips.inputs;

    function onInputChange(event: ContentEditableEvent){
        setAdditionalInput(() => event.target.value);
        trips.inputs!.push(additionalInput);
        setInputState(trips);
    }

    return (
        <InputFormView inputs={inputValues!} input={additionalInput} onChange={onInputChange}/>
    )
}
*/
