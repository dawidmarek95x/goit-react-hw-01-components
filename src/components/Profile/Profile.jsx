import PropTypes from "prop-types";
// import styles from './Profile.module.scss';

export const Profile = ({username, tag, location, avatar, stats}) => {
  const {followers, views, likes} = stats;

  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers ? followers : 0}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views ? views : 0}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes ? likes : 0}</span>
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