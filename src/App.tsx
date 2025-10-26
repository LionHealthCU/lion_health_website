import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { People } from './pages/People';
import { Magazine } from './pages/Magazine';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
	return (
		<>
			<ScrollToTop />
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/people" element={<People />} />
					<Route path="/magazine" element={<Magazine />} />
				</Routes>
			</Layout>
		</>
	);
};

export const App: React.FC = () => {
	return (
		<Router>
			<AppContent />
		</Router>
	);
};

