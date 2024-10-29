import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div className='w-screen h-screen'>
      <Outlet/>
    </div>
  )
}

export default LoginLayout;