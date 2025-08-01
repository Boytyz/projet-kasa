
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../composants/layout/layout';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Accommodation from '../pages/accommodations/Accommodations';
import Error404 from '../pages/error404/error404';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Routes enfants qui s'afficheront dans <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

