'use client'
import React from 'react';
import AuthForm from '@/components/authForm'

const SignUpPage = () => {
  const handleSignUp = async (email: string, password: string, name?: string) => {
   
    console.log('Signing up with:', { name, email, password });
    
  };

  return <AuthForm title="Sign Up" buttonText="Sign Up" isSignUp onSubmit={handleSignUp} />;
};

export default SignUpPage;
