import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Create a new user
    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    // Make an API call to create a new user
    axios.post('/api/users', newUser)
      .then(response => {
        console.log('User created successfully:', response.data);
        // Handle success, such as redirecting to a login page
      })
      .catch(error => {
        console.error('Error creating user:', error);
        // Handle error, such as displaying an error message
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-fishing-background">
      <form className="w-1/2 p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Create User</h2>
        <div className="mb-4">
          <label className="block mb-2">Username:</label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};
export default Register;
