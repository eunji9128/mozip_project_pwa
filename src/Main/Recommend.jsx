import styled from "styled-components";
import { color } from "../style/colorVar";
import { ProjectCard } from "./Cards";

const Recommend = () => {
    let cards = new Array(12).fill(0);

    return (
        <Container padding={"16px"}>
            <div style={{overflowX: "scroll"}}>
                <BtnGroup>
                    <FilterBtn>관심사 ▼</FilterBtn>
                    <FilterBtn>모임횟수 ▼</FilterBtn>
                    <FilterBtn>지역 ▼</FilterBtn>
                    <FilterBtn>기술스택 ▼</FilterBtn>
                    <FilterBtn>경력 ▼</FilterBtn>
                    <FilterBtn>모임방식 ▼</FilterBtn>
                </BtnGroup>
            </div>
            <div style={{overflowX: "scroll"}}>
                <BadgeGroup padding={"4px"} fontSize={"14px"}>
                    <Badge>온라인🏠</Badge>
                    <Badge>블랜디드💻</Badge>
                    <Badge>여행🌴</Badge>
                    <Badge>운동💪</Badge>
                    <Badge>Figma</Badge>
                </BadgeGroup>
            </div>
            <Hr />
            <Container padding={"16px"}>
                <h1>허성원님을 위한 추천 프로젝트</h1>
                {
                    cards.map((data, i) => {
                        return <ProjectCard key={i}/>
                    })
                }
            </Container>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};

    h1 {
        font-size: 18px;
        margin-bottom: 16px;
    }
`
    
const BtnGroup = styled.div`
    width: 170%;
    padding: 4px;
    overflow-x: scroll;
`

const FilterBtn = styled.button`
    padding: 8px 16px;
    margin: 0 8px 0 0;
    background: ${color.gray800};
    border: ${color.gray700};
    border-radius: 10px;
    color: ${color.gray50};    
    font-size: 14px;
`

const BadgeGroup = styled.div`
    width: 120%;
    height: ${props => props.height || "20%"};
    display: flex;
    flex-direction: row;
    font-size: ${props => props.fontSize || "10px"};
    margin: auto;
    padding: ${props => props.padding || 0};
    // flex-wrap: wrap;
`

const Badge = styled.div`
    padding: 4px 10px;
    margin: 0 4px 4px 0;
    background: ${color.gray700};
    border-radius: 15px;
    color: ${color.gray50};
    text-align: center;
`

const Hr = styled.hr`
    border: 4px solid ${color.gray800};
`

export default Recommend