import axios from "axios";
import { useState, useEffect } from "react";

/**
 * 📘 GetUsers Component (GET Request using Axios):
 * ------------------------------------------------
 * يُستخدم لجلب قائمة المستخدمين من الـ API باستخدام دالة axios.get.
 */
export const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const res = await axios.get("https://api.escuelajs.co/api/v1/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("فشل في تحميل المستخدمين");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div style={{
      maxWidth: "680px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#0d0d0d",
      color: "#e6e6e6",
      borderRadius: "12px",
      border: "1px solid #222222",
      fontFamily: "sans-serif"
    }}>
      <h2 style={{ margin: "0 0 10px 0", color: "#ffffff", fontSize: "20px" }}>
        📥 GET: عرض المستخدمين (Axios)
      </h2>
      <p style={{ margin: "0 0 15px 0", color: "#888888", fontSize: "14px" }}>
        Endpoint: <code style={{ color: "#38bdf8" }}>api.escuelajs.co/api/v1/users</code>
      </p>

      {loading && <p style={{ color: "#facc15" }}>⏳ جاري تحميل البيانات...</p>}
      {error && <p style={{ color: "#ef4444" }}>❌ {error}</p>}

      {!loading && !error && (
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          maxHeight: "260px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          {users.slice(0, 10).map((user) => (
            <li
              key={user.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 12px",
                backgroundColor: "#161616",
                borderRadius: "6px",
                border: "1px solid #262626"
              }}
            >
              <span>{user.name}</span>
              <span style={{ color: "#888888", fontSize: "12px" }}>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// اسم بديل للتوافق
export { GetUsers as Axios };
export default GetUsers;

