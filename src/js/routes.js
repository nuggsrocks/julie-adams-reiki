import AboutMe from './components/about-me';
import Contact from './components/contact';
import ReikiSession from './components/reiki-session';
import WhatIsReiki from './components/what-is-reiki';
import Services from './components/services';
import Testimonials from './components/testimonials';

const routes = [
	{path: '/', name: 'About Me', Component: AboutMe},
	{path: '/contact', name: 'Contact', Component: Contact},
	{path: '/reiki-session', name: 'Reiki Session', Component: ReikiSession},
	{path: '/what-is-reiki', name: 'What Is Reiki', Component: WhatIsReiki},
	{path: '/services', name: 'Services', Component: Services},
	{path: '/testimonials', name: 'Testimonials', Component: Testimonials}
];

export default routes;
