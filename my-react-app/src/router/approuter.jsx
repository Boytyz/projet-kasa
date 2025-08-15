import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../composants/layout/layout';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Error404 from '../pages/error404/error404';
import Fiches from '../pages/fiches_logements/fiches.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Routes enfants qui s'afficheront dans <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="fiches/:id" element={<Fiches />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

