import css from './FriendList.module.css';
import FriendListItem from '../friendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}
