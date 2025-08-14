import { useState } from "react";

export default function MailForm() {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    if (!email) {
      alert("Email is required ❌");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Your email is invalid ❌");
      return;
    }

    alert("Your mail was sent ✅");
  };

  return (
    <div className="p-4">
      {/* Your existing input */}
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-3 rounded mr-2"
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 mt-2 rounded-xl bg-sky-400 text-black font-medium hover:bg-blue-800 hover:scale-110 transition"
      >
        Send Mail
      </button>
    </div>
  );
}
