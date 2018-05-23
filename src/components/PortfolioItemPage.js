import React from 'react';

const PortfolioItemPage = (props) => {
  console.log(props)
  return (
  <div>
    <h1>One of My Projects</h1>
    <p>This is my portfolio for project with id of {props.match.params.id}</p>
  </div>
  )
};

export default PortfolioItemPage;
