// import webDevelopment1 from '../../app/assets/images/images';

const Course = (course) => {
  const {
    id, title, category, description, duration, photo, price,
  } = course;

  return (
    <div>
      <div className="row">
        <div className="col-8">{id}</div>
        <div className="col-8">{photo}</div>
        <img className="col-5" src="https://images.unsplash.com/photo-1638913665258-ddd2bceafb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Web" />
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
