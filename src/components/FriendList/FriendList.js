import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  const friendData = friends.map(friend => (
    <li className="item" key={friend.id}>
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));

  return <ul className="friend-list">{friendData}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
