import styled from "styled-components"
import { ButtonSld } from "../Button";

export default function Ball({children, action}:any){
return <BallSld onClick={action}>{children}</BallSld>

}

const BallSld = styled(ButtonSld)`
    border-radius: 20px;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
`;