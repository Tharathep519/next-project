"use client";
import { useSearchParams } from "next/navigation";
export default function AdminPage() {
  const param =  useSearchParams();
  const user = param.get("user") ;
  const pass = param.get("pass") ;

  return (
    <div>
      <h1>Admin</h1>
      <p>User: {user}</p>
      <p>Password: {pass}</p>
    </div>
  );
}
