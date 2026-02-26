"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Login
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      if (!data?.user) {
        alert("Usuario no válido");
        setLoading(false);
        return;
      }

      // 2️⃣ Obtener rol
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError || !profile) {
        alert("No se pudo obtener el rol del usuario");
        setLoading(false);
        return;
      }

      // 3️⃣ Redirección por rol
      switch (profile.role) {
        case "ceo":
          router.push("/ceo");
          break;
        case "admin":
          router.push("/admin");
          break;
        case "employee":
          router.push("/employee");
          break;
        default:
          router.push("/dashboard");
      }

    } catch (err) {
      alert("Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold tracking-wide">
            DD Technologies
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Secure Access Portal
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-blue-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-blue-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold disabled:opacity-50"
          >
            {loading ? "Accessing..." : "Login"}
          </button>

        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          © 2026 DD Technologies Corporation
        </p>

      </div>
    </div>
  );
}