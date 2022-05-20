import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCourseAsync } from '../redux/delete/course';
import Menu from '../pages/Menu';

const AddCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token, shallowEqual);

  const valid = () => {
    const forms = document.querySelectorAll('.needs-validation02');
    const form = document.querySelector('#cours_id');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formTitle = forms[0][0].value.toString();
      const formDescription = forms[0][1].value.toString();
      const formCategory = forms[0][2].value.toString();
      const formPhoto = forms[0][3].value.toString();
      const formPrice = parseFloat(forms[0][4].value);
      const formDuration = parseInt(forms[0][5].value, 10);

      if ((formTitle !== '') && (formDescription !== '') && (formCategory !== '') && (formPhoto !== '')) {
        const details = {
          title: formTitle,
          description: formDescription,
          category: formCategory,
          photo: formPhoto,
          price: formPrice,
          duration: formDuration,
        };

        dispatch(addCourseAsync([token, details]));
        alert('User created!');
        navigate('/');
      }
    });
    // Fetch all the forms we want to apply custom Bootstrap validation styles to

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach((form) => {
        form.addEventListener('submit', (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        }, false);
      });
  };

  if (token.length > 0) {
    return (
      <div className="flex">
        <Menu />
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center p-3">
            <h2 className="h1">Registration Form</h2>
          </div>
          <form className="auth_form_reg row g-3 needs-validation02 p-3 border" id="cours_id" noValidate>
            <div className="col-sm-6">
              <label htmlFor="validationCustom01" className="form-label w-100 p-3">
                Title
                <input type="text" className="form-control" id="validationCustom01" required />
                <div className="invalid-feedback">
                  Please provide your Title name
                </div>
              </label>
            </div>
            <div className="col-sm-6">
              <label htmlFor="validationCustomUsername" className="form-label w-100 p-3">
                Description
                <div className="input-group has-validation">
                  <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                  <div className="invalid-feedback">
                    Please enter description.
                  </div>
                </div>
              </label>
            </div>
            <div className="col-sm-6">
              <label htmlFor="validationCustom03" className="form-label w-100 p-3">
                Category
                <input type="text" className="form-control" id="validationCustom03" required />
                <div className="invalid-feedback">
                  Please Enter Category.
                </div>
              </label>
            </div>
            <div className="col-sm-6">
              <label htmlFor="valid04" className="form-label w-100 p-3">
                Photo (URL)
                <input type="text" className="form-control" id="valid04" required />
                <div className="invalid-feedback">
                  Please provide Photo.
                </div>
              </label>
            </div>
            <div className="col-sm-6">
              <label htmlFor="validprice" className="form-label w-100 p-3">
                Price
                <input type="number" className="form-control" id="validprice" required />
                <div className="invalid-feedback">
                  Please provide Price.
                </div>
              </label>
            </div>
            <div className="col-sm-6">
              <label htmlFor="validduration" className="form-label w-100 p-3">
                Duration
                <input type="number" className="form-control" id="validduration" required />
                <div className="invalid-feedback">
                  Please provide Duration.
                </div>
              </label>
            </div>

            <div className="col-12">
              <button className="reg-button" type="submit" onClick={() => valid()}>Submit form</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Menu />
      <div className="d-flex justify-content-center align-items-center w-75">
        <h2 className="h1">Login to use this feature</h2>
      </div>
    </div>
  );
};

export default AddCourse;
