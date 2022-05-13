import webDevelopment1 from '../../app/assets/images/images';

const Course = (course) => {
  const {
    id, title, category, description, duration, photo, price,
  } = course;

  return (
    <div>
      <div className="row">
        <div className="col-8">{id}</div>
        <div className="col-8">{photo}</div>
        <img className="col-5" src={webDevelopment1} alt="Web" />
        <div className="col-8">{title}</div>
        <div className="col-8">{category}</div>
        <div className="col-8">{description}</div>
        <div className="col-8">{duration}</div>
        <div className="col-8">{price}</div>
      </div>
    </div>
  );
};

export default Course;
