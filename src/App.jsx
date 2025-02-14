import Profile from './components/profile/profile.jsx';
import userData from './components/profile/userData.json';
import FriendList from './components/friendList/FriendList.jsx';
import friendsData from './components/friendList/friendsData.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        status={userData.stats}
      />

      <FriendList friends={friendsData} />
    </>
  );
}
