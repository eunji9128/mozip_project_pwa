import styled from "styled-components";
import { color } from "../style/colorVar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import ProjectAbstractInfoBlock from "../components/project/ProjectAbstractInfoBlock";
import ProjectInfoBlock from "../components/project/ProjectInfoBlock";
import ProjectMemberBlock from "../components/project/ProjectMemberBlock";
import ProjectBottomBar from "../components/project/ProjectBottomBar";

export const ProjectDetail = () => {
  const params = useParams();

  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <Container>
      <Header>
        <span
          className="material-symbols-outlined"
          onClick={(e) => {
            handleNavigate(e);
          }}
        >
          chevron_left
        </span>
        <div className="material-symbols-outlined">share</div>
      </Header>
      <ProjectAbstractInfoBlock />
      <ProjectInfoBlock />
      <ProjectMemberBlock />
      <ProjectBottomBar />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-bottom: 108px;
`;

const Header = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  padding: 24px 16px 0 16px;

  span {
    font-size: 30px;
  }

  div {
    flex: 1;
    text-align: right;
    font-size: 24px;
  }

  background: url(${process.env.PUBLIC_URL}/img/project/main/project1_main.png)
    no-repeat;
  background-position: center center;
  background-size: cover;
`;
