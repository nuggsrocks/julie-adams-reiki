import AboutMe from './components/about-me';
import Contact from './components/contact';
import ReikiSession from './components/reiki-session';
import WhatIsReiki from './components/what-is-reiki';

const routes = [
	{path: '/', name: 'About Me', Component: AboutMe},
	{path: '/contact', name: 'Contact', Component: Contact},
	{path: '/reiki-session', name: 'Reiki Session', Component: ReikiSession},
	{path: '/what-is-reiki', name: 'What Is Reiki', Component: WhatIsReiki}
];

export default routes;
