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

const ProjectMemberBlock = () => {
  return (
    <Container>
      <h2>| 멤버 소개</h2>
      <MemberProfileRow
        profile_id={1}
        name={"허성원"}
        tag_list={["모집장", "디자이너", "시니어"]}
        badge_list={["리더", "투머치 토커 훈장님", "색감 궁예"]}
      />
      <MemberProfileRow
        profile_id={12}
        name={"최우빈"}
        tag_list={["멤버", "개발자", "주니어"]}
        badge_list={["팔로워", "옷장엔 체크셔츠뿐"]}
      />
      <MemberProfileRow
        profile_id={2}
        name={"권예림"}
        tag_list={["멤버", "기획자", "주니어"]}
        badge_list={["스타트업 인재", "쉴틈없는 자기개발"]}
      />
      <MemberProfileRow />
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
