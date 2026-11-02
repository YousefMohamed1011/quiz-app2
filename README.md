# 🚀 React Learning Lab & Study Reference

مشروع منظم ومخصص لتعلم وتطبيق مفاهيم **React** المتقدمة، إدارة الحالة (State)، النماذج (Forms)، والتعامل مع طلبات الـ HTTP عبر **Fetch API** و **Axios**.

---

## 📁 الهيكل التنظيمي للمشروع (Project Structure)

```text
quiz-app2/
├── data/
│   └── questions.json            # قاعدة بيانات تجريبية لـ json-server
├── src/
│   ├── components/
│   │   ├── contacts/             # تطبيق حفظ جهات الاتصال
│   │   │   ├── ContactSave.jsx
│   │   │   └── ContactSave.css
│   │   ├── todo/                 # تطبيق قائمة المهام (Todo List)
│   │   │   ├── Todo.jsx
│   │   │   └── Todo.css
│   │   ├── http/                 # تجارب ودراسة طلبات الـ HTTP
│   │   │   ├── GetUsers.jsx      # طلبات GET (Axios)
│   │   │   ├── CreateUser.jsx    # طلبات POST (Fetch vs Axios)
│   │   │   ├── UpdateUser.jsx    # طلبات PUT & PATCH (Fetch vs Axios)
│   │   │   └── TestAxios.jsx     # تجربة Axios مع منتجات DummyJSON
│   │   └── index.js              # ملف تصدير موحد (Barrel Export)
│   ├── App.jsx                   # الواجهة الرئيسية مع نظام تبويبات للتنقل
│   ├── index.css                 # التنسيقات العامة و Tailwind CSS v4
│   ├── index.jsx                 # ملف إعادة تصدير للتوافق
│   └── main.jsx                  # نقطة انطلاق التطبيق (Root)
├── package.json
└── vite.config.js
```

---

## 💡 ملخص المذاكرة (Study Guide)

### 1. HTTP Methods (طرق إرسال الطلبات):
| الطريقة | الاستخدام | مثال في المشروع |
| :--- | :--- | :--- |
| **GET** | جلب البيانات من السيرفر | `GetUsers.jsx` |
| **POST** | إنشاء عنصر جديد في السيرفر | `CreateUser.jsx` |
| **PUT** | تحديث كامل واستبدال الكائن | `UpdateUser.jsx` |
| **PATCH** | تعديل جزئي على حقول محددة فقط | `UpdateUser.jsx` |

---

### 2. مقارنة بين Fetch و Axios:
- **`Fetch API`**:
  - مدمجة في المتصفح تلقائياً (لا تحتاج تثبيت مكتبات).
  - تحتاج لتحديد `method` يدويًا، وكتابة `headers`، وتحويل البيانات بـ `JSON.stringify()`.
  - تحتاج دائماً لخطوتين لقراءة الاستجابة: `await res.json()`.
- **`Axios`**:
  - مكتبة أسهل وأكثر اختصاراً في الكود.
  - دوال مباشرة: `axios.get()`، `axios.post()`، `axios.put()`، `axios.patch()`.
  - تحويل البيانات إلى JSON يتم تلقائياً.
  - البيانات المسترجعة تكون جاهزة مباشرة داخل `res.data`.

---

## 🛠️ أوامر التشغيل (Commands)

```bash
# تشغيل بيئة التطوير
npm run dev

# فحص وبناء نسخة الإنتاج
npm run build

# تشغيل الـ Mock Backend (إذا أردت استخدام json-server)
npm run server
```
