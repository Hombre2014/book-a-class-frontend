/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { refresh } from '../app/store';
import { addTokenAsync } from '../redux/login/login';
import Menu from '../pages/Menu';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token, shallowEqual);

  const checks = () => {
    const forms = document.querySelectorAll('.needs-validation');
    console.log(token);
    if (token.length > 0) { navigate('/'); } else {
      navigate('/login');
      console.log(document.querySelector('#warn').innerText = 'Invalid User');
      forms[0][0].value = '';
      forms[0][1].value = '';
    }
  };

  if (token.length > 0) checks();

  const valid = async () => {
    const forms = document.querySelectorAll('.needs-validation');

    const usernameValue = forms[0][0].value;
    const passwordValue = forms[0][1].value;

    if ((usernameValue !== '') && (passwordValue !== '')) {
      const form = document.querySelector('#login_id');

      form.addEventListener('submit', (event) => {
        event.preventDefault();
      });

      const details = {
        username: usernameValue,
        password: passwordValue,
      };

      await dispatch(addTokenAsync(details));
    }

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

  console.log(token);

  return (
    <div className="flex">
      <Menu />
      <div className="d-flex flex-column align-items-center login">
        <div className="d-flex flex-column justify-content-center m-3">
          <h2 className="h1 p-3">Login Form</h2>
        </div>
        <form className="auth_form row g-3 needs-validation p-3 border" id="login_id" noValidate>
          <div className="col-md-12">
            <label htmlFor="validationCustomUsername" className="form-label w-100 p-3">
              Username
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div className="invalid-feedback">
                  Please Enter a username.
                </div>
              </div>
            </label>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom03" className="form-label w-100 p-3">
              Password
              <input type="password" className="form-control" id="validationCustom03" required />
              <div className="invalid-feedback">
                Please Enter Password.
              </div>
            </label>
          </div>
          <div className="col-12">
            <button className="reg-button" type="submit" onClick={() => valid()}>Submit form</button>
          </div>
        </form>
        <p className="display-6 text-danger" id="warn" />
      </div>
    </div>

  );
};

export default Login;
