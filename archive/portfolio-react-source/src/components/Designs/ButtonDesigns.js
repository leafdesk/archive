import React from 'react';
import Button from '../../core/Button/Button';

const ButtonDesigns = () => {
  return (
    <>
      <Button name='Create new user' label='Primary CTA' primary />
      <br />
      <Button name='Create new user' label='Secondary CTA' secondary />
      <br />
      <Button name='Cancel' label='Teritiary CTA' />
      <br />
      <Button name='Delete user' label='Destructive CTA' destructive />
      <br />
    </>
  );
};

export default ButtonDesigns;
