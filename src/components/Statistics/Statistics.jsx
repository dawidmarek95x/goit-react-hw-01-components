import PropTypes from "prop-types";
import styles from './Statistics.module.scss';
import { getRandomColor } from "../../js/getRandomColor";

export const Statistics = ({title, stats}) => {
  const {statistics, stats__title, stats__list, stats__item, stats__label, stats__percentage} = styles;

  return (
    <section className={statistics}>
      {title && (
        <h2 className={stats__title}>{title}</h2>
      )}

      <ul className={stats__list}>
        {stats.map(({id, label, percentage}) => (
          <li key={id} style={{backgroundColor: getRandomColor()}} className={stats__item} >
            <span className={stats__label}>{label}</span>
            <span className={stats__percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}