import PropTypes from 'prop-types';
import Course from '../features/courses/Course';

const Details = (props) => {
  const {
    id, category, title, description, duration, photo, price,
  } = props;

  return (
    <div className="container">
      <div>
        <Course
          id={id}
          category={category}
          title={title}
          description={description}
          duration={duration}
          photo={photo}
          price={price}
        />
      </div>
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Details;
