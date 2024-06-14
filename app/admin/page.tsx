"use client";
import { useSearchParams } from "next/navigation";
export default function AdminPage() {
  const searchparams = useSearchParams();
  const u = searchparams.get("user");
  const p = searchparams.get("pass");

  return (
    <div>
      <h1>admin</h1>
      <p>{u}</p>
      <p>{p}</p>
    </div>
  );
}
