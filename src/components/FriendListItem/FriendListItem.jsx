import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: getBgColor(isOnline) }}
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

function getBgColor(status) {
  switch (status) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      throw new Error(`Unsupported variant prop value - ${status}`);
  }
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
