import styled from "styled-components";
import { color } from "../style/colorVar";
import { project_list } from "../constant/Projects";
import { member_list } from "../constant/Members";
import { useNavigate } from "react-router";

export const ProjectCard = (props) => {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/project/${props.index}`);
    }

    let project = project_list[props.index ? props.index : 0]

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    shuffle(numbers);
      
    return (
        <Container 
            flexDirection={"row"} 
            justifyContent={"space-around"}
            padding={"8px"} 
            margin={"0 0 8px 0"}
            onClick={(e)=>{handleClick(e)}}
        >
            <CardImg idx={project.id}/>
            <ContentBox>
                <div>
                    <BadgeGroup>
                        {project.badge_list.map((item, index)=>{
                            return <Badge key={index}>{item}</Badge>
                        })}
                    </BadgeGroup>
                    <Title>
                        {project.title}
                    </Title>
                </div>
                <UserContainer>
                    <UserGroup>
                        {Array.apply(null, {length: project.current_personnel}).map((item, index)=>{
                            return <User key={index} idx={numbers[index]} />
                        })}
                    </UserGroup>
                    <UserContent>
                        <div className="material-symbols-outlined">diversity_3</div>
                        {project.current_personnel}/{project.max_personnel} {project.current_personnel === project.max_personnel ? "모집 완료" : "모집중"}
                    </UserContent>
                </UserContainer>
            </ContentBox>
        </Container>
    )
};

export const MemberCard = (props) => {
    let member = member_list[props.index ? props.index : 0]

    return (
        <Container width={"300px"} padding={"16px 8px"} margin={"0 8px 0 0"}>
            <Header>
                <Box>
                    <MemberImg profile_idx={member.profile_id}/>
                </Box>
                <MemberInfo>
                    <h2>{member.name}</h2>
                    <p>{member.role} {member.career}</p>
                </MemberInfo>
                <ChatBtn><span className="material-symbols-outlined">sms</span></ChatBtn>
            </Header>
            <BadgeGroup height={"auto"} fontSize={"14px"} padding={"16px 8px 0 8px"}>
                {member.topic_list.map((item, index)=>{
                    return <Badge>{item}</Badge>
                })}
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
    justify-content: ${props => props.justifyContent || "center"};
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
    height: 88px;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    // align-items: stretch;
    justify-content: space-between;

    h2 {
        margin: 4px 0;
    }
`

const BadgeGroup = styled.div`
    height: ${props => props.height || "20px"};
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
    display:flex;
    justify-content: center;

    div {
        margin-right: 4px;
        font-size: 14px;
        color: ${color.gray400}
    }
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
    background: url(${process.env.PUBLIC_URL}/img/profile/profile${props => props.profile_idx || 1}.png) no-repeat;
    background-size: contain;
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
    width: 44px;
    height: 44px;
    margin: auto;
    padding: 10px;
    background: ${color.gray700};
    border-radius: 22px;
    border: none;

    span {
        font-size: 24px;
        color: ${color.gray50};
    }
`
