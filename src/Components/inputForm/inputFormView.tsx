import React from 'react';
import ContentEditable from 'react-contenteditable'

import { IGlobalInputState } from '../../utils/globalStateProvider';
import './inputForm.css';

export default function InputFormView ({inputs, input, onChange, toRef}: IGlobalInputState) {
    return(
        <>
            {inputs.map((innput) => {return <p>{innput}</p>})}
            <ContentEditable html={input!} onChange={onChange!} className="inputformbox" innerRef={toRef}/>
        </>
    )
}
