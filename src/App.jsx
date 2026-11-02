import { useState } from "react";
import {
  ContactSave,
  Todo,
  GetUsers,
  CreateUser,
  UpdateUser,
  TestAxios,
} from "./components";

export default function App() {
  const [activeTab, setActiveTab] = useState("http"); // "http" | "apps" | "all"

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#050505",
      color: "#f5f5f5",
      padding: "20px 10px",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* هيدر المشروع المنظم */}
      <header style={{
        maxWidth: "720px",
        margin: "0 auto 20px auto",
        textAlign: "center",
        borderBottom: "1px solid #1c1c1c",
        paddingBottom: "15px"
      }}>
        <h1 style={{ margin: "0 0 6px 0", fontSize: "24px", color: "#ffffff" }}>
          🚀 React Learning Lab & Study Guide
        </h1>
        <p style={{ margin: 0, color: "#777777", fontSize: "14px" }}>
          مشروع تدريب شامل: State, Forms, وتطبيقات الـ HTTP (Fetch & Axios)
        </p>

        {/* أزرار التبديل السريع بين أقسام المذاكرة */}
        <div style={{
          display: "inline-flex",
          gap: "6px",
          marginTop: "16px",
          backgroundColor: "#111111",
          padding: "4px",
          borderRadius: "8px",
          border: "1px solid #222222"
        }}>
          <button
            onClick={() => setActiveTab("http")}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
              backgroundColor: activeTab === "http" ? "#2563eb" : "transparent",
              color: activeTab === "http" ? "#ffffff" : "#888888",
              transition: "all 0.2s"
            }}
          >
            🌐 HTTP Requests (Axios & Fetch)
          </button>

          <button
            onClick={() => setActiveTab("apps")}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
              backgroundColor: activeTab === "apps" ? "#2563eb" : "transparent",
              color: activeTab === "apps" ? "#ffffff" : "#888888",
              transition: "all 0.2s"
            }}
          >
            📋 Mini Apps (Todo & Contacts)
          </button>

          <button
            onClick={() => setActiveTab("all")}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "13px",
              backgroundColor: activeTab === "all" ? "#2563eb" : "transparent",
              color: activeTab === "all" ? "#ffffff" : "#888888",
              transition: "all 0.2s"
            }}
          >
            👁️ عرض الكل
          </button>
        </div>
      </header>

      {/* محتوى قسم الـ HTTP Requests */}
      {(activeTab === "http" || activeTab === "all") && (
        <section style={{ maxWidth: "720px", margin: "0 auto 30px auto" }}>
          <UpdateUser />
          <CreateUser />
          <GetUsers />
          <TestAxios />
        </section>
      )}

      {/* محتوى قسم التطبيقات الصغيرة */}
      {(activeTab === "apps" || activeTab === "all") && (
        <section style={{ maxWidth: "720px", margin: "0 auto 30px auto" }}>
          <ContactSave />
          <div style={{ marginTop: "20px" }}>
            <Todo />
          </div>
        </section>
      )}
    </div>
  );
}
