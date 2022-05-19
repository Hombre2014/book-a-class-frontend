import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Menu from '../pages/Menu';
import { removeAsync } from '../redux/delete/course';

const DeletePage = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseM, shallowEqual);
  let count = 0;

  return (
    <div className="flex">
      <Menu />
      <div className="w-100 m-5 d-flex align-items-center">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {
              course.map((next) => {
                count += 1;
                return (
                  <tr key={next.id}>
                    <th scope="row">{count}</th>
                    <td>{next.title}</td>
                    <td>{next.description}</td>
                    <td>{next.category}</td>
                    <td>{next.price}</td>
                    <td><button className="auth_form_button" type="button" onClick={() => dispatch(removeAsync(next))}>Delete</button></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeletePage;
