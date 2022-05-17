import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/courses';

const { id } = useParams();
const [course, setCourse] = useState({});

const fetchCourse = async () => {
  const course = await fetch(`http://localhost:3000/api/v1/courses/${id}/start_dates`);
  const res = await course.json();
  setCourse(res);
  return res;
};

useEffect(() => {
  fetchCourse();
}, []);

const fetchDates = createAsyncThunk(
  'dates/fetchDates',
  async () => {
    const dates = await fetch(API_URL);
    const res = await dates.json();
    return res;
  },
);

export default fetchDates;
