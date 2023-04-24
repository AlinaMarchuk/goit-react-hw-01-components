import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};

export default FriendList;
