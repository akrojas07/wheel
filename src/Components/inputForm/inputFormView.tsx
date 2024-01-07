import { IInputType } from "../../utils/customTypes";

export default function InputForm ({inputs}: IInputType) {
    return(
        <>
            {inputs.map(input => {
               return <p>{input}</p>
            })}
        </>
    )
}
