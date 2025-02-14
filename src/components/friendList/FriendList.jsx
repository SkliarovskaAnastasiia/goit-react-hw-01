import clsx from 'clsx';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        let status = isOnline ? 'Online' : 'Offline';
        return (
          <li key={id} className={css.friendListItem}>
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
      })}
    </ul>
  );
}
