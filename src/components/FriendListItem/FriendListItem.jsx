import PropTypes from 'prop-types';
import styles from './friend-list-item.module.css';

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

function getBgColor(variant) {
  switch (variant) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
