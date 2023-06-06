import styled from "styled-components";
import { color } from "../../style/colorVar";

const MemberProfileRow = ({ profile_id, name, tag_list, badge_list }) => {
  return name ? (
    <ProfileContainer>
      <ProfileImage idx={profile_id} />
      <ProfileContentGroup>
        <ProfileContentRow>
          <h3>{name}</h3>
          {tag_list.map((item, index) => {
            return <Tag>{item}</Tag>;
          })}
        </ProfileContentRow>
        <ProfileContentRow>
          {badge_list.map((item, index) => {
            return <Badge>{item}</Badge>;
          })}
        </ProfileContentRow>
      </ProfileContentGroup>
    </ProfileContainer>
  ) : (
    <ProfileContainer>
      <ProfileImage></ProfileImage>
      <h3>멤버를 구하고 있어요</h3>
    </ProfileContainer>
  );
};

const ProjectMemberBlock = ({ project, member_list }) => {
  return (
    <Container>
      <h2>| 멤버 소개</h2>
      {member_list.map((member, index) => {
        return (
          <MemberProfileRow
            profile_id={member.profile_id}
            name={member.name}
            tag_list={
              index === 0
                ? ["모집장", member.role, member.career]
                : ["멤버", member.role, member.career]
            }
            badge_list={member.badge_list}
          />
        );
      })}
      {Array.apply(null, {
        length: project.max_personnel - project.current_personnel,
      }).map((item, index) => {
        return <MemberProfileRow />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 32px 16px;

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: ${color.gray50};

    margin-bottom: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${color.gray50};

    margin-right: 16px;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  min-height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 8px;
  background: url(${process.env.PUBLIC_URL}/img/profile/profile${(props) =>
    props.idx || "_none"}.png);
  border-radius: 60px;
  background-size: cover;
`;

const ProfileContentGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProfileContentRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Badge = styled.div`
  padding: 4px 10px;
  margin-right: 8px;
  background: ${color.gray700};
  border-radius: 10px;
  color: ${color.gray50};
  text-align: center;
`;

const Tag = styled.div`
  padding: 8px;
  margin: 0 4px 8px 4px;
  background: ${color.gray700};
  border-radius: 10px;
  color: ${color.gray50};
  font-size: 14px;
  text-align: center;
`;

export default ProjectMemberBlock;
