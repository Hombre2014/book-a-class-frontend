const ShortCourse = (course) => {
  const {
    title, category, description, photo,
  } = course;

  return (
    <div className="container-course">
      <img className="col-11 image" src={photo} alt="Course" />
      <h3 className="col-11 h3 title-text">{title}</h3>
      <h4 className="col-11 h4 cat">{category}</h4>
      <p className="col-11 description-text">{description.slice(0, 100).concat(' ', '...')}</p>
    </div>
  );
};

export default ShortCourse;
