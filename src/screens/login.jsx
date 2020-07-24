/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import Router from 'next/router'

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please Enter a valid Email Address')
    .required('email field is required'),
  password: Yup.string()
    .min(6, 'password is too short')
    .required('passsword field is required'),
})

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: '#e6e6e6',
      padding: theme.spacing(10),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    height: '100px',
    width: '100px',
    marginBottom: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    marginBottom: theme.spacing(3),
  },
}))
const helperTextStyles = makeStyles((theme) => ({
  root: {
    margin: 4,
    color: 'red',
  },
  error: {
    '&.MuiFormHelperText-root.Mui-error': {
      color: theme.palette.common.white,
    },
  },
}))

const Login = () => {
  const classes = useStyles()
  const helperTestClasses = helperTextStyles()
  return (
    <Container component="main" maxWidth="sm" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} alt="Remy Sharp" src="/icon.jpg" />
        <Typography variant="h4">
          FITNESS WORLD
        </Typography>
        <Typography component="h5" variant="h5" className={classes.typography}>
          Admin Login
        </Typography>
        <Formik
          initialValues={{
            email: '', password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log('values ', values)
            Router.push('/welcome')
          }}
        >
          {(formik) => (
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <Field name="email">
                {({
                  field,
                  meta,
                }) => (
                  <>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      helperText={meta.error}
                      FormHelperTextProps={{ classes: helperTestClasses }}
                      {...field}
                    />
                  </>
                )}
              </Field>
              <Field name="password">
                {({
                  field,
                  meta,
                }) => (
                  <>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      helperText={meta.error}
                      FormHelperTextProps={{ classes: helperTestClasses }}
                      {...field}
                    />
                  </>
                )}
              </Field>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  )
}
export default Login

// '#002b36'
