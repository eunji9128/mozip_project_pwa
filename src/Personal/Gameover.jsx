import styled from "styled-components";
import { color } from "../style/colorVar";
import { useNavigate } from "react-router-dom";

const Gameover = (props) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Score>
                <span>SCORE: {props.score}</span>
            </Score>
            <Fail />
            <OverBtn onClick={()=>{window.location.reload(`/personal/${props.id}`)}}>{true ? "▶ " : null}TRY AGAIN</OverBtn>
            <OverBtn onClick={()=>{navigate('/personal')}}>EXIT TEST</OverBtn>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
`

const Score = styled.div`
    text-align: center;
    color: ${color.mainColor};
    font-size: 16px;
    padding-top: 100px;

    span {
        font-family: "yapari";
        font-weight: bold;
    }
`

const Fail = styled.div`
    width: 225px;
    height: 225px;
    margin: auto;
    margin-top: 50px;
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