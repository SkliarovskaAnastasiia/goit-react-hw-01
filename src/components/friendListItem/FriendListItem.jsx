import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  let status = isOnline ? 'Online' : 'Offline';
  return (
    <li className={css.friendListItem}>
      <img className={css.friendImg} src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          css.friendStatus,
          isOnline && css.isOnline,
          !isOnline && css.isOffline
        )}
      >
        {status}
      </p>
    </li>
  );
}
