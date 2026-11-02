import { useState } from "react";
import axios from "axios";

/**
 * ========================================================
 * 📘 ملخص سريع للمذاكرة (HTTP Methods: PUT vs PATCH):
 * --------------------------------------------------------
 * 1. PUT: يُستخدم لاستبدال أو تحديث البيانات كاملة.
 * 2. PATCH: يُستخدم لتعديل جزئي (تعديل حقل معين فقط مثل الاسم).
 * 
 * 📘 مقارنة بين Fetch و Axios:
 * --------------------------------------------------------
 * - Fetch: مدمج بالجافاسكريبت، يتطلب:
 *     1. تحديد method
 *     2. كتابة headers يدويًا
 *     3. تحويل الكائن لـ JSON بـ JSON.stringify()
 *     4. قراءة الاستجابة بـ await res.json()
 * 
 * - Axios: مكتبة خارجية أسهل وأقصر، توفر:
 *     1. دالة جاهزة باسم الطريقة (axios.put / axios.patch)
 *     2. تحويل تلقائي للـ JSON إرسالاً واستقبالاً
 *     3. البيانات جاهزة مباشرة في res.data
 * ========================================================
 */

export const UpdateUser = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastAction, setLastAction] = useState("");

  const API_URL = "https://dummyjson.com/users/1";

  // ------------------------------------------------------
  // 1️⃣ استخدام FETCH مع PUT (تحديث كامل)
  // ------------------------------------------------------
  const handleFetchPut = async () => {
    setLoading(true);
    setLastAction("Fetch (PUT)");
    try {
      const res = await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          username: "Yousef_Fetch_PUT",
        }),
      });
      const data = await res.json();
      setResponse(data);
      console.log("Fetch PUT Response:", data);
    } catch (error) {
      console.error("Fetch PUT Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------
  // 2️⃣ استخدام FETCH مع PATCH (تحديث جزئي)
  // ------------------------------------------------------
  const handleFetchPatch = async () => {
    setLoading(true);
    setLastAction("Fetch (PATCH)");
    try {
      const res = await fetch(API_URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          firstName: "Yousef_Fetch_PATCH",
        }),
      });
      const data = await res.json();
      setResponse(data);
      console.log("Fetch PATCH Response:", data);
    } catch (error) {
      console.error("Fetch PATCH Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------
  // 3️⃣ استخدام AXIOS مع PUT (تحديث كامل)
  // ------------------------------------------------------
  const handleAxiosPut = async () => {
    setLoading(true);
    setLastAction("Axios (PUT)");
    try {
      const res = await axios.put(API_URL, {
        username: "Yousef_Axios_PUT",
      });
      setResponse(res.data);
      console.log("Axios PUT Response:", res.data);
    } catch (error) {
      console.error("Axios PUT Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------
  // 4️⃣ استخدام AXIOS مع PATCH (تحديث جزئي)
  // ------------------------------------------------------
  const handleAxiosPatch = async () => {
    setLoading(true);
    setLastAction("Axios (PATCH)");
    try {
      const res = await axios.patch(API_URL, {
        firstName: "Yousef_Axios_PATCH",
      });
      setResponse(res.data);
      console.log("Axios PATCH Response:", res.data);
    } catch (error) {
      console.error("Axios PATCH Error:", error);
    } finally {
      setLoading(false);
    }
  };

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
        🧪 تجربة PUT & PATCH (Fetch vs Axios)
      </h2>
      <p style={{ margin: "0 0 15px 0", color: "#888888", fontSize: "14px" }}>
        مقارنة عملية لتعديل بيانات المستخدم برقم 1 على <code style={{ color: "#38bdf8" }}>dummyjson.com/users/1</code>
      </p>

      {/* أزرار العمليات */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "15px" }}>
        <button
          onClick={handleFetchPut}
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
          1. Fetch (PUT)
        </button>

        <button
          onClick={handleFetchPatch}
          style={{
            padding: "8px 14px",
            backgroundColor: "#1e293b",
            color: "#93c5fd",
            border: "1px solid #3b82f6",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          2. Fetch (PATCH)
        </button>

        <button
          onClick={handleAxiosPut}
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
          3. Axios (PUT)
        </button>

        <button
          onClick={handleAxiosPatch}
          style={{
            padding: "8px 14px",
            backgroundColor: "#065f46",
            color: "#6ee7b7",
            border: "1px solid #10b981",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          4. Axios (PATCH)
        </button>
      </div>

      {/* مؤشر التحميل والعملية الحالية */}
      {loading && (
        <div style={{ color: "#facc15", marginBottom: "10px", fontSize: "14px" }}>
          ⏳ جاري إرسال الطلب عبر: {lastAction}...
        </div>
      )}

      {/* عرض البيانات المسترجعة */}
      {response && !loading && (
        <div style={{ marginTop: "15px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ fontSize: "13px", color: "#10b981" }}>
              ✅ آخر عملية ناجحة: <strong>{lastAction}</strong>
            </span>
            <span style={{ fontSize: "12px", color: "#666666" }}>
              User ID: {response.id}
            </span>
          </div>

          <pre style={{
            backgroundColor: "#000000",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #1f1f1f",
            fontSize: "13px",
            color: "#a3e635",
            overflowX: "auto",
            maxHeight: "240px",
          }}>
            {JSON.stringify({
              id: response.id,
              firstName: response.firstName,
              lastName: response.lastName,
              username: response.username,
              email: response.email,
            }, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

// أسماء بديلة للتوافق والمذاكرة
export { UpdateUser as Patch };
export default UpdateUser;
