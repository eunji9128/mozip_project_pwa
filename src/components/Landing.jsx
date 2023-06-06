import { useNavigate } from "react-router";
import styled from "styled-components";
import { color } from "../style/colorVar";

const Landing = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <Contain>
            <LandingImg />
            <StyledBtn onClick={(e) => handleSubmit(e)}>시작하기</StyledBtn>
        </Contain>
    )
};

const Contain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LandingImg = styled.div`
    width: 280px;
    height: 588px;
    background: url(${process.env.PUBLIC_URL}/img/landing1.svg);
    margin-top: 64px;
`

const StyledBtn = styled.button`
    width: 90%;
    height: 52px;
    background-color: ${color.mainColor};
    border: none;
    border-radius: 10px;
    position: absolute;
    left:0;
    bottom: 20px;
    margin: 16px;
    font-size: 16px;
    font-weight: bold;
`

export default Landing