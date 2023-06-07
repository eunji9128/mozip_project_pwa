import styled from "styled-components";
import LockForm from "./LockForm";
import FavBlocks from "./FavBlocks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileSetBlocks from "./ProfileSetBlocks";
import { color } from "../style/colorVar";



export const SignupName = () => {
    const navigate = useNavigate();
    let [username, setUsername] = useState('');
    let [disabled, setDisabled] = useState(true);
    let [start, setStart] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(document.getElementById('username').value);
        sessionStorage.setItem('username', document.getElementById('username').value);
        navigate('/birth');
        // 서버 포스트 or 스토리지 저장 코드 입력
    }

    const handleDisable = (e) => {
        e.preventDefault();
        if (e.target.value) {setDisabled(false)}
        else {setDisabled(true)}
    }

    return (
        !start ?
        <StartWrap>
            <Start /> 
            <StyledBtn onClick={() => {setStart(true)}}>시작하기</StyledBtn>
        </StartWrap> :
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

export const Job = () => {
    const navigate = useNavigate();

    const jobSelected = [
        "???",
        "디자이너",
        "기획자",
        "개발자",
    ]
    let [jobTitle, setJobTitle] = useState(jobSelected[0]);

    const handleClick = (e) => {
        let id = parseInt(e.target.id)
        let active = `url(${process.env.PUBLIC_URL}/img/job${id}_active.svg)`
        let inactive = [
            `url(${process.env.PUBLIC_URL}/img/job1.svg)`,
            `url(${process.env.PUBLIC_URL}/img/job2.svg)`,
            `url(${process.env.PUBLIC_URL}/img/job3.svg)`
        ]
        document.getElementById('1').style.background = inactive[0];
        document.getElementById('2').style.background = inactive[1];
        document.getElementById('3').style.background = inactive[2];
        document.getElementById(id).style.background = active;
        setJobTitle(jobSelected[id]);
    }
    return (
        <Container>
            <h1 style={{marginBottom: "8px"}}>직무를 선택해주세요!</h1>
            <h1>나는 <span style={{backgroundColor: "#ffffff", color: "#000000", padding: "0 8px"}}>{jobTitle}</span> 에요.</h1>
            <JobGroup>
                <Job1 id="1" onClick={(e) => {handleClick(e)}} />
                <Job2 id="2" onClick={(e) => {handleClick(e)}}/>
                <Job3 id="3" onClick={(e) => {handleClick(e)}}/>
                <JobBlank />
            </JobGroup>
            <StyledBtn onClick={()=>{navigate('/seniority')}}>다음</StyledBtn>
        </Container>
    )
}

export const Seniority = () => {
    const navigate = useNavigate();
    const career = [" 신입", " 주니어", " 시니어", "이상 시니어"];
    let [step, setStep] = useState(0);

    useEffect(() => {
        const value = document.querySelector("#value")
        const input = document.querySelector("#input")
        value.textContent = input.value
        input.addEventListener("input", (event) => {
        value.textContent = event.target.value
        let inputVal = parseInt(value.textContent);
        if (inputVal === 0) {setStep(0)}
        else if (inputVal < 4) {setStep(1)}
        else if (inputVal < 15) {setStep(2)}
        else {setStep(3)}
        })

    })
    

    return (
        <Container>
            <h1>경력을 선택해주세요.</h1>
            <RangeWrap>
                <p><output id="value"></output>년{career[step]}</p>
                <input className="slider" id="input" type="range" min="0" max="15" step="1" />
                <StyledBtn onClick={()=>{navigate('/favorites')}}>다음</StyledBtn>
            </RangeWrap>
        </Container>
    )
}

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

const StartWrap = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Start = styled.div`
    width: 267px;
    height: 180px;
    background: url(${process.env.PUBLIC_URL}/img/signup_start.svg);
`

const Content = styled.p`
    color: #a3a3a3;
    margin-top: 12px;
    font-size: 14px;
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

const JobGroup = styled.div`
    width: 100%;
    position: absolute;
`

const Job1 = styled.div`
    width: 216px;
    height: 216px;
    top: 40px;
    left: 0;
    background: url(${process.env.PUBLIC_URL}/img/job1.svg);
    position: relative;
`

const Job2 = styled.div`
    width: 216px;
    height: 325px;
    top: -140px;
    left: 140px;
    background: url(${process.env.PUBLIC_URL}/img/job2.svg);
    position: relative;
`

const Job3 = styled.div`
    width: 216px;
    height: 216px;
    top: -220px;
    left: 0;
    background: url(${process.env.PUBLIC_URL}/img/job3.svg);
    position: relative;
`

const JobBlank = styled.div`
    width: 108px;
    height: 108px;
    top: -320px;
    left: 248px;
    background: url(${process.env.PUBLIC_URL}/img/job_blank.svg);
    position: relative;
`

const RangeWrap = styled.div`
    width: 100%;
    padding-top: 36px;

    p {
        font-size: 14px;
        margin-bottom: 14px;
    }

    .slider {
        width: 100%;
    }
`
