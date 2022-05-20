/*eslint-disable */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCourses from './courseAPI';
import './form.css';

const AddCourse = () => {
  const user = useSelector((state) => state.tokenReducer);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState();
  const [Category, setCategory] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);

  // const flashNotices = (type) => {
  //   if (type === 'error') {
  //     setErrorNotice(true);
  //     setSuccessNotice(false);
  //   }

  //   if (type === 'success') {
  //     setErrorNotice(false);
  //     setSuccessNotice(true);
  //   }
  // };

  const createCourse = (e) => {
    //   e.preventDefault();
    //   if (name === '' || price === -1 || photo === '' || details === '' || Category === '') {
    //     flashNotices('error');
    //     return;
    //   }
    //   const data = {
    //     name,
    //     details,
    //     photo,
    //     price,
    //     categorization: Category,
    //   };
    //   dispatch(fetchCourses(accessToken, data));
    //   setName('');
    //   setDetails('');
    //   setPrice(0);
    //   setPhoto('');
    //   flashNotices('success');
  };

  return (
    <>
      <div className="form-container">
        <h2>Add Course</h2>
        <form className="add-course-form">
          <div className='form-group mt-3'>
            <label htmlFor='course-name'>Course Name</label>
            <input
              name='course-name'
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              placeholder="Course name here"
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='course-categrory'>Choose Category</label>
            <select onChange={(e) => setCategory(e.target.value)} className="form-control">
              <option disabled>Choose Category here</option>
              <option value="ComputerScience">Computer science</option>
              <option value="SoftwareDevelopment">Software development</option>
              <option value="DataScience">Data Science</option>
            </select>
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='course-price'>Price</label>
            <input
              name="course-price"
              type="number"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Add price$"
            />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='course-details'>Course Details</label>
            <textarea
              className="form-control"
              type="text"
              rows={10}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter course details here"
            />
          </div>
          <div className='form-group'>
            <button type="submit" onClick={createCourse}>Add Course</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
