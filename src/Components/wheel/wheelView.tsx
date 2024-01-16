import './wheel.css';
import { IGlobalInputState } from '../../utils/globalStateProvider';

// Wheel placeholder
function WheelView ({inputs}: IGlobalInputState) {
    return (
        <>        
            <div className='limited'>
            {inputs}
            </div>
            <canvas>
                {inputs}
            </canvas>
        </>    

    )
}

export default WheelView;
