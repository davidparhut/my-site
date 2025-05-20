import React, { useEffect, useState } from "react";
import { auth, db } from "../assets/files/firebase";
import { collection, addDoc, query, where, getDocs, orderBy, Timestamp } from "firebase/firestore";

export default function MyStartup() {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [employees, setEmployees] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [myStartups, setMyStartups] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUserStartups = async (userId) => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "startups"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const startups = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        startups.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt instanceof Timestamp
            ? data.createdAt.toDate()
            : new Date(data.createdAt),
        });
      });
      setMyStartups(startups);
    } catch (err) {
      console.error("Error loading startups:", err);
      setError("Не вдалося завантажити стартапи.");
      setMyStartups([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      loadUserStartups(user.uid);
    } else {
      setMyStartups([]);
    }
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        loadUserStartups(user.uid);
      } else {
        setMyStartups([]);
      }
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      setError("Ви повинні бути залогінені, щоб створити стартап.");
      return;
    }
    if (!companyName || !industry) {
      setError("Будь ласка, заповніть усі обов'язкові поля.");
      return;
    }
    try {
      await addDoc(collection(db, "startups"), {
        name: companyName,
        industry,
        employees,
        userId: user.uid,
        createdAt: Timestamp.now(),
      });
      setSuccess("Стартап успішно створено!");
      setCompanyName("");
      setIndustry("");
      setEmployees(1);
      setError("");
      loadUserStartups(user.uid);
    } catch (err) {
      console.error("Помилка створення стартапу:", err);
      setError("Не вдалося створити стартап. Спробуйте ще раз.");
    }
  };

  return (
    <main>
      <section id="startup-management">
        <h2>Створити стартап</h2>
        <div className="content">
          <form id="startup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="company-name">Назва компанії:</label>
              <input
                type="text"
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="industry">Сфера діяльності:</label>
              <select
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                required
              >
                <option value="">Оберіть сферу</option>
                <option value="it">IT та програмне забезпечення</option>
                <option value="ecommerce">Електронна комерція</option>
                <option value="finance">Фінансові послуги</option>
                <option value="healthcare">Охорона здоров'я</option>
                <option value="education">Освітні технології</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="employees">Кількість працівників:</label>
              <input
                type="number"
                id="employees"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                min="1"
                required
              />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <button type="submit">Створити стартап</button>
          </form>

          <hr />

          <h3>Мої стартапи</h3>
          {loading ? (
            <p>Завантаження...</p>
          ) : myStartups.length === 0 ? (
            <p style={{ color: "#888" }}>Стартапи ще не створені.</p>
          ) : (
            <ul className="my-startups-list" style={{ padding: 0, listStyle: "none" }}>
              {myStartups.map((startup) => (
                <li
                  key={startup.id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 8,
                    padding: "12px 16px",
                    marginBottom: 16,
                    background: "#fafafd",
                  }}
                >
                  <div><strong>Назва:</strong> {startup.name}</div>
                  <div><strong>Сфера:</strong> {startup.industry}</div>
                  <div><strong>Кількість працівників:</strong> {startup.employees}</div>
                  <div style={{ fontSize: "0.9em", color: "#888" }}>
                    <strong>Створено:</strong> {new Date(startup.createdAt).toLocaleString("uk-UA")}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
