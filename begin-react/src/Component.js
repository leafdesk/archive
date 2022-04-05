import React from 'react';

function Component({ title, description }) {
  return (
    <>
      <li class='card' id={title}>
        <div class='pictogram'></div>
        <div class='text'>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </li>
    </>
  );
}

Component.defaultProps = {
  title: 'no title',
  description: 'no description',
};

export default Component;
