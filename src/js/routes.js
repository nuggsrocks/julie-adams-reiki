import AboutMe from './components/about-me';
import Contact from './components/contact';
import References from './components/references';
import ReikiSession from './components/reiki-session';
import ReikiTherapy from './components/reiki-therapy';
import Services from './components/services';
import Testimonials from './components/testimonials';

const routes = [
	{name: 'About Me', path: '/', Component: AboutMe},
	{name: 'Contact', path: '/contact', Component: Contact},
	{name: 'References', path: '/references', Component: References},
	{name: 'Reiki Session', path: '/reiki-session', Component: ReikiSession},
	{name: 'Reiki Therapy', path: '/reiki-therapy', Component: ReikiTherapy},
	{name: 'Services', path: '/services', Component: Services},
	{name: 'Testimonials', path: '/testimonials', Component: Testimonials}
];

export default routes;
