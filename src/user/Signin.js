import React from "react";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import Layout from "../core/Layout";
import {signin, authenticate} from '../auth'


const Signin = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });
    // district this values from the state
    const {
        email,
        password,
        error,
        loading,
        redirectToReferrer
    } = values

    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        });
    };


    const clickSubmit = event => {
        event.preventDefault()

        setValues({
            ...values,
            error: false,
            loading: true
        })
        signin({email, password}).then(data => {

            console.log(data);
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    loading: false
                })
            } else {
               authenticate(data, () => {
        
                setValues({
                    ...values,
                    redirectToReferrer: true
                });
               } )
            }
        })
    };

    const signInFrom = () => (
        <form>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={
                        handleChange('email')
                    }
                    type="email"
                    className="form-control"
                    value={email}
                    placeholder="Enter your Email"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={
                        handleChange('password')
                    }
                    type="password"
                    className="form-control"
                    value={password}
                    placeholder="Enter your Password"/>
            </div>

            <button onClick={clickSubmit}
                type="submit"
                className="btn btn-primary">Submit</button>

        </form>
    );

const showError = () => (
    <div className="alert alert-danger"
        style={
            {
                display: error ? "" : "none"
            }
    }>
        {error}</div>
);


    const showLoading = () => (loading && (
        <div className="alert alert-info">
            <h2>Loading...</h2>
        </div>
    ));

    const redirectUser = () => {
        console.log(redirectToReferrer);
        if (redirectToReferrer) {
            navigate("/")
        }
    }

    return (
        <Layout title="Login" description="Login to Tanger Med" className="container col-md-8 offset-md-2">
            {
            showError()
        }
            {
            showLoading()
        }
            {
            signInFrom()
        }
            {
            redirectUser()
        } </Layout>

    );

};


export default Signin;
