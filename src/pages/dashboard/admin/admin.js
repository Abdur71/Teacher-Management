import '../../../styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();
  const [teachers, setTeachers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const dummyTeachers = [
      { id: 'T001', name: 'Hasan Uddin', subject: 'Physics' },
      { id: 'T002', name: 'Ayesha Akter', subject: 'Math' },
    ];
    setTeachers(dummyTeachers);
  }, []);

  const handleRemoveTeacher = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to remove this teacher?');
    if (confirmDelete) {
      setTeachers(prev => prev.filter(teacher => teacher.id !== id));
    }
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    const { id, name, subject } = e.target.elements;

    const newTeacher = {
      id: id.value,
      name: name.value,
      subject: subject.value,
    };

    setTeachers(prev => [...prev, newTeacher]);
    setShowAddModal(false);
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">👋 Welcome Admin</h1>
      <p className="admin-subtitle">Manage all your teachers efficiently</p>

      <div className="card-summary">
        <div className="summary-box">
          <h2>Total Teachers</h2>
          <p>{teachers.length}</p>
        </div>
        <div className="summary-box">
          <h2>Pending Payments</h2>
          <p>৳ 2,000</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="section-title">📋 Teacher List</h2>
        <button className="add-btn" onClick={() => setShowAddModal(true)}>➕ Add Teacher</button>
      </div>

      <table className="teacher-table">
        <thead>
          <tr>
            <th>Teacher ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td>
                <button
                  className="profile-btn"
                  onClick={() => router.push(`/dashboard/admin/teacher/${teacher.id}`)}
                >
                  View
                </button>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveTeacher(teacher.id)}
                  style={{ marginLeft: '10px' }}
                >
                  🗑️ Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Teacher Modal */}
      {showAddModal && (
        <div className="modal">
          <form className="modal-content" onSubmit={handleAddTeacher}>
            <h3>➕ Add New Teacher</h3>
            <label>Teacher ID:</label>
            <input type="text" name="id" required />
            <label>Name:</label>
            <input type="text" name="name" required />
            <label>Subject:</label>
            <input type="text" name="subject" required />
            <button type="submit" className="save-btn">Add</button>
            <button type="button" className="cancel-btn" onClick={() => setShowAddModal(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}
