import Profile from './components/profile/profile.jsx';
import userData from './components/profile/userData.json';

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
    </>
  );
}
