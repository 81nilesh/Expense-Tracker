import React, { useState, useEffect } from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    // form submit
    const submitHandler = async (values) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/users/login', values)
            message.success('login succes');
            setLoading(false)
            localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }))
            navigate('/');
        } catch (error) {
            setLoading(false);
            message.error('something went wrong');
        }
    }

    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/");
        }
    }, [navigate]);
    return (
        <>
            <div className="register-page" style={{ backgroundImage: "url('/path/to/your/background/image.jpg')" }}>
                {loading && <Spinner />}
                <Form layout='vertical' onFinish={submitHandler} className='form'>
                    <h1 className='text-center'>Login Form</h1>
                    <hr />
                    <Form.Item label="Email" name="email">
                        <Input type='email' />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type='password' />
                    </Form.Item>
                    <div className='d-flex justify-content-between'>
                        <Link to="/register">Not a user ? Click Here to register</Link>

                        <button className='btn btn-primary'>Login</button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Login;
