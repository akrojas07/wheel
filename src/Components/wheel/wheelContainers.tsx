// Wheel Logic
import WheelView from "./wheelView";
import { useGlobalInputState } from '../../utils/globalStateProvider';
import {useEffect} from 'react';

// take trips from parent and populate the wheel
export default function WheelContainer(){
    const {inputState} = useGlobalInputState();

    useEffect(() => {
        console.log(`input state at wheel: ${inputState.inputs}`)
    }, [inputState]);

    return(
        <WheelView inputs={inputState.inputs!}/>
    )
}
