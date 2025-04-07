import { useRouter } from 'next/router';
import { useState } from 'react';
import '../../../../styles/globals.css';

export default function TeacherProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  const [teacher, setTeacher] = useState({
    id,
    name: 'Hasan Uddin',
    email: 'hasan@example.com',
    subject: 'Physics',
    photo: '/default-avatar.png',
    classes: [
      { date: '2025-04-01', type: 'Online', subject: 'Optics', payment: 300, classLevel: 'HSC' },
      { date: '2025-04-03', type: 'Offline', subject: 'Thermodynamics', payment: 500, classLevel: 'SSC' },
    ],
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject } = e.target.elements;
    setTeacher((prev) => ({
      ...prev,
      name: name.value,
      email: email.value,
      subject: subject.value,
    }));
    setShowEditModal(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setTeacher((prev) => ({ ...prev, photo: photoURL }));
      setShowPhotoModal(false);
    }
  };

  const totalPayment = teacher.classes.reduce((acc, cls) => acc + cls.payment, 0);

  return (
    <div className="profile-container">
      <h1>👨‍🏫 Teacher Profile: {teacher.name}</h1>

      <div className="profile-section">
        <img src={teacher.photo} alt="Profile" className="profile-img" />
        <button className="upload-btn" onClick={() => setShowPhotoModal(true)}>
          Change Photo
        </button>

        <div className="info">
          <p><strong>ID:</strong> {teacher.id}</p>
          <p><strong>Email:</strong> {teacher.email}</p>
          <p><strong>Subject:</strong> {teacher.subject}</p>
          <button className="edit-btn" onClick={() => setShowEditModal(true)}>
            ✏️ Edit Details
          </button>
          <button className="pay-btn">💸 Pay Teacher</button>
        </div>
      </div>

      <h2>📚 Classes Taken</h2>
      <table className="class-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Subject</th>
            <th>Class Level</th>
            <th>Payment ($)</th>
          </tr>
        </thead>
        <tbody>
          {teacher.classes.map((cls, index) => (
            <tr key={index}>
              <td>{cls.date}</td>
              <td>{cls.type}</td>
              <td>{cls.subject}</td>
              <td>{cls.classLevel}</td>
              <td>{cls.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-payment">
        <strong>Total Payment: ${totalPayment}</strong>
      </div>


      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal">
          <form className="modal-content" onSubmit={handleEditSubmit}>
            <h3>Edit Teacher Info</h3>
            <label>Name:</label>
            <input type="text" name="name" defaultValue={teacher.name} required />
            <label>Email:</label>
            <input type="email" name="email" defaultValue={teacher.email} required />
            <label>Subject:</label>
            <input type="text" name="subject" defaultValue={teacher.subject} required />
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={() => setShowEditModal(false)}>Cancel</button>
          </form>
        </div>
      )}

      {/* Change Photo Modal */}
      {showPhotoModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Upload New Photo</h3>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
            <button className="cancel-btn" onClick={() => setShowPhotoModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
