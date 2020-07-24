/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Router from 'next/router';

const Admin = () => {
  const onClick = () => {
    Router.push('/admin/login');
  };
  return (
    <div className="bg-dark">

      <h1 onClick={onClick}>
        ADMIN HERE
      </h1>

    </div>
  );
};
export default Admin;
