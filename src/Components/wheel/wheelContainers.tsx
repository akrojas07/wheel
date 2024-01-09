// Wheel Logic
import WheelView from "./wheelView";
import { useGlobalInputState } from '../../utils/globalStateProvider';

// take trips from parent and populate the wheel
export default function WheelContainer(){
    const {inputState} = useGlobalInputState()
    return(
        <WheelView inputs={inputState.inputs!}/>
    )
}
