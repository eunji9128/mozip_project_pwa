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
        <Container>
            
            <Card id={props.test.id} onClick={(e)=>{handleClick(e)}}>
                <Badge>{props.test.category}</Badge>
                {/* <ImgBox /> */}
                <Content>
                    <p dangerouslySetInnerHTML={{__html: props.test.content.replace(/\n/g, '<br>')}} />
                </Content>
            </Card>
            <CardLabel>{props.test.name}</CardLabel>
        </Container>
    )
};

const Container = styled.div`
    // margin: 4px;
`

const Card = styled.div`
    width: 150px;
    height: 150px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    background: url(${process.env.PUBLIC_URL}/img/test_grid${props => props.id || "1"}.svg);
    border-radius: 10px;
`

const Badge = styled.span`
    padding: 4px 8px;
    border-radius: 10px;
    background: ${color.mainColor};
    color: ${color.gray900};
    font-size: 14px;
`

const Content = styled.div`
    width: 100%;
    height: 40%;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 0 10px 10px;
    color: ${color.gray50};
    text-align: left;
    background: ${color.gray600};
    opacity: 0.8;

    p {
        font-size: 14px;
        letter-spacing: -0.5px;
    }
`

const CardLabel = styled.p`
    text-align: center;
    font-size: 12px;
    padding-bottom: 8px;
`

export default TestCard