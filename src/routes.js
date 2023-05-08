import AboutMe from './components/about-me'
import WhatIsReiki from './components/what-is-reiki'
import ReikiSession from './components/reiki-session'
import Contact from './components/contact'

const routes = [
  { name: 'About Me', path: '/', Component: AboutMe },
  { name: 'What Is Reiki', path: '/what-is-reiki', Component: WhatIsReiki },
  { name: 'Reiki Session', path: '/reiki-session', Component: ReikiSession },
  { name: 'Contact', path: '/contact', Component: Contact }
]

export default routes
