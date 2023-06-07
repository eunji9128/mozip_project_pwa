import styled from "styled-components";
import { color } from "../style/colorVar";
import { MemberCard, ProjectCard } from "./Cards";

const Home = () => {
    return (
        <Container>
            <HomeBanner />
            <StyledBtn>내 프로필 설정하기</StyledBtn>
            <Container padding="0" margin={"40px 0 0 0"}>
                <h1>인기 프로젝트🔥</h1>
                <ProjectCard index={0}/>
                <ProjectCard index={1}/>
                <ProjectCard index={2}/>
                {/* 데이터 바인딩으로 변환해줘야 함 */}
            </Container>
            <Container padding="0" margin={"40px 0 0 0"}>
                <h1>새로운 프로젝트🆕</h1>
                <ProjectCard index={3}/>
                <ProjectCard index={4}/>
                <ProjectCard index={5}/>
                <ProjectCard index={6}/>
                <ProjectCard index={7}/>
                {/* 데이터 바인딩으로 변환해줘야 함 */}
            </Container>
            <Container padding="0" margin={"40px 0 0 0"}>
                <h1>새로운 멤버</h1>
                <div style={{overflowX: "scroll"}}>
                    <FlexBox>
                        <MemberCard index={0}/>
                        <MemberCard index={1}/>
                        <MemberCard index={2}/>
                        {/* 데이터 바인딩으로 변환해줘야 함 */}
                    </FlexBox>
                </div>
            </Container>
            {/* Bottom Navigation Bar 구현 필요 */}
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    padding: ${props => props.padding || "16px"};
    margin: ${props => props.margin || 0};

    h1 {
        margin-bottom: 12px;
    }
`

const HomeBanner = styled.div`
    width: 360px;
    height: 180px;
    margin: auto;
    background-image: url(${process.env.PUBLIC_URL}/img/home_banner.svg);
`

const StyledBtn = styled.button`
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 10px;
    background: ${color.mainColor};
    color: ${color.gray900};
    font-size: 18px;
    font-weight: bold;
`

const FlexBox = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
`

export default Home