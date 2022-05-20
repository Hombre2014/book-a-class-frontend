import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const Authentication = () => {
  const token = useSelector((state) => state.token, shallowEqual);

  const authUser = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const authResult = async () => {
    const response = await fetch('http://localhost:3000/api/v1/authenticate', authUser);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    authResult();
  }, []);
};

export default Authentication;
