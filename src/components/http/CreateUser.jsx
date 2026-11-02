import { useState } from "react";
import axios from "axios";

/**
 * 📘 CreateUser Component (POST Request):
 * ------------------------------------------------
 * يُستخدم لإنشاء مستخدم جديد في قاعدة البيانات بإرسال البيانات عبر POST.
 */
export const CreateUser = () => {
  const [createdUser, setCreatedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. إنشاء مستخدم بـ Fetch
  async function createUserFetch() {
    try {
      setLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          name: "John Doe",
          email: `user_${Date.now()}@mail.com`,
          password: "password123",
          avatar: "https://picsum.photos/800",
        }),
      });
      const data = await res.json();
      setCreatedUser(data);
      console.log("Created user with Fetch:", data);
    } catch (error) {
      console.error("Fetch POST Error:", error);
    } finally {
      setLoading(false);
    }
  }

  // 2. إنشاء مستخدم بـ Axios
  async function createUserAxios() {
    try {
      setLoading(true);
      const res = await axios.post("https://api.escuelajs.co/api/v1/users", {
        name: "Yousef Mohamed",
        email: `yousef_${Date.now()}@mail.com`,
        password: "password123",
        avatar: "https://picsum.photos/800",
      });
      setCreatedUser(res.data);
      console.log("Created user with Axios:", res.data);
    } catch (error) {
      console.error("Axios POST Error:", error);
    } finally {
      setLoading(false);
    }
  }

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
        📤 POST: إضافة مستخدم جديد
      </h2>
      <p style={{ margin: "0 0 15px 0", color: "#888888", fontSize: "14px" }}>
        مقارنة بين Fetch و Axios عند إنشاء Resource جديد
      </p>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button
          onClick={createUserFetch}
          disabled={loading}
          style={{
            padding: "8px 14px",
            backgroundColor: "#1e3a5f",
            color: "#60a5fa",
            border: "1px solid #2563eb",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          POST with Fetch
        </button>

        <button
          onClick={createUserAxios}
          disabled={loading}
          style={{
            padding: "8px 14px",
            backgroundColor: "#064e3b",
            color: "#34d399",
            border: "1px solid #059669",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          POST with Axios
        </button>
      </div>

      {loading && <p style={{ color: "#facc15" }}>⏳ جاري إرسال الطلب...</p>}

      {createdUser && !loading && (
        <div style={{ marginTop: "10px" }}>
          <p style={{ color: "#10b981", fontSize: "13px", margin: "0 0 5px 0" }}>
            ✅ تم إنشاء المستخدم بنجاح!
          </p>
          <pre style={{
            backgroundColor: "#000000",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #1f1f1f",
            color: "#a3e635",
            fontSize: "12px"
          }}>
            {JSON.stringify(createdUser, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

// اسم بديل للتوافق
export { CreateUser as Put };
export default CreateUser;

