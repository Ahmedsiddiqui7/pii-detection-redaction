'use client'
import React from 'react';
import AuthForm from '@/components/authForm'

const SignInPage = () => {
  const handleSignIn = async (email: string, password: string, name?: string) => {
   
    console.log('Signing in with:', { name, email, password });
    
  };

  return <AuthForm title="Sign In" buttonText="Sign In" onSubmit={handleSignIn} />;
};

export default SignInPage;
