// import { useNavigate } from 'react-router-dom';
import './course.css';

const Course = (course) => {
  const {
    title, category, description, duration, photo, price,
  } = course;

  // const navigate = useNavigate();

  return (
    <div className="course-details">
      <div className="row">
        <img className="col-8" src={photo} alt="Web" />
        <div className="col-4">
          <h2 className="row h2">{title}</h2>
          <h3 className="row h3">{category}</h3>
          <p className="row">{description}</p>
          <span className="row">
            Duration:
            &nbsp;
            {duration}
          </span>
          <span className="row">
            Price:
            &nbsp;
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Course;
