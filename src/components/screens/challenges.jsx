/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router';
import Dashboard from '../dashboard';

export const AddChallengeSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username is too short')
    .required('username is required'),
});

const Challenges = () => (
  <Dashboard>
    <h1>
      Challenges
    </h1>
  </Dashboard>
);
export default Challenges;
