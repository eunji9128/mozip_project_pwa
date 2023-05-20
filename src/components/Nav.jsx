import { useNavigate } from "react-router";
import styled from "styled-components";

const Nav = () => {
    const navigate = useNavigate();
    const handleNavigate = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <Container>
            <span 
                className="material-symbols-outlined"
                onClick={(e) => {handleNavigate(e)}}
            >
                chevron_left
            </span>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    padding: 12px 8px;
    display: flex;
    justify-content: start;
`

export default Nav