import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layouts';
import { Heading } from '@radix-ui/themes';
import PagePartners from '../pages/Partners';
import PagePartnersShow from '../pages/Partners/show';
import LoginLayout from '../layouts/login';
import LoginPage from '../pages/Login';
import { AuthGuard } from './AuthGuard';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<LoginLayout/>}>
            <Route path='/login' element={<LoginPage />} />
          </Route>
        </Route>

        {/* PRIVATE ROUTES */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<Layout/>}>
            <Route path='/' element={<Heading size={6}>Dashboard</Heading>} />
            <Route path='/partners'>
              <Route index element={<PagePartners />} />
              <Route path=":id" element={<PagePartnersShow />} />
            </Route>
            <Route path='/participants' element={<Heading size={6}>Participants</Heading>} />
            <Route path='/jobs' element={<Heading size={6}>Jobs</Heading>} />
            <Route path='/projects' element={<Heading size={6}>Projects</Heading>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}