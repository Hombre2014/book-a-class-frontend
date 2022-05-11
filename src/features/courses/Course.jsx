// import { useState } from 'react';
import PropTypes from 'prop-types';

const Course = (props) => {
  // const [title, setTitle] = useState(props.courses.title);
  // const [description, setDescription] = useState(props.courses.description);

  const {
    id, category, title, description, duration, photo, price,
  } = props;

  // const titleElement = <h2 className="title text-start">{props.courses.title}</h2>;
  // const descriptionElement = <p className="card-text text-start">{props.courses.description}</p>;

  return (
    <div>
      <div className="row">
        <div className="col-8">{id}</div>
      </div>
      <div className="row">
        <div className="col-8">{title}</div>
        <div className="col-4">{/* Buttons Group */}</div>
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
        <div className="col-8">{photo}</div>
      </div>
      <div className="row">
        <div className="col-8">{price}</div>
      </div>
    </div>
  );
};

Course.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Course;
