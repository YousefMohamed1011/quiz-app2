import axios from "axios";
import { useEffect, useState } from "react";

/**
 * 📘 TestAxios Component:
 * ------------------------------------------------
 * تجربة سريعة لمكتبة Axios مع DummyJSON Products.
 */
export function TestAxios() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=5")
      .then((res) => {
        setProducts(res.data.products || []);
        console.log("DummyJSON Products:", res.data);
      })
      .catch((err) => console.error("Axios Test Error:", err))
      .finally(() => setLoading(false));
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
        🛒 تجربة Axios مع منتجات DummyJSON
      </h2>

      {loading ? (
        <p style={{ color: "#facc15" }}>⏳ جاري تحميل المنتجات...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                backgroundColor: "#171717",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #262626"
              }}
            >
              <h4 style={{ margin: "0 0 4px 0", color: "#60a5fa", fontSize: "14px" }}>
                {p.title}
              </h4>
              <p style={{ margin: 0, color: "#10b981", fontWeight: "bold", fontSize: "13px" }}>
                ${p.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// أسماء بديلة للتوافق
export { TestAxios as Testaxios };
export default TestAxios;

