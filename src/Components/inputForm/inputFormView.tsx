import { IInputType } from "../../utils/customTypes";
import './inputForm.css';

export default function InputForm ({inputs}: IInputType) {
    return(
        <div contentEditable="true" className="inputformbox">
            {inputs.map(input => {
               return (
                <p>{input}</p>
               )
            })}
        </div>
    )
}
