/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../pages/Menu';

const Registration = () => {
  const navigate = useNavigate();

  const createUser = (payload) => fetch('http://localhost:3000/api/v1/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json())
    .then((data) => {
      if (Object.keys(data)[0] === 'success') {
        navigate('/');
      } else {
        navigate('/registration');
      }
    });

  const valid = () => {
    const forms = document.querySelectorAll('.needs-validation');
    const form = document.querySelector('#reg_id');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const fullName = forms[0][0].value.toString();
      const userName = forms[0][1].value.toString();
      const emails = forms[0][2].value.toString();
      const passWord = forms[0][3].value.toString();

      if ((fullName !== '') && (userName !== '') && (emails !== '') && (passWord !== '')) {
        const details = {
          username: userName,
          password: passWord,
          email: emails,
          full_name: fullName,
        };

        createUser(details);
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

  return (
    <div className="flex">
      <Menu />
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center p-3">
          <h2 className="h1">Registration Form</h2>
        </div>
        <form className="auth_form_reg row g-3 needs-validation p-3 border" id="reg_id" noValidate>
          <div className="col-sm-6">
            <label htmlFor="validationCustom01" className="form-label w-100 p-3">
              Full name
              <input type="text" className="form-control" id="validationCustom01" required />
              <div className="invalid-feedback">
                Please provide your full name
              </div>
            </label>
          </div>
          <div className="col-sm-6">
            <label htmlFor="validationCustomUsername" className="form-label w-100 p-3">
              Username
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </label>
          </div>
          <div className="col-sm-6">
            <label htmlFor="validationCustom03" className="form-label w-100 p-3">
              Email
              <input type="email" className="form-control" id="validationCustom03" required />
              <div className="invalid-feedback">
                Please provide a Email Address.
              </div>
            </label>
          </div>
          <div className="col-sm-6">
            <label htmlFor="valid04" className="form-label w-100 p-3">
              Password
              <input type="password" className="form-control" id="valid04" required />
              <div className="invalid-feedback">
                Please provide a password.
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
};

export default Registration;
