"use client";
import { useRouter } from 'next/router';

export default function AdminPage() {
  const router = useRouter();
  const { user, pass } = router.query;

  return (
    <div>
      <h1>Admin</h1>
      <p>User: {user}</p>
      <p>Password: {pass}</p>
    </div>
  );
}
