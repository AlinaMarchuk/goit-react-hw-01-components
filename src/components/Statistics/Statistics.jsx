import PropTypes from 'prop-types';
import styles from '../Statistics/statistics.module.css';

function Statistics(props) {
  const { title, stats } = props;
  const markup = stats.map(el => {
    const { id, label, percentage } = el;
    return (
      <li
        key={id}
        className={styles.item}
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    );
  });
  //   title ? (
  //     <section className={styles.statistics}>
  //       <h2 className={styles.title}>{title}</h2>
  //       <ul className={styles.statList}>{markup}</ul>
  //     </section>
  //   ) : (
  //     <section className={styles.statistics}>
  //       <ul className={styles.statList}>{markup}</ul>
  //     </section>
  //   );

  if (title) {
    return (
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.statList}>{markup}</ul>
      </section>
    );
  }
  return (
    <section className={styles.statistics}>
      <ul className={styles.statList}>{markup}</ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
