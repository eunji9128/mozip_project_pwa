import styled from "styled-components";
import Navbar from "../Main/Navbar";
import { color } from "../style/colorVar";
import TestCard from "./TestCards";

const Personal = () => {
    let tests = [
        {
            id: 1,
            name: "디자인 모의고사",
            content: "너.. 디자인에 진심인가? \n 그렇다면 들어와",
        },
        {
            id: 2,
            name: "리더/팔로워 유형 테스트",
            content: "저기.. 누가 팀장 하실래요? \n 괜찮으시겠어요?",
        },
        {
            id: 3,
            name: "테스트 제목 제목",
            content: "테스트 내용 내용1 \n 테스트 내용 내용2",
        },
        {
            id: 4,
            name: "테스트 제목 제목",
            content: "테스트 내용 내용1 \n 테스트 내용 내용2",
        },
        {
            id: 5,
            name: "테스트 제목 제목",
            content: "테스트 내용 내용1 \n 테스트 내용 내용2",
        },
    ];

    return (
        <Container>
            <Header>
                성향
            </Header>
            <Title>
                <p>팀원으로서 나는<br />어떤 사람일까?</p>
            </Title>
            <BadgeGroup>
                <Badge>모두</Badge>
            </BadgeGroup>
            <TestCardGroup>
                {
                    tests.map((test, i) => {
                        return (
                            <TestCard key={i} test={test} />
                        )
                    })
                }
            </TestCardGroup>
            {/* <Navbar /> */}
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    padding: 16px;    
`
    
const Header = styled.div`
    width: 100%;
    height: 40px;
    font-size: 18px;
`

const Title = styled.div`
    width: 100%;
    margin-bottom: 16px;
    font-size: 25px;
    text-align: left;
`

const BadgeGroup = styled.div`
    height: ${props => props.height || "20%"};
    display: flex;
    flex-direction: row;
    font-size: ${props => props.fontSize || "10px"};
    margin: auto;
    padding: ${props => props.padding || 0};
`

const Badge = styled.div`
    padding: 4px 10px;
    margin: 0 4px 4px 0;
    background: ${color.gray700};
    border-radius: 15px;
    color: ${color.gray50};
    text-align: center;
`

const TestCardGroup = styled.div`
    margin-top: 16px;
`

export default Personal