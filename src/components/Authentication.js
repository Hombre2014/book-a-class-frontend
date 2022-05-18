import { useSelector, shallowEqual } from 'react-redux';
export let USER_ID = '';

const Authentication = () => {
  const token = useSelector((state) => state.token, shallowEqual);

  const authUser = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    // body: JSON.stringify(
    //   {
    //     reserve_date: date,
    //     duration: 7,
    //     user_id: 4,
    //     course_id: course.id,
    //   },
    // ),
  };

  const authResult = async () => {
    const response = await fetch('http://localhost:3000/api/v1/authenticate', authUser);
    const data = await response.json();
    USER_ID = data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    authResult();
  }, []);
}

export Authentication;
