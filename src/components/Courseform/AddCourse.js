import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCourses from './courseAPI';
import './form.css';

const AddCourse = () => {
  const user = useSelector((state) => state.tokenReducer);
  const { accessToken } = user;

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState();
  const [Category, setCategory] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);

  const flashNotices = (type) => {
    if (type === 'error') {
      setErrorNotice(true);
      setSuccessNotice(false);
    }

    if (type === 'success') {
      setErrorNotice(false);
      setSuccessNotice(true);
    }
  };

  const createCourse = (e) => {
    e.preventDefault();
    if (name === '' || price === -1 || photo === '' || details === '' || Category === '') {
      flashNotices('error');
      return;
    }
    const data = {
      name,
      details,
      photo,
      price,
      categorization: Category,
    };
    dispatch(fetchCourses(accessToken, data));
    setName('');
    setDetails('');
    setPrice(0);
    setPhoto('');
    flashNotices('success');
  };
  return (
    <>
      <div className="pt-10 lg:fh lg:pt-20">
        <h1 className="text-3xl text-slate-900 uppercase font-bold">Add a Course</h1>
      </div>
      <div className="card centered-div mt-4">
        <div className="card-body">
          <form className="add-form w-60">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Photo link"
              />
            </div>
            <div className="mb-3">
              <select onChange={(e) => setCategory(e.target.value)} className="form-control">
                <option value="" selected disabled hidden>Choose Category here</option>
                <option value="ComputerScience">Computer science</option>
                <option value="SoftwareDevelopment">Software development</option>
                <option value="DataScience">Data Science</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Add price$"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control pb-14"
                type="text"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
              />
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button type="submit" onClick={createCourse} className="btn bt">Add Course</button>
            </div>
          </form>
        </div>
      </div>
      {successNotice && (
        <p className="text-center text-slate-50 text-lg mt-4"> Course created succesfully!</p>
      )}
      {errorNotice && (
        <p className="text-center text-slate-50 text-lg mt-4">Please complete all fields!</p>
      )}
    </>
  );
  // };
};

export default AddCourse;
