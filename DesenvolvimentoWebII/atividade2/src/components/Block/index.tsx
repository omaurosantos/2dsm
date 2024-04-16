import styled from "styled-components";

export default function Block({color,children}:any){
    console.log("color",color);
    return <Sld color={color}>{children}</Sld>;
}

const Sld = styled.div<Props>`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    border-color: 1px solid #aaa;
    background-color: ${ (props) => {return props.color} };
`;

interface Props {
    color: string;
}