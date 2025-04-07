import { useState } from 'react';
import '../../styles/globals.css';

export default function TeacherDashboard() {
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    date: '',
    type: 'online',
    subject: '',
    classLevel: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddClass = (e) => {
    e.preventDefault();
    const newClass = {
      ...form,
      payment: form.type === 'online' ? 300 : 500,
    };
    setClasses([...classes, newClass]);
    setForm({ date: '', type: 'online', subject: '', classLevel: '' });
  };

  const totalPayment = classes.reduce((sum, cls) => sum + cls.payment, 0);

  return (
    <div className="container">
      <div className="card">
        <img src="/Formal Photo.jpg" alt="Teacher" style={{ width: 100, height: 100, borderRadius: '50%' }} />
        <h2>Welcome, Abdur Rafiu</h2>
        <p><strong>Instructor of:</strong> Physics</p>
      </div>

      <div className="card">
        <h3>Add Class</h3>
        <form onSubmit={handleAddClass}>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="input"
          /><br /><br />

          <select name="type" value={form.type} onChange={handleChange} className="input" required>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select><br /><br />

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="input"
          /><br /><br />

          <select
            name="classLevel"
            value={form.classLevel}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="">Select Class Level</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
          </select><br /><br />

          <button className="btn">Add Class</button>
        </form>
      </div>

      <div className="card">
        <h3>Class Records & Payment</h3>
        {classes.length === 0 ? (
          <p>No class added yet.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#eee' }}>
                <th>Date</th>
                <th>Type</th>
                <th>Subject</th>
                <th>Class Level</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, i) => (
                <tr key={i}>
                  <td style={{ padding: 8 }}>{cls.date}</td>
                  <td>{cls.type}</td>
                  <td>{cls.subject}</td>
                  <td>{cls.classLevel}</td>
                  <td>{cls.payment} ৳</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <h4 style={{ marginTop: '20px' }}>Total Payment: {totalPayment} ৳</h4>
      </div>
    </div>
  );
}
