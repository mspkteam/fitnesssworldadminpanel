import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Layout from '../src/components/common/layout'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#00212b',
    padding: theme.spacing(5),
    color: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}))

const SubscribeUser = () => {
  const classes = useStyles()
  return (
    <Layout>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">
          WELCOME
        </Typography>
        <Typography variant="h3">
          TO
        </Typography>
        <Typography variant="h3">
          FITNESS WORLD
        </Typography>
      </Container>
    </Layout>
  )
}

export default SubscribeUser
