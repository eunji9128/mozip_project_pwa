import styled from "styled-components";
import { color } from "../style/colorVar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    let [active1, setActive1] = useState(color.gray50);
    let [active2, setActive2] = useState('');
    let [active3, setActive3] = useState('');
    let [active4, setActive4] = useState('');
    
    const navigate = useNavigate();

    const location = window.location.pathname;
    console.log(location);

    useEffect(() => {
        if (location.includes('home')) {
            setActive1(color.gray50);
            setActive2('');
            setActive3('');
            setActive4('');
        }
        else if (location.includes('chat')) {
            setActive1('');
            setActive2(color.gray50);
            setActive3('');
            setActive4('');
        }
        else if (location.includes('personal')) {
            setActive1('');
            setActive2('');
            setActive3(color.gray50);
            setActive4('');
        } else {
            setActive1('');
            setActive2('');
            setActive3('');
            setActive4(color.gray50);
        }
    },[])

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/${e.target.parentNode.id}`);
    }

    return (
        <Container>
            <IconGroup>
                <Icon id="home" color={active1} onClick={(e) => {handleClick(e)}}>
                    <span className="material-icons">home</span>
                    <p>홈</p>
                </Icon>
                <Icon id="chat" color={active2} onClick={(e) => {handleClick(e)}}>
                    <span className="material-icons">sms</span>
                    <p>채팅</p>
                </Icon>
                <Icon id="personal" color={active3} onClick={(e) => {handleClick(e)}}>
                    <span className="material-icons">wb_sunny</span>
                    <p>성향</p>
                </Icon>
                <Icon id="mypage" color={active4} onClick={(e) => {handleClick(e)}}>
                    <span className="material-icons">person_outline</span>
                    <p>마이페이지</p>
                </Icon>
            </IconGroup>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 60px;
    background: ${color.gray800};
    border-radius: 15px 15px 0 0;
    position: fixed;
    left: 0;
    bottom: 0;
`

const IconGroup = styled.div`
    padding: 8px 0;
    display: flex;
`

const StyledLink = styled(Link)`
    margin: auto;
`

const Icon = styled.div`
    margin: auto;
    text-align: center;
    color: ${props => props.color || color.gray500};
`


export default Navbar