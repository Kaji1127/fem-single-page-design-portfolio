import Footer from './components/Footer';
import Header from './components/Header';
import KV from './components/KV';
import Skill from './components/Skill';
import About from './components/About';
import Works from './components/Works';

import './styles/global.css';
import Contact from './components/Contact';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<KV />
				<Skill />
				<About />
				<Works />
				<Contact />
			</main>
			<Footer />
		</>
	);
};

export default App;
