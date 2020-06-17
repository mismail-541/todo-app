import React, { Component } from 'react';

class AuthenticationService {

    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser',username);
    }

    logout(){
        console.log('logging out....')
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');

        if(user===null){
            return false;
        }
        else{
            return true;
        }
    }
}

export default new AuthenticationService()