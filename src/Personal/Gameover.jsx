import styled from "styled-components";
import { color } from "../style/colorVar";

const Gameover = () => {
    return (
        <Container>
            <Fail />
            <OverBtn>{true ? "▶ " : null}TRY AGAIN</OverBtn>
            <OverBtn>EXIT TEST</OverBtn>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
`

const Fail = styled.div`
    width: 225px;
    height: 225px;
    margin: auto;
    margin-top: 200px;
    margin-bottom: 40px;
    background: url(${process.env.PUBLIC_URL}/img/gameover.svg);
`

const OverBtn = styled.button`
    width: 100%;
    margin: auto;
    background: none;
    border: none;
    color: ${color.mainColor};
    font-family: "yapari";
    font-size: 16px;
    margin-top: 40px;
`

export default Gameover;