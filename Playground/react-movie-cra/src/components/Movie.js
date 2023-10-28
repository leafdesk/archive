import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div className={cx('Movie')}>
      {/* Left Image */}
      <img src={coverImg} alt={title} />

      {/* Right Box */}
      <div className={cx('TextBox')}>
        <h3>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
