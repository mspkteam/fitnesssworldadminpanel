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

export const AddChallengeSchema = Yup.object().shape({
  challengeName: Yup.string()
    .min(4, 'challenge name is too short !')
    .required('name of the challenge is required'),
  challenge: Yup.string()
    .min(4, 'challenge is too short !')
    .required('challenge is required'),
})

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

const AddChallenge = () => {
  const classes = useStyles()
  const helperTestClasses = helperTextStyles()
  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} alt="Remy Sharp" src="/icon.jpg" />
          <Typography component="h1" variant="h5">
            Add New Challenge
          </Typography>
          <Formik
            initialValues={{
              challengeName: '', challenge: '',
            }}
            validationSchema={AddChallengeSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log('values ', values)
              Router.push('/home')
            }}
          >
            {(formik) => (
              <form className={classes.form} onSubmit={formik.handleSubmit}>
                <Field name="challengeName">
                  {({
                    field,
                    meta,
                  }) => (
                    <>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="challengeName"
                        label="Challenge Name"
                        name="challengeName"
                        autoComplete="challengeName"
                        helperText={meta.error}
                        FormHelperTextProps={{ classes: helperTestClasses }}
                        {...field}
                      />
                    </>
                  )}
                </Field>
                <Field name="challenge">
                  {({
                    field,
                    meta,
                  }) => (
                    <>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="challenge"
                        label="What is the Challenge?"
                        name="challenge"
                        autoComplete="challenge"
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
                  Add Challenge
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </Container>
    </Layout>
  )
}
export default AddChallenge
