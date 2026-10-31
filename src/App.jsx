// import { Todo } from "./index.jsx";
import { Axios } from "./components/axios.jsx";
import { ContactSave } from "./index.jsx";
import { Put } from "./components/put.jsx";
export default function App() {
  return (
    <div className="app">
      {/* <Todo /> */}
      <ContactSave />
      <Axios />
      <Put />
    </div>
  );
}
