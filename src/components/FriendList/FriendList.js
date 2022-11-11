import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const friendData = friends.map(friend => (
    <li className={css.item} key={friend.id}>
      <span
        className={friend.isOnline ? css.statusIsOnline : css.statusIsOffline}
      >
        {friend.isOnline}
      </span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));

  return <ul className={css.friendList}>{friendData}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
