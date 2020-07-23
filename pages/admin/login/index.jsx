/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Container, Row, Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import Router from 'next/router';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import '../../../theme.scss';

const Error = styled.span`
    color: red;
`;
const LogoText = styled.h1`
`;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please Enter a valid Email Address')
    .required('email field is required'),
  password: Yup.string()
    .min(6, 'password is too short')
    .required('passsword field is required'),
});

const Login = () => (
  <Container style={{ minHeight: '100vh' }} className=" d-flex align-items-center justify-content-center">
    <Row className="w-100">
      <Col style={{ backgroundColor: '#002b36' }} className="p-5 rounded-lg" md={{ size: 6, offset: 3 }}>
        <div className="text-center bg-dark">
          <img
            style={{
              height: '100px', width: '100px', position: 'absolute', top: '-14%', left: '41%',
            }}
            src="/icon.jpg"
            alt="logo"
          />
        </div>

        <LogoText className="text-white text-center">
          FITNESS WORLD
        </LogoText>
        <h3 className="text-secondary text-center mb-3">
          Admin Login
        </h3>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            Router.push('/admin/dashboard');
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label className="text-white" for="exampleEmail">Email</Label>
                <Field name="email">
                  {({
                    field,
                    meta,
                  }) => (
                    <div>
                      <Input type="text" placeholder="Email" {...field} />
                      {meta.touched && meta.error && (
                      <div className="error">
                        <Error>
                          {meta.error}
                        </Error>
                      </div>
                      )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <FormGroup>
                <Label className="text-white" for="examplePassword">Password</Label>
                <Field name="password">
                  {({
                    field,
                    meta,
                  }) => (
                    <div>
                      <Input type="password" placeholder="Password" {...field} />
                      {meta.touched && meta.error && (
                      <div className="error">
                        <Error>
                          {meta.error}
                        </Error>
                      </div>
                      )}
                    </div>
                  )}
                </Field>
              </FormGroup>
              <Button color="secondary" type="submit" disabledl>
                SUBMIT

              </Button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  </Container>
);
export default Login;
