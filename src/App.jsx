import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import { Heading } from '@radix-ui/themes';
import PagePartners from './pages/Partners';
import PagePartnersShow from './pages/Partners/show';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}