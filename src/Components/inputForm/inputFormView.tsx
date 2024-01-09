import { IGlobalInputState } from '../../utils/globalStateProvider';
import './inputForm.css';

export default function InputFormView ({inputs}: IGlobalInputState) {
    return(
        <div contentEditable className="inputformbox">
            {inputs.map(input => {
               return (
                <p>{input}</p>
               )
            })}
        </div>
    )
}
