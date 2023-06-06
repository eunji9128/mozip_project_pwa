import styled from "styled-components";
import { color } from "../style/colorVar";

const project_list = [
    {
        "id": 1,
        "title": "⛰️[여행플랫폼] 내 손 안의 여행북✈️ ⛰️",
        "badge_list": ["여행", "주 2회", "서울", "블렌디드"],
        "current_personnel": 5,
        "max_personnel": 5,
    },
    {
        "id": 2,
        "title": "[영화] 영화인을 위한 커뮤니티",
        "badge_list": ["영화", "주 3회", "서울", "오프라인"],
        "current_personnel": 5,
        "max_personnel": 5,
    },
    {
        "id": 3,
        "title": "[메타버스] 🔮메타커머스에선 모든게 다 가능해!",
        "badge_list": ["메타버스", "직장인", "온라인"],
        "current_personnel": 4,
        "max_personnel": 5,
    },
    {
        "id": 4,
        "title": "🐶[반려동물]🐶 반려동물 생애주기 맞춤형 관리 플랫폼",
        "badge_list": ["반려동물", "주 1회", "온라인"],
        "current_personnel": 2,
        "max_personnel": 3,
    },
    {
        "id": 5,
        "title": "[시니어] 노인의 품격 : 요양원의 어르신들을 위한 어플",
        "badge_list": ["시니어", "주 2회", "인천", "블렌디드"],
        "current_personnel": 1,
        "max_personnel": 4,
    },
    {
        "id": 6,
        "title": "[방탈출] 세상 모든 방탈출 다 여기서 예약하세요",
        "badge_list": ["방탈출", "주 3회", "부산", "오프라인"],
        "current_personnel": 1,
        "max_personnel": 5,
    },
    {
        "id": 7,
        "title": "[캠핑] 캠핑의 시작🎵🎶",
        "badge_list": ["캠핑", "주 1회", "서울", "블렌디드"],
        "current_personnel": 2,
        "max_personnel": 4,
    },
    {
        "id": 8,
        "title": "[맛집투어] 음식을 사랑하는 자 여기 모여라",
        "badge_list": ["맛집", "주 3회", "서울", "오프라인"],
        "current_personnel": 1,
        "max_personnel": 5,
    }
]

export const ProjectCard = (props) => {
    console.log("index", props.index)
    let project = project_list[props.index ? props.index : 0]

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    shuffle(numbers);
      
    return (
        <Container flexDirection={"row"} padding={"8px"} margin={"0 0 8px 0"}>
            <CardImg idx={project["id"]}/>
            <ContentBox>
                <BadgeGroup>
                    {project["badge_list"].map((item,index)=>{
                        return <Badge>{item}</Badge>
                    })}
                </BadgeGroup>
                <Title>
                    {project["title"]}
                </Title>
                <UserContainer>
                    <UserGroup>
                        {Array.apply(null, {length: project["current_personnel"]}).map((item, index)=>{
                            return <User idx={numbers[index]} />
                        })}
                    </UserGroup>
                    <UserContent>{project["current_personnel"]}/{project["max_personnel"]} {project["current_personnel"] === project["max_personnel"] ? "모집 완료" : "모집중"}</UserContent>
                </UserContainer>
            </ContentBox>
        </Container>
    )
};

export const MemberCard = () => {
    return (
        <Container width={"300px"} padding={"16px 8px"} margin={"0 8px 0 0"}>
            <Header>
                <Box>
                    <MemberImg />
                </Box>
                <MemberInfo>
                    <h2>이름</h2>
                    <p>UIUX 디자이너 신입</p>
                </MemberInfo>
                <ChatBtn>채팅</ChatBtn>
            </Header>
            <BadgeGroup height={"auto"} fontSize={"14px"} padding={"16px 8px 0 8px"}>
                <Badge>여행</Badge>
                <Badge>여행</Badge>
                <Badge>여행</Badge>
                <Badge>여행</Badge>
                <Badge>여행</Badge>
                <Badge>여행</Badge>
                <Badge>여행</Badge>
                <Badge>여행</Badge>
            </BadgeGroup>
        </Container>
    )
};

const Container = styled.div`
    width: ${props => props.width || "100%"};
    background: ${color.gray800};
    border-radius: 10px;
    display: flex;
    flex-direction: ${props => props.flexDirection || "column"};
    align-items: start;
    justify-content: center;
    padding: ${props => props.padding || 0};
    margin: ${props => props.margin || 0};
`

const CardImg = styled.div`
    width: 90px;
    height: 90px;
    background: url(${process.env.PUBLIC_URL}/img/project/project${props => props.idx || 1}.png) no-repeat;
    background-size: contain;
    border-radius: 10px;
`

const ContentBox = styled.div`
    height: 100%;
    padding: 0 8px;

    h2 {
        margin: 4px 0;
    }
`

const BadgeGroup = styled.div`
    height: ${props => props.height || "20%"};
    display: flex;
    flex-direction: row;
    font-size: ${props => props.fontSize || "10px"};
    margin: auto;
    padding: ${props => props.padding || 0};
    flex-wrap: wrap;
`

const Badge = styled.div`
    padding: 4px 10px;
    margin: 0 4px 4px 0;
    background: ${color.gray700};
    border-radius: 15px;
    color: ${color.gray50};
    text-align: center;
`

const Title = styled.div`
    width: 196px;
    height: 50%;
    font-size: 15px;
    font-weight: bold;
    padding: 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const UserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const UserGroup = styled.div`
    width: 60%;
    height: 30%;
    display: flex;
    flex-direction: row;
    padding: 0 0 0 2px;
`

const User = styled.div`
    width: 25px;
    height: 25px;
    margin: -2px;
    border-radius: 50%;
    background: url(${process.env.PUBLIC_URL}/img/profile/profile${props => props.idx || 1}.png) no-repeat;
    background-size: contain;
    border: 1px solid ${color.gray500};
`

const UserContent = styled.div`
    width: 40%;
    text-align: right;
    margin: auto;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;    
`

const Box = styled.div`
    width: 30%;
    margin: auto;
`

const MemberImg = styled.div`
    width: 60px;
    height: 60px;
    background: ${color.gray700};
    border-radius: 50%;
`

const MemberInfo = styled.div`
    width: 50%;
    margin: auto;

    h2 {
        font-size: 16px;
    }

    p {
        font-size: 14px;
        color: ${color.gray400};
    }
`

const ChatBtn = styled.button`
    margin: auto;
    padding: 4px 10px;
    color: ${color.gray50};
    background: ${color.gray700};
    border-radius: 17px;
    border: none;

`
