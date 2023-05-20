import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const ProfileSetBlocks = () => {
    let [imgArr, setImgArr] = useState(new Array(12).fill(0));
    let [selectedImg, setSelectedImg] = useState("url(/profile1.svg)");
    let navigate = useNavigate();

    const handleSelect = (idx) => {
        let newSrc = "url(/profile" + (idx < 6 ? (idx + 1) : 1) + ".svg)";
        setSelectedImg(newSrc);
        console.log(selectedImg);
        document.getElementById("selected-profile").style.backgroundImage = newSrc;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 서버 포스트 or 스토리지 저장 코드 입력
        navigate('/landing');
    }

    return (
        <Container flexDirection={"column"}>
            <SelectedProfile id="selected-profile" />
            <Container margin={"50px 0 0 0"}>
                {
                    imgArr.map((data, idx) => {
                        return (
                            <ProfileBlocks 
                                key={idx}
                                id={idx}
                                type="radio"
                                name="profile-blocks"
                                value={idx}
                                idx={idx < 6 ? idx+1 : 1}
                                onClick={() => {handleSelect(idx)}}
                            />
                        )
                    })
                }
            </Container>
            <StyledBtn onClick={(e) => handleSubmit(e)}>이 프로필로 시작하기!</StyledBtn>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props => props.flexDirection || "row"}; 
    flex-wrap: wrap;
    margin: ${props => props.margin || 0};
`

const SelectedProfile = styled.div`
    width: 120px;
    height: 120px;
    background-image: url(/profile1.svg); // 초기 선택 이미지는 profile1.svg
    border-radius: 45px;
    margin-top: 60px;
    background-size: cover;
`

const ProfileBlocks = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 70px;
    height: 70px;
    background: url(/profile${props => props.idx || 1}.svg);
    margin: 6px;
    border-radius: 25px;

    &:checked {
        border: 1px solid #ffffff;
    }
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

export default ProfileSetBlocks