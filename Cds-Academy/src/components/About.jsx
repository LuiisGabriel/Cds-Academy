import React from 'react';
import { useUser } from '../lib/customHooks';
import VisitNavbar from './VisitNavBar';

const About = () => {

  return (
    <>
      <nav className="sticky top-0 z-50"><VisitNavbar /></nav>
      <h1>Sobre</h1>
    </>
  );
}
export default About;