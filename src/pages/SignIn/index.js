import React, {useCallback, useRef} from 'react';
import {Form} from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValitadionErrors';
import {Container, Content} from './styles';

import {useAuth} from '../../hooks/auth';

import Logo from '../../assets/MarvelLogo.svg';
import Input from '../../components/Input';

const SignIn = () => {
  const {signIn} = useAuth();

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name is required.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({user: data.name});
      } catch (error) {
        const errors = getValidationErrors(error);

        formRef.current.setErrors(errors);

        return;
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />

        <h1>The game heroe popularity!</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Your name" />
          <button type="submit">Sign In</button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
