import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { auth, db } from "../assets/files/firebase"; // Ensure proper path to firebase.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AuthorizationPage() {
  const [form, setForm] = useState({ email: "", password: "", confirm_password: "" });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Handle input field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  // Login handler with validation
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim()) {
      setError("Введіть email та пароль.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/my.account"); // Redirect after successful login
    } catch (err) {
      setError("Помилка: " + err.message);
      console.log(err);
    }
  };

  // Registration handler with Firestore integration
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim() || !form.confirm_password.trim()) {
      setError("Всі поля повинні бути заповнені.");
      return;
    }
    if (form.password.length < 8) {
      setError("Пароль має бути не менше 8 символів.");
      return;
    }
    if (form.password !== form.confirm_password) {
      setError("Паролі мають бути однакові.");
      return;
    }
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);

      // Add user details to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: form.email,
        createdAt: new Date().toISOString(),
      });

      navigate("/my.account"); // Redirect after successful registration
    } catch (err) {
      setError("Помилка: " + err.message);
      console.log(err);
    }
  };

  return (
    <div className="authorization-page" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--background-color)" }}>
        <section
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
            padding: "2.5rem 2rem",
            minWidth: "340px",
            width: "100%",
            maxWidth: "380px",
            margin: "2rem 0",
            animation: "fadeIn 0.5s ease forwards",
          }}
        >
          <h2 style={{ color: "var(--secondary-color)", textAlign: "center", marginBottom: "2rem" }}>
            {isLogin ? "Вхід до кабінету" : "Реєстрація"}
          </h2>
          <form onSubmit={isLogin ? handleLogin : handleSignUp} autoComplete="off">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                style={{ marginBottom: "1.2rem" }}
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Введіть email"
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <input
                style={{ marginBottom: isLogin ? "2rem" : "1.2rem" }}
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Введіть пароль"
                required
              />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirm_password">Підтвердіть пароль:</label>
                <input
                  style={{ marginBottom: "1.2rem" }}
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  value={form.confirm_password}
                  onChange={handleChange}
                  placeholder="Підтвердіть пароль"
                  required
                />
              </div>
            )}
            {error && (
              <div style={{ color: "var(--error-color)", marginBottom: "1rem", textAlign: "center" }}>
                {error}
              </div>
            )}
            <button type="submit" className="btn" style={{ width: "100%" }}>
              {isLogin ? "Увійти" : "Зареєструватися"}
            </button>
          </form>
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(!isLogin);
                setForm({ email: "", password: "", confirm_password: "" });
                setError("");
              }}
              style={{ color: "var(--accent-color)", textDecoration: "none", fontSize: "0.95rem" }}
            >
              {isLogin ? "Ще не маєте акаунту? Зареєструватися" : "Вже маєте акаунт? Увійти"}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
