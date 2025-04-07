import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TeacherLogin() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Future: Laravel API call here
    router.push('/dashboard/teacher'); // Redirect to teacher dashboard
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Teacher Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Teacher ID" className="input" /><br /><br />
          <input type="password" placeholder="Password" className="input" /><br /><br />
          <button className="btn" type="submit">Login</button>
        </form>
        <p style={{ marginTop: '20px' }}>
          First time? <Link href="/register/teacher">Register here</Link>
        </p>
      </div>
    </div>
  );
}
