import { FC } from 'react';
import { RoomMembersListProps } from './types';
import { RoomMembersListUser } from './RoomMembersListUser';

export const RoomMembersList: FC<RoomMembersListProps> = ({
  members,
}): JSX.Element => {
  const renderMembers = members.map((member, idx) => {
    return <RoomMembersListUser key={idx} {...member} />;
  });

  return <ul className="room-members-list">{renderMembers}</ul>;
};
