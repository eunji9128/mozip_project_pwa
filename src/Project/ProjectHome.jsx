import styled from "styled-components";
import Navbar from "../Main/Navbar";
import { Outlet } from "react-router";

const ProjectHome = () => {
  return <Container>
    <Outlet />
  </Container>;
};

const Container = styled.div`
  width: 100vw;
`;

export default ProjectHome;
