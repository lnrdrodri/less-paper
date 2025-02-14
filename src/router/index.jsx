import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layouts';
import { Heading } from '@radix-ui/themes';
import LoginLayout from '../layouts/login';
import LoginPage from '../pages/Login';
import { AuthGuard } from './AuthGuard';
import PageUnits from '../pages/Units';
import PageUnitsShow from '../pages/Units/show';
import PageParticipants from '../pages/Participants';


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
            <Route path='/units'>
              <Route index element={<PageUnits />} />
              <Route path=":id" element={<PageUnitsShow />} />
            </Route>
            <Route path='/participants'>
              <Route index element={<PageParticipants />} />
              {/* <Route path=":id" element={<PageUnitsShow />} /> */}
            </Route>
            <Route path='/jobs' element={<Heading size={6}>Jobs</Heading>} />
            <Route path='/projects' element={<Heading size={6}>Projects</Heading>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}