import './wheel.css';
import { IGlobalInputState } from '../../utils/globalStateProvider';

// Wheel placeholder
function WheelView ({inputs}: IGlobalInputState) {
    return (    
    <canvas>
        {inputs}
    </canvas>
    )
}

export default WheelView;
