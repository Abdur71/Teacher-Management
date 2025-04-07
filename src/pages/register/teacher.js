export default function TeacherRegister() {
    return (
      <div className="container">
        <div className="card">
          <h2>Teacher Registration</h2>
          <form>
            <input type="text" placeholder="Teacher ID" className="input" /><br /><br />
            <input type="password" placeholder="Set Password" className="input" /><br /><br />
            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    );
  }
  