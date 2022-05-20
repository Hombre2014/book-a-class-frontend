/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../redux/login/login';
import logo from '../assets/images/logo.png';
import twitter from '../assets/images/twitter-icon.png';
import facebook from '../assets/images/facebook-icon.png';
import linkedin from '../assets/images/linkedin-icon.png';
import github from '../assets/images/github-icon.png';

const social = [
  { icon: twitter },
  { icon: facebook },
  { icon: linkedin },
  { icon: github },
];

const SideBar = () => {
  const token = useSelector((state) => state.token, shallowEqual);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-64">
      <div className="flex-1 flex flex-col pt-3 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <a href="/"><img src={logo} className="w-40" alt="logo" /></a>
        </div>
        <nav className="mt-12 flex-1 desktop-nav" aria-label="Sidebar">
          <div className="pl-3 uppercase font-black text-md">
            <button type="button" onClick={() => navigate('/')} className="bg-lime-500 text-slate-50 group flex items-center pl-5 py-3 hover:text-slate-900" aria-current="page">Courses</button>
            <button type="button" onClick={() => navigate('/reservations')} className="text-slate-900 hover:bg-lime-200 group flex items-center pl-5 py-3 hover:text-slate-900">My Reservation</button>
            <button type="button" onClick={() => navigate('/add_course')} className="text-slate-900 hover:bg-lime-200 group flex items-center pl-5 py-3 hover:text-slate-900">Add Course</button>
            <button type="button" onClick={() => navigate('/delete_course')} className="text-slate-900 hover:bg-lime-200 group flex items-center pl-5 py-3 hover:text-slate-900">Delete Course</button>
            <button type="button" onClick={() => navigate('/registration')} className="text-slate-900 hover:bg-lime-200 group flex items-center pl-5 py-3 hover:text-slate-900">Registration</button>
            {
              token.length > 0 ? (
                <button type="button" onClick={() => dispatch(removeToken())} className="text-slate-900 hover:bg-lime-200 group flex items-center pl-5 py-3 hover:text-slate-900">Logout</button>
              )
                : (
                  <button type="button" onClick={() => navigate('/login')} className="text-slate-900 hover:bg-lime-200 group flex items-center pl-5 py-3 hover:text-slate-900">Login</button>
                )
            }
          </div>
        </nav>
      </div>
      <div className="flex-shrink-0 flex-200 p-4">
        <div className="flex gap-2">
          {social.map((item) => (
            <a href="/" key={item.icon}><img src={item.icon} alt="social-icon" className="w-6" /></a>
          ))}
        </div>
        <p className="text-gray-700 font-bold mt-2">© 2022</p>
      </div>
    </div>
  );
};

export default SideBar;
