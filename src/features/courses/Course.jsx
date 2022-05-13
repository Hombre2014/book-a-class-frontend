const Course = (course) => {
  const {
    id, category, title, description, duration, photo, price,
  } = course;

  return (
    <div className="row">
      <div className="col-8">{id}</div>
      <div className="col-8">{title}</div>
      <div className="col-8">{photo}</div>
      <div className="col-8">{category}</div>
      <div className="col-8">{description}</div>
      <div className="col-8">{duration}</div>
      <div className="col-8">{price}</div>
    </div>
  );
};

export default Course;
