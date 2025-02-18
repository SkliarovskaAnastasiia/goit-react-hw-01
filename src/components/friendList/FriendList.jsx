import css from './FriendList.module.css';
import FriendListItem from '../friendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        let status = friend.isOnline ? 'Online' : 'Offline';
        return (
          <FriendListItem friend={friend} status={status} key={friend.id} />
        );
      })}
    </ul>
  );
}
