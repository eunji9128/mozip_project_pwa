import styled from "styled-components";
import { color } from "../style/colorVar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import ProjectAbstractInfoBlock from "../components/project/ProjectAbstractInfoBlock";
import ProjectInfoBlock from "../components/project/ProjectInfoBlock";
import ProjectMemberBlock from "../components/project/ProjectMemberBlock";
import ProjectBottomBar from "../components/project/ProjectBottomBar";
import { project_list } from "../constant/Projects";
import { get_random_members } from "../constant/Members";

export const ProjectDetail = () => {
  const params = useParams();
  let project = project_list[params.id];
  let member_list = get_random_members(project.current_personnel);

  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <Container>
      <Header project_id={project.id}>
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
      <ProjectAbstractInfoBlock project={project} leader={member_list[0]} />
      <ProjectInfoBlock project={project} />
      <ProjectMemberBlock project={project} member_list={member_list} />
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

  background: url(${process.env.PUBLIC_URL}/img/project/main/project${(props) =>
      props.project_id || "1"}_main.jpg)
    no-repeat;
  background-position: center 65%;
  background-size: cover;
`;
