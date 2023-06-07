import styled from "styled-components";
import { color } from "../../style/colorVar";

const ProjectInfoDetailRow = ({ icon, name, value }) => {
  return (
    <ProjectInfoDetailRowContainer>
      <div className="material-symbols-outlined">{icon}</div>
      <span>{name}</span>
      <p>{value}</p>
    </ProjectInfoDetailRowContainer>
  );
};

const ProjectInfoBlock = ({ project }) => {
  return (
    <Container>
      <InfoBlock>
        <h2>| 프로젝트 정보</h2>
        <ProjectInfoDetailRow
          icon={"calendar_month"}
          name={"프로젝트 기간"}
          value={project.schedule}
        />
        <ProjectInfoDetailRow
          icon={"diversity_3"}
          name={"모집인원"}
          value={
            (project.max_personnel - project.current_personnel).toString() +
            "명"
          }
        />
        <ProjectInfoDetailRow
          icon={"radar"}
          name={"모집포지션"}
          value={project.join_position}
        />
        <ProjectInfoDetailRow
          icon={"work"}
          name={"요구경력"}
          value={project.join_career}
        />
        <ProjectInfoDetailRow
          icon={"build"}
          name={"필요 기술스택"}
          value={project.join_skill}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>| 프로젝트 소개</h2>
        <h3>{project.catchphrase}</h3>
        <br />
        <p>{project.instroduction}</p>
        <h2>| 서비스 범위</h2>
        <p>{project.service_range}</p>
        <h2>| 진행방식</h2>
        <p>{project.process}</p>
        <h2>| 이런 분들께 추천드려요</h2>
        <span>{project.suggestion}</span>
      </InfoBlock>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 70px 0 0 0;
`;

const InfoBlock = styled.div`
  padding: 32px 16px 32px 16px;

  border-bottom: 6px solid ${color.gray800};

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: ${color.gray50};

    margin-bottom: 20px;
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${color.gray50};
    white-space: pre-line;
    word-break: keep-all;
  }

  p {
    font-size: 14px;
    color: ${color.gray50};
    white-space: pre-line;
    word-break: keep-all;
    margin-bottom: 30px;
  }

  span {
    font-size: 14px;
    color: ${color.gray50};
    white-space: pre-line;
    word-break: keep-all;
  }
`;

const ProjectInfoDetailRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;

  div {
    font-size: 20px;
    margin-right: 6px;
    color: ${color.gray400};
  }

  span {
    font-size: 14px;
    width: 35%;
    color: ${color.gray400};
  }

  p {
    font-size: 14px;
    color: ${color.gray50};
    margin: 0;
  }
`;

export default ProjectInfoBlock;
