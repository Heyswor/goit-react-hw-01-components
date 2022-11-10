import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const statsData = stats.map(stat => (
    <li className="item" id={stat.id} key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
  ));
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">{statsData}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
