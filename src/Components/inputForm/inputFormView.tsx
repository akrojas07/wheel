import ContentEditable from 'react-contenteditable'
import { IGlobalInputState } from '../../utils/globalStateProvider';
import './inputForm.css';

export default function InputFormView ({input, onChange}: IGlobalInputState) {
    return(
        <>
            <ContentEditable html={input!} onChange={onChange!} className="inputformbox" />
        </>
    )
}
