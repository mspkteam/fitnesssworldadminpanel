import React from 'react';
import { Alert } from 'reactstrap';
import '../../theme.scss';
import Router from 'next/router';

const Admin = () => {
  const onClick = () => {
    Router.push('/admin/login');
  };
  return (
    <div className="bg-dark">

      <Alert color="primary">
        ADMIN HERE
      </Alert>

    </div>
  );
};
export default Admin;
