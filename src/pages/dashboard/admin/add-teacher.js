// src/pages/dashboard/admin/add-teacher.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../../../styles/globals.css';

export default function AddTeacher() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    online_unit: '',
    offline_unit: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST to backend here
    console.log('Teacher data:', form);
    alert('Teacher added successfully!');
    router.push('/dashboard/admin');
  };

  return (
    <div className="container">
      <h2 className="title">Add New Teacher</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label>Online Payment Unit</label>
        <input
          type="number"
          name="online_unit"
          value={form.online_unit}
          onChange={handleChange}
          required
        />

        <label>Offline Payment Unit</label>
        <input
          type="number"
          name="offline_unit"
          value={form.offline_unit}
          onChange={handleChange}
          required
        />

        <label>Upload Profile Image (optional)</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <button type="submit" className="btn-submit">Add Teacher</button>
      </form>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: auto;
          padding: 30px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .title {
          text-align: center;
          margin-bottom: 20px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .form input {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }
        .btn-submit {
          padding: 12px;
          background-color: #4dbf00;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }
        .btn-submit:hover {
          background-color: #3da300;
        }
      `}</style>
    </div>
  );
}
