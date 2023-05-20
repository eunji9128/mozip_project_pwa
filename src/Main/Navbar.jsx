import styled from "styled-components";
import { color } from "../style/colorVar";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <Container>
            <IconGroup>
                <StyledLink to="/home">
                    <Icon>
                        <span className="material-icons">home</span>
                        <p>홈</p>
                    </Icon>
                </StyledLink>
                <StyledLink to="/chat">
                    <Icon>
                        <span className="material-icons">sms</span>
                        <p>채팅</p>
                    </Icon>
                </StyledLink>
                <StyledLink to="/personal">
                    <Icon>
                        <span className="material-icons">wb_sunny</span>
                        <p>성향</p>
                    </Icon>
                </StyledLink>
                <StyledLink to="/mypage">
                    <Icon>
                        <span className="material-icons">person_outline</span>
                        <p>마이페이지</p>
                    </Icon>
                </StyledLink>
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
    color: ${color.gray500};
`


export default Navbar