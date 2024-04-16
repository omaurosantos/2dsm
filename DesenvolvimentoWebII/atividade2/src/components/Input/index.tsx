import styled from "styled-components";

export default function Input({label, value, setValue, min, max}:any){
    const set = (e:any) => {
        const number = parseFloat(e.target.value);
        if( isNaN(number) ){
            setValue(min);
        }
        else if(e.target.value > max) {
            setValue(max);
        }
        else if(e.target.value < min) {
            setValue(min);
        }
        else {
            setValue(e.target.value);
        }
    }

    return (
    <WrapperSld>
        <LabelSld>{label}</LabelSld>
        <InputSld value={value} onChange={set}/>
    </WrapperSld>);
}

const WrapperSld = styled.div`
    display:flex ;
    flex-direction: column;
`;

const LabelSld = styled.label``;

const InputSld = styled.input.attrs({type:"text"})`
    border-radius: 5px;
    padding: 5px;
    color: #888;
    font-size: 16px;
    font-weight: 600;
    width: 120px;
    text-align: right;
`;