import styled from "styled-components";
import LockForm from "./LockForm";
import FavBlocks from "./FavBlocks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileSetBlocks from "./ProfileSetBlocks";

export const SignupName = () => {
    let navigate = useNavigate();
    let [username, setUsername] = useState('');
    let [disabled, setDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(document.getElementById('username').value);
        console.log();
        navigate('/birth');
        // 서버 포스트 or 스토리지 저장 코드 입력
    }

    const handleDisable = (e) => {
        e.preventDefault();
        if (e.target.value) {setDisabled(false)}
        else {setDisabled(true)}
    }

    return (
        <Container>
            <h1>당신의 이름은 무엇인가요?</h1>
            <Content>모집은 당신이 궁금해요!</Content>
            <form onSubmit={(e) => handleSubmit(e)}>
                <StyledInput 
                    placeholder={"이름 입력하기"}
                    name="username"
                    id="username"
                    onChange={(e) => handleDisable(e)}
                ></StyledInput>
                <StyledBtn 
                    type="submit"
                    disabled={disabled}
                >다음</StyledBtn>
            </form>
        </Container>
    )
};

export const SignupBirth = () => {
    return (
        <Container>
            <h1>생년월일을 입력해주세요</h1>
            <Content>프로젝트 추천에만 활용되며 다른 곳에 사용되지 않아요.</Content>
            <LockForm />
            {/* <StyledBtn>다음</StyledBtn> */}
        </Container>
    )
};

export const Favorites = () => {
    return (
        <Container>
            <h1>관심사를 선택해주세요!</h1>
            <Content>
                좋아하거나 알아가고 싶은 관심사를 1개 이상 선택해주세요.<br />
                내 관심사에 딱 맞는 프로젝트를 추천해드릴게요!
            </Content>
            <FavBlocks />
        </Container>
    )
}

export const ProfileSet = () => {
    return (
        <Container>
            <h1>허성원님!<br />프로필을 선택해보세요!</h1>
            <Content>
                새롭게 만날 사람들이 나를 더 잘 알 수 있도록<br />
                나를 잘 나타내는 프로필을 선택해주세요.
            </Content>
            <ProfileSetBlocks />
        </Container>
    )
}


const Container = styled.div`
    width: 100vw;
    padding: 16px;
    text-align: left;
`

const Content = styled.p`
    color: #a3a3a3;
    margin-top: 12px;
`

const StyledInput = styled.input`
    width: 100%;
    margin-top: 86px;
    padding-left: 16px;
    height: 40px;
    background-color: #424242;
    border: 1px solid #8e8e8e;
    border-radius: 10px;
`

const StyledBtn = styled.button`
    width: 90%;
    height: 52px;
    background-color: #d4d4d4;
    border: none;
    border-radius: 10px;
    position: absolute;
    left:0;
    bottom: 0;
    margin: 16px;
    font-size: 16px;
    font-weight: bold;
`