import '../../../styles/globals.css';
import { useRouter } from 'next/router';

export default function AdminLogin() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Future: Laravel API authentication আসবে এখানে
    router.push('/dashboard/admin'); // Redirect to admin dashboard
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" className="input" required />
          <input type="password" placeholder="Password" className="input" required />
          <button className="btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
