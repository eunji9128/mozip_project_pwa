import styled from "styled-components";
import { color } from "../style/colorVar";
import { useNavigate } from "react-router";

const TestCard = (props) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`./${props.test.id}`);
    }
    
    return (
        <Container onClick={(e)=>{handleClick(e)}}>
            <ImgBox />
            <Content>
                <h1>{props.test.name}</h1>
                <p dangerouslySetInnerHTML={{__html: props.test.content.replace(/\n/g, '<br>')}} />
            </Content>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ImgBox = styled.div`
    width: 90px;
    height: 90px;
    background: ${color.gray700};
    border-radius: 10px;
`

const Content = styled.div`
    width: auto;
    height: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: ${color.gray50};

    h1 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }
`

export default TestCard