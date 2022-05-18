/* eslint-disable no-console */
import React from 'react';

const Registration = () => {
  const forms = document.querySelectorAll('.needs-validation');

  const createUser = (payload) => fetch('http://localhost:3000/api/v1/users',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json())
    .then((data) => data);

  const test = { success: 'llll' };
  console.log(Object.keys(test));
  console.log(Object.keys(test)[0] === 'success');

  const valid = () => {
    const form = document.querySelector('#reg_id');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const details = {
        username: forms[0][1].value,
        password: forms[0][3].value,
        email: forms[0][2].value,
        full_name: forms[0][0].value,
      };

      createUser(details);
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
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center p-3">
        <h2 className="h1">Registartion Form</h2>
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
          <label htmlFor="validationCustom03" className="form-label w-100 p-3">
            Password
            <input type="password" className="form-control" id="validationCustom03" required />
            <div className="invalid-feedback">
              Please provide a password.
            </div>
          </label>
        </div>

        <div className="col-12">
          <button className="auth_form_button" type="submit" onClick={() => valid()}>Submit form</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
