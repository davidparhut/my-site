import React, { useEffect, useState } from "react";
import Header from "/Users/apple/Desktop/ВЕБ/my_proj/my-react-app/src/components/Header.jsx";
import Footer from "/Users/apple/Desktop/ВЕБ/my_proj/my-react-app/src/components/Footer.jsx";
import { auth } from "/Users/apple/Desktop/ВЕБ/my_proj/my-react-app/src/assets/files/firebase.js";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// ДОДАЙ ЦЕ для Firestore:
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// 🔽 ХУК для підрахунку стартапів користувача
function useUserStartupsCount(user, db) {
  const [startupsCount, setStartupsCount] = useState(null);

  useEffect(() => {
    if (user?.uid) {
      const fetchStartupsCount = async () => {
        try {
          const startupsQuery = query(
            collection(db, "startups"),
            where("userId", "==", user.uid)  // ← ПРАВИЛЬНО
          );

          const querySnapshot = await getDocs(startupsQuery);
          setStartupsCount(querySnapshot.size);
        } catch (error) {
          console.error("Помилка при завантаженні стартапів:", error);
        }
      };

      fetchStartupsCount();
    }
  }, [user, db]);

  return startupsCount;
}

export default function MyAccount() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const db = getFirestore();

  // Відстеження автентифікації
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) navigate("/auth");
    });
    return () => unsubscribe();
  }, [navigate]);

  // Отримання кількості стартапів
  const startupsCount = useUserStartupsCount(user, db);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="my-account-page" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
            animation: "fadeIn 0.5s ease forwards"
          }}
        >
          <h2 style={{
            color: "var(--secondary-color)",
            textAlign: "center",
            marginBottom: "2rem"
          }}>
            Мій акаунт
          </h2>
          {user ? (
            <>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <strong>Email:</strong>
                <div>{user.email}</div>
              </div>
              <div style={{
                background: "#f7f7f7",
                borderRadius: "8px",
                padding: "1.2rem",
                marginBottom: "2rem",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
              }}>
                <div style={{ fontSize: "1.1rem", color: "#888" }}>Кількість моїх стартапів</div>
                <div style={{ fontWeight: "bold", fontSize: "2.2rem", marginTop: "0.5rem" }}>
                  {startupsCount !== null ? startupsCount : "…"}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn"
                style={{ width: "100%" }}
              >
                Вийти з акаунту
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center" }}>Завантаження...</div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
