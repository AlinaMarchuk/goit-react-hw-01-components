import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FriendListItem.module.css';

function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className={styles.item}>
      <span
        className={clsx(
          styles.status,
          isOnline ? styles.online : styles.offline
        )}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
