import styled from "styled-components";
import Navbar from "../Main/Navbar";
import { color } from "../style/colorVar";
import TestCard from "./TestCards";

const Personal = () => {
    let tests = [
        {
            id: 1,
            category: "디자이너",
            name: "절대 색감 테스트",
            content: "이거 같은 색 아니에요? \n이건 #00FFBB에요.",
        },
        {
            id: 2,
            name: "디자인 모의고사",
            category: "디자이너",
            content: "너.. 디자인에 \n진심이라면.. 들어와",
        },
        {
            id: 3,
            name: "리더/팔로워 유형 테스트",
            category: "공통",
            content: "저기.. 누가 팀장 \n하실래요?..",
        },
        {
            id: 4,
            name: "꼰대 테스트",
            category: "공통",
            content: "라떼는 말이야.. \n이런 건 꿈도 못꿨어.",
        },
        {
            id: 5,
            name: "디자이너 빙고 테스트",
            category: "디자이너",
            content: "야 너두? \n디자이너라면 격공",
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
    width: 100%;
    padding: 16px;    
`
    
const Header = styled.div`
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
`

const Title = styled.div`
    width: 100%;
    margin-bottom: 16px;
    font-size: 25px;
    text-align: left;

    p {
        font-family: "SBaggroL";
    }
`

const BadgeGroup = styled.div`
    height: ${props => props.height || "20%"};
    display: flex;
    flex-direction: colomn;
    font-size: ${props => props.fontSize || "10px"};
    margin: auto;
    padding: ${props => props.padding || 0};
`

const Badge = styled.div`
    padding: 4px 8px;
    margin: 0 4px 16px 0;
    border: 1px solid ${color.mainColor};
    border-radius: 10px;
    color: ${color.mainColor};
    font-size: 14px;
    text-align: center;
`

const TestCardGroup = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default Personal