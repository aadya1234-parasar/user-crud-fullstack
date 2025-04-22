// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost/user-crud-api-php/user/create.php',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      alert('User created successfully!');
      setFormData({ name: '', email: '', password: '', dob: '' });
    } catch (err) {
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" required />
      <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" required />
      <input name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" type="date" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
