import styled from "styled-components";
import { color } from "../style/colorVar";
import "./mypage_style.css";
import { useState } from "react";
import { ProjectCard } from "../Main/Cards";
import portfolio from './portfolio.png';

const MyPage = () => {
    const username = sessionStorage.getItem('username');
    const profile = sessionStorage.getItem('profile-id');

    let [active1, setActive1] = useState('selected');
    let [active2, setActive2] = useState('unselected');
    let [active3, setActive3] = useState('unselected');

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('id: ',e.target.id);
        switch (e.target.id) {
            case "1":
                setActive1('selected');
                setActive2('unselected');
                setActive3('unselected');
                break;
            case "2":
                setActive1('unselected');
                setActive2('selected');
                setActive3('unselected');
                break;
            case "3":
                setActive1('unselected');
                setActive2('unselected');
                setActive3('selected');
                break;
        }
    }

    return (
        <Container>
            <ProfileTop>
                <span className="material-symbols-outlined">
                    settings
                </span>
                <p>👋 {username}님, 반가워요!</p>
                <Wrap>
                    <img src={profile} />
                </Wrap>
                <TagGroup>
                    <Tag>리더</Tag>
                    <Tag>투마치 토커 훈장님</Tag>
                    <Tag>색감궁예</Tag>
                </TagGroup>
            </ProfileTop>
            <TabContainer>
                <Tab id="1" className={active1} onClick={(e) => {handleClick(e)}}>프로젝트</Tab>
                <Tab id="2" className={active2} onClick={(e) => {handleClick(e)}}>뱃지</Tab>
                <Tab id="3" className={active3} onClick={(e) => {handleClick(e)}}>포트폴리오</Tab>
            </TabContainer>
            {
                active1 === "selected" ?
                <CardGroup>
                    <ProjectCard index={0}/>
                    <ProjectCard index={2}/>
                    <ProjectCard index={4}/>
                </CardGroup> :
                null
            }
            {
                active2 === "selected" ?
                <BadgeBackground>
                    <MyBadges />
                </BadgeBackground>:
                null
            }
            {
                active3 === "selected" ?
                <Portfolio src={portfolio} alt="portfolio image"/>:
                null
            }
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
`

const ProfileTop = styled.div`
    width: 100%;
    padding: 16px;
    padding-bottom: 40px;

    span {
        width: 100%;
        text-align: right;
    }

    p {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        padding-right: 10px;
    }

    img {
        width: 70px;
        height: 70px;
        margin: 30px;
    }
`

const Wrap = styled.div`
    width: 100%;
    text-align: center;
`

const TagGroup = styled.div`
    width: 100%;
    text-align: center;
`

const Tag = styled.span`
    background: ${color.gray700};
    border-radius: 10px;
    color: ${color.gray400};
    padding: 4px 8px;
    margin: 0 4px;
    font-size: 12px;
`

const TabContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const Tab = styled.div`
    flex-grow: 1;
    background: none;
    text-align: center;
    font-size: 15px;
    padding: 8px 0;
    color: ${(props) => (props.className === "selected" ? color.gray50 : color.gray500)};
    font-weight: ${(props) => (props.className === "selected" ? "bold" : "regular")};
`

const CardGroup = styled.div`
    width: 100%;
    height: 540px;
    background: ${color.gray700};
    padding: 16px;
`

const BadgeBackground = styled.div`
    width: 100%;
    height: 540px;
    background: ${color.gray700};
`

const MyBadges = styled.div`
    width: 360px;
    height: 360px;
    margin: auto;
    background: url(${process.env.PUBLIC_URL}/img/my_badges.svg);
`

const Portfolio = styled.img`
    width: 100%;
    padding-bottom: 70px;
`

export default MyPage