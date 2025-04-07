import Link from 'next/link';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome to Learning Hub</h1>
        <p>Manage your teachers, classes, and payments efficiently</p>
        <div className="button-group">
          <Link href="/login/teacher"><button className="btn">Login as Teacher</button></Link>
          <Link href="/login/admin"><button className="btn">Login as Admin</button></Link>
        </div>
      </div>
    </div>
  );
}
