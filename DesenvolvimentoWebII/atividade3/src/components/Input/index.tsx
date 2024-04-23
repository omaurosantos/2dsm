import styled from "styled-components";
import { InputProps } from "../../types";

export default function Input({label, value, setValue, min, max}:InputProps){
    const set = (e:any) => {
        if( e.target.value > max ){
            setValue(max);
        }
        else if( e.target.value < min ){
            setValue(min);
        }
        else{
            setValue(e.target.value);
        }
    };

    return (
        <WrapperSld>
            <LabelSld>{label}</LabelSld>
            <InputSld value={value} onChange={ set } />
        </WrapperSld>
    );
}

const WrapperSld = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 10px;
`;

const LabelSld = styled.label`
    color: #444;
    font-weight: 600;
    font-size: 18px;
`;

const InputSld = styled.input.attrs({type:"text"})`
    border-radius: 5px;
    padding: 5px;
    color: #888;
    font-size: 16px;
    font-weight: 600;
    width: 120px;
    text-align: right;
`;