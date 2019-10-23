import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
  
const LoginLayout = ({ children }) => (                         
    <div>  
      <p>This is the First Layout</p>  
      {children}                                       
    </div>  
  );  
  
  const LoginLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <LoginLayout>  
            <Component {...matchProps} />  
        </LoginLayout>  
      )} />  
    )  
  };  
  
export default LoginLayoutRoute;  

