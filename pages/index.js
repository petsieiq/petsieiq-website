// pages/index.js
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [state, setState] = useState({
    email: "",
    isSubmitting: false,
    showSuccess: false,
    showError: false,
    errorMessage: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!state.email) {
      setState({
        ...state,
        errorMessage: "Please enter your email address",
        showError: true
      });
      return;
    }
    if (!validateEmail(state.email)) {
      setState({
        ...state,
        errorMessage: "Please enter a valid email address",
        showError: true
      });
      return;
    }

    setState({ ...state, isSubmitting: true, showError: false });

    try {
      const response = await fetch("https://api.petsieiq.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.message ||
          "Our service is being updated. Please try again in a few minutes."
        );
      }

      setState({
        ...state,
        showSuccess: true,
        email: "",
        isSubmitting: false
      });
    } catch (error) {
      setState({
        ...state,
        errorMessage: "Something went wrong. Please try again.",
        showError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <>
      <head>
        <title>PetsieIQ - Welcome</title>
        <link>>
      </head>
      
      {/* Rest of your JSX code here */}
    </>
  );
}