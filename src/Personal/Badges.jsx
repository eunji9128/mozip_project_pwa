import styled from "styled-components";
import { color } from "../style/colorVar";

const TestBadge = (props) => {
    return (
        <Background id={props.badgeData.id}>
            <Wrap>
                <ExitBtn>X</ExitBtn>
            </Wrap>
            <Title>AWARD</Title>
            <BadgeImg id={props.badgeData.id} />
            <Contents>
                <h1>{props.badgeData.title}</h1>
                <p>{props.badgeData.contents[0]}</p>
                <p>{props.badgeData.contents[1]}</p>
                <br />
                <p>{props.badgeData.contents[2]}</p>
                <p>{props.badgeData.contents[3]}</p>
            </Contents>
            <ShareBtn>공유하기</ShareBtn>
        </Background>
    )
};

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${process.env.PUBLIC_URL}/img/badge${props => props.id || "1"}_back.svg);
`

const Wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

const ExitBtn = styled.div`
    font-size: 16px;
`

const Title = styled.p`
    text-align: center;
    font-size: 16px;
    color: ${color.mainColor};
    font-family: "yapari";
    font-weight: bold;
    padding-top: 46px;
    padding-bottom: 64px;
`

const BadgeImg = styled.div`
    width: 100%;
    height: 230px;
    background: url(${process.env.PUBLIC_URL}/img/badge${props => props.id || "1"}.svg);
`

const Contents = styled.div`
    text-align: center;
    padding-top: 64px;
    padding-bottom: 70px;

    h1 {
        margin-bottom: 12px;
    }

    p {
        font-size: 14px;
        color: ${color.gray400};
    }
`

const ShareBtn = styled.button`
    width: 100%;
    border: none;
    border-radius: 10px;
    background: ${color.mainColor};
    font-size: 16px;
    font-weight: bold;
    padding: 16px 0;
`

export default TestBadge