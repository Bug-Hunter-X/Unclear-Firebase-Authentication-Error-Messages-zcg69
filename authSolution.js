function handleAuthError(error) {
  switch (error.code) {
    case 'auth/user-not-found':
      console.error('User not found. Please check your email and password.');
      break;
    case 'auth/wrong-password':
      console.error('Incorrect password. Please try again.');
      break;
    case 'auth/network-request-failed':
      console.error('Network error. Please check your internet connection.');
      break;
    default:
      console.error('An unexpected error occurred:', error);
  }
}

// ... your authentication code ...
.catch(handleAuthError); 