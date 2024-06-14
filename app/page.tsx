"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    router.push(`/admin?user=${username}&pass=${password}`);
  };

  console.log("[Debug] user", username); //ดีบัคยูสเซอร์
  console.log("[Debug] pass", password); //ดีบัคพาสเวิร์ส

  return (
    <div className="grid   place-content-center h-full my-[20%] ">
      <img
        className="mx-auto mb-[20px] rounded-full "
        src="https://dynamic.brandcrowd.com/asset/logo/937e0eec-eebf-4294-9029-41619d6c3786/logo-search-grid-1x?logoTemplateVersion=1&v=638369310055500000"
        alt="logo"
        width="150px"
        height="150px"
      />
      <div className="block">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 mb-[10px] rounded-lg "
          type="text"
          name="username"
          placeholder="username"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 mb-[10px] rounded-lg"
          type="text"
          name="password"
          placeholder="password"
        />
      </div>
      <div className="flex justify-between">
        <a className=" text-cyan-400 hover:text-white hover:text-xl" href="#">
          Register
        </a>
        <a className="hover:text-red-400 text-cyan-400 hover:text-lg" href="#">
          Forgot password?
        </a>
      </div>
      <button
        onClick={handleLogin}
        className="border-2 border-black text-slate-950 rounded-xl text-white mt-[20px] "
      >
        LOGIN
      </button>
    </div>
  );
}
