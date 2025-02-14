import css from './profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  status: { followers, views, likes },
}) {
  return (
    <div className={css.profileWrapper}>
      <div className={css.profileImgWrapper}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Followers</span>
          <span className={css.profileItemInfo}>{followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Views</span>
          <span className={css.profileItemInfo}>{views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Likes</span>
          <span className={css.profileItemInfo}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
