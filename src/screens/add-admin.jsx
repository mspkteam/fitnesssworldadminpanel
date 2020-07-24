/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
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
import Layout from '../components/common/layout'

export const AddAdminSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username is too short')
    .required('username is required'),
  email: Yup.string()
    .email('Please Enter a valid Email Address')
    .required('email is required'),
  password: Yup.string()
    .min(6, 'password is too short')
    .required('passsword is required'),
  confirmPassword: Yup.string().when('password', {
    is: (val) => (!!(val && val.length > 0)),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Both passwords need to be the same',
    ),
  }),
})

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  avatar: {
    margin: theme.spacing(1),
    height: '100px',
    width: '100px',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
const AddAdmin = () => {
  const classes = useStyles()
  const helperTestClasses = helperTextStyles()

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/icon.jpg" />

          <Typography component="h1" variant="h5">
            Add New Admin
          </Typography>
          <Formik
            initialValues={{
              username: '', email: '', password: '', confirmPassword: '',
            }}
            validationSchema={AddAdminSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log('values ', values)
              Router.push('/home')
            }}
          >
            {(formik) => (
              <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Field name="username">
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
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        helperText={meta.error}
                        FormHelperTextProps={{ classes: helperTestClasses }}
                        {...field}
                      />
                    </>
                  )}
                </Field>
                <Field name="email">
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
                <Field name="confirmPassword">
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
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="password"
                        autoComplete="password"
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
                  Add Admin
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </Container>
    </Layout>
  )
}
export default AddAdmin
