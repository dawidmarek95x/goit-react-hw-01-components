import PropTypes from "prop-types";
import styles from './Profile.module.scss';

export const Profile = ({username, tag, location, avatar, stats}) => {
  const {followers, views, likes} = stats;
  const {profile, profile__description, profile__avatar, profile__name, profile__tag, profile__location, profile__stats, counter, label, quantity} = styles;

  return (
    <div className={profile}>
      <div className={profile__description}>
        <img
          src={avatar}
          alt="User avatar"
          className={profile__avatar}
        />
        <p className={profile__name}>{username}</p>
        <p className={profile__tag}>@{tag}</p>
        <p className={profile__location}>{location}</p>
      </div>

      <ul className={profile__stats}>
        <li className={counter}>
          <span className={label}>Followers</span>
          <span className={quantity}>{followers ? followers : 0}</span>
        </li>
        <li className={counter}>
          <span className={label}>Views</span>
          <span className={quantity}>{views ? views : 0}</span>
        </li>
        <li className={counter}>
          <span className={label}>Likes</span>
          <span className={quantity}>{likes ? likes : 0}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}