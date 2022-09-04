import { useEffect, useState } from 'react';
import { useStoreDispatch } from 'store';
import { UserActions } from 'store/slices/user.slice';
import AppRoutes from './routes';
import Loader from 'components/Loader';

import axios, { generateAuthHeaders } from 'utils/axios';

function App() {
  const dispatch = useStoreDispatch();
  const [isUserFetched, setIsUserFetched] = useState<boolean>(false);

  // const getAllUsers = async () => {
  //   const response = await axios.get('/users', { headers: generateAuthHeaders() }).catch(err => console.error(err.response.data.err));

  //   console.log(response);
  // }

  // const authUser = async () => {
  //   const response = await axios.post('/users/authenticate', { firstname: 'Hassan', lastname: 'Ali', password: '123147'}).catch(err => console.error(err.response.data.err));

  //   if (!response || !response.data) return;

  //   localStorage.setItem('login-token', response.data.token);
  // }
  
  const getCurrentUser = async () => {
    if (!localStorage.getItem('login-token')) return setIsUserFetched(true);

    const response = await axios.get('/users/current', { headers: generateAuthHeaders() }).catch(err => console.error(err.response.data.err));

    if (!response || !response.data) return;
    
    dispatch(UserActions.setUser(response.data));

    setIsUserFetched(true);
  }

  useEffect(() => {
    getCurrentUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {
        isUserFetched ?
          <AppRoutes />
          :
          <Loader />
      }
    </>
  );
}

export default App;
