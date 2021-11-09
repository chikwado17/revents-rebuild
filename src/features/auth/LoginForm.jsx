import { Form, Formik } from 'formik';
import React from 'react';
import ModalWrapper from '../../app/common/modal/ModalWrapper';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { useDispatch } from 'react-redux';
import { signInUser } from './authActions';
import { closeModal } from '../../app/common/modal/modalActions';


const LoginForm = () => {
    const dispatch = useDispatch();
    return (
        <ModalWrapper size='mini' header='Sign in to Re-vents'>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={((values, {setSubmitting}) => {
                   dispatch(signInUser(values));
                   setSubmitting(false);
                   dispatch(closeModal());
                })}
            >

                {({isSubmitting, isValid, dirty}) => (
                    <Form className='ui form'>
                        <MyTextInput name='email' placeholder='Enter username' />
                        <MyTextInput name='password' placeholder='Enter password' type='password' />
                        <Button 
                            className='login-btn'
                            loading={isSubmitting}
                            color='teal'
                            size='large'
                            disabled={!isValid || !dirty || isSubmitting} 
                            type='submit'
                            content='Login'
                        />
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    )
}

export default LoginForm
