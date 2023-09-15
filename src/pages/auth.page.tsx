import { useAuthStore } from '../store';
import { Login } from '../components/auth/login';
import { Register } from '../components/auth/register';

export const Auth = () => {
  const authPage = useAuthStore(state => state.authPage);

  return (
    <main className="my-16 mx-auto w-11/12 max-w-[144rem] h-[100svh]  xl:my-28 ">
      {authPage === 'login' && <Login />}
      {authPage === 'register' && <Register />}
    </main>
  );
};
