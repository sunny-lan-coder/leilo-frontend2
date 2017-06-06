import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress';

const LoginForm = ({
                       onSubmit,
                       errors,
                       onChange,
                       credentials,
                       loading,
                   }) => (
    <Card className="container">
        <form onSubmit={onSubmit}>
            <h1 className="card-heading">Leilo</h1>
            <CardText>Please log into your account</CardText>
            <div className="field-line">
                <TextField
                    floatingLabelText="Username"
                    name="username"
                    errorText={errors.username}
                    onChange={onChange}
                    value={credentials.username}
                    disabled={loading}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Password"
                    name="password"
                    type="password"
                    errorText={errors.password}
                    onChange={onChange}
                    value={credentials.password}
                    disabled={loading}
                />
            </div>

            {errors.general && <p className="error-message">{errors.general}</p>}

            {loading ?
                <CircularProgress /> : <div className="button-line">
                    <RaisedButton
                        type="submit"
                        primary
                        label="Log in"
                        disabled={loading}/>

                </div>}
        </form>
    </Card>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    credentials: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default LoginForm;