import AboutMe from './components/about-me';
import Contact from './components/contact';
import References from './components/references';
import ReikiSession from './components/reiki-session';
import ReikiTherapy from './components/reiki-therapy';
import Services from './components/services';
import Testimonials from './components/testimonials';

const routes = [
	{path: '/about-me', Component: AboutMe},
	{path: '/contact', Component: Contact},
	{path: '/references', Component: References},
	{path: '/reiki-session', Component: ReikiSession},
	{path: '/reiki-therapy', Component: ReikiTherapy},
	{path: '/services', Component: Services},
	{path: '/testimonials', Component: Testimonials}
];

export default routes;
