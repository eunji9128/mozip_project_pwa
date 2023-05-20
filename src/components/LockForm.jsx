import { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

function LockForm() {
    let navigate = useNavigate();
    const [numbers, setNumbers] = useState([1999, 1, 1]);

    const handleNumberChange = _.throttle((index, e) => {
        e.preventDefault();
        let value = parseInt(e.target.value);
        setNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers];
            switch (index) {
                case 0:
                    newNumbers[index] = value;
                    break;
                case 1:
                    newNumbers[index] = Math.max(value%13, 1);
                    break;
                case 2:
                    newNumbers[index] = Math.max(value%32, 1);
                    break;
            }
            return newNumbers;
        });
    }, 10000);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(numbers);
        // 생년월일 서버 포스트 or 스토리지 저장 코드 입력
        navigate('/favorites');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                {numbers.map((number, index) => (
                    <StyledInput
                        type="number"
                        key={index}
                        value={number}
                        onChange={(e) => handleNumberChange(index, e)}
                    />
                ))}
            </Box>
            <StyledBtn type="submit">Submit</StyledBtn>
        </form>
    );
}

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
`

const StyledInput = styled.input`
    width: 78px;
    height: 54px;
    margin: 0 5px;
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    border: solid 1px #ffffff;
    border-width: 1px 0;
    font-family: "yapari";
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

export default LockForm