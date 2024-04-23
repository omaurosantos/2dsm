import styled from "styled-components";

export default function Title({children}:any){
    return <Sld>{children}</Sld>
}

const Sld = styled.h3`
    color: #444;
    margin: 5px 10px 10px 10px;
    background-color: device-cmyk(0 81% 81% 30%);
`;
