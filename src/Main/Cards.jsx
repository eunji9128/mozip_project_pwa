import styled from "styled-components";
import { color } from "../style/colorVar";

export const ProjectCard = () => {
    return (
        <Container flexDirection={"row"} padding={"8px"} margin={"0 0 8px 0"}>
            <CardImg />
            <ContentBox>
                <BadgeGroup>
                    <Badge>여행</Badge>
                    <Badge>여행</Badge>
                    <Badge>여행</Badge>
                    <Badge>여행</Badge>
                </BadgeGroup>
                <Title>
                    [프로젝트] 프로젝트 타이틀 설명
                </Title>
                <UserContainer>
                    <UserGroup>
                        <User />
                        <User />
                        <User />
                        <User />
                    </UserGroup>
                    <UserContent>5/15 모집 완료</UserContent>
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
    background: ${color.gray700};
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
    height: 50%;
    font-size: 15px;
    font-weight: bold;
    padding: 4px 0;
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
    background: ${color.gray700};
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
