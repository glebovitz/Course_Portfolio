import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Check out the following pages I've created:</p>
    <Link to='/portfolio/10' >Project 10</Link>
    <Link to='/portfolio/31' >Project 31</Link>
  </div>
);

export default PortfolioPage;
