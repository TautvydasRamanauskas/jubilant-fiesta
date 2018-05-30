import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
};

export default class Facebook extends React.Component {
    render() {
        return (
            <FacebookLogin
                appId="195931674369126"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        )
    }
}