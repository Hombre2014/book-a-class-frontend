// import PropTypes from 'prop-types';
import webDevelopment1 from '../../app/assets/images/images';

const Course = (course) => {
  const {
    id, title, category, description, duration, photo, price,
  } = course;
  // const {
  //   category, title, description, duration, price,
  // } = props;

  return (
    <div>
      <div className="row">
        <div className="col-8">{id}</div>
        <div className="col-8">{photo}</div>
        <div className="col-8">{title}</div>
      </div>
      <div className="row">
        <div className="col-8">{description}</div>
      </div>
      <div className="row">
        <div className="col-8">{category}</div>
      </div>
      <div className="row">
        <div className="col-8">{duration}</div>
      </div>
      <div className="row">
        <div className="col-8">
          <img src={webDevelopment1} alt="Web" />
        </div>
      </div>
      <div className="row">
        <div className="col-8">{price}</div>
      </div>
    </div>
  );
};

// Course.propTypes = {
//   // id: PropTypes.number.isRequired,
//   category: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   duration: PropTypes.number.isRequired,
//   // photo: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default Course;
