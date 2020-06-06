import AboutMe from './components/about-me';
import Contact from './components/contact';
import References from './components/references';
import ReikiSession from './components/reiki-session';
import ReikiTherapy from './components/reiki-therapy';
import Services from './components/services';
import Testimonials from './components/testimonials';

const routes = [
    {path: '/', name: 'About Me', Component: AboutMe},
    {path: '/contact', name: 'Contact', Component: Contact},
    {path: '/references', name: 'References', Component: References},
    {path: '/reiki-session', name: 'Reiki Session', Component: ReikiSession},
    {path: '/reiki-therapy', name: 'Reiki Therapy', Component: ReikiTherapy},
    {path: '/services', name: 'Services', Component: Services},
    {path: '/testimonials', name: 'Testimonials', Component: Testimonials}
];

export default routes;