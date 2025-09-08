import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { People } from './pages/People';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/people" element={<People />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Layout>
		</Router>
	);
};

